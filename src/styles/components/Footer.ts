import styled from 'styled-components'

export const Container = styled.div`
  height: 80px;
  background-color: ${props => props.theme.colors.footer};
  display: flex;
  align-items: center;
  justify-content: space-between;
 `;
export const Phone = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.footerText};
  h3{
      margin-left: 10px;
      color: ${props => props.theme.colors.pfooter};
  }
  p{
    margin: 0px 10px;
    color: ${props => props.theme.colors.pfooter};
  }
`;
export const Address = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.footerText};
  h3{
      margin-left: 10px;
      color: ${props => props.theme.colors.pfooter};
  }
  p{
    margin: 0px 10px;
    color: ${props => props.theme.colors.pfooter};
  }
`;
export const Signature = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.footerText};

  p{
    margin: 0px 10px;
    color: ${props => props.theme.colors.pfooter};
  }
`;
