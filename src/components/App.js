import React from 'react';
import Square from './Square';

const App = () => {
    return(
        <div class="row ml-1">
            <Square bgColor="blue" txtColor="white" />
            <Square bgColor="red" txtColor="blue" />
            <Square bgColor="pink" txtColor="green"/>
        </div>
    )
};

// Export allows you to use this code in other files (index.js)
export default App;