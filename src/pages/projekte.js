import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import Layout from '../common/components/layout'
import ContentImage from '../common/components/content_image'

const ProjectPage = () => {

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
        <Layout sitetitle="Projekte" path="/projekte">
            <h1>Projekte</h1>
            <p>Über die Jahre sind so viele Projekte zusammengekommen, einige davon gleich wieder verschwunden, einige haben ihren Dienst getan. Auf dieser Seite will ich einen kleinen Einblick über Seitenprojekte geben, die es immer noch gibt. Die Seite erhebt keinen Anspruch auf Vollständigkeit und wird sicher irgenwann von mir weitergeführt.</p>
            <h2>Qivi - Rechts­be­ra­tung neu ge­dacht.</h2>
            <ContentImage src={data.qivi_mobile_home.childImageSharp.fluid} description="Screenshot der Startseite" orientation="right" />
            <p>In enger Zusammenarbeit mit dem Team von Qivi entstand ein Onlineportal für Rechts­be­ra­tung. Qivi bietet individuelle Beratung zur Rechtsangelegenheiten, Überblicks- oder "Deepdive"-Schulungen an. Zudem führen sie einen informativen Blog vorrangig für Unternehmesgründer und Unternehmer mir aktuellen Themen rund um Rechtsprechung und Rechtsberatung.</p>
            <h3>Terminal</h3>
            <p>Für individuelle Anfragen bietet die Website Klienten ein "Terminal" in unterschiedlichen Bereichen. Die komplette Kommunikation, wie auch Dokumentenaustausch findet hierbei im Terminal statt.</p>
            <p>Klienten haben einen Überblick über alle gestelten Anfragen, sowie über den Bearbeitungsstatus.</p>
            <h3>Komplette Umsetzung und Design</h3>
            <p>Bis auf das Logo des Qivi-Kiwis habe ich die Seite inklusive Terminal gestaltet und umgesetzt. Die Seite und das Terminal sind komplett responsive und damit auch in vollem Funktionsumfang auf einem Smartphone bedienbar.</p>
            <ContentImage src={data.qivi_desktop_terminal_neue_anfrage.childImageSharp.fluid} description="Terminal - neue Anfrage" />
            <div className="flex-container">
                <ContentImage src={data.qivi_mobile_home_scroll.childImageSharp.fluid} description="Startseite mobile Ansicht" orientation="inline" />
                <ContentImage src={data.qivi_mobile_leistungen.childImageSharp.fluid} description="Seite: Leistungen" orientation="inline" />
                <ContentImage src={data.qivi_mobile_terminal_start.childImageSharp.fluid} description="Terminal - Einstiegsseite" orientation="inline" />
            </div>
            <a target="_blank" rel="noreferrer" href="https://www.qivi.online">Direkt zum Projekt Qivi</a>
            <div className="clear"></div>
            <h2>Konzertkarotten</h2>
            <a target="_blank" rel="noreferrer" href="https://www.konzertkarotte.rocks">Direkt zum Projekt Konzertkarotten</a>
        </Layout>
    )
}

export default ProjectPage