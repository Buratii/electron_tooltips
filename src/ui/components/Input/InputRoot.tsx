import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputRootProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  error?: string[];
}

export function InputRoot({ id, children, className, error }: InputRootProps) {
  return (
    <div id={id} className="flex flex-col gap-1.5 w-full">
      <div
        className={twMerge(
          "flex items-center border-gray-200 h-14 border rounded-10xl px-6",
          className
        )}
      >
        {children}
      </div>
      {error &&
        error.map((errorMessage, index) => (
          <span key={index} className="text-red-500 text-sm ml-6">
            {errorMessage}
          </span>
        ))}
    </div>
  );
}
