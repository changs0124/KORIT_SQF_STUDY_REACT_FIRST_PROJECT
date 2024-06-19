function Box({ name, isShow, children}) {
    const result = true && 10;
    console.log(result);

    return <div>
        <h1>{name}</h1>
        {children}
        {/* JSX표현식 안에서 null / true / false는 문자열 취급 X */}
        {isShow && <h3>안녕하세요</h3>}
    </div>
}

export default Box;