import styled from 'styled-components'
import device from '../sizes'
import Image from 'next/image'

interface ContainerProps {
  left: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: -1;
  flex: 1;
  position: relative;

  @media ${device.tablet} {
    align-items: center;
    flex-direction: ${props => (props.left ? 'row-reverse' : 'row')};
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  color: #555;
  flex-direction: column;

  @media ${device.tablet} {
    padding: 48px;
    min-width: 650px;
  }
  @media ${device.laptop} {
    padding: 48px;
    min-width: 800px;
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

export const LeftContainer = styled.div`
  position: relative;
  width: 80vw;
  @media ${device.tablet} {
    width: 400px;
  }
  @media ${device.laptop} {
    width: 600px;
  }
`

export const ImageContainer = styled.div`
  > div {
    position: unset !important;
  }

  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`

export const Banner = styled(Image)`
  width: 100%;
  height: 100%;
  @media ${device.mobileL} {
    object-fit: cover;
  }
  @media ${device.tablet} {
    height: unset;
  }
  @media ${device.laptopL} {
    height: unset;
    width: 100%;
  }
`
