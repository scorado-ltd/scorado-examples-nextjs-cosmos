export interface DateTimeProps {
    dateTime: Date;
    displayText: string;
}

export default function DateTime({ dateTime, displayText }: DateTimeProps) {
    return (
        <time dateTime={dateTime.toLocaleString()}>{displayText}</time>
    )
}