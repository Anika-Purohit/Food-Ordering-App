import React from "react";

class ClassBasedComponent extends React.Component{
constructor(props){
   super(props); 
   this.state = {
   count:0, 
   count1:0,
   };
   console.log("child - constructor" + this.props.name);
}  
componentDidMount(){
    console.log("child - componentDidMount");
}  
render(){
console.log("child - render");
return(
<div className="cbc">
<h2>Returned From A Class Based Component</h2> 
<h2>Name:{this.props.name}</h2>
<h2>Count={this.state.count}</h2>
<h2>Count 1={this.state.count1}</h2>
<button onClick = {()=>{ this.setState({count1:1,count:1,});
}}>
Count 1
</button>
</div> 
) 
}  
}
export default ClassBasedComponent;
