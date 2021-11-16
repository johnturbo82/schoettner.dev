import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import Layout from '../../common/components/layout'
import ContentImage from '../../common/components/content_image'

const Schoettner_devPage = () => {

    const data = useStaticQuery(
        graphql`
            query {
                qivi_desktop_terminal_neue_anfrage: file(relativePath: { eq: "content/qivi_desktop_terminal_neue_anfrage.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                qivi_mobile_home: file(relativePath: { eq: "content/qivi_mobile_home.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                qivi_mobile_leistungen: file(relativePath: { eq: "content/qivi_mobile_leistungen.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                qivi_mobile_home_scroll: file(relativePath: { eq: "content/qivi_mobile_home_scroll.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                qivi_mobile_terminal_start: file(relativePath: { eq: "content/qivi_mobile_terminal_start.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
    
        `
    )

    return (
        <Layout sitetitle="Projekt schoettner.dev" path="/projekte/schoettner.dev" parent="Projekte">
            <h1>Work in Progress</h1>
        </Layout>
    )
}

export default Schoettner_devPage