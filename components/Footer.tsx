import { NextComponentType } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

const ContainerFooter = styled.footer`
  padding: 15px;
`;

const FooterContentContainer = styled.div`
  font-size: 14px;
  display: flex;
  align-items: flex-end;
`;

const Footer: NextComponentType = () => {
  return (
    <ContainerFooter>
      <FooterContentContainer>
        <div style={{ position: 'relative', width: '80px', height: '50px' }}>
          <Image
            layout='fill'
            objectFit={'contain'}
            src={'/logo_brown2.png'}
            alt={'logo'}
          />
        </div>
        <div style={{ paddingBottom: '5px' }}>
          부산광역시 금정구 서동로 91번길 7
        </div>
      </FooterContentContainer>
      <div
        style={{
          marginTop: '10px',
          paddingBottom: '10px',
          marginLeft: '15px',
          lineHeight: '1.3',
          fontSize: '12px',
        }}
      >
        (주)크리플레이 ㅣ COPYRIGHT 2021.
        <br />
        CREPLAY ALL RIGHT RESERVED
        <br /> 대표자 : 송병근
        <br />
        {/* 사업자 등록 번호 : 617-86-24973 */}
      </div>
    </ContainerFooter>
  );
};

export default Footer;
