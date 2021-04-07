import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    street
                    postal_code
                    city
                    email
                    mailto
                    mobile
                    mobileto
                }
            }
        }
    `)

    return (
        <footer className="footer">
            <h2>Impressum</h2>
            <p>{data.site.siteMetadata.author}<br />{data.site.siteMetadata.street}<br />{data.site.siteMetadata.postal_code} {data.site.siteMetadata.city}</p>
            <p><a href={data.site.siteMetadata.mailto}>{data.site.siteMetadata.email}</a></p>
            <p><a href={data.site.siteMetadata.mobileto}>{data.site.siteMetadata.mobile}</a></p>
        </footer>
    )
}

export default Footer