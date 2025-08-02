import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef,
} from "react";
import { Button as HeadlessButton } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outlined" | "text";
}

export const Button = forwardRef(
  (
    {
      children,
      className,
      disabled,
      variant = "default",
      ...rest
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const baseClasses =
      "transition-all duration-300 px-5 rounded-10xl h-10 flex items-center justify-center hover:scale-105";

    let variantClasses = "";
    switch (variant) {
      case "outlined":
        variantClasses =
          "border border-primary-default text-primary-default bg-transparent";
        break;
      case "text":
        variantClasses =
          "bg-transparent text-primary-default px-0 h-auto rounded-none";
        break;
      case "default":
      default:
        variantClasses = "bg-primary-default text-gray-750";
        break;
    }

    const disabledClasses = disabled
      ? "bg-gray-800 text-gray-500 cursor-default hover:scale-100"
      : "";

    return (
      <HeadlessButton
        {...rest}
        ref={ref}
        disabled={disabled}
        className={twMerge(
          baseClasses,
          variantClasses,
          disabledClasses,
          className
        )}
      >
        {children}
      </HeadlessButton>
    );
  }
);
