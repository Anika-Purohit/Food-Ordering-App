import FunctionalComponent from "./FuctionalComponent";
import ClassBasedComponent from "./ClassBasedComponent";
import { Component } from "react";
// can use <Outlet/> to display the children
class AboutUs extends Component{
constructor(props){
super(props);
console.log("parent - constructor") ; 
}  
  
componentDidMount(){
console.log("parent - componentDidMount") ;  
} 
render(){ 
console.log("parent - render") ;      
return (      
<div> 
<h2> this is about us</h2>
<FunctionalComponent name={"Anika FC"}/>
<ClassBasedComponent name={"First"}/>
<ClassBasedComponent name={"Second"}/>
</div> 
)} 
}
export default AboutUs;