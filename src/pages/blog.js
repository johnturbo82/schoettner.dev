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
            <Layout sitetitle="Blog" path="/blog">
                <h1>Blog</h1>
                {data.allWpPost.edges.map(({ node }) => (
                    <Link to={node.slug}>
                        <div key={node.slug} className="blog_post">
                                <h2>{node.title}</h2>
                        </div>
                    </Link>
                ))}
            </Layout>
        )
    }
}

export default BlogPage