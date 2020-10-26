import React from 'react';


function App(){
    let curDate = new Date();
    curDate = curDate.getHours();
    let greeting = ' ';
    const stylecss = {};
    if (curDate >= 1 && curDate < 12) {
        greeting = "Good Morning";
        stylecss.color = "Green";

    } else if (curDate >= 12 && curDate < 19) {
        greeting = "Good Afternon ";
        stylecss.color = "Orange";

    } else {
        greeting = "Good Night";
        stylecss.color = "Black";
    }
    return(
     <>
    <div>
    <h1>Hello Sir, <span style={stylecss}> {greeting} </span></h1>
    </div>
    </>
    );
}

export default App;