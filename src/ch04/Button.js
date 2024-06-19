function Button({ text, setNumber }) {
    const handleClick = () => {
        if(text === "증가") {
            setNumber(num => ++num);  
        }
        if(text === "감소") {
            setNumber(num => --num);
        }
    }

    return <button onClick={handleClick}>{text}</button>
}

export default Button;