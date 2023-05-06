function MyForEach() {

  let myTab=[2,5,7,3,1,8,9]

  //pure function
  const testTab=(number)=>{
    if(number%2===0){
      console.log("parzysta")
    }
    else{
      console.log("nieparzysta")
    }
  }

  console.log(myTab);

  myTab.forEach((x)=> {console.log(x+5)})

  myTab.forEach(testTab);

  return (
    <div>
    </div>
  );
}

export default MyForEach;
