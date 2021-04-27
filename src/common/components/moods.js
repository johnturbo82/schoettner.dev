import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const Moods = (props) => {
    const data = useStaticQuery(
        graphql`
            query {
                schoettner: file(relativePath: { eq: "moods/schoettner.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                jt1: file(relativePath: { eq: "moods/jt1.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                johnturbo: file(relativePath: { eq: "moods/johnturbo.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                code: file(relativePath: { eq: "moods/code.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }

        `
    )
    return (
        <div className="sidebar_mood" >
            <h3>Theme</h3>
            <a href={"https://schoettner.dev" + props.path} alt="schoettner.dev">
                <BackgroundImage className="mood" fluid={data.schoettner.childImageSharp.fluid}>
                    <div>Software Developer</div>
                </BackgroundImage>
            </a>
            <a href={"https://johnturbo.com" + props.path} alt="johnturbo.com">
                <BackgroundImage className="mood" fluid={data.johnturbo.childImageSharp.fluid}>
                    <div>Stars & Stripes</div>
                </BackgroundImage>
            </a>
            <a href={"https://schoettner.rocks" + props.path} alt="schoettner.rocks">
                <BackgroundImage className="mood" fluid={data.jt1.childImageSharp.fluid}>
                    <div>Rock n' Roll</div>
                </BackgroundImage>
            </a>
            <a href={"https://pure.schoettner.dev" + props.path} alt="pure.schoettner.dev">
                <BackgroundImage className="mood" fluid={data.code.childImageSharp.fluid}>
                    <div>Nerdy Feelings</div>
                </BackgroundImage>
            </a>
        </div>
    );
}
export default Moods