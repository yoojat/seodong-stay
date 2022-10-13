import styled from 'styled-components';
import DefaultContentLayout from '../components/defaultContent';
import Divider from '../components/Divider';

const ReserveationHeaderContainer = styled.div`
  margin-top: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

const KakaoButton = styled.a`
  border: none;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  margin: 10px;
  width: 160px;
  display: inline-block;
  padding: 10px;
  border: 1px solid black;
`;
const NaverButton = styled.a`
  border: none;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  margin: 10px;
  width: 160px;
  display: inline-block;
  padding: 10px;
  border: 1px solid black;
`;

const Spacer = styled.div`
  margin-top: 70px;
`;

const ReservationContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ReservationContentCol = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 600px;
  @media screen and (max-width: 992px) {
    max-width: inherit;
  }
`;
const ReservationContentRow = styled.div`
  /* background-color: #e27a68; */
  border: 2px solid white;
  border-top: 1px solid black;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 100px;
  line-height: 25px;
  word-break: keep-all;
`;

const Table = styled.table`
  width: 100%;
  * {
    border: 1px solid black;
  }
  td {
    padding: 5px;
  }
`;

const Inquery = () => {
  return (
    <DefaultContentLayout
      title={
        <>
          소중한 공간의
          <br />
          특별한 주인공이 되어주세요.
        </>
      }
      photoUrl='/mainPhotos/26.jpeg'
      seoTitle='문의'
    >
      <Spacer />

      <ReserveationHeaderContainer>
        <Divider />
        <Spacer />

        <KakaoButton target={'_blank'} href='https://pf.kakao.com/_VCxnsb/chat'>
          카카오톡 문의
        </KakaoButton>
        {/* <NaverButton
          target={'_blank'}
          href='https://booking.naver.com/booking/10/bizes/719763'
        >
          네이버 예약
        </NaverButton> */}
        <Spacer />
        <Divider />
      </ReserveationHeaderContainer>
      <ReservationContentContainer>
        <ReservationContentCol>
          <ReservationContentRow>
            <p>안내사항</p>
            <p>
              <ul>
                <li>
                  - 서동여관은 환경을 위해, 일회용 어메니티를 제공하지 않습니다.
                </li>
                <li>
                  - 주방에서 간단한 조리는 가능하지만, 너무 냄새나는 음식은
                  자제바랍니다.
                </li>
                <li>
                  - 공간 사용 후, 전열기기 전원을 꺼주시고, 설거지와 정리정돈
                  부탁드립니다.
                </li>
                <li>- 숙소에 반려동물은 동반 불가합니다.</li>
                <li>
                  - 침구류는 이용 전후 항상 깨끗하게 소독, 세탁하고 있습니다.
                </li>
                <li>
                  - 무인으로 운영되는 공간의 특성상, 방범을 위해 CCTV가
                  설치되어있습니다.
                </li>
                <li>
                  - 방역업체와의 계약을 통해, 주기적으로 소독 작업을 하고
                  있습니다.
                </li>
                <li>- 내부에 화장실이 있습니다.</li>
                <li>
                  - 리뷰 작성시, 차량 1대 주차 지원(영수증 확인) 혹은 30분 추가
                  이용을 도와드립니다. 주차는 서동 제2공영주차장에 해주세요!
                </li>
              </ul>
              <br />
              <br />
            </p>
          </ReservationContentRow>
          <ReservationContentRow>
            <ul>
              <li>이용 안내</li>
              <li>- 체크인 14:00 이후/체크아웃 11:00 이전</li>
              <li>
                - 기본 인원 2인입니다. 추가인원 발생시 미리
                연락주세요(추가비용발생, 침구제공)
              </li>
              <li>
                - 빠른 체크인, 체크아웃 시간변경, 짐보관 등은 문의 주세요!
              </li>
              <li>
                - 도어락 비밀번호를 제공하는 셀프체크인, 체크아웃 시스템입니다!
              </li>
              <li>
                - 카카오톡 &apos;고개서동&apos; 친구추가 후, 각종 안내 및
                문의사항을 전달드리고 있습니다.
              </li>
              <li>
                - 이용 예약 확인 후, 체크인 전 세부사항 안내(카카오톡 채널 혹은
                문자 전송)를 도와드리고 있습니다.
              </li>
              <li>- 이용 요금 및 예약 관련하여, 별도 문의 주세요!</li>
              <li>
                - 1층 서동부엌, 2층 서동영화도 함께 즐기실 수 있습니다.(단,
                예약제로 이용되므로 사전에 문의 바랍니다.)
              </li>
            </ul>
          </ReservationContentRow>
        </ReservationContentCol>
        <ReservationContentCol>
          <ReservationContentRow>
            <ul>
              <li>예약 전 확인 사항</li>
              <li>
                - 보호자가 없는 미성년자 및 반려동물 동반시 입실하실 수
                없습니다.
              </li>
              <li>
                - 시설, 집기의 훼손 또는 파손시 경우에 따라 변상비를 청구할 수
                있습니다.
              </li>
              <li>
                - 당일 예약은 카카오채널로 별도 문의 주시면 일정 확인 후
                도와드립니다.
              </li>
              <li>
                - 주변 환경 특성상 벌레가 유입될 수 있음을 알려드립니다. 이로
                인한 사용 중 환불은 불가함을 알려드립니다.
              </li>
              <li>
                - 예약 인원 외의 사용은 불가합니다. 인원 규정 위반에 대한 책임은
                게스트에게 있습니다.
              </li>
            </ul>
          </ReservationContentRow>
          <ReservationContentRow>
            <ul>
              <li>환불 규정</li>
              <li>
                - 예약으로 운영하는 숙소의 특성상 환불시 아래 기준일에 따라
                처리됩니다.
              </li>
              <li>
                - 이용 5일전 까지 - 총 결제금액의 100% 환불 / 이용 5일이내 -
                환불 불가
              </li>
              <li>- 환불이나 취소 요청시 카카오채널로 문의해주세요.</li>
            </ul>
          </ReservationContentRow>
        </ReservationContentCol>
      </ReservationContentContainer>

      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.892894912934!2d129.09660176292584!3d35.217138962793804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356893bb7df20ff1%3A0x587edfd9dd9a1fb2!2z67aA7IKw6rSR7Jet7IucIOq4iOygleq1rCDshJzrj5nroZw5MeuyiOq4uCA3!5e0!3m2!1sko!2skr!4v1640074496992!5m2!1sko!2skr'
        width='100%'
        height='450'
        style={{ border: 0 }}
        allowFullScreen={false}
        loading='lazy'
      ></iframe>
    </DefaultContentLayout>
  );
};

export default Inquery;
