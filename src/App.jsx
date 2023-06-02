import "./App.css";
import NightMode from "./assets/icon-moon.svg";
import SearchIcon from "./assets/icon-search.svg";
import useService from "./hooks/useService";

function App() {
  const {
    searchInput,
    searchResult,
    searchClickHandler,
    handleInputChange,
    searchEnterHandler,
  } = useService();
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
            <input
              type="text"
              placeholder="Search GitHub username…"
              value={searchInput}
              onChange={handleInputChange}
              onKeyDown={searchEnterHandler}
            />
            <button className="btn-search" onClick={searchClickHandler}>
              Search
            </button>
          </div>
        </div>
        <div className="user-card">
          <div className="user-card_main">
            <div className="user-photo-left">
              <img src={searchResult.avatar_url} alt="" />
            </div>
            <div className="content-right">
              <h1>
                {searchResult.name ? searchResult.name : searchResult.login}
              </h1>
              <p>
                <a href={searchResult.repos_url}>{`@${searchResult.login}`}</a>
              </p>
              <p>{searchResult.created_at}</p>
            </div>
          </div>
          <div className="user-bio">
            <p>
              {searchResult.bio ? searchResult.bio : "This user has no bio"}
            </p>
          </div>
          <div className="user-stats">
            <div className="repos">
              <p>Repos</p>
              <p>{searchResult.public_repos}</p>
            </div>
            <div className="followers">
              <p>Followers</p>
              <p>{searchResult.followers}</p>
            </div>
            <div className="following">
              <p>Following</p>
              <p>{searchResult.following}</p>
            </div>
          </div>
          <div className="user-info">
            <div>
              <i></i>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
