import React from 'react'
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from 'gatsby'

const SiteMeta = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    lang
                }
            }
        }
    `)

    return(
        <Helmet htmlAttributes={{
            lang: data.site.siteMetadata.lang,
        }}>
            <meta charSet="utf-8" />
            <title>{props.sitetitle} | {data.site.siteMetadata.title}</title>
        </Helmet>
    )
}

export default SiteMeta