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
                Metallica: file(relativePath: { eq: "passion/Metallica.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                Development: file(relativePath: { eq: "passion/code.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }

        `
    )
    const mood_pics = [
        ["ERC Ingolstadt", data.ERCIngolstadt.childImageSharp.fluid],
        ["TSV 1860 München", data.TSV1860.childImageSharp.fluid],
        ["Motorrad", data.Motorrad.childImageSharp.fluid],
        ["Metallica", data.Metallica.childImageSharp.fluid],
        ["Development", data.Development.childImageSharp.fluid],
    ]
    const randomGenerator = () => {
        var array = Array.from({length:mood_pics.length},(v,k)=>k);
        var shuffled = array.sort(function(){return 0.5 - Math.random()});
        return shuffled.slice(0,3);
    }
    const randomlist = randomGenerator()
    return (
        <div className="passion" >
            <h3>Passion</h3>
            <BackgroundImage className="passion_icon" fluid={mood_pics[randomlist[0]][1]}>
                <div>{mood_pics[randomlist[0]][0]}</div>
            </BackgroundImage>
            <BackgroundImage className="passion_icon" fluid={mood_pics[randomlist[1]][1]}>
                <div>{mood_pics[randomlist[1]][0]}</div>
            </BackgroundImage>
            <BackgroundImage className="passion_icon" fluid={mood_pics[randomlist[2]][1]}>
                <div>{mood_pics[randomlist[2]][0]}</div>
            </BackgroundImage>
        </div>
    );
}
export default Passion