import { Routes, Route, Navigate } from "react-router";
import ListPage from "../pages/ListPage";
import FormPage from "../pages/FormPage";
import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/list" replace />} />
        <Route path="list" element={<ListPage />} />
        <Route path="form" element={<FormPage />} />
      </Route>
    </Routes>
  );
}
