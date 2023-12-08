
interface TitleProps {
    text: string;
    size?: "large" | "medium" | "small";
}

const Title: React.FC<TitleProps> = ({ text, size = "medium" }) => {
    if (size === "large")
        return <h1 className={`title`}>{text}</h1>;
    else if (size === "small")
        return <h3 className={`title`}>{text}</h3>;
    else
        return <h2 className={`title`}>{text}</h2>;
}

export default Title;