import styled from 'styled-components';

const StyledWbnPlayer = styled.div`
  background:${props => props.theme.bgcolor};
  border: ${props => props.theme.border};
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  max-height: 864px;
  transition: all 1s ease;

  @media screen and (max-width: 140px) {
    display: block;
    max-height: 10000px;
  }
`;

export default StyledWbnPlayer;