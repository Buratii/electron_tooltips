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
        className="fixed inset-0 bg-black opacity-50 z-40"
      />

      <div
        className="absolute bg-gray-800 text-gray-100 px-5 py-4 rounded-lg shadow-xl transition-all duration-300 z-50 max-w-sm w-fit"
        style={{
          top: position.top + 48,
          left: position.left,
        }}
      >
        <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-800 rotate-45" />
        <div className="relative overflow-visible">
          <p className="text-sm">{currentTooltip.content}</p>

          <div className="flex justify-end mt-6 space-x-2 gap-x-2">
            {step !== 0 && (
              <Button
                onClick={previousStep}
                variant="text"
                className="text-gray-500"
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
              <Button onClick={finish}>Got it!</Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
