import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import TypeAnimation from 'react-type-animation';

const Header = () => {
    const data = useStaticQuery(graphql`{
  			site: site {
    			siteMetadata {
      				title
    			}
  			}
            title: file(relativePath: {eq: "title.jpg"}) {
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
                    <h1 className='site-title'>
                        <Link to='/'>
                            {data.site.siteMetadata.title}
                        </Link>
                    </h1>
                    <div className='introduction'>
                        <p>Oliver Schöttner</p>
                        <TypeAnimation
                            cursor={true}
                            sequence={['Softwareentwickler', 4000, 'Motorradfahrer', 4000, 'Musikenthusiast', 4000, 'Sechzger', 4000]}
                            wrapper="p"
                            repeat={Infinity}
                        />
                    </div>
                </div>
                <GatsbyImage
                    className='header-image'
                    image={data.title.childImageSharp.gatsbyImageData}
                    alt='Titelbild'
                />
            </div>
        </header>
    );
}

export default Header