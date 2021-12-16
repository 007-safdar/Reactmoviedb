// eslint-disable-next-line
import React from 'react';
import { GlobalStyle } from './GlobalStyles';
//Components

import Header from './components/Header';
import Home from './components/Home';


//instead of jsx can use react.create elem
const App = () => {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <GlobalStyle/>            
        </div>
    );
}

export default App;
