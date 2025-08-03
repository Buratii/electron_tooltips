import { useState } from "react";
import { Outlet } from "react-router";
import { FaCircleQuestion } from "react-icons/fa6";
import { useTooltipGuide } from "../hooks/useTooltip";

export default function MainLayout() {
  const { startGuide } = useTooltipGuide();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex flex-col h-full relative">
      <main className="flex-1 overflow-auto p-4">
        <Outlet />

        <div
          className="absolute bottom-8 -right-20 flex items-center"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <div
            className={`mr-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md shadow-md transition-all duration-300
              ${
                showTooltip
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }
            `}
          >
            Start Guided Tour
          </div>
          <FaCircleQuestion
            onClick={() => startGuide()}
            size={42}
            className="cursor-pointer transition-all hover:text-gray-200"
          />
        </div>
      </main>
    </div>
  );
}
