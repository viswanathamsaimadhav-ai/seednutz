import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function AdminGuard({ children }) {
  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    setAuthed(localStorage.getItem("seednutz_admin_auth") === "true");
    setChecking(false);
  }, []);

  if (checking) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!authed) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}