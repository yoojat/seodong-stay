import styled from 'styled-components';
import DefaultContentLayout from '../components/defaultContent';

const CreatorsContainer = styled.div`
  font-size: 13px;
  position: absolute;
  left: 0;
  top: 200px;
  width: 100%;
  color: white;
  font-weight: 600;
  text-shadow: 2px 2px 5px #333;
`;
const CreatorRow = styled.div`
  display: flex;
  justify-content: center;
`;
const CreatorColLeft = styled.div`
  flex: 1;
  text-align: right;
  padding: 25px 10px;
`;
const CreatorColRight = styled.div`
  flex: 1;
  text-align: left;
  padding: 25px 10px;
`;

const Creator = () => {
  return (
    <DefaultContentLayout photoUrl='/mainPhotos/27.png' seoTitle='만든이'>
      <>
        <CreatorsContainer>
          <CreatorRow>
            <CreatorColLeft>크리에이티브 디렉터</CreatorColLeft>
            <CreatorColRight>고개서동</CreatorColRight>
          </CreatorRow>
          <CreatorRow>
            <CreatorColLeft>스타일링</CreatorColLeft>
            <CreatorColRight>송병근</CreatorColRight>
          </CreatorRow>

          <CreatorRow>
            <CreatorColLeft>시공</CreatorColLeft>
            <CreatorColRight>천홍범</CreatorColRight>
          </CreatorRow>
          <CreatorRow>
            <CreatorColLeft>개발</CreatorColLeft>
            <CreatorColRight>김태영</CreatorColRight>
          </CreatorRow>
        </CreatorsContainer>
      </>
    </DefaultContentLayout>
  );
};

export default Creator;
