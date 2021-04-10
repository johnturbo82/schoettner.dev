import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Content from './content'
import BackgroundImage from 'gatsby-background-image'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            background: file(relativePath: { eq: "title.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 2000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    return (
        <header>
            <BackgroundImage className="header" fluid={data.background.childImageSharp.fluid}>
                <Content>
                    <h1 className="title">
                        <Link to="/">
                            {data.site.siteMetadata.title}
                        </Link>
                    </h1>
                </Content>
            </BackgroundImage>
        </header>
    )
}

export default Header