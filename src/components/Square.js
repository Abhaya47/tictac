import { useState } from "react";

export default function Square(props){
  const [display,setDisplay]=useState(null);

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
  
    function handleClick(){
        let x=props.potato();
        if(display!=null){
        return;
        }
        setDisplay(props.current);
        // props.setboxState(display);

        Winner(x);

        if(props.current=="X"){
        props.setCurrent("O");
        return;
        }
        if(props.current=="O"){
        props.setCurrent("X");
        return;
        }
    }


  return <button onClick={handleClick}>{display}</button>
}


