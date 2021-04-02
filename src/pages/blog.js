import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from '../components/layout'

class BlogPage extends Component {
    render() {
        const data = this.props.data

        return (
            <Layout>
                <div>
                    <h1>Pages</h1>
                    {data.allWpPage.edges.map(({ node }) => (
                        <div key={node.slug}>
                            <Link to={node.slug}>
                                <h2>{node.title}</h2>
                            </Link>
                        </div>
                    ))}
                </div>

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

export const pageQuery = graphql`
    query {
        allWpPage {
            edges {
                node {
                    id
                    title
                    slug
                }
            }
        }
        allWpPost {
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