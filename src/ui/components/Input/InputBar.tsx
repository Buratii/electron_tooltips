import { forwardRef, type InputHTMLAttributes } from "react";

interface InputBarProps extends InputHTMLAttributes<HTMLInputElement> {
  showPassword?: boolean;
}

export const InputBar = forwardRef<HTMLInputElement, InputBarProps>(
  ({ placeholder, showPassword = true, ...rest }, ref) => {
    return (
      <input
        className="flex w-full bg-transparent outline-none  text-gray-200"
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        ref={ref}
        {...rest}
      />
    );
  }
);
