import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
    const [ imgSrc, setImgSrc ] = useState("");

    // const handleLoadImgClick = () => {
    //     const fileElement = document.createElement("input");
    //     fileElement.setAttribute("type", "file");
    //     fileElement.setAttribute("multiple", true);
    //     fileElement.click();
    //     fileElement.onchange = (e) => {
    //         const file = e.target.files[0];
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);
    //         fileReader.onload = (e) => {
    //             setImgSrc(e.target.result);
    //         }
    //     }
    // }

    const handleLoadImgClick = () => {
    Swal.fire({
        title: "프로필 이미지 변경",
        text: "프로필 이미지를 변경하시겠습니까>",
        showCancelButton: true,
        confirmButtonText: "예",
        cancelButtonText: "취소"
    }).then(result => {
        if(result.isConfirmed) {
            const fileElement = document.createElement("input");
            fileElement.setAttribute("type", "file");
            fileElement.click();
            fileElement.onchange = (e) => {
                const file = e.target.files[0];
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    setImgSrc(e.target.result);
                }
                fileReader.readAsDataURL(file);
            }
        }
    })
        
    }
    
    return (
        <>
        <div onClick={handleLoadImgClick}>
            <img src={imgSrc} />
        </div>
        </>
     );
}

export default App;