"use client";

import { useState, useEffect } from "react";

interface Order {
  id: number; 
  created_at: string;
  purpose: string | null;
  field: string | null;
  style: string | null;
  color: string | null;
  impression: string | null;
  customer_name: string;
  order_status?: "in progress" | "done"; 
}

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Ambil data order dari API
  useEffect(() => {
    let isMounted = true;

    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/orders");
        const data = await res.json();
        
        if (isMounted) {
          if (res.ok && Array.isArray(data)) {
            setOrders(data);
          } else {
            setOrders([]);
          }
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Gagal mengambil data order:", error);
        if (isMounted) {
          setOrders([]);
          setIsLoading(false);
        }
      }
    };

    fetchOrders();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleMarkAsDone = async (orderId: number) => {
    try {
      const res = await fetch("/api/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: orderId, order_status: "done" }),
      });

      if (res.ok) {
        setOrders((prev) =>
          prev.map((order) =>
            order.id === orderId ? { ...order, order_status: "done" } : order
          )
        );
      } else {
        alert("Gagal memperbarui status order. Pastikan kolom order_status sudah ada di Supabase!");
      }
    } catch (error) {
      console.error("Error saat update status:", error);
    }
  };

  const handleDelete = async (orderId: number) => {
    if (confirm("Apakah kamu yakin ingin menghapus data order ini?")) {
      try {
        const res = await fetch("/api/orders", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: orderId }),
        });

        if (res.ok) {
          setOrders((prev) => prev.filter((o) => o.id !== orderId));
        } else {
          alert("Gagal menghapus order");
        }
      } catch (error) {
        console.error("Error saat menghapus order:", error);
      }
    }
  };

  const filteredOrders = Array.isArray(orders)
    ? orders.filter((order) => {
        // ID diubah jadi String dulu baru disearch agar tidak eror
        const orderIdStr = String(order.id);
        const matchesSearch = 
          orderIdStr.includes(searchTerm) || 
          (order.purpose && order.purpose.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (order.field && order.field.toLowerCase().includes(searchTerm.toLowerCase()));
        
        // Jika order_status dari DB kosong, kita anggap "in progress" sebagai bawaan
        const currentStatus = order.order_status || "in progress";
        const matchesFilter = statusFilter === "all" || currentStatus === statusFilter;

        return matchesSearch && matchesFilter;
      })
    : [];

  if (isLoading) {
    return <div className="p-6 text-white">Sedang memuat data order...</div>;
  }

  return (
    <div className="p-6 text-white bg-neutral-900 min-h-screen rounded-[10px]">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Cari ID, Tujuan, atau Bidang..."
          className="border border-neutral-700 bg-neutral-800 p-2 rounded w-full md:w-80 text-white placeholder-neutral-400 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border border-neutral-700 bg-neutral-800 p-2 rounded text-white focus:outline-none"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">Semua Status</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div className="overflow-x-auto border border-neutral-800 rounded bg-neutral-800/50">
        <table className="min-w-full divide-y divide-neutral-800 text-sm">
          <thead className="bg-neutral-800 text-neutral-300">
            <tr>
              <th className="p-3 text-left font-semibold">ID Order</th>
              <th className="p-3 text-left font-semibold">Tujuan / Bidang</th>
              <th className="p-3 text-left font-semibold">Style / Warna</th>
              <th className="p-3 text-left font-semibold">Kesan</th>
              <th className="p-3 text-left font-semibold">User Name</th>
              <th className="p-3 text-left font-semibold">Status</th>
              <th className="p-3 text-center font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800 text-neutral-200">
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-4 text-center text-neutral-400">
                  Tidak ada data order.
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => {
                const currentStatus = order.order_status || "in progress";
                return (
                  <tr key={order.id} className="hover:bg-neutral-800/30 transition-colors">
                    <td className="p-3 font-mono text-xs text-neutral-400">{order.id}</td>
                    <td className="p-3">
                      <div className="font-medium">{order.purpose || "-"}</div>
                      <div className="text-xs text-neutral-400">{order.field || "-"}</div>
                    </td>
                    <td className="p-3">
                      <div>{order.style || "-"}</div>
                      <div className="text-xs text-neutral-400">{order.color || "-"}</div>
                    </td>
                    <td className="p-3 truncate max-w-xs">{order.impression || "-"}</td>
                    <td className="p-3 font-mono text-xs text-neutral-400">{order.customer_name || "-"}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 text-xs font-medium rounded ${
                            currentStatus === "done"
                              ? "bg-green-500/10 text-green-400 border border-green-500/20"
                              : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                          }`}
                        >
                          {currentStatus}
                        </span>
                        {currentStatus === "in progress" && (
                          <button
                            onClick={() => handleMarkAsDone(order.id)}
                            className="bg-green-600 hover:bg-green-700 text-white px-2 py-0.5 rounded text-xs transition-colors"
                          >
                            ✓ Done
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="bg-red-600/80 text-white px-2 py-1 rounded text-xs hover:bg-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}