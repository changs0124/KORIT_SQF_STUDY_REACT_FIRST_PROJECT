function PromiseTest() {
    /*
        Promise 비동기 객체
        프로미스의 3가지 상태
        1. 대기 : 이행되지도 거부되지도 않은 상태
        2. 이행 : 연산이 성공했을 때의 상태
        3. 거부 : 연산을 실패했을 때의 상태

        프로미스에만 .then / .catch 사용가능 => await async

    */
    // promise 클래스 객체 생성 
    // 안에 함수 들어감(콜백 함수) - 3가지 상태 가짐
    // 1. reserve 2. reject

    // 생성시 바로 실행
    // 프로미스 정의 불가 => 함수에 담아서 정의는 가능
    function p1(name) {
        // 무조건 비동기 처리  (이행), (거부)
        return new Promise((resolve, reject) => {
            // 함수 호출 시 대기 상태(동기)
            console.log(name + "프로미스 생성")
            if(!name) {
                reject("오류!!!");
            }
            resolve(name);
        });

    }
    // async 프로미스 생성
    async function p2() {
        let a = null;
        try {
            a = await p4(); // await : 이행할 때까지 기다리기
            // await은 async안에서만 사용할 수 있고, Promise객체에만 사용할 수 있다.
            await p5();
        }   catch(error) {
            console.log(error);
            a = "p5";
        }
        return a;
    }
    // p2 = p3
    function p3() {
        return new Promise((resolve, reject) => {
            resolve("p3");
            // return "p3"
        });
    }

    async function p4() {
        return "p4"
    }

    async function p5() {
        throw new Error("오류!!!")
    }

    const handleClick = () => {
        // resolve에 값을 result에 대입
        p1("p1").then(result => {   
            console.log("이행");
            console.log(result);    // p1
            if(true) {
                throw new Error("거부");    // 거부(reject)
            }
            return "두번째 then"    // (resolve)콜백함수 이기 때문에 resolve 존재 X 대신 return으로 이행
        }).then(result => {
            console.log(result);
        }).catch(error => {
            // console.log(error);
        })
        console.log("출력1");
        p1("p2");
        console.log("출력2");
        p1("p3");
    }

    const handleClick2 = () => {
        setTimeout(() => {
            p2().then(r => {
                console.log(r);
            })
        }, 2000)
        // p2().then(r => {
        //     console.log(r);
        //     return "p2..."
        // }).then(r => {
        //     console.log(r);
        // });
        // p3().then(r => console.log(r));
    }

    
    return (
        <>
            <button onClick={handleClick}>promise</button>
            <button onClick={handleClick2}>async</button>
        </>
    );
}

export default PromiseTest;