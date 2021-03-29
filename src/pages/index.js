import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/home.module.css"
import { GatsbyImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Hello visitors!</h2>
          <h3>Created by John Cianciolo</h3>
          <p>March 2021</p>
          <Link className={styles.btn} to="/projects">My Projects</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
      </section>
    </Layout>
  );
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`