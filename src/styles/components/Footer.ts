import styled from 'styled-components'

export const Container = styled.div`
  height: 80px;
  background-color: ${props => props.theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  text-align: center;
 `;
export const Phone = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.light_yellow};
  margin-right: 25px;

  h3{
      margin-left: 10px;
  }
  p{
    margin: 0px 10px;
  }
`;
export const Address = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.light_yellow};
  margin-left: 25px;
  h3{
      margin-left: 10px;
  }
  p{
    margin: 0px 10px;
      }
`;
export const Signature = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.light_yellow};
  margin-left: 25px;
  p{
    padding-top: 10px;
    margin: 0px 10px;
    font-size: ${props=> props.theme.font_sizes.extra_small};

  }
`;
export const AdressContainer = styled.div`
 flex-direction: column;
 align: ;
`;
