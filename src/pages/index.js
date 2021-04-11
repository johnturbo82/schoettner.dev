import React from 'react'

import Layout from '../common/components/layout'
import Passion from '../common/components/passion'

const IndexPage = () => {
    return (
        <Layout sitetitle="Startseite" path="/">
            <Passion />
        </Layout>
    )
}

export default IndexPage