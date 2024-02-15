import clsx from "clsx";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "contained" | "outlined";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant }) => {
  const buttonClasses = clsx({
    "bg-custom-warning hover:bg-custom-yellow/95 text-black p-4 rounded-full pointer-events-auto":
      variant === "contained",
    "border-2 border-custom-white text-custom-white hover:bg-custom-white hover:text-black p-4 rounded-full pointer-events-auto":
      variant === "outlined",
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      <p className="text-sm font-semibold">{label}</p>
    </button>
  );
};

export default Button;
