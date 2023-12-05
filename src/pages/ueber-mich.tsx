import React from 'react'
import { HeadFC, graphql, useStaticQuery } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll'
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from '../components/Layout';


const AboutPage = () => {
	const data = useStaticQuery(
		graphql`{
  Daelim: file(relativePath: {eq: "passion/Daelim.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
    }
  }
  Daelim_full: file(relativePath: {eq: "passion/Daelim.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 95, layout: FULL_WIDTH)
    }
  }
  CBR600: file(relativePath: {eq: "passion/CBR600.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
    }
  }
  CBR600_full: file(relativePath: {eq: "passion/CBR600.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 95, layout: FULL_WIDTH)
    }
  }
  TSV1860: file(relativePath: {eq: "passion/1860.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
    }
  }
  TSV1860_full: file(relativePath: {eq: "passion/1860.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 95, layout: FULL_WIDTH)
    }
  }
}
`
	)
	return (
		<Layout sitetitle="Über mich" path="/ueber-mich">
			<h1>Über mich</h1>
			<p>Wie Dir vielleicht aufgefallen ist, gibt es für die Website drei Themes, die alle unter unterschiedlichen Domains erreichbar sind. Der Grund dafür ich einfach: Ich konnte mich nicht entscheiden, welches Thema ich meiner Website zugrunde legen will.</p>
			<p>So ist auch die "Über mich"-Seite in unterschiedliche Bereichte unterteilt. Eine meiner größten Stärken ist, dass ich mich nahezu für alles interessieren oder gar begeistern kann.</p>
			<ul>
				<li><button onClick={() => scrollTo('#entwicklung')}>Entwicklung</button></li>
				<li><button onClick={() => scrollTo('#motorrad')}>Motorradfahren</button></li>
				<li><button onClick={() => scrollTo('#musik')}>Musik und Konzerte</button></li>
				<li><button onClick={() => scrollTo('#whiskey')}>Whiskey</button></li>
				<li><button onClick={() => scrollTo('#ercingolstadt')}>ERC Ingolstadt</button></li>
				<li><button onClick={() => scrollTo('#tsv1860muenchen')}>TSV 1860 München</button></li>
			</ul>
			<p>Über das Menü kannst Du unter "Themes" das passende Template auswählen, wenn Du Lust hast. Dann gibt es noch <a href="https://schoettner.org">schoettner.org</a>, einfach nur deshalb um auf grafische Gestaltung zu verzichten und zu testen, wie schnell dieses <em>Framework</em> wirklich sein kann.</p>
			<h2 id="entwicklung">Entwicklung</h2>
			<p>Dass doch einige Jahre ins Land gegangen sind bemerkt man spätestens, wenn man einen Lebenslauf schreibt. So kann ich in Summe auf über 20 Jahre Entwicklung zurückblicken. Anfangs sicher nur Websites und das meiste war da auch ehrliches <em>HTML</em> mit etwas <em>CSS</em>.</p>
			<h2 id="motorrad">Motorradfahren</h2>
			<div>
				<a className="click_to_view" href={data.CBR600_full.childImageSharp.gatsbyImageData.srcWebp}>
					<GatsbyImage
						image={data.CBR600.childImageSharp.gatsbyImageData}
						className="preview_pic"
						alt="Erste 'große' Maschine: Honda CBR 600 F, Baujahr 1998, zuerst mit 34 PS, dann mit 98 PS - Gefahren 2001 - 2005." />
				</a>
				<a className="click_to_view" href={data.Daelim_full.childImageSharp.gatsbyImageData.srcWebp}>
					<GatsbyImage
						image={data.Daelim.childImageSharp.gatsbyImageData}
						className="preview_pic"
						alt="Erstes Motorrad mit 125 ccm: Daelim VT 125 - Gefahren 1999 - 2000." />
				</a>
			</div>
			<h2 id="musik">Musik und Konzerte</h2>
			<h2 id="whiskey">Whiskey</h2>
			<h2 id="ercingolstadt">ERC Ingolstadt</h2>
			<h2 id="tsv1860muenchen">TSV 1860 München</h2>
			<div>
				<a className="click_to_view" href={data.TSV1860_full.childImageSharp.gatsbyImageData.srcWebp}>
					<GatsbyImage
						image={data.TSV1860.childImageSharp.gatsbyImageData}
						className="preview_pic"
						alt="57, 58, 59, 60! ... und schon gibt's ein Tor." />
				</a>
			</div>
			<div className="grid">
				<div className="grid-item grid-item-a">
					<GatsbyImage
						image={data.CBR600_full.childImageSharp.gatsbyImageData}
						objectFit="cover"
						objectPosition="50% 50%"
						alt="Erste 'große' Maschine: Honda CBR 600 F, Baujahr 1998, zuerst mit 34 PS, dann mit 98 PS - Gefahren 2001 - 2005." />
				</div>
				<div className="grid-item grid-item-b">
					<GatsbyImage
						image={data.CBR600_full.childImageSharp.gatsbyImageData}
						objectFit="cover"
						objectPosition="50% 50%"
						alt="Erste 'große' Maschine: Honda CBR 600 F, Baujahr 1998, zuerst mit 34 PS, dann mit 98 PS - Gefahren 2001 - 2005." />
				</div>
			</div>
		</Layout>
	);
}

export default AboutPage

export const Head: HeadFC = () => (
	<>
		<html lang="de" />
		<title>Über mich</title>
		<body className="about_me" />
			<link rel="canonical" href={"https://schoettner.dev/ueber-mich"} />
	</>
)
