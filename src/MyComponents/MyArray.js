import { useState } from "react";

function MyArray() {

const [getMyArray, setMyArray] = useState([1,2,3,4,1])

const[getNumber, setNumber] = useState();

const[getResult, setResult] = useState();

const btnClickAdd=()=>{
  setMyArray((old)=>[...old,Number(getNumber)])
}

const btnClickSum=()=>{
  setResult(getMyArray.reduce((sum,x)=>sum+x,0))
}

  
  return (
    <div>
      <div className="card border-primary m-3">
        <div className="card-body">
          <h4 className="card-title">Array Component</h4>
          <br></br>
          <h3>myArray: 
            {getMyArray.map((x,index)=>(
              <span key={index}> {x},</span>
            ))}
          </h3>
          <br></br>

          <input onInput={(e)=>setNumber(e.target.value)} type="text" placeholder="input value"></input>
          <br></br>
          <button onClick={btnClickAdd} type="button" className="btn btn-primary m-3">Add</button>

          <button onClick={btnClickSum} type="button" className="btn btn-secondary m-3">Sum Values</button>
          <h3>result: {getResult}</h3>
        </div>
      </div>
    </div>
  );
}

export default MyArray;
