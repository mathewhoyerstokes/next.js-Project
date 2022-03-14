import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Mathew Stokes'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
              name="description"
              content="Learn how to build a personal website using Next.js"
          />
          <meta
              property="og:image"
              content={`https://og-image.vercel.app/${encodeURI(
                  siteTitle
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
              <>
                <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={name}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
              </>
          ) : (
              <>
                <Link href="/">
                  <a>
                    <Image
                        priority
                        src="/images/profile.jpg"
                        className={utilStyles.borderCircle}
                        height={108}
                        width={108}
                        alt={name}
                    />
                  </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h2>
              </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
        )}
      </div>
  )
}

/*
CSS MODULES

Are useful for component level styles

- Using CSS modules will automatically generate unique class name, so there will never be name collisions
- Code splitting ensures only the minimal amount of CSS is loaded for each page, resulting in smaller bundle sizes
- CSS bundles are extracted from the JS bundles at build time and generate a '.css' file that is loaded automatically by next.js

If we want to add CSS to be loaded on every page we need to do it differently.

STYLING TIPS

'classNames' is a simple library that lets you toggle class names easily. You can install it using npm install classnames or yarn add classnames.

Please take a look at its documentation for more details, but here's the basic usage:

Suppose that you want to create an Alert component which accepts type, which can be 'success' or 'error'.
If it's 'success', you want the text color to be green. If it's 'error', you want the text color to be red.
You can first write a CSS module (e.g. alert.module.css) like this:

.success {
  color: green;
}
.error {
  color: red;
}
And use classnames like this:

import styles from './alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}
*/