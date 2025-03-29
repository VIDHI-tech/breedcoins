import React from "react";

interface ButtonProps {
  label: string;
  iconSrc?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  iconSrc,
  className,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`bg-primary hover:bg-primary-hover text-white font-bold px-5 md:px-12 py-3 rounded-lg flex items-center gap-4 ${className}`}
      onClick={onClick}
    >
      {label}
      {iconSrc && <img src={iconSrc} alt="icon" />}
    </button>
  );
};

export default Button;
