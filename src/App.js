// import logo from "./logo.svg";
import { useEffect, useState } from "react";
// import "./App.css";
import { getTokenFromResponse } from "./spotify";
import Login from "./login";
import Playlist from "./playlist";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    document.title = "PLAYLIST SPOTIFY";
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      setToken(_token);
      localStorage.setItem("access_token", _token);
    }
    console.log("my token : ", token);
  }, [token]);

  return (
    <div className="App">
      {!token && <Login />}
      {token && <Playlist spotify={token} />}
    </div>
  );
}

export default App;
