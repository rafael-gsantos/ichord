export function Text(props: any){
    return (
        <div {...props}>
            <h2 style={{color: '#66739B', marginBottom: '48px' }}> {props.title} </h2>
            <p style={{ color: '#CAD7FF', marginBottom: '48px' }}> {props.text} </p>
        </div>
    )
}