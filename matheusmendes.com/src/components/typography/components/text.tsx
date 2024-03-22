import React, { ElementType, ReactNode } from "react";

const sizeVariants = {
  xxs: "text-xxs",
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
} as const;
type SizeVariant = keyof typeof sizeVariants;
interface TextProps {
  as?: ElementType;
  size?: SizeVariant;
  className?: string;
  children?: ReactNode;
  color?: "text-neutral-100" | "text-neutral-300" | "text-green-300";
}

const Text: React.FC<TextProps> = ({
  as: Component = "p",
  size = "md",
  color = "text-neutral-100",
  className = "",
  children,
  ...props
}) => {
  const baseClasses = " text-neutral-100 font-medium font-mono leading-loose";
  const sizeClasses = size ? `${sizeVariants[size]}` : "text-md";
  const colorClasses = color ? `${color}` : "text-neutral-100";

  const combinedClasses = `${baseClasses} ${sizeClasses} ${className} ${colorClasses}`;

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
};

export default Text;
