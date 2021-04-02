import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className="footer">
            <h2>Impressum</h2>
            <p>{data.site.siteMetadata.author}<br />Steigerwaldstr. 33<br />85049 Ingolstadt</p>
            <p><a href="mailto:oliver@schoettner.org">oliver@schoettner.rocks</a></p>
            <p>+49 170 / 8872666</p>
        </footer>
    )
}

export default Footer