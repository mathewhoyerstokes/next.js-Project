import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

// # LINKS # //

// The <Link> component enables client side navigation this means
// the page transition happens using JS, which is faster then default navigation
// change background color to yellow on the HTML tag and switch between navigations the background will persist
// this means that client side navigation is working
// Next uses code splitting, only the page that is requested will be served initially, optimizing performance

// # IMAGES # //

// Next.js can serve static images under the top level 'public directory' files inside can be referenced from the root
// Next.js offers an Image component to optimize images on demand, out of the box it will lazy load images by default
// optimizes any img source and allows for resizing, optimizing and serving images in modern formats.

// const YourComponent = () => (
//   <Image
//     src="/images/profile.jpg" // Route of the image file
//     height={144} // Desired size with correct aspect ratio
//     width={144} // Desired size with correct aspect ratio
//     alt="Your Name"
//   />
// )

// # Metadata # //
/* <Head> component is a React component built into Next.js things can be added inside the <Head> for example new title of the page.
 Adding third party scripts to the page, we can do this by using the Script component. notice that there are some additional properties
 - strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular
   script lazily during browser idle time
 - onLoad is used to run any JavaScript code immediately after the script
   has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly */
