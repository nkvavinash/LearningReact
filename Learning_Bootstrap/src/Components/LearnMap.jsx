function LearnMap(){
let fooditems = ["Dal","Ghee","Panner","Rice","Wheat","Salad"];
//let fooditems = [];

if (fooditems.length ===0){
  return <h1>I am Felling Hungary</h1>;
}

return(
<>
  <h1>List of Healthy Foods</h1>
  {fooditems.length ===0 ? <h1>I am Felling Hungary</h1> : null}
 {fooditems.length ===0 && <h1>I am Felling Hungary</h1>}
  <ul class="list-group list-group-numbered" >
    {fooditems.map((item)=> (
     //<li className="list-group-item" class="badge text-bg-primary">{item}</li>
      <a href="#"><li key={item} class="list-group-item " align ="left" >{item}</li></a>
     
    ))}
  </ul>
</>

);

}

export default LearnMap;