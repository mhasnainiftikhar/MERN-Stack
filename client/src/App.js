import './App.css';
function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">MyLogo</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
      <div className="image">
      <img src="https://techcrunch.com/wp-content/uploads/2024/04/CMC_7699.jpg?resize=1200,800" alt="Post1"/>
      </div>
      <div className="text">
      <h2>Rabbit’s R1 is a little AI gadget that grows on you</h2>
      <p className="info">
        <a className="author">Hasnain Iftikhar</a>
        <time>2024-6-26  5:21</time>
      </p>
      <p className="summary">The $199 price point, touchscreen and funky Teenage Engineering design make it far more accessible than Humane’s Ai Pin</p>
      </div>
      </div>
      <div className="post">
      <div className="image">
      <img src="https://techcrunch.com/wp-content/uploads/2024/01/safe-living-device-on-furniture.jpg?resize=1200,900" alt="Post1"/>
      </div>
      <div className="text">
      <h2>Age tech at CES was much more than gadgets</h2>
      <p className="info">
        <a className="author">Hasnain Iftikhar</a>
        <time>2024-6-26  5:21</time>
      </p>
      <p className="summary">CES was definitely worth watching closely, if only just for the rise of age tech.The $199 price point, touchscreen and funky Teenage Engineering design make it far more accessible than Humane’s Ai Pin</p>
      </div>
      </div>
      <div className="post">
      <div className="image">
      <img src="https://techcrunch.com/wp-content/uploads/2020/02/apple-news-ios-icon.jpg?resize=1200,675" alt="Post1"/>
      </div>
      <div className="text">
      <h2>Apple News is testing a game that kind of looks like NYT Connections</h2>
      <p className="info">
        <a className="author">Hasnain Iftikhar</a>
        <time>2024-6-26  5:21</time>
      </p>
      <p className="summary">Apple News is testing a new game for iOS 17.5 called Quartiles, which requires players to organize a grid of 20 syllables into 5 four-syllable words. Spotted by Gadget Hacks,…</p>
      </div>
      </div>

    </main>
  );
}

export default App;
