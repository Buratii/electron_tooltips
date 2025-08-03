import { type ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface InputIconProps {
  icon: ElementType;
  className?: string;
  onClick?: () => void;
  position?: "left" | "right";
}

export function InputIcon({
  icon: Icon,
  className,
  onClick,
  position = "right",
}: InputIconProps) {
  return (
    <Icon
      className={twMerge(
        "text-gray-200 cursor-pointer w-4 h-4",
        className,
        position === "right" ? "ml-2" : "mr-2"
      )}
      onClick={onClick}
    />
  );
}
