import styled from 'styled-components';
import DefaultContentLayout from '../components/defaultContent';
import DefaultContent from '../components/defaultContent';

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
`;

const Title = styled.div`
  z-index: 998;
  position: absolute;
  top: 33vh;
  font-size: 13px;
  word-spacing: 5px;
  right: 2%;

  @media screen and (min-width: 992px) {
    right: 7%;
    top: 35vh;
    font-size: 15px;
    word-spacing: 3px;
  }

  color: white;
  letter-spacing: 4px;
  line-height: 20px;
  text-align: right;
  p {
    padding: 10px;
  }
`;

const Div = styled.div`
  p {
    margin-bottom: 20px;
  }
`;

const Prologue = () => {
  const TitleSrc = () => (
    <Div>
      <p>
        서동여관에 오신걸 환영합니다.
        <br />
      </p>
      <p>
        과거에는, <br />
        서동에도 많은 사람들이 함께 살았습니다.
        <br />
        이웃사촌이라는 말이 참 어울리는 동네였죠.
        <br />
      </p>
      <p>
        하지만, 시간이 흘러가며,
        <br />
        이 동네의 집들과 경관은 그대로 남겨둔채,
        <br />
        사람들은 하나 둘 떠나갔죠.
      </p>
      <p>
        과거 80년대의 멈춰진 공간들을 활용하여,
        <br />
        여러분께 이 동네와 추억거리를 제공해드리고 싶었습니다.
      </p>
      <p>서동여관에서의 편안한 시간되시길 바랍니다.</p>
    </Div>
  );
  return (
    <DefaultContentLayout
      title={<TitleSrc />}
      photoUrl='/mainPhotos/9.jpeg'
      seoTitle='프롤로그'
    ></DefaultContentLayout>
  );
};

export default Prologue;
