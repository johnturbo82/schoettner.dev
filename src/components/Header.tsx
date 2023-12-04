import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { TypeAnimation } from 'react-type-animation';
import SocialIcons from './SocialIcons'

const Header = () => {
    const data = useStaticQuery(graphql`{
  			site: site {
    			siteMetadata {
      				title
    			}
  			}
            schoettnerDev: file(relativePath: {eq: "schoettner.dev.title.jpg"}) {
                childImageSharp {
                    gatsbyImageData(quality: 95, layout: CONSTRAINED)
                }
            }
            schoettnerRocks: file(relativePath: {eq: "schoettner.rocks.title.jpg"}) {
                childImageSharp {
                    gatsbyImageData(quality: 95, layout: CONSTRAINED)
                }
            }
		}
	`)
    return (
        <header>
            <div className='header'>
                <div className='header-title'>
                    <div className='introduction'>
                        <p>Oliver Schöttner</p>
                        <TypeAnimation
                            cursor={true}
                            sequence={['Softwareentwickler', 4000, 'Motorradfahrer', 4000, 'Musikenthusiast', 4000, 'Ingolstädter', 4000]}
                            wrapper="p"
                            repeat={Infinity}
                        />
                        <SocialIcons />
                    </div>
                </div>
                {window.location.host === "localhost:8000" &&
                    <GatsbyImage
                        className='header-image'
                        image={data.schoettnerRocks.childImageSharp.gatsbyImageData}
                        alt='Oliver Schöttner'
                    />
                }
                {window.location.host === "schoettner.dev" &&
                    <GatsbyImage
                        className='header-image'
                        image={data.schoettnerDev.childImageSharp.gatsbyImageData}
                        alt='Oliver Schöttner'
                    />
                }
                {window.location.host === "schoettner.rocks" &&
                    <GatsbyImage
                        className='header-image'
                        image={data.schoettnerRocks.childImageSharp.gatsbyImageData}
                        alt='Oliver Schöttner'
                    />
                }
            </div>
        </header>
    );
}

export default Header