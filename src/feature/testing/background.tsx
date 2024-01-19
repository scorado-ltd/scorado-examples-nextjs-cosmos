export function BackgroundVideo() {
    return (
        <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src={`${process.env.NEXT_PUBLIC_MEDIA_HOST}/video-1.mp4`} type="video/mp4" />
        </video>
    )
}