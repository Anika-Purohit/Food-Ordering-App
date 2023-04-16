const sum = (a,b) =>{
return a+b;
}
export default sum ;

const config = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };