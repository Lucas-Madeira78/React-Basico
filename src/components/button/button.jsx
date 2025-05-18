const Button = ({ label = "Clique aqui" }) => {
    return (
        <button className="btn" onClick={() => alert(`A label desse botão é "${label}"`)}>{label}</button>
    )
}

export default Button;