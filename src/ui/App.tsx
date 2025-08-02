import { BrowserRouter as Router } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import AppProvider from "./hooks";
import TooltipOverlay from "./components/TooltipOverlay";

export default function App() {
  return (
    <div className="w-screen h-screen bg-gray-950 text-gray-400 px-36 py-4">
      <Router>
        <AppProvider>
          <TooltipOverlay />
          <AppRoutes />
        </AppProvider>
      </Router>
    </div>
  );
}
