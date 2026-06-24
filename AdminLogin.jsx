import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, User, ArrowRight, AlertCircle } from "lucide-react";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin@123";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        localStorage.setItem("seednutz_admin_auth", "true");
        navigate("/");
      } else {
        setError("Invalid credentials. Please try again.");
      }
      setLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-4">
            Secure Access
          </p>
          <h1 className="font-display text-4xl mb-3">
            Admin <span className="text-primary">Login</span>
          </h1>
          <p className="text-sm text-muted-foreground font-body">
            Sign in to manage the Seednutz storefront
          </p>
        </div>

        <form onSubmit={handleSubmit} className="border border-border p-8 space-y-6">
          {/* Username */}
          <div className="space-y-2">
            <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">
              Username
            </p>
            <div className="relative">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
                className="w-full h-12 pl-11 pr-4 bg-card border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter username"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">
              Password
            </p>
            <div className="relative">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-12 pl-11 pr-4 bg-card border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter password"
              />
            </div>
          </div>

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex items-center gap-2 text-sm text-destructive font-body"
            >
              <AlertCircle size={14} />
              {error}
            </motion.div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-primary text-primary-foreground text-sm font-body tracking-widest uppercase hover:bg-primary/90 disabled:opacity-50 flex items-center justify-center gap-2 transition-colors"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Sign In
                <ArrowRight size={14} />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-xs text-muted-foreground font-body mt-6">
          Authorized personnel only
        </p>
      </motion.div>
    </div>
  );
}