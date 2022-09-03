import Head from 'next/head';

export interface HeadContentProps {
  title?: string;
  description?: string;
}

export default function HeadContent({
  title = 'Tailwind Snippets',
  description = 'Starter kit for Next.js project using Typescript and Tailwind CSS',
}: HeadContentProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <link href="/favicon.ico" rel="icon" />
    </Head>
  );
}
