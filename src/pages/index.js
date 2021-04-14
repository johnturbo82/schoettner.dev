import React from 'react'

import Layout from '../common/components/layout'
import Passion from '../common/components/passion'

const IndexPage = () => {
    return (
        <Layout sitetitle="Startseite" path="/">
            <div className="left right_sidebar_opposite">
                <h1>Hi, ich bin Oliver.</h1>
                <p>Ich bin Softwareentwickler aus Ingolstadt, Bayern. Am liebsten mache ich <em>Webentwicklung</em>.</p>
                <p>Ich arbeite aktuell bei <a target="_blank" rel="noreferrer" href="https://cariad.technology/">CARIAD SE</a>, dem Softwarehaus des Volkswagen Konzerns. Dort mache ich vor allem <em>Python</em>, aber auch etwas Frontend <em>React</em>.</p>
                <p>Bei meinem letzten Arbeitgeber BFFT Gesellschaft für Fahrzeugtechnik mbH, jetzt EDAG Engineering GmbH, habe ich noch viel <em>PHP </em> und <em>C#</em> gemacht. Das waren noch Zeiten...</p>
                <p>Meine Freizeit verbringe ich im Sommer gerne auf einem Motorrad oder bei Konzerten.</p>
                <p>Sollte ich zu hause auf der Couch sein, läuft Eishockey oder Fussball <em>(oder beides)</em> oder eine Netflixserie.</p>
                <p>Diese Seite gibt's nur, weil viele Neugierige die Domain meiner Email-Adresse in den Browser tippen und dann enttäuscht sind, dass es keinen Inhalt gibt. Solltest Du auch auf diesem Wege zu mir gekommen sein: <em>Hallo!</em></p>
            </div>
            <Passion />
        </Layout>
    )
}

export default IndexPage