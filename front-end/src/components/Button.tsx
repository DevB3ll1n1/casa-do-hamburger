type ButtonType = {
  title: string;
  variant?: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant = "default", ...props }: ButtonType) => {
  const buttonVariant = () => {
    if (variant === "default") {
      return "bg-[#C92A0E] w-full py-2 border-2 rounded-md border-[#C92A0E]  text-white font-bold text-sm cursor-pointer";
    } else if (variant === "outline") {
      return "bg-white w-full border-2 py-2 rounded-md border-[#C92A0E]  text-[#C92A0E] font-bold text-sm cursor-pointer";
    }
  };

  return (
    <button {...props} className={buttonVariant()}>
      {title}
    </button>
  );
};

export default Button;
