import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Content from './content'
import background from "../../images/title.jpg"

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className="header" style={{ backgroundImage: `url(${background})` }}>
            <Content>
                <h1 className="title">
                    <Link to="/">
                        {data.site.siteMetadata.title} 
                    </Link>
                </h1>
            </Content>
        </header>
    )
}

export default Header