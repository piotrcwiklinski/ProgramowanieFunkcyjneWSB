function Main() {

  const btnClick=(x)=>{
    alert("btn clicked "+x);
  } 

  return (
    <div>

      <div className="card border-primary m-5 shadow-lg">
        <div className="card-body">
          <h4 className="card-title">My First Code</h4>
          <button onClick={()=>btnClick("abc")} type="button" className="btn btn-danger">
            Button
            </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
