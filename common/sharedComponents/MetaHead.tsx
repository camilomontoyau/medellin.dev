import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';

type MetaHeadProps = {
  title?: string
  description?: string
}

const MetaHead: FC<MetaHeadProps> = ({ title, description }) => {
  const { asPath } = useRouter();
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

  const URL = `${origin}${asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="sitemap" href="sitemap.xml"/>
      <link rel="icon" href="img/devMeetups.svg"/>
      <meta name="description" content={description} />

      <meta property="og:url" content={URL} />
      <meta property="og:title" content={title}/>
      <meta property="og:site_name" content="Medellin.dev"/>
      <meta property="og:type" content="website"/>
      <meta property="og:description" content={description} />
      <meta property="og:image" content="img/cover.jpg"/>
      <meta property="og:image:alt" content={title}/>

      <meta property="twitter:url" content={URL} />
      <meta property="twitter:title" content={title}/>
      <meta property="twitter:description" content={description} />
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:image:src" content="img/cover.jpg"/>
    </Head>
  )
}

MetaHead.defaultProps = {
  title: 'Medellin.dev 👩🏻‍💻🇨🇴👨🏼‍💻 | DevMeetups',
  description: 'Connect with developers from Medellin. Get together with other developers and explore the Medellin tech community',
}

export default MetaHead
