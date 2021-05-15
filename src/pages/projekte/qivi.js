import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import Layout from '../../common/components/layout'
import ContentImage from '../../common/components/content_image'

const QiviPage = () => {

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
        <Layout sitetitle="Projekt Qivi" path="/projekte/qivi" parent="Projekte">
            <h1>Qivi - Rechts­be­ra­tung neu ge­dacht.</h1>
            <ContentImage src={data.qivi_mobile_home.childImageSharp.fluid} description="Screenshot der Startseite" orientation="right" />
            <p>In enger Zusammenarbeit mit dem Team von Qivi entstand ein Onlineportal für Rechts­be­ra­tung. Qivi bietet individuelle Beratung zur Rechtsangelegenheiten, Überblicks- oder "Deepdive"-Schulungen an. Zudem führen sie einen informativen Blog vorrangig für Unternehmesgründer und Unternehmer mir aktuellen Themen rund um Rechtsprechung und Rechtsberatung.</p>
            <h2>Terminal</h2>
            <p>Für individuelle Anfragen aus unterschiedlichen Bereichen bietet die Website Klienten ein "Terminal". Die komplette Kommunikation, wie auch Dokumentenaustausch findet hier statt.</p>
            <p>Klienten haben einen Überblick über alle gestellten Anfragen, sowie über den Bearbeitungsstatus, können neue Anfragen an Qivi richten oder direkt mit dem bearbeitenden Anwalt sich zur Sache austauschen.</p>
            <h2>Komplette Umsetzung und Design</h2>
            <p>Bis auf das Logo des Qivi-Kiwis habe ich die Seite inklusive Terminal gestaltet und umgesetzt.</p>
            <ContentImage src={data.qivi_desktop_terminal_neue_anfrage.childImageSharp.fluid} description="Terminal - neue Anfrage" />
            <h2>Mobile Ansichten</h2>
            <p>Die Seite und das Terminal sind komplett responsiv und damit auch in vollem Funktionsumfang auf einem Smartphone bedienbar. Anfragen können mobil neu gestellt, Tickets bearbeitet und Daten geändert werden. Alles, wie am Rechner.</p>
            <p>Zu erwähnen bleibt noch, dass das Team von Qivi sich von einer alternativen Umsetzung des Menubuttons überzeugen lies. So ist es schon länger meine gelebte Praxis, den Menübutton in der mobilen Ansicht nach unter zu verlegen. Smartphones werden immer größer und der Daumen ist zu kurz, da erschien es mir nur logisch, den Button - gut erreichbar - nach unten zu setzen.</p>
            <div className="flex-container">
                <ContentImage src={data.qivi_mobile_home_scroll.childImageSharp.fluid} description="Startseite mobile Ansicht" orientation="inline" />
                <ContentImage src={data.qivi_mobile_leistungen.childImageSharp.fluid} description="Seite: Leistungen" orientation="inline" />
                <ContentImage src={data.qivi_mobile_terminal_start.childImageSharp.fluid} description="Terminal - Einstiegsseite" orientation="inline" />
            </div>
            <a target="_blank" rel="noreferrer" href="https://www.qivi.online">Direkt zum Projekt Qivi</a>
            <div className="clear"></div>
        </Layout>
    )
}

export default QiviPage