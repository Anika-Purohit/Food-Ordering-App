import { useState } from "react";


const Section = ({title,description,isVisible,setIsVisible,isibleSection}) =>{
   return(
    <div className="border border-black p-2 m-2">
    <h3 className="font-bold text-xl">{title}</h3>
    
    {isVisible?
    (<button className="font-semibold" 
    onClick={()=>setIsVisible()}>Hide</button>)
    :
    (<button className="font-semibold" 
    onClick={()=>setIsVisible()}>Show</button>) } 

    {isVisible && <p>{description}</p>}
    </div>
   ) 
};

const AboutUs = () =>
{
const[isVisible,setIsVisible] = useState(false);    
const[visibleSection,setVisibleSection] = useState("teamYUM");
return (
    <div>
    <h1 className="font-bold text-3xl m-2 p-2">YUM ASIAN FOOD</h1>    
    <h3><Section title={"aboutYUM"} 
    description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    } isVisible={visibleSection == "aboutYUM"}
    // add here
    setIsVisible={()=>setVisibleSection("aboutYUM")

    }/></h3>  
    
    <h3><Section title={"teamYUM"} 
    description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    } isVisible={visibleSection == "teamYUM"}
    setIsVisible={()=> setVisibleSection("teamYUM")
        }/></h3>  

    <h3><Section title={"detailsYUM"} 
    description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    } isVisible={visibleSection=="detailsYUM"}
    setIsVisible={()=>setVisibleSection("detailsYUM")
        }/></h3> 
    
    </div>
)
}
export default AboutUs; 