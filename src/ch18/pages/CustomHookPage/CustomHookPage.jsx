/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useInput } from "../../hooks/useInput";

function CustomHookPage(props) {
    // const { value, onChange } = useInput("", 20);
    const userNameInput = useInput("test", 20);
    const userPasswordInput = useInput("", 10);

   
    return (
        <div>
            <input type="text" onChange={userNameInput.onChange} value={userNameInput.value} />
            <input type="password" onChange={userPasswordInput.onChange} value={userPasswordInput.value} />
        </div>
    );
}

export default CustomHookPage;