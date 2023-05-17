// import Head from 'next/head'
// import { Suspense } from 'react'
// import { Layout } from '../components/Layout'
// import { LoadingPlaceholder } from '../components/Loading-Placeholder'


// export function Home() {
//   return (
//     <>
//       <Head>
//         <title>Optimuhs&#39; Portfolio</title>
//         <meta name="description" content="A porfolio for Optimuhs, a growing developer" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>
//       <Layout>
//         <Suspense fallback={<LoadingPlaceholder/>}>
//         </Suspense>
//       </Layout>
      
//     </>
//   )
// }

import Head from 'next/head'
import { Suspense } from 'react'
import { Layout } from '../components/Layout'
import { LoadingPlaceholder } from '../components/Loading-Placeholder'

export default function Home() {
  return (
    <>
      <Head>
        <title>Optimuhs&#39; Portfolio</title>
        <meta name="description" content="A portfolio for Optimuhs, a growing developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Suspense fallback={<LoadingPlaceholder />} />
      </Layout>
    </>
  )
}
