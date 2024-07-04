// ProtectedLayout.jsx - Tibor
import { Outlet, Navigate } from "react-router-dom";

function ProtectedLayout() {
    const isAuthenticated = !!localStorage.getItem('authToken'); // The auth token should be stored in the local storage

    return isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate to="/" />
    );
}

export default ProtectedLayout;