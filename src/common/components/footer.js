import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SocialIcons from './socialicons'
import Mail from '../../images/social_icons/mail.svg'
import Phone from '../../images/social_icons/phone.svg'

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
            <div className="stage">
                <h2>Impressum</h2>
                <p>{data.site.siteMetadata.author}<br />{data.site.siteMetadata.street}<br />{data.site.siteMetadata.postal_code} {data.site.siteMetadata.city}</p>
                <p><a href={data.site.siteMetadata.mailto}><img src={Mail} className="inline-image" alt="Mail" />{data.site.siteMetadata.email}</a></p>
                <p><a href={data.site.siteMetadata.mobileto}><img src={Phone} className="inline-image" alt="Phone" />{data.site.siteMetadata.mobile}</a></p>
                <SocialIcons />
            </div>
        </footer>
    )
}

export default Footer