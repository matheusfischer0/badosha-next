import styled from 'styled-components'
import device from '../sizes'
import Image from 'next/image'

interface ContainerProps {
  left: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${device.tablet} {
    align-items: center;
    flex-direction: ${props => (props.left ? 'row-reverse' : 'row')};
  }
`

export const TextContainer = styled.div`
  padding: 50px 16px;
  color: #555;
  flex: 1;
  height: 300px;

  @media ${device.tablet} {
    height: auto;
    padding: 48px;
    min-width: 550px;
  }
  @media ${device.laptop} {
    padding: 48px;
    min-width: 650px;
  }

  h3 {
    font-size: ${props => props.theme.font_sizes.medium};
    font-family: 'Dancing Script', cursive;
    font-weight: 500;
    @media ${device.tablet} {
      font-size: ${props => props.theme.font_sizes.large};
    }
  }
  > p {
    margin-top: 35px;
    font-size: ${props => props.theme.font_sizes.medium_small};
    font-family: 'Roboto', sans-serif;
    line-height: 36px;
    text-align: justify;
    @media ${device.tablet} {
      font-size: ${props => props.theme.font_sizes.small};
    }
  }
`

export const ImageContainer = styled.div`
  height: 300px;
  overflow: hidden;

  @media ${device.tablet} {
    height: auto;
    padding: 40px;
  }

  img {
    flex: 1;
    object-fit: cover;
    @media ${device.tablet} {
      height: 450px;
    }
    @media ${device.laptop} {
      height: 500px;
    }
  }
`
export const BannerContainer = styled.div``

export const Banner = styled(Image)``
