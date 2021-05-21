import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/projects.module.css'
import { GatsbyImage } from "gatsby-plugin-image";

const Projects = ({ data }) => {
    console.log(data)
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects and websites I've created:</h3>
                <div className={styles.projects}>
                    {projects.map(project => {
                        return (
                          <div className={styles.project}>
                            <Link to ={"/projects/" + project.frontmatter.slug} key={project.id}>
                                <div>
                                    <GatsbyImage className={styles.image} image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} />
                                    <h3>{project.frontmatter.title}</h3>
                                    <p>{project.frontmatter.stack}</p>
                                </div>
                            </Link>
                          </div>

                        )
                    })}
                </div>
                <p>Contact me at { contact }</p>
            </div>
        </Layout>

    )
}

export default Projects;


export const query = graphql`
query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          slug
          stack
          thumb {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
  
  
`