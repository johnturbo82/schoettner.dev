import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import SlideShow from "../components/SlideShow"

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout sitetitle="Startseite" path="/">
			<div className="left right_sidebar_opposite">
				<h1>Hi, ich bin Oliver.</h1>
				<p>Ich bin Softwareentwickler aus Ingolstadt, Bayern.</p>
				<p>Am liebsten mache ich <em>Webentwicklung</em>, wenn es die meiste Zeit auch nur noch ein Hobby ist.</p>
				<p>Ich arbeite aktuell bei <a target="_blank" rel="noreferrer" href="https://cariad.technology/">CARIAD SE</a>, dem Softwarehaus des Volkswagen Konzerns. Dort mache ich vor allem <em>Python</em>, aber auch etwas Frontend mit <em>React</em>.</p>
				<p>Bei meinen letzten Arbeitgebern habe ich noch viel <em>C#</em>, <em>Java</em> und auch <em>PHP</em> gemacht. Das waren noch Zeiten...</p>
				<p>Meine Freizeit verbringe ich im Sommer gerne auf einem Motorrad oder bei Konzerten.</p>
				<p>Sollte ich zu Hause auf der Couch sein, läuft Eishockey oder Fussball <em>oder beides</em>.</p>
				<p>Diese Seite gibt's nur, weil viele Neugierige die Domain meiner Email-Adresse in den Browser tippen und dann enttäuscht sind, dass es keinen Inhalt gibt. Solltest Du auch auf diesem Wege zu mir gekommen sein: <em>Fühl Dich gerne angesprochen!</em></p>
				<h2>Hire me</h2>
				<ul>
					<li>An spannenden <em>Nebenher-Projekten</em> bin ich immer interessiert! Schreib mich an!</li>
					<li><em>Vorträge</em> zu technischen Themen halte ich sehr gerne, falls ich das mal wieder tun soll, nimm' gerne Kontakt auf.</li>
					<li>Solltest Du ein <em>Recruiter</em> sein, findest Du sicher einen Weg mich zu kontaktieren.</li>
				</ul>
			</div>
			<SlideShow />
		</Layout>
	)
}

export default IndexPage

export const Head: HeadFC = () => (
	<>
		<html lang="de" />
		<title>Startseite</title>
		<body className="home" />
		<link rel="canonical" href="https://schoettner.dev" />
	</>
)
