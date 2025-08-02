import { createContext, useContext, useState, type ReactNode } from "react";
import { guides } from "../data/tooltipMock";
import type { TooltipItem } from "../types/guide.interface";
import { useLocation } from "react-router";

interface TooltipGuideData {
  isActive: boolean;
  currentTooltip: TooltipItem | null;
  startGuide: () => void;
  previousStep: () => void;
  nextStep: () => void;
  finish: () => void;
  step: number;
}

interface TooltipGuideProviderProps {
  children: ReactNode;
}

const TooltipGuideContext = createContext({} as TooltipGuideData);

const TooltipGuideProvider = ({ children }: TooltipGuideProviderProps) => {
  const [isActive, setIsActive] = useState(false);
  const [step, setStep] = useState(0);
  const [currentGuide, setCurrentGuide] = useState<TooltipItem[]>([]);
  const location = useLocation();

  const currentTooltip = currentGuide[step] ?? null;

  const startGuide = () => {
    const currentPage = location.pathname.replace("/", "");
    const guide = guides.find((g) => g.page === currentPage);
    if (guide) {
      setCurrentGuide(guide.tooltips);
      setStep(0);
      setIsActive(true);
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const nextStep = () => {
    if (step + 1 < currentGuide.length) {
      setStep(step + 1);
    } else {
      finish();
    }
  };

  const finish = () => {
    setIsActive(false);
    setStep(0);
    setCurrentGuide([]);
  };

  return (
    <TooltipGuideContext.Provider
      value={{
        step,
        isActive,
        currentTooltip,
        startGuide,
        previousStep,
        nextStep,
        finish,
      }}
    >
      {children}
    </TooltipGuideContext.Provider>
  );
};

function useTooltipGuide() {
  const context = useContext(TooltipGuideContext);
  if (!context) {
    throw new Error(
      "useTooltipGuideContext must be used within TooltipGuideProvider"
    );
  }
  return context;
}

export { TooltipGuideProvider, useTooltipGuide };
