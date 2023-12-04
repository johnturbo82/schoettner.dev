import React, { useEffect, useRef, useState } from "react";
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby";

const SlideShow = () => {

    const data = useStaticQuery(
        graphql`{
            TSV1860: file(relativePath: {eq: "passion/1860.jpg"}) {
                childImageSharp {
                gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
                }
            }
            Daelim: file(relativePath: {eq: "passion/Daelim.jpg"}) {
                childImageSharp {
                gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
                }
            }
            CBR600: file(relativePath: {eq: "passion/CBR600.jpg"}) {
                childImageSharp {
                gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
                }
            }
            CBF600: file(relativePath: {eq: "passion/CBF600.jpg"}) {
                childImageSharp {
                gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
                }
            }
            FortyEight: file(relativePath: {eq: "passion/FortyEight.jpg"}) {
                childImageSharp {
                gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
                }
            }
            LowRiderS: file(relativePath: {eq: "passion/LowRiderS.jpg"}) {
                childImageSharp {
                gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
                }
            }
            FazerS2: file(relativePath: {eq: "passion/FazerS2.jpg"}) {
                childImageSharp {
                gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
                }
            }
            ERCIngolstadt: file(relativePath: {eq: "passion/ERCIngolstadt.jpg"}) {
                childImageSharp {
                gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
                }
            }
            Metallica: file(relativePath: {eq: "passion/Metallica.jpg"}) {
                childImageSharp {
                gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
                }
            }
            Development: file(relativePath: {eq: "passion/code.png"}) {
                childImageSharp {
                gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
                }
            }
            IslayWhiskey: file(relativePath: {eq: "passion/islaywhiskey.jpg"}) {
                childImageSharp {
                gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
                }
            }
            LarsUlrich: file(relativePath: {eq: "passion/lars.jpg"}) {
                childImageSharp {
                gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
                }
            }
            RoadGlide: file(relativePath: {eq: "passion/Road_Glide.jpeg"}) {
                childImageSharp {
                gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
                }
            }
        }`
    )

    const passion_sets = [
        [
            {
                title: "Road Glide Special",
                position: "top",
                subtitle: "2023",
                target: "motorrad",
                src: data.RoadGlide.childImageSharp.gatsbyImageData.images.fallback.src
            },
            {
                title: "ERC Ingolstadt",
                position: "bottom",
                subtitle: "2014",
                target: "ercingolstadt",
                src: data.ERCIngolstadt.childImageSharp.gatsbyImageData.images.fallback.src
            },
            {
                title: "TSV 1860 München",
                position: "top",
                subtitle: null,
                target: "tsv1860muenchen",
                src: data.TSV1860.childImageSharp.gatsbyImageData.images.fallback.src
            },
        ],
        [
            {
                title: "Forty Eight",
                position: "bottom",
                subtitle: "2018",
                target: "motorrad",
                src: data.FortyEight.childImageSharp.gatsbyImageData.images.fallback.src
            },
            {
                title: "Low Rider S",
                position: "bottom",
                subtitle: "2021",
                target: "motorrad",
                src: data.LowRiderS.childImageSharp.gatsbyImageData.images.fallback.src
            },
            {
                title: "Yamaha Fazer S2",
                position: "top",
                subtitle: null,
                target: "motorrad",
                src: data.FazerS2.childImageSharp.gatsbyImageData.images.fallback.src
            }
        ],
        [
            {
                title: "CBF 600",
                position: "top",
                subtitle: "2008",
                target: "motorrad",
                src: data.CBF600.childImageSharp.gatsbyImageData.images.fallback.src
            },
            {
                title: "CBR 600 F",
                position: "bottom",
                subtitle: "2002",
                target: "motorrad",
                src: data.CBR600.childImageSharp.gatsbyImageData.images.fallback.src
            },
            {
                title: "Metallica",
                position: "top",
                subtitle: "2019",
                target: "musik",
                src: data.Metallica.childImageSharp.gatsbyImageData.images.fallback.src
            }
        ],
        [
            {
                title: "Development",
                position: "top",
                subtitle: null,
                target: "entwicklung",
                src: data.Development.childImageSharp.gatsbyImageData.images.fallback.src
            },
            {
                title: "Islay Whiskey",
                position: "top",
                subtitle: null,
                target: "whiskey",
                src: data.IslayWhiskey.childImageSharp.gatsbyImageData.images.fallback.src
            },
            {
                title: "Lars Ulrich",
                position: "bottom",
                subtitle: "2019",
                target: "musik",
                src: data.LarsUlrich.childImageSharp.gatsbyImageData.images.fallback.src
            }
        ],
        // [
        //     {
        //         title: "Daelim VT 125",
        //         position: "bottom",
        //         subtitle: "1999",
        //         target: "motorrad",
        //         src: data.Daelim.childImageSharp.gatsbyImageData.images.fallback.src
        //     }
        // ]
    ]

    const delay = 5000;

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(undefined);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === passion_sets.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow-container">
            <div className="slideshow">
                <h3>Passion</h3>
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {passion_sets.map((set, index) => (
                        <div className="slide" key={index}>
                            <Link to={"/ueber-mich#" + set[0].target}>
                                <div className="slideshow-icon" style={{ backgroundImage: `url(${set[0].src})` }}>
                                    <div className={set[0].position}>{set[0].title}</div>
                                    {set[0].subtitle &&
                                        <span>{set[0].subtitle}</span>
                                    }
                                </div>
                            </Link>
                            <Link to={"/ueber-mich#" + set[1].target}>
                                <div className="slideshow-icon" style={{ backgroundImage: `url(${set[1].src})` }}>
                                    <div className={set[1].position}>{set[1].title}</div>
                                    {set[1].subtitle &&
                                        <span>{set[1].subtitle}</span>
                                    }
                                </div>
                            </Link>
                            <Link to={"/ueber-mich#" + set[2].target}>
                                <div className="slideshow-icon" style={{ backgroundImage: `url(${set[2].src})` }}>
                                    <div className={set[2].position}>{set[2].title}</div>
                                    {set[2].subtitle &&
                                        <span>{set[2].subtitle}</span>
                                    }
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="slideshowDots">
                    {passion_sets.map((_, idx) => (
                        <div
                            key={idx}
                            className={`slideshowDot${index === idx ? " active" : ""}`}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlideShow;