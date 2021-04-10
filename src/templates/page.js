import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../common/components/layout"

export const pageQuery = graphql`
    query($id: String!) {
        wpPage(id: { eq: $id }) {
            title
            content
        }
        site {
            id
            siteMetadata {
            title
            description
            }
        }
    }
`

class Page extends Component {
    render() {
        const StaticPage = this.props.data.wpPage

        return (
            <Layout sitetitle="{StaticPage.title}" path={this.props.path}>
                <h1>{StaticPage.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: StaticPage.content }} />
            </Layout>
        )
    }
}

export default Page