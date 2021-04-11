import React from 'react'
import { Link } from 'gatsby'

import Layout from '../common/components/layout'

const IndexPage = () => {
    return (
        <Layout sitetitle="Startseite" path="/">
            <h1>Hello World</h1>
            <p>Test</p>
            <Link to="/kontakt">Kontakt</Link>
        </Layout>
    )
}

export default IndexPage