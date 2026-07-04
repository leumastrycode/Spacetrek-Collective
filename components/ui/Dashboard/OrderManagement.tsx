"use client";

import { useState, useEffect } from "react";

// Struktur data order biar TypeScript atau editor kamu gak bingung
interface Order {
  id: string;
  customer_name: string;
  total_price: number;
  status: string;
  created_at: string;
}

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true); // Default true biar aman dari error kemarin

  // 1. Ambil data dari API Order
  useEffect(() => {
    let isMounted = true;

    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/order");
        const data = await res.json();
        
        if (isMounted) {
          setOrders(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Gagal mengambil data order:", error);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchOrders();

    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Logic Fitur Search & Filter
  const filteredOrders = orders.filter((order) => {
    // Cari berdasarkan ID Order atau Nama Pelanggan
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
      order.customer_name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter berdasarkan Status Order
    const matchesFilter = statusFilter === "all" || order.status === statusFilter;

    return matchesSearch && matchesFilter;
  });

  // 3. Logic Fitur Delete Order
  const handleDelete = async (orderId: string) => {
    if (confirm("Apakah kamu yakin ingin menghapus data order ini?")) {
      try {
        const res = await fetch("/api/orders", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: orderId }),
        });

        if (res.ok) {
          // Segarkan data setelah berhasil dihapus
          setOrders((prev) => prev.filter((o) => o.id !== orderId));
        } else {
          alert("Gagal menghapus order");
        }
      } catch (error) {
        console.error("Error saat menghapus order:", error);
      }
    }
  };

  if (isLoading) {
    return <div className="p-6 text-white">Sedang memuat data order...</div>;
  }

  return (
    <div className="p-6 text-white bg-neutral-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>

      {/* Bagian Kontrol: Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Cari ID Order atau nama pelanggan..."
          className="border border-neutral-700 bg-neutral-800 p-2 rounded w-full md:w-80 text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border border-neutral-700 bg-neutral-800 p-2 rounded text-white focus:outline-none focus:border-blue-500"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">Semua Status</option>
          <option value="pending">Pending</option>
          <option value="success">Success</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Tabel Informasi Order */}
      <div className="overflow-x-auto border border-neutral-800 rounded bg-neutral-800/50">
        <table className="min-w-full divide-y divide-neutral-800">
          <thead className="bg-neutral-800 text-neutral-300">
            <tr>
              <th className="p-3 text-left font-semibold">ID Order</th>
              <th className="p-3 text-left font-semibold">Pelanggan</th>
              <th className="p-3 text-left font-semibold">Total Harga</th>
              <th className="p-3 text-left font-semibold">Status</th>
              <th className="p-3 text-left font-semibold">Tanggal</th>
              <th className="p-3 text-center font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800 text-neutral-200">
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-4 text-center text-neutral-400">
                  Tidak ada data order yang cocok.
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-neutral-800/30 transition-colors">
                  <td className="p-3 font-mono text-sm text-neutral-400">{order.id}</td>
                  <td className="p-3">{order.customer_name}</td>
                  <td className="p-3">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0
                    }).format(order.total_price)}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        order.status === "success"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : order.status === "pending"
                          ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                    >
                      {order.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-3 text-sm text-neutral-400">
                    {new Date(order.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric"
                    })}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(order.id)}
                      className="bg-red-600/80 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}