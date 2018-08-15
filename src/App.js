import React from 'react';
import ListItem from './components/ListItem/ListItem';
import cat from './assets/cat.png'

const App = () => {
    return(
    <div>
        <h1 className="App-title">Welcome to Barebones-React</h1>
        {/* <img src={cat}/> */}
        <ListItem/>
    </div>
    );
}

export default App;
