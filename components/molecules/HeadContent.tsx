import Head from 'next/head';

export interface HeadContentProps {
  title: string;
  description?: string;
}

export default function HeadContent({ title, description }: HeadContentProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta content={description} name="description" />
      <link href="/favicon.ico" rel="icon" />
    </Head>
  );
}
