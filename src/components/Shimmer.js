export const Shimmer = ()=>{
return <div data-testid="shimmer" className='restaurant-list' >
{Array(20).fill("").map(e =>
 <div className='shimmer-Card'></div>)}
</div>
};