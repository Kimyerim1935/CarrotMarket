import Head from 'next/head';

type HeadType = {
  title: string
}

export default function SeoHead({title}: HeadType) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  )
}