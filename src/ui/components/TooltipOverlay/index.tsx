import { useEffect, useState } from "react";
import { useTooltipGuide } from "../../hooks/useTooltip";
import { Button } from "../Button";

export default function TooltipOverlay() {
  const { isActive, currentTooltip, nextStep, previousStep, finish, step } =
    useTooltipGuide();
  const [position, setPosition] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    if (isActive && currentTooltip) {
      const el = document.getElementById(currentTooltip.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        setPosition({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
          height: rect.height,
        });
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      setPosition(null);
    }
  }, [currentTooltip, isActive]);

  if (!isActive || !position || !currentTooltip) return null;

  return (
    <>
      <div
        onClick={finish}
        className="absolute bg-transparent z-50 pointer-events-none"
        style={{
          top: position.top,
          left: position.left,
          width: position.width,
          height: position.height,
          boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.6)",
          borderRadius: "32px",
        }}
      />

      <div
        className="absolute bg-gray-800 text-gray-100 px-5 py-4 rounded-lg shadow-xl transition-all duration-300 z-50 max-w-sm w-64"
        style={{
          top: position.top + position.height + 16,
          left: position.left,
        }}
      >
        <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-800 rotate-45" />
        <div className="relative overflow-visible">
          {currentTooltip.title && (
            <h3 className="font-bold">{currentTooltip.title}</h3>
          )}

          {currentTooltip.content && (
            <p className="text-sm mt-1">{currentTooltip.content}</p>
          )}

          <div className="flex justify-end mt-4 gap-x-2">
            {step !== 0 && (
              <Button
                onClick={previousStep}
                variant="text"
                className="text-gray-300"
              >
                Back
              </Button>
            )}
            {currentTooltip.action === "next" && (
              <Button onClick={nextStep} variant="text">
                Next
              </Button>
            )}
            {currentTooltip.action === "finish" && (
              <Button onClick={finish} variant="text">
                Got it!
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
