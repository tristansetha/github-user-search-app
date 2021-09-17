import "../styles/global.css";
import { AppContext } from "../context/state"; // import based on where you put it
import { useState, useMemo } from "react";

export default function App({ Component, pageProps }) {
  const [profileContext, setProfileContext] = useState({});

  const value = useMemo(
    () => ({ profileContext, setProfileContext }),
    [profileContext, setProfileContext]
  );

  return (
    <AppContext.Provider value={value}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
