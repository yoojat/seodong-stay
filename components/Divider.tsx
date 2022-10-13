import styled from 'styled-components';

const Divider = styled.hr<{ isBold?: boolean }>`
  border: none;

  border-top: ${(props) =>
    props.isBold
      ? '1px solid rgba(0, 0, 0,1)'
      : '1px solid rgba(0, 0, 0, 0.05)'};
  color: #333;
  overflow: visible;
  text-align: center;
  height: 5px;
`;

export default Divider;
