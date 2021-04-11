import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const Passion = () => {
    const data = useStaticQuery(
        graphql`
            query {
                TSV1860: file(relativePath: { eq: "passion/1860.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                Motorrad: file(relativePath: { eq: "passion/Motorrad.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                ERCIngolstadt: file(relativePath: { eq: "passion/ERCIngolstadt.jpg" }) {
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
        <div className="passion" >
            <h3>Passion</h3>
            <BackgroundImage className="passion_icon" fluid={data.Motorrad.childImageSharp.fluid}>
                <div>Motorrad</div>
            </BackgroundImage>
            <BackgroundImage className="passion_icon" fluid={data.TSV1860.childImageSharp.fluid}>
                <div>TSV 1860 München</div>
            </BackgroundImage>
            <BackgroundImage className="passion_icon" fluid={data.ERCIngolstadt.childImageSharp.fluid}>
                <div>ERC Ingolstadt</div>
            </BackgroundImage>
        </div>
    );
}
export default Passion