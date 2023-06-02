import "./App.css";
import NightMode from "./assets/icon-moon.svg";
import SearchIcon from "./assets/icon-search.svg";

function App() {
  return (
    <main>
      <div className="head">
        <div className="devfinder">
          <span>devfinder</span>
        </div>
        <div className="color-mode">
          <div className="icon">
            <img src={NightMode} alt="moon-icon" />
          </div>
        </div>
      </div>
      <div className="submain">
        <div className="userSearch">
          <div className="inputDiv">
            <img src={SearchIcon} alt="search-icon" />
            <input type="text" placeholder="Search GitHub username…" />
            <button className="btn-search">Search</button>
          </div>
        </div>
        <div className="user-card">
          <div className="user-card_main">
            <div className="user-photo-left">
              {/* <img src={NightMode} alt="" /> */}
            </div>
            <div className="content-right">
              <h1>The Octocat</h1>
              <p>@octocat</p>
              <p>joined 25 march 1990</p>
            </div>
          </div>
          <div className="user-bio">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </p>
          </div>
          <div className="user-stats"></div>
          <div className="user-info"></div>
        </div>
      </div>
    </main>
  );
}

export default App;
