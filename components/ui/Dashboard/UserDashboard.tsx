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

  // 1. Ambil data dari API Sukma
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

        if (res.ok) {
          setUsers((prev) => prev.filter((user) => user.id !== userId));
        } else {
          alert("Gagal menghapus user");
        }
      } catch (error) {
        console.error("Error saat menghapus:", error);
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      {/* Bagian Kontrol: Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Cari nama atau email..."
          className="border p-2 rounded w-full md:w-64 text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border p-2 rounded text-black"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">Semua Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      {/* Tabel Informasi */}
      <div className="overflow-x-auto border rounded">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-black">
            <tr>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan={4} className="p-3 text-center text-gray-400">
                  Loading...
                </td>
              </tr>
            ) : filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-3 text-center text-gray-400">
                  Tidak ada user ditemukan
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="p-3">{user.full_name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
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
