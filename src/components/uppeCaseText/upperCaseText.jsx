const UpperCaseText = ({ text = 'Ola, mundo!', color = 'black'}) => {
    return (
        <p style={{color: color}}>
            {text.toUpperCase()}
        </p>
    );
};

export default UpperCaseText;