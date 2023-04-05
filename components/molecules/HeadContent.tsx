import Head from 'next/head';

export interface HeadContentProps {
  title?: string;
  description?: string;
}

export default function HeadContent({
  title,
  description = 'Starter kit for Next.js project using Typescript and Tailwind CSS',
}: HeadContentProps) {
  const displayedTitle = title
    ? `${title} - Tailwind Snippets`
    : 'Tailwind Snippets';

  return (
    <Head>
      <title>{displayedTitle}</title>
      <meta content={description} name="description" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <link href="/favicon.ico" rel="icon" />
    </Head>
  );
}
