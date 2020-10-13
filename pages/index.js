import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {getFilteredRecords, request} from "../lib/menuItems";

export default function Home({ allPostsData, menuItems }) {
    console.log(menuItems.allMenuItems)
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
              <ul className={utilStyles.list}>
                  {menuItems && menuItems.allMenuItems.map(({ name, description, price, picture }) => (
                      <li className={utilStyles.listItem} key={name}>
                          {name}
                          <br />
                          <small className={utilStyles.lightText}>
                              {description}
                              {price}
                              {/*{picture}*/}
                              <img src={picture?.responsiveImage?.src} width={"300px"} height={"300px"} style={{borderRadius: "50%", backgroundColor: "#CCCCCC"}}/>
                          </small>
                      </li>
                      
                  ))}
              </ul>
          </section>
      </Layout>
  )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()

    const MENU_ITEMS = `query MenuItems {
      allMenuItems {
        name
        id
        description
        picture {
          responsiveImage {
            src
          }
        }
      }
    }`;
    const menuItems = await request({
        query: MENU_ITEMS,
    });

    return {
        props: {
            allPostsData,
            menuItems
        }
    }
}

export function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
        id,
        ...matterResult.data
    }
}