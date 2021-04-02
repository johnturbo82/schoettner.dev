import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

const Instagram = () => {
    const insta = useStaticQuery(graphql`
        query {
            allInstaNode(limit: 8, sort: {fields:timestamp, order: DESC}) {
                edges {
                    node {
                        id
                        caption
                        likes
                        localFile {
                            childImageSharp {
                                fixed(
                                    width: 600, 
                                    height: 600
                                    ) {
                                    ...GatsbyImageSharpFixed_withWebp
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
            {insta.allInstaNode.edges.map((edge) => {
                return (
                    <div key={edge.node.id} className="insta-feed-post">
                        <a href={`https://www.instagram.com/p/${edge.node.id}`} title={edge.node.caption} target="_blank" rel="noreferrer">
                            <Img
                                className="insta-image"
                                alt={edge.node.caption}
                                fixed={edge.node.localFile.childImageSharp.fixed}
                                fadeIn={true}
                            />
                            <div className="overlay">
                                {edge.node.likes}&nbsp;&#10084;
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default Instagram