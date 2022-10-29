export function Button(props: any){
    return (
        <button
            style={{
                background: '#24387B',
                color: '#CAD7FF',
                height: '70px',
                width: '300px',
                borderRadius: '4px',
                fontSize: '30px',
                textTransform: 'uppercase',
                fontWeight: '900',
                border: "none",
                marginTop: '24px',
                marginBottom: '24px',
                cursor: 'pointer',
            }}
        >
            {props.text}
        </button>
    )
}