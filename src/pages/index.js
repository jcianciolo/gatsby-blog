import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Hello world!</h2>
          <h3>Created by John Cianciolo</h3>
          <p>March 2021</p>
          <Link className={styles.btn} to="/projects">My Projects</Link>
        </div>
        <img src="/wafflecolor_p.png" alt="waffle" style={{ maxWidth: '100% '}} />
      </section>
    </Layout>

  )
}
