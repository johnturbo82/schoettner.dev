import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const Moods = (props) => {
    const data = useStaticQuery(
        graphql`{
  schoettner: file(relativePath: {eq: "moods/schoettner.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
    }
  }
  jt1: file(relativePath: {eq: "moods/jt1.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
    }
  }
  johnturbo: file(relativePath: {eq: "moods/johnturbo.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
    }
  }
  code: file(relativePath: {eq: "moods/code.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
    }
  }
}
`
    )
    return (
        <div className="sidebar_mood" >
            <h3>Theme</h3>
            <a href={"https://schoettner.dev" + props.path} alt="schoettner.dev">
                <BackgroundImage className="mood" fluid={data.schoettner.childImageSharp.gatsbyImageData}>
                    <div>Software Developer</div>
                </BackgroundImage>
            </a>
            <a href={"https://johnturbo.com" + props.path} alt="johnturbo.com">
                <BackgroundImage className="mood" fluid={data.johnturbo.childImageSharp.gatsbyImageData}>
                    <div>Stars & Stripes</div>
                </BackgroundImage>
            </a>
            <a href={"https://schoettner.rocks" + props.path} alt="schoettner.rocks">
                <BackgroundImage className="mood" fluid={data.jt1.childImageSharp.gatsbyImageData}>
                    <div>Rock n' Roll</div>
                </BackgroundImage>
            </a>
            <a href={"https://pure.schoettner.dev" + props.path} alt="pure.schoettner.dev">
                <BackgroundImage className="mood" fluid={data.code.childImageSharp.gatsbyImageData}>
                    <div>Nerdy Feelings</div>
                </BackgroundImage>
            </a>
        </div>
    );
}
export default Moods