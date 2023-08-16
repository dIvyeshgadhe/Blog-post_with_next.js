import style from "./style.module.scss";

interface IButtonProps {
    children: any;
    buttonClass?: string;
    disabled?: boolean;
    type: "button" | "reset" | "submit" | undefined;
    variant?: "primary" | "secondary" | "default";
    onClick?: any;
}

const Button = (props: IButtonProps) => {
    const {
        children,
        variant,
        buttonClass,
        type = "button",
        disabled,
        onClick,
    } = props;

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${style.btn} ${variant === "default" && style.default} ${variant === "primary" && style.btnPrimary}  ${variant === "secondary" && style.btnSecondary} ${disabled && style.disabled} ${buttonClass}`}
        >
            {children}
        </button>
    );
};

export default Button;
