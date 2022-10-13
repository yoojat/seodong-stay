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
        <title>서동여관-부산감성숙소</title>
      )}
    </Head>
  );
}
