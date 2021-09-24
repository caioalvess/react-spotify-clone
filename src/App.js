import React from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

const App = () => {
  const [token, setToken] = React.useState(null);

  React.useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <div className="app">{token ? <h1>Estou logado!</h1> : <Login />}</div>
  );
};

export default App;
