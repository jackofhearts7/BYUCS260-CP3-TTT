import "../help.css";
import {Link} from "react-router-dom"


const Help = () => {
  return (
      
    <div><h1>The Rules</h1>
    <ol>
        <li>The board is a 3x3 grid.</li>
        <li>One player is X, the other is O. Take turns marking a box.</li>
        <li>The first player to get 3 boxes in a row wins!</li>
        <li>If the board is filled and there is no winner, the game is a tie.</li>
    </ol>
        <Link to="game"><button id="PlayButton">Back to Game</button></Link>
    </div>
    )

}
  


export default Help;