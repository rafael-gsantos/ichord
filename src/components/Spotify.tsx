
export function Spotify(props: any){
    return (
        <iframe
            title="Iframe"
            src={`https://open.spotify.com/embed/${props.tipo}/${props.link}?utm_source=generator`}
            width="300px"
            height="80px"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            style={{borderRadius: '4px', marginTop: '12px', marginBottom: '12px'}}
            {...props}
        ></iframe>
    )
}