import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Facebook from '../../images/social_icons/facebook.svg'
import Github from '../../images/social_icons/github.svg'
import Instagram from '../../images/social_icons/instagram.svg'
import LinkedIn from '../../images/social_icons/linkedin.svg'
import Twitter from '../../images/social_icons/twitter.svg'

const SocialIcons = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteGithubUrl
                }
            }
        }
    `)

    return (
        <div className="social-icons">
            <a href={data.site.siteMetadata.siteGithubUrl} title="Github" className="github">
                <img src={Github} alt="Github" title="Github" />
            </a>
            <a href="https://www.linkedin.com/in/oliver-schoettner/" title="LinkedIn" className="linkedin">
                <img src={LinkedIn} alt="LinkedIn" title="LinkedIn" />
            </a>
            <a href="https://twitter.com/johnturbo82" title="Twitter" className="twitter">
                <img src={Twitter} alt="Twitter" title="Twitter" />
            </a>
            <a href="https://www.instagram.com/johnturbo82/" title="Instagram" className="instagram">
                <img src={Instagram} alt="Instagram" title="Instagram" />
            </a>
            <a href="https://www.facebook.com/johnturbo82/" title="Facebook" className="facebook">
                <img src={Facebook} alt="Facebook" title="Facebook" />
            </a>
        </div>
    )
}

export default SocialIcons