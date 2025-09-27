export default function UpsideDownArrow({state=false, fontSize="11.5px"}) {
    return (
        <div className="upsideDown_arrow">
            <p
                style={{
                    transform: state && 'rotate(180deg)',
                    transition: "0.25s",
                    marginTop: state && '4.5px',
                    fontSize: fontSize
                }}
            >
                {'\u2335'}
            </p>
        </div>
    )
}