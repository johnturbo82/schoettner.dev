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
                Daelim: file(relativePath: { eq: "passion/Daelim.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                CBR600: file(relativePath: { eq: "passion/CBR600.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                CBF600: file(relativePath: { eq: "passion/CBF600.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                FortyEight: file(relativePath: { eq: "passion/FortyEight.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                FazerS2: file(relativePath: { eq: "passion/FazerS2.jpg" }) {
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
                IslayWhiskey: file(relativePath: { eq: "passion/islaywhiskey.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                LarsUlrich: file(relativePath: { eq: "passion/lars.jpg" }) {
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
        { 
            title: "ERC Ingolstadt",
            position: "bottom",
            subtitle: "Anno 2014",
            image: data.ERCIngolstadt.childImageSharp.fluid
        },
        { 
            title: "TSV 1860 München",
            position: "top",
            subtitle: null,
            image: data.TSV1860.childImageSharp.fluid
        },
        { 
            title: "Daelim VT 125",
            position: "top",
            subtitle: "Anno 1999",
            image: data.Daelim.childImageSharp.fluid
        },
        { 
            title: "Forty Eight",
            position: "bottom",
            subtitle: "Anno 2018",
            image: data.FortyEight.childImageSharp.fluid
        },
        { 
            title: "Yamaha Fazer S2",
            position: "top",
            subtitle: null,
            image: data.FazerS2.childImageSharp.fluid
        },
        { 
            title: "CBF 600",
            position: "top",
            subtitle: "Anno 2008",
            image: data.CBF600.childImageSharp.fluid
        },
        { 
            title: "CBR 600 F",
            position: "bottom",
            subtitle: "Anno 2002",
            image: data.CBR600.childImageSharp.fluid
        },
        { 
            title: "Metallica",
            position: "top",
            subtitle: "Anno 2019",
            image: data.Metallica.childImageSharp.fluid
        },
        { 
            title: "Development",
            position: "top",
            subtitle: null,
            image: data.Development.childImageSharp.fluid
        },
        { 
            title: "Islay Whiskey",
            position: "top",
            subtitle: null,
            image: data.IslayWhiskey.childImageSharp.fluid
        },
        { 
            title: "Lars Ulrich",
            position: "bottom",
            subtitle: "Anno 2019",
            image: data.LarsUlrich.childImageSharp.fluid
        },
    ]
    const randomGenerator = () => {
        var array = Array.from({ length: mood_pics.length }, (v, k) => k);
        var shuffled = array.sort(function () { return 0.5 - Math.random() });
        return shuffled.slice(0, 3);
    }
    const randomList = randomGenerator()
    const firstImage = mood_pics[randomList[0]];
    const secondImage = mood_pics[randomList[1]];
    const thirdImage = mood_pics[randomList[2]];
    return (
        <div className="passion" >
            <h3>Passion</h3>
            <BackgroundImage className="passion_icon" fluid={firstImage.image}>
                <div className={firstImage.position}>{firstImage.title}</div>
                {firstImage.subtitle &&
                    <span>{firstImage.subtitle}</span>
                }
            </BackgroundImage>
            <BackgroundImage className="passion_icon" fluid={secondImage.image}>
                <div className={secondImage.position}>{secondImage.title}</div>
                {secondImage.subtitle &&
                    <span>{secondImage.subtitle}</span>
                }
            </BackgroundImage>
            <BackgroundImage className="passion_icon" fluid={thirdImage.image}>
                <div className={thirdImage.position}>{thirdImage.title}</div>
                {thirdImage.subtitle &&
                    <span>{thirdImage.subtitle}</span>
                }
            </BackgroundImage>
        </div>
    );
}
export default Passion