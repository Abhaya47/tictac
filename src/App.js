import { useState, useEffect } from "react";
import "./App.css";

let current="X";

function Square(props){
  const [display,setDisplay]=useState(null);
  
  function handleClick(){
    console.log(props.potato());
    if(display!=null){
      return;
    }
    setDisplay(current);
    // props.setboxState(display);

    Winner(props);

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

function Winner(props){

}


export default function Board(){
  const [boxState,setboxState]=useState([null,null,null,null,null,null,null,null,null]); 
// [X,null,null,null],null],null],

    function Move(position){
      const temp=[...boxState];
      temp[position]=current;
      setboxState(temp);
      console.log("boxState[0]");
      return boxState;
    }


  useEffect(() => {
     console.log(boxState);
  }, [boxState]);
  // boxstate=[]

  return(
    <>
      <div className="board">
        <table className="table">
          <tr>
            <td><Square position="0"   potato={()=>{Move(0)}}/></td>
            <td><Square position="1" potato={()=>{Move(1)}}/></td>
            <td><Square position="2"/></td>
          </tr>
          <tr>
            <td><Square/></td>
            <td><Square/></td>
            <td><Square/></td>
          </tr>
          <tr>
            <td><Square/></td>
            <td><Square/></td>
            <td><Square/></td>
          </tr>
        </table>
      </div>
    </>
  );
};
