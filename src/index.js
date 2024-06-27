import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ch18/App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 해당 괄호안에 태그가 들어가면 작동함
// 전역 라이브러리를 설정할 때 다른 때에는 App.js에서 처리
root.render(
    <RecoilRoot>
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </RecoilRoot>
);
// root.render(<div>test</div>);
// root.render(<Hello />);