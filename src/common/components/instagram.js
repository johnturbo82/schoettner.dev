import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

const Instagram = () => {
    const insta = useStaticQuery(graphql`
        query {
            allInstagramContent(limit: 9, sort: {fields:timestamp, order: DESC}) {
                edges {
                    node {
                        id
                        caption
                        permalink
                        localImage {
                            childImageSharp {
                                fluid(quality: 90, maxWidth: 400) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
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
                        <a href={edge.node.permalink} title={edge.node.caption} target="_blank" rel="noreferrer">
                            <Img
                                className="insta-image"
                                fluid={edge.node.localImage.childImageSharp.fluid}
                                objectFit="cover"
                                objectPosition="50% 50%"
                                alt=""
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