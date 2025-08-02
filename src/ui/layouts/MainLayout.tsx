import { Outlet } from "react-router";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex-1 overflow-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
