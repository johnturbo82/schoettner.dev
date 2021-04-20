import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from '../common/components/layout'

const ProjectPage = () => {
    const data = useStaticQuery(
        graphql`
            query {
                QiviTeam: file(relativePath: { eq: "content/qivi_home_team.png" }) {
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
        <Layout sitetitle="Projekte" path="/projekte">
            <h1>Projekte</h1>
            <p>Über die Jahre sind so viele Projekte zusammengekommen, einige davon gleich wieder verschwunden, einige haben ihren Dienst getan. Auf dieser Seite will ich einen kleinen Einblick über Seitenprojekte geben, die es immer noch gibt.</p>
            <h2>Qivi - Rechts­be­ra­tung neu ge­dacht.</h2>
            <p>In enger Zusammenarbeit entstand ein Onlineportal für Rechts­be­ra­tung. Das Team von Qivi bietet Überblicks- oder "Deepdive"-Schulungen an.</p>
            <h3>Terminal</h3>
            <p>Für individuelle Anfragen bietet die Website Klienten ein "Terminal" in unterschiedlichen Bereichen. Die komplette Kommunikation, wie auch Dokumentenaustausch findet hierbei im Terminal statt.</p>
            <p>Klienten haben einen Überblick über alle gestelten Anfragen, sowie über den Bearbeitungsstatus.</p>
            <h3>Komplette Umsetzung und Design</h3>
            <p>Bis auf das Logo des Qivi-Kiwis habe ich die Seite inklusive Terminal gestaltet und umgesetzt. Die Seite und das Terminal sind komplett responsive und damit auch in voller Breite auf einem Smartphone bedienbar.</p>
            <figure>
                <Img fluid={data.QiviTeam.childImageSharp.fluid} alt="Website Qivi Team" />
                <figcaption>Ein Screenshot der Startseite</figcaption>
            </figure>
            <a target="_blank" rel="noreferrer" href="https://www.qivi.online">Direkt zum Projekt Qivi</a>
            <h2>Konzertkarotten</h2>
            <a target="_blank" rel="noreferrer" href="https://www.konzertkarotte.rocks">Direkt zum Projekt Konzertkarotten</a>
        </Layout>
    )
}

export default ProjectPage