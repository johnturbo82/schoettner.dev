import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll'
import { SRLWrapper } from "simple-react-lightbox";
import Img from "gatsby-image"

import Layout from '../common/components/layout'

const AboutPage = () => {const data = useStaticQuery(
    graphql`
        query {
            TSV1860: file(relativePath: { eq: "passion/1860.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            },
            TSV1860_full: file(relativePath: { eq: "passion/1860.jpg" }) {
                childImageSharp {
                    fluid(quality: 95, maxWidth: 2000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }

    `
)
    return (
        <Layout sitetitle="Über mich" path="/ueber-mich">
            <SRLWrapper>
                <a href={data.TSV1860_full.childImageSharp.fluid.srcWebp}>
                    <Img className="preview_pic" fluid={data.TSV1860.childImageSharp.fluid} alt="57, 58, 59, 60! ... und schon gibt's ein Tor." />
                </a>
                <a href={data.TSV1860_full.childImageSharp.fluid.srcWebp}>
                    <Img className="preview_pic" fluid={data.TSV1860.childImageSharp.fluid} alt="57, 58, 59, 60! ... und schon gibt's ein Tor." />
                </a>
            </SRLWrapper>
            <h1>Über mich</h1>
            <p>Wie Dir vielleicht aufgefallen ist, gibt es für die Website drei Themes, die alle unter unterschiedlichen Domains erreichbar sind. Der Grund dafür ich einfach: Ich konnte mich nicht entscheiden, welches Thema ich meiner Website zugrunde legen will.</p>
            <p>So ist auch die "Über mich"-Seite in unterschiedliche Bereichte unterteilt. Eine meiner größten Stärken ist, dass ich mich nahezu für alles interessieren oder gar begeistern kann.</p>
            <ul>
                <li><button onClick={() => scrollTo('#entwicklung')}>Entwicklung</button></li>
                <li><button onClick={() => scrollTo('#motorrad')}>Motorradfahren</button></li>
                <li><button onClick={() => scrollTo('#musik')}>Musik und Konzerte</button></li>
                <li><button onClick={() => scrollTo('#whiskey')}>Whiskey</button></li>
                <li><button onClick={() => scrollTo('#ercingolstadt')}>ERC Ingolstadt</button></li>
                <li><button onClick={() => scrollTo('#tsv1860muenchen')}>TSV 1860 München</button></li>
            </ul>
            <p>Über das Menü kannst Du unter "Themes" das passende Template auswählen, wenn Du Lust hast. Dann gibt es noch <a href="https://pure.schoettner.dev">pure.schoettner.dev</a>, einfach nur deshalb um auf grafische Gestaltung zu verzichten und zu testen, wie schnell dieses <em>Framework</em> wirklich sein kann.</p>
            <h2 name="entwicklung" id="entwicklung">Entwicklung</h2>
            <p>Dass doch einige Jahre ins Land gegangen sind bemerkt man spätestens, wenn man einen Lebenslauf schreibt. So kann ich in Summe auf über 20 Jahre Entwicklung zurückblicken. Anfangs sicher nur Websites und das meiste war da auch ehrliches <em>HTML</em> mit etwas <em>CSS</em>.</p>
            <h2 name="motorrad" id="motorrad">Motorradfahren</h2>
            <h2 name="musik" id="musik">Musik und Konzerte</h2>
            <h2 name="whiskey" id="whiskey">Whiskey</h2>
            <h2 name="ercingolstadt" id="ercingolstadt">ERC Ingolstadt</h2>
            <h2 name="tsv1860muenchen" id="tsv1860muenchen">TSV 1860 München</h2>
            <p></p>
        </Layout>
    )
}

export default AboutPage