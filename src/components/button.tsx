import { type ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> 

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...rest}
    >
      {children}
    </button>
  );
}
