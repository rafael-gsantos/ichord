/* eslint-disable jsx-a11y/iframe-has-title */
export function Youtube(props: any) {
    return (
        <div style={{ marginTop: '30px', paddingLeft: '50px', paddingRight: '50px', }}>
            <h2> {props.titulo} </h2>
            <p> {props.descricao} </p>
            <iframe 
                width="80%" 
                height="50%" 
                frameBorder="0" 
                src={`https://www.youtube.com//embed/${props.videoID}?autoplay=&mute=0`}>
            </iframe>
        </div>
    )
}