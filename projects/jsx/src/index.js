// import react and react dom libs
import React from 'react';
import ReactDOM from 'react-dom';

// const getButtonText = () => ' Fuck You!';


// create react component
const App = () => {
    // const buttonText = 'Click Me! ';
    const buttonText = { text: 'Click', more: ' Here'};
    const labelText = 'Enter Name: ';
    
    return ( 
    <div>
        <label className="label" htmlFor="name">
            Enter Name:
            {labelText}
        </label>
        <input type="text" id="name"/>
       
        <button style={{backgroundColor: 'blue', color:'white'}}>
            {buttonText.text} {buttonText.more} 
            {/* {getButtonText()} */}
        </button>
    </div>
    );
};

// take component and display on screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);