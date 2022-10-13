import styled from 'styled-components';
import DefaultContentLayout from '../components/defaultContent';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { useState } from 'react';
import useScroll from '../hooks/useScroll';
import Divider from '../components/Divider';

const ContentContainer = styled.div`
  max-width: 1280px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentItem = styled.div`
  text-align: center;
`;

const TextContainer = styled.div`
  margin-top: 10px;
  max-width: 1280px;
  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Space = styled.div`
  width: 100%;
  height: 100px;
`;

const PhotoSection = styled.div`
  display: flex;
  justify-content: right;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  width: 80%;
  min-width: 600px;
  @media screen and (max-width: 992px) {
    width: 100%;
    min-width: inherit;
  }
  max-width: 1100px;
  margin-bottom: 30px;
`;

const PhotoItem = styled.div<{ photoUrl: string; innerWidth: number }>`
  background-image: url(${(props) => props.photoUrl});
  width: 30%;
  height: 240px;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: ${(props) => (props.innerWidth * 6) / 10}px;
  }
  background-size: cover;
  margin-left: 10px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 992px) {
    cursor: inherit;
    &:hover {
      opacity: inherit;
    }
  }
`;
const TextContentCol = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 600px;
  @media screen and (max-width: 992px) {
    max-width: inherit;
  }
`;

const TextContentRow = styled.div`
  /* background-color: #e27a68; */
  border: 2px solid white;
  border-top: 1px solid black;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 100px;
  line-height: 25px;
`;

// 992px

const images = [
  '/mainPhotos/1.jpeg',
  '/mainPhotos/12.jpeg',
  '/mainPhotos/4.jpeg',
  '/mainPhotos/3.jpeg',
  '/mainPhotos/5.jpeg',
  '/mainPhotos/6.jpeg',
  '/mainPhotos/7.jpeg',
  '/mainPhotos/8.jpeg',
  '/mainPhotos/9.jpeg',
  '/mainPhotos/10.jpeg',
  '/mainPhotos/13.jpeg',
  '/mainPhotos/14.jpeg',
  '/mainPhotos/15.jpeg',
  '/mainPhotos/16.jpeg',
  '/mainPhotos/17.jpeg',
  '/mainPhotos/18.jpeg',
  '/mainPhotos/20.jpeg',
  '/mainPhotos/21.jpeg',
];

const Yoohee = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isPhotoPopUp, setIsPhotoPopUp] = useState(false);
  const { innerWidth } = useScroll();
  const TitleSrc = () => (
    <div>
      다양한 공간에서의
      <br />
      즐길거리와 분위기를 모두 경험할 수 있는 공간
    </div>
  );

  return (
    <DefaultContentLayout
      title={<TitleSrc />}
      photoUrl='/mainPhotos/7.jpeg'
      seoTitle='즐길거리'
    >
      <ContentContainer>
        <Space />
        <Divider />
        <ContentItem>공간도 이미지</ContentItem>
        <Divider />
        <Space />
        <ContentItem>
          <PhotoSection>
            <PhotoContainer>
              {images.map((image, index) => (
                <PhotoItem
                  key={index}
                  photoUrl={image}
                  innerWidth={innerWidth}
                  onClick={() => {
                    if (innerWidth > 992) {
                      setIsPhotoPopUp(true);
                      setPhotoIndex(index);
                    }
                  }}
                />
              ))}
            </PhotoContainer>
          </PhotoSection>
        </ContentItem>

        <TextContainer>
          <TextContentCol>
            <TextContentRow>
              <p>
                서동여관 내 작가의 방은 독서와 필사를 하며, 쉼을 즐길 수 있는
                공간입니다.
              </p>
              <p>우리들은 많은 전자기기와 유혹거리에 노출이 되어있고,</p>
              <p>빠르고 즉각적인 삶에 익숙해져 있습니다.</p>
              <p>느리고 답답함을 느낄 수도 있지만,</p>
              <p>
                아무 생각없이 독서와 필사를 하면서 마음을 정화시켜 보는건
                어떨까요?
              </p>
            </TextContentRow>
            <TextContentRow>
              <p>프라이빗 공유주방 서동부엌을 이용하실 수도 있습니다.</p>
              <p>
                단, 다른 분들과 이용시간이 겹치지 않기 위해, 미리 시간을
                조율해야 합니다.
              </p>
              <p>
                공유주방 서동부엌에서 맛있는 음식을 직접 만들어 드시는 것도,
              </p>
              <div>하나의 추억거리가 되실꺼에요.</div>
              <p>
                조리도구와 베이킹 도구, 냉장고가 비치되어 있어서, 편하게 조리해
                드릴 수 있습니다.
              </p>
            </TextContentRow>
          </TextContentCol>
          <TextContentCol>
            <TextContentRow>
              <p>프라이빗 오티티룸 서동영화를 이용하실 수도 있습니다.</p>
              <p>
                단, 다른 분들과 이용시간이 겹치지 않기 위해, 미리 시간을
                조율해야 합니다.
              </p>
              <p>
                서동영화는 제가 좋아하는 왕가위 감독의 영화들도 공간을
                꾸며보았습니다.
              </p>
              <p>여행을 통해, 지친 하루를 한편의 영화로 달래보는건 어떨까요?</p>
            </TextContentRow>
            <TextContentRow>
              <p>비치물품</p>
              <p>
                <ul>
                  <li>
                    - 수건, jmw드라이기, 물티슈, 2인용 쇼파, 소형 테이블,
                    블루투스 스피커, 빔프로젝트
                  </li>
                  <li>- 종이컵, 일회용수저, 일회용그릇</li>
                  <li>- 퀸사이즈 침대, 2인 침구 세트(배게,이불)</li>
                  <li>- 무드등, 옷걸이, 전신거울, 공기청정기</li>
                  <li>
                    - 메모장, 필기도구, 안락의자, 업무용 책상, 의자, 스탠드 조명
                  </li>
                  <li>
                    - 휴지, 치약, 손세정제, 폼클렌징, 샴푸, 바디워시, 컨디셔너,
                    샤워타월
                  </li>
                </ul>
                <br />
                <br />
                <br />
              </p>
            </TextContentRow>
          </TextContentCol>
        </TextContainer>
        <TextContainer></TextContainer>
      </ContentContainer>
      {isPhotoPopUp && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsPhotoPopUp(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </DefaultContentLayout>
  );
};

export default Yoohee;
