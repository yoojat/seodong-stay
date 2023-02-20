import Head from 'next/head';

interface IProps {
  title: string;
}

export default function Seo({ title }: IProps) {
  return (
    <Head>
      {title ? (
        <title>{title} | 서동여관</title>
      ) : (
        <title>서동여관 필사의방</title>
      )}
    </Head>
  );
}
