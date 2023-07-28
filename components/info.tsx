
interface InfoProps {
    text: string;
    size?: "large" | "medium" | "small";
}

const Info: React.FC<InfoProps> = ({ text, size = "medium" }) => {
    return <div className={`info info-${size}`}>
        <p>{text}</p>
    </div>
}

export default Info;