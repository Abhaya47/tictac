import { useState, useEffect } from "react";
import "./App.css";

let current="X";

function Square(props){
  const [display,setDisplay]=useState(null);
  
  function handleClick(e){
      // console.log(props.position);
    if(display!=null){
      return;
    }
    setDisplay(current);
    props.setboxState(display);

    Winner(props.position);

    if(current=="X"){
      current="O";
      return;
    }
    if(current=="O"){
      current="X";
      return;
    }
  }


  return <button onClick={handleClick}>{display}</button>
}

function Winner(boxState){

}


export default function Board(){
  const [boxState,setboxState]=useState([]); 
// [X,null,null,null]

  useEffect(() => {
     console.log(boxState);
  }, [boxState]);
  // boxstate=[]

  return(
    <>
      <div className="board">
        <table className="table">
          <tr>
            <Square position={"00"} setboxState={setboxState}/>
            <Square position={"01"}/>
            <Square position={"02"}/>
          </tr>
          <tr>
            <Square/>
            <Square/>
            <Square/>
          </tr>
          <tr>
            <Square/>
            <Square/>
            <Square/>
          </tr>
        </table>
      </div>
    </>
  );
};
