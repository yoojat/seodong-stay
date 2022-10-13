import Navbar from './Navbar';
import styled from 'styled-components';
import Logo from './Logo';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 999;

  @media screen and (min-width: 992px) {
    height: 135px;
    position: absolute;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;
const TopBarContainer = styled.div`
  z-index: 999;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1280px;

  // 데스크탑 큰화면
  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TopBar = () => (
  <Wrapper>
    <TopBarContainer>
      <Logo />
      <Navbar />
    </TopBarContainer>
  </Wrapper>
);

export default TopBar;
