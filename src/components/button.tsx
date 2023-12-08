export enum ButtonType {
    Primary,
    Seconday,
    Success,
    Danger,
    Warning,
    Info,
    Light,
    Dark,
    Link
}

interface ButtonProps {
    text: string;
    onClick: () => void;
    type: ButtonType;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type }) => {
    return <input type="button" value={text} onClick={onClick} className={`btn btn-${ButtonType[type].toLowerCase()}`} />;
}

export default Button;