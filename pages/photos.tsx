import Image from 'next/image';
import HeadInfo from '../components/HeadInfo';
import photoStyles from '../styles/Photos.module.css';
import Link from 'next/link';
interface Props {
  posts?: Post[];
  photos?: Photo[];
}

interface Post {
  id: number;
  title: string;
}

interface Photo {
  id: number;
  thumbnailUrl: string;
  title: string;
}

function Photos({ posts, photos }: Props) {
  return (
    <div>
      <HeadInfo title='Photos' />
      <ul>
        {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
      <ul className={photoStyles.photos}>
        {photos &&
          photos.map((photo) => (
            <li key={photo.id}>
              <Link href={`/photos/${photo.id}`}>
                <a>
                  <Image
                    src={photo.thumbnailUrl}
                    width={100}
                    height={100}
                    alt={photo.title}
                  />
                  <span>{photo.title}</span>
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Photos;

export const getStaticProps = async () => {
  // server side rendering
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/photos?_start=0&_end=10'
  );
  const photos = await res.json();
  return {
    props: {
      photos,
    },
    revalidate: 20, // 20초 지난 시점부터 (언제든) 접속이 일어나면
  };
};
