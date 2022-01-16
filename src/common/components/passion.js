import React, {useEffect, useState} from "react";
import { graphql, useStaticQuery } from "gatsby"
import PassionImage from './passion_image'

const Passion = () => {
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
}
`
    )

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, [])

    if (!hasMounted) {
        return null;
    }

    const mood_pics = [
        { 
            title: "ERC Ingolstadt",
            position: "bottom",
            subtitle: "Anno 2014",
            target: "ercingolstadt",
            src: data.ERCIngolstadt.childImageSharp.gatsbyImageData
        },
        { 
            title: "TSV 1860 München",
            position: "top",
            subtitle: null,
            target: "tsv1860muenchen",
            src: data.TSV1860.childImageSharp.gatsbyImageData
        },
        { 
            title: "Daelim VT 125",
            position: "bottom",
            subtitle: "Anno 1999",
            target: "motorrad",
            src: data.Daelim.childImageSharp.gatsbyImageData
        },
        { 
            title: "Forty Eight",
            position: "bottom",
            subtitle: "Anno 2018",
            target: "motorrad",
            src: data.FortyEight.childImageSharp.gatsbyImageData
        },
        { 
            title: "Low Rider S",
            position: "bottom",
            subtitle: "Anno 2021",
            target: "motorrad",
            src: data.LowRiderS.childImageSharp.gatsbyImageData
        },
        { 
            title: "Yamaha Fazer S2",
            position: "top",
            subtitle: null,
            target: "motorrad",
            src: data.FazerS2.childImageSharp.gatsbyImageData
        },
        { 
            title: "CBF 600",
            position: "top",
            subtitle: "Anno 2008",
            target: "motorrad",
            src: data.CBF600.childImageSharp.gatsbyImageData
        },
        { 
            title: "CBR 600 F",
            position: "bottom",
            subtitle: "Anno 2002",
            target: "motorrad",
            src: data.CBR600.childImageSharp.gatsbyImageData
        },
        { 
            title: "Metallica",
            position: "top",
            subtitle: "Anno 2019",
            target: "musik",
            src: data.Metallica.childImageSharp.gatsbyImageData
        },
        { 
            title: "Development",
            position: "top",
            subtitle: null,
            target: "entwicklung",
            src: data.Development.childImageSharp.gatsbyImageData
        },
        { 
            title: "Islay Whiskey",
            position: "top",
            subtitle: null,
            target: "whiskey",
            src: data.IslayWhiskey.childImageSharp.gatsbyImageData
        },
        { 
            title: "Lars Ulrich",
            position: "bottom",
            subtitle: "Anno 2019",
            target: "musik",
            src: data.LarsUlrich.childImageSharp.gatsbyImageData
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