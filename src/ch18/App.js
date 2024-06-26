import React, { useState } from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import MainSidebar from './components/MainSidebar/MainSidebar';
import MainHeader from './components/MainHeader/MainHeader';
import { Global } from '@emotion/react';

function App(props) {
    const [ isMainSidebarShow, setMainSidebarShow ] = useState(false);
    return (
        <>
            <Global css={Global.reset}/>
            <MainLayout>
                <MainHeader setMainSidebarShow={setMainSidebarShow} />

                <MainSidebar
                    isMainSidebarShow={isMainSidebarShow} 
                    setMainSidebarShow={setMainSidebarShow}    
                />
            </MainLayout>
        </>
        
    );
}

export default App;