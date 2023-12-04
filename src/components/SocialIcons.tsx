import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Facebook from '../assets/images/social_icons/facebook.svg'
import Github from '../assets/images/social_icons/github.svg'
import Instagram from '../assets/images/social_icons/instagram.svg'
import LinkedIn from '../assets/images/social_icons/linkedin.svg'
import X from '../assets/images/social_icons/x.svg'

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
                <img src={Github.toString()} alt="Github" title="Github" />
            </a>
            <a href="https://www.linkedin.com/in/oliver-schoettner/" title="LinkedIn" className="linkedin">
                <img src={LinkedIn.toString()} alt="LinkedIn" title="LinkedIn" />
            </a>
            <a href="https://x.com/johnturbo82" title="X" className="x">
                <img src={X.toString()} alt="X" title="X" />
            </a>
            <a href="https://www.instagram.com/johnturbo82/" title="Instagram" className="instagram">
                <img src={Instagram.toString()} alt="Instagram" title="Instagram" />
            </a>
            <a href="https://www.facebook.com/johnturbo82/" title="Facebook" className="facebook">
                <img src={Facebook.toString()} alt="Facebook" title="Facebook" />
            </a>
        </div>
    )
}

export default SocialIcons