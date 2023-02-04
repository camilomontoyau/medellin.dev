import { FC } from 'react'
import Head from 'next/head'

type MetaHeadProps = {
  title?: string
  description?: string
}

const MetaHead: FC<MetaHeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="sitemap" href="sitemap.xml"/>
      <link rel="icon" href="https://storage.googleapis.com/mixo-files/logos/devMeetups-1675451859350.svg"/>
      <meta name="description" content={description} />
      <meta property="og:url" content="https://www.mixo.io/site/dev-meetups-tjhab"/>
      <meta property="og:title" content={title}/>
      <meta property="og:site_name" content="Medellin.dev"/>
      <meta property="og:type" content="website"/>
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://storage.googleapis.com/mixo-files/uploads/devmeetups-1675451860499.png"/>
      <meta property="og:image:alt" content={title}/>
      <meta property="twitter:url" content="https://www.mixo.io/site/dev-meetups-tjhab"/>
      <meta property="twitter:title" content={title}/>
      <meta property="twitter:description" content={description} />
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:image:src" content="https://storage.googleapis.com/mixo-files/uploads/devmeetups-1675451860499.png"/>
      <meta property="generator" content="îles"/>
      <meta name="head:count" content="18"/>
    </Head>
  )
}

MetaHead.defaultProps = {
  title: 'Medellin.dev 👩🏻‍💻🇨🇴👨🏼‍💻 | DevMeetups',
  description: 'Connect with developers from Medellin. Get together with other developers and explore the Medellin tech community',
}

export default MetaHead
