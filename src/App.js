import { useState, useEffect } from "react";
import "./App.css";

let current="X";

function Square(props){
  const [display,setDisplay]=useState(null);
  
  function handleClick(){
    let x=props.potato();
    if(display!=null){
      return;
    }
    setDisplay(current);
    // props.setboxState(display);

    Winner(x);

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

function Winner(x){
  isWinner(x,0,1,2);
  isWinner(x,2,5,8);
  isWinner(x,8,7,6);
  isWinner(x,0,3,6);
  isWinner(x,0,4,8);
  isWinner(x,6,4,2);
  isWinner(x,3,4,5);
  isWinner(x,1,4,7);
}

function isWinner(x,p1,p2,p3){
  if(x[p1]==null){
    return;
  }
  if(x[p1]==x[p2] && x[p2]==x[p3]){
    alert (x[p1]+ " is winner");
  }
}


export default function Board(){
  const [boxState,setboxState]=useState([null,null,null,null,null,null,null,null,null]); 
// [X,null,null,null],null],null],

    function Move(position){
      const temp=[...boxState];
      temp[position]=current;
      setboxState(temp);
      return temp;
    }


  return(
    <>
      <div className="board">
        <table className="table">
          <tr>
            <td><Square position="0"   potato={()=>{return Move(0)}}/></td>
            <td><Square position="1" potato={()=>{return Move(1)}}/></td>
            <td><Square position="2" potato={()=>{return Move(2)}}/></td>
          </tr>
          <tr>
            <td><Square potato={()=>{return Move(3)}}/></td>
            <td><Square potato={()=>{return Move(4)}}/></td>
            <td><Square potato={()=>{return Move(5)}}/></td>
          </tr>
          <tr>
            <td><Square potato={()=>{return Move(6)}}/></td>
            <td><Square potato={()=>{return Move(7)}}/></td>
            <td><Square potato={()=>{return Move(8)}}/></td>
          </tr>
        </table>
      </div>
    </>
  );
};
