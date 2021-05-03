import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Facebook from '../images/social_icons/facebook.svg'
import Mail from '../images/social_icons/gmail.svg'
import LinkedIn from '../images/social_icons/linkedin.svg'
import Twitter from '../images/social_icons/twitter.svg'

import Layout from '../common/components/layout'

const ContactPage = () => {
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
        <Layout sitetitle="Kontakt" path="/kontakt">
            <h2>Kontakt</h2>
            <p>An sich ist es nicht allzuschwer mit mir Kontakt aufzunehmen. Alle hier angegebenen Möglichkeiten checke ich regelmäßig und zuverlässig. Wer mir professionell begegnen möchte, kann das gerne über LinkedIn tun, wers etwas privater möchte, nutzt eine der anderen Möglichkeiten oder E-Mail.</p>
            <div className="social_icons">
                <a href="https://www.linkedin.com/in/oliver-schoettner/" title="LinkedIn" className="linkedin">
                    <img src={LinkedIn} alt="LinkedIn" title="LinkedIn" />
                </a>
                <a href="https://twitter.com/johnturbo82" title="Twitter" className="twitter">
                    <img src={Twitter} alt="Twitter" title="Twitter" />
                </a>
                <a href="https://www.facebook.com/johnturbo82/" title="Facebook" className="facebook">
                    <img src={Facebook} alt="Facebook" title="Facebook" />
                </a>
                <a href={data.site.siteMetadata.mailto} title="Mail" className="mail">
                    <img src={Mail} alt="Mail" title="Mail" />
                </a>
            </div>
            <h3>Adresse</h3>
            <p>{data.site.siteMetadata.author}<br />{data.site.siteMetadata.street}<br />{data.site.siteMetadata.postal_code} {data.site.siteMetadata.city}</p>
            <p><a href={data.site.siteMetadata.mailto}>{data.site.siteMetadata.email}</a></p>
            <h3>Mobil</h3>
            <p><a href={data.site.siteMetadata.mobileto}>{data.site.siteMetadata.mobile}</a></p>
        </Layout>
    )
}

export default ContactPage