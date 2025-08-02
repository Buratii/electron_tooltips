import { type ReactNode } from "react";
import { TooltipGuideProvider } from "./useTooltip";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => (
  <TooltipGuideProvider>{children}</TooltipGuideProvider>
);

export default AppProvider;
