# 프로젝트 생성
* npx create-react-app

# 라이브러리 설치
* 라우터 > npm install react-router_dom
* 이모션 > npm install @emotion/react
* 리코일 > npm install recoil
* React icons > npm install react-icons
* Sweetaler2 > npm install sweetalert2


# JSX 자동완성
- ctrl + shift + p
- user settings.json(vscode 사용자 설정) 선택
- 아래 설정 추가

~~~
     "emmet.syntaxProfiles": {
        "javascript": "jsx"
    },
    "emmet.includeLanguages": {
        "javascript": "html"
    }
~~~

# 확장기능(Extensions)
- reactjs-code-snippets
- vscode-color-pciker
- vscode-styled-components

# 터미널 선택
- ctrl + shift + p
- terminal: select Default Profile 선택
- git bash

# 폴더 구조
- conponents
- pages
- constants
- styles
- hooks
- configs
- utils
- atoms
- assets : 이미지, 짤, 외부에서 불러 올 파일
- apis(services)

# 주요 함수
- useState(초기값)
- useEffect(() => {}, [])
- useRef(기본값)
- useMemo(() => 리턴, [])
- useCallback(() => {}, [])
- useRecoilState(atom)
- useNaviate()
- useLocation()
- useParams()
- useSearchParams()

## 명명규칙
- Component 이름은 대문자
- 하나의 Component 폴더에는 하나의 Component.jsx 파일 style.js파일로 구성
- constants 폴더에 들어가는 상수들은 대문자와 스네이크 표기법으로 작성
- 이벤트 함수명은 handle로 시작해서 이벤트명으로 끝낸다.