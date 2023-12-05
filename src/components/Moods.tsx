import React from "react";
import { graphql, useStaticQuery } from "gatsby"

type MoodsProps = {
    path: string;
}

const Moods = (props: MoodsProps) => {
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
            <a href={"https://schoettner.dev" + props.path} className="mood" title="schoettner.dev" style={{ backgroundImage: `url(${data.schoettner.childImageSharp.gatsbyImageData.images.fallback.src})` }}>
                <div>Software Developer</div>
            </a>
            <a href={"https://johnturbo.com" + props.path} className="mood" title="schoettner.dev" style={{ backgroundImage: `url(${data.johnturbo.childImageSharp.gatsbyImageData.images.fallback.src})` }}>
                <div>Stars & Stripes</div>
            </a>
            <a href={"https://schoettner.rocks" + props.path} className="mood" title="schoettner.dev" style={{ backgroundImage: `url(${data.jt1.childImageSharp.gatsbyImageData.images.fallback.src})` }}>
                <div>Rock n' Roll</div>
            </a>
            <a href={"https://schoettner.org" + props.path} className="mood" title="schoettner.dev" style={{ backgroundImage: `url(${data.code.childImageSharp.gatsbyImageData.images.fallback.src})` }}>
                <div>Nerdy Feelings</div>
            </a>
        </div>
    );
}
export default Moods