import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import Layout from '../common/components/layout'
import ContentImage from '../common/components/content_image'

const ProjectPage = () => {

    const data = useStaticQuery(
        graphql`{
  qivi: file(relativePath: {eq: "content/qivi_preview.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
  konzertkarotten: file(relativePath: {eq: "content/konzertkarotten_preview.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
  schoettner_dev: file(relativePath: {eq: "content/schoettner_dev_preview.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
}
`
    )

    return (
        <Layout sitetitle="Projekte" path="/projekte">
            <h1>Projekte</h1>
            <p>Über die Jahre sind so viele Projekte zusammengekommen, einige davon gleich wieder verschwunden, einige haben ihren Dienst getan. Auf dieser Seite will ich einen kleinen Einblick über Seitenprojekte geben, die es immer noch gibt. Die Seite erhebt keinen Anspruch auf Vollständigkeit und wird sicher irgenwann von mir weitergeführt.</p>
            <p>Auch findet sich eine Beschreibung der Intention dieser Website und ihrer Unterseiten inklusive den GitHub-Projekten.</p>
            <div className="flex-container">
                <ContentImage src={data.schoettner_dev.childImageSharp.gatsbyImageData} description="Persönliche Website" orientation="inline" link="/projekte/schoettner.dev" />
                <ContentImage src={data.qivi.childImageSharp.gatsbyImageData} description="Qivi Rechtsanwälte" orientation="inline" link="/projekte/qivi" />
                <ContentImage src={data.konzertkarotten.childImageSharp.gatsbyImageData} description="Konzertkarotten" orientation="inline" link="/projekte/konzertkarotten" />
            </div>
        </Layout>
    );
}

export default ProjectPage