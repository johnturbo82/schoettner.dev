import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Content from './content'
import backgroundImage from "../../images/title.jpg"

const Header = () => {
	const data = useStaticQuery(graphql`{
  			site: site {
    			siteMetadata {
      				title
    			}
  			}
		}
	`)
    return (
        <header>
            <div className="header" style={{backgroundImage: `url(${backgroundImage})`}}>
                <Content>
                    <h1 className="title">
                        <Link to="/">
                            {data.site.siteMetadata.title}
                        </Link>
                    </h1>
                </Content>
            </div>
        </header>
    );
}

export default Header