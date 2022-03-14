import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const selfIntroduction = "My name is Mathew and im a Dev at Union"
const selfIntroductionSubline = "let learn some Next.js to make some real money"

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

/*
    1- make /lib directory and inside a posts.js
    2- import the getSortedPostsData and call it inside the getStaticProps in pages/index.js
    3- by returning allPostsData inside the props object in getStaticProps, the blog posts will be passed to the home component.
 */

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}