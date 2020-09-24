import styled from 'styled-components';
import def from '../images/def.jpg';

const StyledHero = styled.header`
min-height: 60vh;
background: url(${props => props.img? props.img: def}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;

export default StyledHero;