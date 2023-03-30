export const Shimmer = ()=>{
return <div className='restaurant-list'>
{Array(20).fill("").map(e =>
 <div className='shimmer-Card'></div>)}
</div>
};