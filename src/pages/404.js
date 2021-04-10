import React from 'react'

import Layout from '../common/components/layout'

const NotFoundPage = () => {
    return (
        <Layout sitetitle="Page Not Found" path="/">
            <h1>Seite leider nicht gefunden</h1>
            <p>Die Seite die Du aufgerufen hast ist leider nicht erreichbar.</p>
        </Layout>
    )
}

export default NotFoundPage