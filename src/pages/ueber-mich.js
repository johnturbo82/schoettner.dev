import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

import Layout from '../common/components/layout'

const AboutPage = () => {
    return (
        <Layout sitetitle="Über mich" path="/ueber-mich">
            <h1>Über mich</h1>
            <p>Wie Dir vielleicht aufgefallen ist, gibt es für die Website drei Themes, die alle unter unterschiedlichen Domains erreichbar sind. Der Grund dafür ich einfach: Ich konnte mich nicht entscheiden, welches Thema ich meiner Website zugrunde legen will.</p>
            <p>So ist auch die "Über mich"-Seite in drei Teilbereiche unterteilt:</p>
            <ul>
                <li><button onClick={() => scrollTo('#entwicklung')}>Entwicklung</button></li>
                <li><button onClick={() => scrollTo('#motorradfahren')}>Motorradfahren</button></li>
                <li><button onClick={() => scrollTo('#musik')}>Musik und Konzerte</button></li>
            </ul>
            <p>Über das Menü kannst Du unter "Themes" das passende Template auswählen, wenn Du Lust hast. Dann gibt es noch <a href="https://pure.schoettner.dev">pure.schoettner.dev</a>, einfach nur deshalb um auf grafische Gestaltung zu verzichten und zu testen, wie schnell dieses <em>Framework</em> wirklich sein kann.</p>
            <h2 id="entwicklung">Entwicklung</h2>
            <p>Dass doch einige Jahre ins Land gegangen sind bemerkt man spätestens, wenn man einen Lebenslauf schreibt. So kann ich in Summe auf über 20 Jahre Entwicklung zurückblicken. Anfangs sicher nur Websites und das meiste war da auch ehrliches <em>HTML</em> mit etwas <em>CSS</em>.</p>
            <h2 id="motorradfahren">Motorradfahren</h2>
            <h2 id="musik">Musik und Konzerte</h2>
            <a href="https://www.konzertkarotten.de">Konzertkarotten</a>
            <p></p>
        </Layout>
    )
}

export default AboutPage