import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

const ProjectDetails = ({ data }) => {
    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter
    console.log(featuredImg.childImageSharp.gatsbyImageData)
    return (
        <Layout>
            <div className={styles.details}>
                <h2>{ title }</h2>
                <h3>{ stack }</h3>
                <div className={styles.featured}>
                    <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt="featured image" />
                </div>
                <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>

    )
}

export default ProjectDetails

export const query = graphql`
    query ProjectDetails($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            stack
            slug
            title
            featuredImg {
            childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
            }
            }
        }
        }
    }
`