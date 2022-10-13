import { NextComponentType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const NavContainer = styled.nav`
  margin-top: 86px;
  font-weight: 400;
  & ul {
    display: flex;
  }

  & li {
    color: #fff;
    border: 1px solid #fff;
    flex: 1;
    text-align: center;
    font-size: 13px;
    &:first-child {
      border-left: 0;
    }
    &:last-child {
      border-right: 0;
    }
    & div {
      transition: color 0.5s;
      &:hover {
        background-color: rgba(246, 139, 31, 0.5);
      }
    }
  }

  @media screen and (max-width: 768px) {
    // 모바일
    & div {
      padding: 13px;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 991px) {
    // 데스크탑
    & div {
      padding: 11px;
    }
  }

  // 데스크탑 큰화면
  @media screen and (min-width: 992px) {
    & div {
      padding: 11px;
    }

    & li {
      border: none;
      font-size: 14px;
      font-family: montserrat, Kakao, sans-serif;
    }
    margin-top: inherit;
    width: 36%;
    padding-top: 50px;
    margin-right: 40px;
    max-width: 400px;
  }
`;

const NavItem = styled.li<{ selected?: boolean }>`
  color: #fff;
  border: 1px solid #fff;
  flex: 1;
  text-align: center;
  font-size: 13px;
  &:first-child {
    border-left: 0;
  }
  &:last-child {
    border-right: 0;
  }
  & div {
    transition: color 0.5s;
    text-shadow: 1px 1px 5px #111;
    &:hover {
      /* color: #444; */
    }
  }
  @media screen and (max-width: 992px) {
    background-color: ${(props) =>
      props.selected ? 'rgba(51, 17, 8, 0.75)' : 'inherit'};
  }

  @media screen and (min-width: 992px) {
    border: none;
    font-size: 14px;
    font-family: montserrat, Kakao, sans-serif;
    transition: border-bottom 2s;
    &::after {
      ${(props) =>
        props.selected &&
        `content: attr(data-route);width: 10px;border-bottom: 1px solid #dedede; color: rgba(255, 255, 255, 0); position: relative; top: -20px;`}
    }
  }
`;

const Navbar: NextComponentType = () => {
  const router = useRouter();
  return (
    <NavContainer>
      <ul>
        <NavItem
          data-route='프롤로그'
          selected={router.pathname === '/prologue'}
        >
          <Link href='/prologue'>
            <a>
              <div>프롤로그</div>
            </a>
          </Link>
        </NavItem>

        <NavItem data-route='즐길거리' selected={router.pathname === '/yoohee'}>
          <Link href='/yoohee'>
            <a>
              <div>즐길거리</div>
            </a>
          </Link>
        </NavItem>
        <NavItem
          data-route='이용문의'
          selected={router.pathname === '/inquery'}
        >
          <Link href='/inquery'>
            <a>
              <div>이용문의</div>
            </a>
          </Link>
        </NavItem>
        <NavItem data-route='만든이' selected={router.pathname === '/creator'}>
          <Link href='/creator'>
            <a>
              <div>만든이</div>
            </a>
          </Link>
        </NavItem>
      </ul>
    </NavContainer>
  );
};

export default Navbar;
