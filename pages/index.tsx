import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';

const images = [
  '/mainPhotos/1.jpeg',
  '/mainPhotos/12.jpeg',
  '/mainPhotos/4.jpeg',
  '/mainPhotos/2.jpeg',
  '/mainPhotos/3.jpeg',
  // '/mainPhotos/5.jpeg',
  '/mainPhotos/24.png',
  '/mainPhotos/25.jpeg',
  '/mainPhotos/8.jpeg',
  '/mainPhotos/10.jpeg',
];
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  transition: background-image 3s;
`;

const ImageContainer = styled.div``;

const Img = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  transition: opacity 2s;
  position: absolute;
  opacity: 0;
`;

const PageContainer = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  text-align: center;
  bottom: 20px;
  width: 100%;
  /* color: rgba(255, 255, 255, 1); */
  color: #444;
  opacity: 0.7;
  font-size: 14px;
  font-weight: 600;
  z-index: 998;
`;

const Page = styled.a<{ selected?: boolean }>`
  margin: 7px;
  color: ${(props) => (props.selected ? 'rgb(255,255,255,1)' : 'inherit')};
  opacity: ${(props) => (props.selected ? 1 : 'inherit')};
  cursor: pointer;
`;

const Title = styled.div`
  z-index: 998;
  position: absolute;
  right: 15%;
  top: 60vh;
  color: white;
  letter-spacing: 4px;
  word-spacing: 10px;
  font-size: 16px;
  line-height: 30px;
`;

const Home = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const imageContainerRefs = useRef<[HTMLDivElement | null | undefined]>([
    null,
  ]);
  useEffect(() => {
    const imgArr = Array.from(imageContainerRefs.current);
    imgArr.forEach((img, index) => {
      if (img) {
        if (selectedImageIndex === index) {
          img.style.opacity = '1';
        } else {
          img.style.opacity = '0';
        }
      }
    });
  }, [selectedImageIndex]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (selectedImageIndex === images.length - 1) {
        // 마지막 인덱스라면
        setSelectedImageIndex(0);
      } else {
        setSelectedImageIndex(selectedImageIndex + 1);
      }
    }, 3000);
    return () => clearTimeout(timerId);
  }, [selectedImageIndex]);

  return (
    <div>
      <Seo title='' />
      <Wrapper>
        <ImageContainer>
          {images.map((image, index) => {
            return (
              <Img
                key={index}
                imgUrl={image}
                ref={(element) => {
                  imageContainerRefs.current[index] = element;
                }}
              />
            );
          })}
        </ImageContainer>
        <Title>
          공간을
          <br />
          업사이클링하다
        </Title>

        <PageContainer>
          {images.map((_, index) => (
            <Page
              selected={selectedImageIndex === index}
              onClick={() => setSelectedImageIndex(index)}
              key={index}
            >
              {index + 1}
            </Page>
          ))}
        </PageContainer>
      </Wrapper>
    </div>
  );
};

export default Home;
