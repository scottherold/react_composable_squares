import React from 'react';

// Creates JSX React object
const Square = (props) => {
    return(
        <div style={{backgroundColor:props.bgColor, width:250, height:250}}>
            <h2 style={{color:props.txtColor}}>{props.txtColor} on {props.bgColor}</h2>
        </div>
    );
};

// Export allows you to use this code in other files (index.js)
export default Square;