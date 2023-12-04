import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

const InstagramFeed = () => {
    const insta = useStaticQuery(graphql`{
  allInstagramContent(limit: 12, sort: {timestamp: DESC}) {
    edges {
      node {
        id
        caption
        permalink
        localImage {
          childImageSharp {
            gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
          }
        }
      }
    }
  }
}`)
    return (
        <div className="insta-feed">
            {insta.allInstagramContent.edges.map((edge: any) => {
                return (
                    <div key={edge.node.id} className="insta-feed-post">
                        <a href={edge.node.permalink} title={edge.node.caption} target="_blank" rel="noreferrer">
                            <GatsbyImage
                                image={edge.node.localImage.childImageSharp.gatsbyImageData}
                                className="insta-image"
                                objectFit="cover"
                                objectPosition="50% 50%"
                                alt="" />
                            <div className="overlay">
                                {edge.node.caption}
                            </div>
                        </a>
                    </div>
                );
            })}
        </div>
    );
}

export default InstagramFeed