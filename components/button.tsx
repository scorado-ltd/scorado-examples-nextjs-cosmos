
'use client';

interface ButtonProps {
    text: string;
    onClick: () => void;
    type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type }) => {
    return <input type="button" value={text} onClick={onClick} className={`btn btn-${type}`} />;
}

export default Button;