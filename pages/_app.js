import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// you can add global CSS fules by importing them from `pages/_app.js`. 
// You cannot import global CSS anywhere else.

// The rseaon that global CSS cant be imported 
// outside oofo is that gloval CSS affects all elements on the page