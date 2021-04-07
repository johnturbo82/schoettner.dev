import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from '../common/components/layout'

export const pageQuery = graphql`
    query {
        allWpPage(sort: { fields: [date] }) {
            edges {
                node {
                    id
                    title
                    slug
                }
            }
        }
        allWpPost(sort: { fields: [date] }) {
            edges {
                node {
                    id
                    slug
                    title
                    excerpt
                }
            }
        }
    }
`

class BlogPage extends Component {
    render() {
        const data = this.props.data

        return (
            <Layout path="/blog">
                <h1>Posts</h1>
                {data.allWpPost.edges.map(({ node }) => (
                    <div key={node.slug}>
                        <Link to={node.slug}>
                            <h2>{node.title}</h2>
                        </Link>
                    </div>
                ))}
            </Layout>
        )
    }
}

export default BlogPage