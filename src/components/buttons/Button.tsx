import classNames from "classnames";
import { IButtonProps } from "types/components/buttons";

const Button = ({ children, ...props }: IButtonProps) => {
  const { className = "", ...rest } = props;
  return (
    <button
      className={classNames(
        "bg-blue-400 rounded-full text-white px-4 py-1 text-center dark:bg-black dark:text-white",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
