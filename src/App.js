import { useState } from "react";
import "./App.css";
import Square from "./components/Square";

export default function Board(){
  const [boxState,setboxState]=useState([null,null,null,null,null,null,null,null,null]); 
// [X,null,null,null],null],null],
    const [current,setCurrent]=useState("X");

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
            <td><Square position="0"   potato={()=>{return Move(0)}}  current={current} setCurrent={setCurrent}/></td>
            <td><Square position="1" potato={()=>{return Move(1)}}  current={current} setCurrent={setCurrent}/></td>
            <td><Square position="2" potato={()=>{return Move(2)}}  current={current} setCurrent={setCurrent}/></td>
          </tr>
          <tr>
            <td><Square potato={()=>{return Move(3)}} current={current} setCurrent={setCurrent}/></td>
            <td><Square potato={()=>{return Move(4)}} current={current} setCurrent={setCurrent}/></td>
            <td><Square potato={()=>{return Move(5)}} current={current} setCurrent={setCurrent}/></td>
          </tr>
          <tr>
            <td><Square potato={()=>{return Move(6)}} current={current} setCurrent={setCurrent}/></td>
            <td><Square potato={()=>{return Move(7)}} current={current} setCurrent={setCurrent}/></td>
            <td><Square potato={()=>{return Move(8)}} current={current} setCurrent={setCurrent}/></td>
          </tr>
        </table>
      </div>
    </>
  );
};
