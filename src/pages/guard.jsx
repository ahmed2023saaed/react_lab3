import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuth = false;
  return (
    <>
      {isAuth? children: <Navigate to="/login" />}
      <div>guard</div>
    </>
  );
}
