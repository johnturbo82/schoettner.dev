import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Mail from '../assets/images/social_icons/mail.svg'
import Phone from '../assets/images/social_icons/phone.svg'
import SocialIcons from './SocialIcons'

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
                <p><a href={data.site.siteMetadata.mailto}><img src={Mail.toString()} className="inline-image" alt="Mail" />{data.site.siteMetadata.email}</a></p>
                <p><a href={data.site.siteMetadata.mobileto}><img src={Phone.toString()} className="inline-image" alt="Phone" />{data.site.siteMetadata.mobile}</a></p>
                <SocialIcons />
            </div>
        </footer>
    )
}

export default Footer