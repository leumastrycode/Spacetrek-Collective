"use client";

import { useState, useEffect } from "react";

interface User {
  id: string;
  full_name: string;
  email: string;
  role: string;
}

export default function UserDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // 1. Ambil data dari API 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Gagal mengambil data user:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // 2. Logic Fitur Search & Filter
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      (user.full_name?.toLowerCase() ?? "").includes(searchTerm.toLowerCase()) ||
      (user.email?.toLowerCase() ?? "").includes(searchTerm.toLowerCase());

    const matchesFilter = roleFilter === "all" || user.role === roleFilter;

    return matchesSearch && matchesFilter;
  });

  // 3. Logic Fitur Delete
  const handleDelete = async (userId: string) => {
  if (confirm("Apakah kamu yakin ingin menghapus user ini?")) {
    try {
      const res = await fetch("/api/users", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId }),
      });

      const result = await res.json();

      if (res.ok) {
        setUsers((prev) => prev.filter((user) => user.id !== userId));
      } else if (result?.error?.code === "23503") {
        // foreign key violation
        alert("User ini tidak bisa dihapus karena masih memiliki order aktif.");
      } else {
        alert(result?.error?.message || "Gagal menghapus user");
      }
    } catch (error) {
      console.error("Error saat menghapus:", error);
      alert("Terjadi kesalahan saat menghapus user.");
    }
  }
};

  return (
    <div className="p-6 text-white bg-neutral-900 min-h-screen rounded-[10px]">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      {/* Bagian Kontrol: Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Cari nama atau email..."
          className="border border-neutral-700 bg-neutral-800 p-2 rounded w-full md:w-80 text-white placeholder-neutral-400 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border border-neutral-700 bg-neutral-800 p-2 rounded text-white focus:outline-none"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">Semua Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      {/* Tabel Informasi */}
      <div className="overflow-x-auto border border-neutral-800 rounded bg-neutral-800/50">
        <table className="min-w-full divide-y divide-neutral-800 text-sm">
          <thead className="bg-neutral-800 text-neutral-300">
            <tr>
              <th className="p-3 text-left font-semibold">Nama</th>
              <th className="p-3 text-left font-semibold">Email</th>
              <th className="p-3 text-left font-semibold">Role</th>
              <th className="p-3 text-center font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800 text-neutral-200">
            {loading ? (
              <tr>
                <td colSpan={4} className="p-3 text-center text-neutral-400">
                  Loading...
                </td>
              </tr>
            ) : filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-3 text-center text-neutral-400">
                  Tidak ada user ditemukan
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="p-3">{user.full_name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-xs rounded text-white ${
                        user.role === "admin"
                          ? "bg-indigo-600"
                          : user.role === "user"
                          ? "bg-emerald-600"
                          : "bg-blue-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
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
