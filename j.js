// import react and react dom bcs now we have removed cdn links
import React from "react";
import ReactDOM from "react-dom/client";

const heading = (<h1 id ="title" key="1">Hello from react jsx</h1>)

const MC = ()=>
{return (<div>
{heading}    
<h1>Hello from mc1</h1>
<h2>trying multiple statements in mc1</h2>
</div>

);};

// functional component
const FC = ()=>
{return (<div>
{<MC/>}    
<h1>Hello from fc1</h1>
<h2>trying multiple statements from fc1</h2>
</div>

);};



const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<FC/>);
