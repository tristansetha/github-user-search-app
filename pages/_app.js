import "../styles/global.css";
import { AppContext } from "../context/state"; // import based on where you put it
import { useState, useMemo } from "react";

export default function App({ Component, pageProps }) {
  const [profileContext, setProfileContext] = useState({});

  const value = useMemo(
    () => ({ profileContext, setProfileContext }),
    [profileContext, setProfileContext]
  );
  // during initial rendering compute is invoked or () =>, memoizes the calculation result and returns it to the component
  // id during the dependencies dont change (profile or set profile) then the compute is not invoked but returns the memoized value

  return (
    <AppContext.Provider value={value}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

// you can add global CSS fules by importing them from `pages/_app.js`.
// You cannot import global CSS anywhere else.

// The rseaon that global CSS cant be imported
// outside oofo is that gloval CSS affects all elements on the page
