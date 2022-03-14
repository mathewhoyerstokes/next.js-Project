import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
/*
  - The _app component is a top level component which will be common across all pages, you can use the app component to keep state
    when navigating between pages.
  - Global styles need to be imported in the _app.js file, it is the only place that they can be loaded.
*/