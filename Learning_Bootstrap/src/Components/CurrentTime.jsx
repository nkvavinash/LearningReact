let CurrentTime = ()=>{
  let time = new Date();
  return (
  <h2 color="blue" > This is the Current Indian Time : {time.toLocaleDateString()} -{""}{time.toLocaleTimeString()}
    </h2>
);
}

export default CurrentTime;