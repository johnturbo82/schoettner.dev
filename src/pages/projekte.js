import React from 'react'

import Layout from '../common/components/layout'

const ProjectPage = () => {
    return (
        <Layout sitetitle="Projekte" path="/projekte">
            <h1>Projekte</h1>
            <p>Über die Jahre sind so viele Projekte zusammengekommen, einige davon gleich wieder verschwunden, einige haben ihren Dienst getan. Auf dieser Seite will ich einen kleinen Einblick über Seitenprojekte geben, die es immer noch gibt.</p>
            <h2>Qivi - Rechts­be­ra­tung neu ge­dacht.</h2>
            <a target="_blank" rel="noreferrer" href="https://www.qivi.online">Direkt zum Projekt Qivi</a>
            <h2>Konzertkarotten</h2>
            <a target="_blank" rel="noreferrer" href="https://www.konzertkarotte.rocks">Direkt zum Projekt Konzertkarotten</a>
        </Layout>
    )
}

export default ProjectPage