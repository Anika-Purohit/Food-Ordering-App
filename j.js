const heading = React.createElement("h1",{ id:"title"},"hello from react CDN 1");
const heading1 = React.createElement("h2",{ id:"title"},"hello from react CDN 2");
const heading2 = React.createElement("h3",{ id:"title"},"hello from react CDN 3");

// nested create element 

const multiple = React.createElement("div",{ id:"multiple"},[heading,heading1,heading2]);
const heading3 = React.createElement("h1",{ id:"title"},"hello from react CDN 4 which isnt nested");

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(multiple);
// root.render(heading3); 
//only one root statement executes at a time 
