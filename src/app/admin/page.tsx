"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Sprout,
  Users,
  UserPlus,
  Trash2,
  Lock,
  Loader2,
  ArrowLeft,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface User {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at: string | null;
  email_confirmed_at: string | null;
}

export default function AdminPage() {
  const [adminKey] = useState("open");
  const [authenticated, setAuthenticated] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // New user form
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const headers = { "x-admin-key": adminKey };

  const fetchUsers = useCallback(async (key?: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/users", {
        headers: { "x-admin-key": key || adminKey },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setUsers(data.users);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Failed to fetch users";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, [adminKey]);

  // Auto-authenticate on load
  React.useEffect(() => {
    fetchUsers("open").then(() => setAuthenticated(true));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ email: newEmail, password: newPassword }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setSuccess(`User ${data.user.email} created successfully.`);
      setNewEmail("");
      setNewPassword("");
      await fetchUsers();
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Failed to create user";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId: string, email: string) => {
    if (!confirm(`Delete user ${email}? This cannot be undone.`)) return;
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/users", {
        method: "DELETE",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setSuccess(`User ${email} deleted.`);
      await fetchUsers();
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Failed to delete user";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Login gate
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#020202] text-white font-sans overflow-hidden">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-500/5 blur-[120px] rounded-full" />
        </div>
        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md"
          >
            <div className="flex flex-col items-center gap-4 mb-10">
              <div className="h-14 w-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <Lock className="w-6 h-6 text-red-500" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight uppercase">Admin Console</h1>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
                Restricted Access
              </p>
            </div>

            {error && (
              <div className="mb-6 p-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-red-500/10 text-red-500 border border-red-500/20">
                {error}
              </div>
            )}

            <form onSubmit={handleAuth} className="p-8 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">
                  Admin Key
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                  <input
                    type="password"
                    required
                    placeholder="Enter admin secret"
                    className="w-full h-14 bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 text-sm focus:outline-none focus:border-red-500/50 transition-colors"
                    value={adminKey}
                    onChange={(e) => setAdminKey(e.target.value)}
                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-red-500 text-white hover:bg-red-600 font-black uppercase tracking-[0.2em] text-[11px] rounded-xl"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Authenticate"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors">
                <ArrowLeft className="w-3 h-3 inline mr-1" />
                Back to Gateway
              </Link>
            </div>
          </motion.div>
        </main>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-500/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <Sprout className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight uppercase">User Management</h1>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                Admin Console
              </p>
            </div>
          </div>
          <Link href="/">
            <Button variant="outline" className="border-white/10 text-white/50 hover:text-white text-[10px] font-black uppercase tracking-widest">
              <ArrowLeft className="w-3 h-3 mr-2" />
              Gateway
            </Button>
          </Link>
        </motion.div>

        {/* Messages */}
        {error && (
          <div className="mb-6 p-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-red-500/10 text-red-500 border border-red-500/20">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-6 p-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-green-500/10 text-green-500 border border-green-500/20">
            {success}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Create User Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <form
              onSubmit={handleCreateUser}
              className="p-6 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 space-y-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <UserPlus className="w-4 h-4 text-green-500" />
                <h2 className="text-sm font-bold uppercase tracking-wider">Grant Access</h2>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="user@org.com"
                  className="w-full h-11 bg-black/50 border border-white/10 rounded-lg px-4 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  Password
                </label>
                <input
                  type="text"
                  required
                  placeholder="Temporary password"
                  className="w-full h-11 bg-black/50 border border-white/10 rounded-lg px-4 text-sm focus:outline-none focus:border-green-500/50 transition-colors font-mono"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-green-500 text-black hover:bg-green-400 font-black uppercase tracking-[0.15em] text-[10px] rounded-lg"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Create User"}
              </Button>
            </form>
          </motion.div>

          {/* User List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="p-6 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-green-500" />
                  <h2 className="text-sm font-bold uppercase tracking-wider">
                    Active Users ({users.length})
                  </h2>
                </div>
                <Button
                  onClick={() => fetchUsers()}
                  variant="outline"
                  size="sm"
                  className="border-white/10 text-white/50 hover:text-white text-[10px] font-black uppercase tracking-widest"
                >
                  Refresh
                </Button>
              </div>

              {users.length === 0 ? (
                <div className="text-center py-12 text-white/20">
                  <Users className="w-8 h-8 mx-auto mb-3 opacity-50" />
                  <p className="text-xs font-bold uppercase tracking-wider">
                    No users yet
                  </p>
                  <p className="text-[10px] mt-1 text-white/10">
                    Create the first user to grant portal access
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-black/30 border border-white/5 hover:border-white/10 transition-colors group"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold truncate">{user.email}</p>
                        <div className="flex gap-4 mt-1">
                          <span className="text-[10px] text-white/30 font-mono">
                            Created: {new Date(user.created_at).toLocaleDateString()}
                          </span>
                          {user.last_sign_in_at && (
                            <span className="text-[10px] text-white/30 font-mono">
                              Last login: {new Date(user.last_sign_in_at).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => copyToClipboard(user.id, user.id)}
                          className="p-2 rounded-lg hover:bg-white/5 text-white/30 hover:text-white transition-colors"
                          title="Copy user ID"
                        >
                          {copiedId === user.id ? (
                            <Check className="w-3.5 h-3.5 text-green-500" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id, user.email || "")}
                          className="p-2 rounded-lg hover:bg-red-500/10 text-white/30 hover:text-red-500 transition-colors"
                          title="Delete user"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
