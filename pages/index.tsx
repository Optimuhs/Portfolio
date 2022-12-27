import Head from 'next/head'
import { Suspense } from 'react'
import Layout from '../components/Layout'
import { LoadingPlaceholder } from '../components/Loading-Placeholder'


export default function Home() {
  return (
    <>
      <Head>
        <title>Optimuhs' Portfolio</title>
        <meta name="description" content="A porfolio for Optimuhs, a growing developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
      <Suspense fallback={<LoadingPlaceholder/>}>
        
      </Suspense>
      </Layout>
      
    </>
  )
}

