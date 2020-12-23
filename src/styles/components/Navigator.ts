import styled from 'styled-components'

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:space-between;
  list-style:none;
  margin-right:10px;
`;
export const MenuItem = styled.li`
  justify-content:center;
    font-size: ${props=> props.theme.font_sizes.small};
    text-decoration: none;
    padding:0px 10px;
    cursor:pointer;
`;

interface ActiveProps {
  active:boolean;
}
export const Item = styled.a<ActiveProps>`
    color: ${props=>props.active? props.theme.colors.blue : props.theme.colors.grey};
    padding:10px 10px;
    margin-bottom:10px;
`;

export const UnderlineItem = styled.div<ActiveProps>`
    display: ${props=>props.active? "block" :"none"};
    background-color: ${props=>props.active? props.theme.colors.blue : props.theme.colors.grey};
    width:'100%';
    height:3px;
`;
