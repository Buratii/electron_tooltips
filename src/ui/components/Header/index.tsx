import { FaCircleQuestion } from "react-icons/fa6";
import NavigationLink from "./NavigationLink";
import { useTooltipGuide } from "../../hooks/useTooltip";

export default function Header() {
  const { startGuide } = useTooltipGuide();

  return (
    <nav className="flex bg-gray-850 rounded-4xl items-center overflow-hidden w-full max-w-md mx-auto gap-x-4">
      <div className="flex w-full">
        <NavigationLink to="/list">List</NavigationLink>
        <NavigationLink to="/form">Form</NavigationLink>
      </div>
      <FaCircleQuestion
        onClick={() => startGuide()}
        size={24}
        className="mx-4 cursor-pointer"
      />
    </nav>
  );
}
