import Link from 'next/link';
import styled from 'styled-components'
import device from '../sizes';


export const MenuItem = styled.li<ActiveProps>`
    justify-content:center;
    list-style:none;
    text-decoration: none;
    cursor:pointer;

`;

interface ActiveProps {
  active:boolean;
}
export const Item = styled.a<ActiveProps>`
    display:flex;
    flex-direction:column;
    flex:1;
    color: ${props=>props.active? props.theme.colors.blue : props.theme.colors.grey};
    font-size: ${props=> props.theme.font_sizes.small};
    padding:10px 16px;
    span{
      text-align:center;
    }

`;

export const Button = styled(Link)`
    display:flex;
    flex:1;
    justify-content:center;
`;

export const UnderlineItem = styled.a<ActiveProps>`
    display: ${props=>props.active? "block" :"none"};
    align-self:center;
    background-color: ${props=>props.active? props.theme.colors.blue : props.theme.colors.grey};
    width:80%;
    height:3px;

    @media ${device.tablet} {
      width:100%;
    }

`;
