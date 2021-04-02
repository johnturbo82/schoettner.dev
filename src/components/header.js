import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

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
        <header className="header">
            <h1>
                <Link className="title" to="/">
                    {data.site.siteMetadata.title} 
                </Link>
            </h1>
        </header>
    )
}

export default Header