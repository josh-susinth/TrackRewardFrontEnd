const Button = ({btnText,onSub}) => {
    return (
        <button className="btn" onClick={onSub}>{btnText}</button>
    )
}

export default Button
