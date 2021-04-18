import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import PassionImage from './passion_image'

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
            src: data.ERCIngolstadt.childImageSharp.fluid
        },
        { 
            title: "TSV 1860 München",
            position: "top",
            subtitle: null,
            src: data.TSV1860.childImageSharp.fluid
        },
        { 
            title: "Daelim VT 125",
            position: "bottom",
            subtitle: "Anno 1999",
            src: data.Daelim.childImageSharp.fluid
        },
        { 
            title: "Forty Eight",
            position: "bottom",
            subtitle: "Anno 2018",
            src: data.FortyEight.childImageSharp.fluid
        },
        { 
            title: "Yamaha Fazer S2",
            position: "top",
            subtitle: null,
            src: data.FazerS2.childImageSharp.fluid
        },
        { 
            title: "CBF 600",
            position: "top",
            subtitle: "Anno 2008",
            src: data.CBF600.childImageSharp.fluid
        },
        { 
            title: "CBR 600 F",
            position: "bottom",
            subtitle: "Anno 2002",
            src: data.CBR600.childImageSharp.fluid
        },
        { 
            title: "Metallica",
            position: "top",
            subtitle: "Anno 2019",
            src: data.Metallica.childImageSharp.fluid
        },
        { 
            title: "Development",
            position: "top",
            subtitle: null,
            src: data.Development.childImageSharp.fluid
        },
        { 
            title: "Islay Whiskey",
            position: "top",
            subtitle: null,
            src: data.IslayWhiskey.childImageSharp.fluid
        },
        { 
            title: "Lars Ulrich",
            position: "bottom",
            subtitle: "Anno 2019",
            src: data.LarsUlrich.childImageSharp.fluid
        },
    ]
    const randomGenerator = () => {
        var array = Array.from({ length: mood_pics.length }, (v, k) => k);
        var shuffled = array.sort(function () { return 0.5 - Math.random() });
        return shuffled.slice(0, 3);
    }
    const randomList = randomGenerator()
    var firstImage = mood_pics[randomList[0]];
    var secondImage = mood_pics[randomList[1]];
    var thirdImage = mood_pics[randomList[2]];
    return (
        <div className="passion" >
            <h3>Passion</h3>
            <PassionImage image={firstImage}/>
            <PassionImage image={secondImage}/>
            <PassionImage image={thirdImage}/>
        </div>
    );
}
export default Passion