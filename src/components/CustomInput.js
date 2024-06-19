// 컴포넌트의 매개 변수 이름 : props - 무조건!!!!!
// props라는 객체
// 비구조할당 방식으로 사용
function CustomInput({ ph, disabled, value }) {
    return <input type="text" placeholder={ph} disabled={disabled} value={value} />
}

CustomInput.defaultProps = {
    ph: "test",
    disabled: false,
    value: "빈값"
}

export default CustomInput;