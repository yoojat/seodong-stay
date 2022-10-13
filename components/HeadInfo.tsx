import Head from 'next/head';

interface Props {
  title?: string;
  keyword?: string;
  contents?: string;
}

const HeadInfo = ({
  title = '서동여관-부산감성숙소',
  keyword = '부산감성숙소, 부산로컬, 부산에어비엔비, 동래구숙소, 금정구숙소, 금정구여행, 동래구여행, 부산대여행, 서동여관, 서동영화, 서동부엌, 고개서동',
  contents = '조용한 동네, 서동에 위치한 감성이 있는 부산로컬 공간입니다.',
}: Props) => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='keywords' content={keyword} />
      <meta name='Distribution' content='creplay' />
      <meta name='Copyright' content='creplay' />
      <meta name='robots' content='idnex,follow' />
      <meta content={contents} />
      <meta name='description' content={contents} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='서동여관' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={contents} />
      <meta property='og:image' content='/mainPhotos/28.jpeg' />
      <meta property='og:url' content='https://seodong-movie.vercel.app/' />
      <meta property='al:ios:url' content='applinks://docs' />
      <meta property='al:ios:app_store_id' content='12345' />
      <meta property='al:ios:app_name' content='App Links' />
      <meta property='al:android:url' content='applinks://docs' />
      <meta property='al:android:app_name' content='App Links' />
      <meta property='al:android:package' content='org.applinks' />
      <link rel='canonical' href='https://seodong-movie.vercel.app/' />

      <meta
        property='al:web:url'
        content='http://applinks.org/documentation'
      ></meta>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default HeadInfo;
