function setTimeoutTest() {
    /*
        비동기
        
        catch, then, finally - promise


    */
    // 1. 함수, 2. 시간
    setTimeout(() => {
        print(count)
    }, 2000);

    function print(fx) {
        console.log(4)
        fx();
    }

    function count() {
        console.log(1);
        console.log(2);
        console.log(3);    
    }

    // 콜백함수 : 함수 매개변수로 다른 함수 호출
    // 함수 매개변수로 함수를 받음
    function test(fx) {
        console.log("test 함수 호출")
        fx();
    }

    function add() {
        console.log("add함수 호출");

    }
    // add함수의 결과가 아닌 주소를 대입
    test(add);
    return (
        <>

        </>
    );
}

export default setTimeoutTest;