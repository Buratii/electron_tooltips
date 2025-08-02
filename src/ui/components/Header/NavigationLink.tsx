import type { ReactNode } from "react";
import { Link, useLocation } from "react-router";
import { twMerge } from "tailwind-merge";

interface NavigationLinkProps {
  to: string;
  className?: string;
  children: ReactNode;
}

export default function NavigationLink({
  to,
  className,
  children,
}: NavigationLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={twMerge(
        "flex-1 h-12 flex items-center justify-center text-sm font-medium transition-all",
        "hover:bg-gray-800 text-gray-400",
        isActive && "bg-gray-800 text-white",
        className
      )}
    >
      {children}
    </Link>
  );
}
