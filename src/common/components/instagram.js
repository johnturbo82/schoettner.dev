import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

const Instagram = () => {
    const insta = useStaticQuery(graphql`
        query {
            allInstagramContent(limit: 8, sort: {fields:timestamp, order: DESC}) {
                edges {
                    node {
                        id
                        caption
                        localImage {
                            childImageSharp {
                                gatsbyImageData(layout: FIXED)
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <div className="insta-feed">
            {insta.allInstagramContent.edges.map((edge) => {
                return (
                    <div key={edge.node.id} className="insta-feed-post">
                        <a href={`https://www.instagram.com/p/${edge.node.id}`} title={edge.node.caption} target="_blank" rel="noreferrer">
                            <GatsbyImage
                                className="insta-image"
                                alt="Instagram Pic"
                                image={edge.node.localImage.childImageSharp.gatsbyImageData}
                            />
                            <div className="overlay">
                                {edge.node.caption}
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default Instagram