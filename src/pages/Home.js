import {Link} from "react-router-dom"

const Home = () => {
  return (
      <div class="App">
          <div class="TextBox">
            <h1 class="MainTitle">TicTacToe</h1>
            <p class="SubTitle">Three in a Row</p>
              <Link to="/game"><button id="PlayButton">Play Now</button></Link>
              <Link to="/help"><button id="HelpButton">Help</button></Link>
          </div>
      </div>
  );
};

export default Home;