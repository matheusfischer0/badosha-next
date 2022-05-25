import styled, { css } from 'styled-components'
import Link from 'next/link'

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin-top: 20px;
`

export const Container = styled.div`
  max-width: 720px;
  margin: 0px auto;
  padding-bottom: 10px;
  padding-top: 20px;

  border-bottom: 1px solid #ddd;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 10px;
`

export const Title = styled.h2`
  text-align: center;
`
export const Subtitle = styled.h3`
  text-align: center;
`

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: transparent;
`

interface IRowProps {
  direction?: 'row' | 'column'
}
export const Row = styled.div<IRowProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'column')};
  margin: 0 10px;
  gap: 0px 10px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const Column = styled.div`
  flex: 1;
`

export const Label = styled.p`
  flex: 1;
`

export const Input = styled.input`
  width: 100%;
  justify-content: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 10px;
  margin-top: 4px;
  margin-bottom: 12px;
  border-radius: 4px;
`

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 10px;
  margin-top: 4px;
  margin-bottom: 12px;
  border-radius: 4px;
`

export const Dropdown = styled.select`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 10px;
  margin-top: 4px;
  margin-bottom: 12px;
  border-radius: 4px;
`

export const PriceRow = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 10px;
  margin-top: 4px;
  margin-bottom: 12px;
  border-radius: 4px;
`
export const PriceLabel = styled.p``

export const PriceInput = styled.input`
  width: 100%;
  margin-left: 4px;
`

export const CheckboxRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 10px;
  margin: 0px 10px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
`

export const CheckboxInput = styled.input`
  justify-content: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  margin: 10px;
  border-radius: 4px;
`

export const Footer = styled.div`
  display: flex;
`

export const OptionContainer = styled.div`
  position: relative;
  margin: 12px 10px;
  /* border: 1px solid ${({ theme }) => theme.colors.grey}; */
  border-radius: 12px;
  padding: 12px 12px;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.grey};
`
export const OptionDelete = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
`

interface IButtonProps {
  color: 'save' | 'return'
}

export const Button = styled.div<IButtonProps>`
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 20px 10px;
  border-radius: 4px;
  padding: 12px;

  box-shadow: 5px 5px 5px #ddd;

  ${({ color, theme }) => css`
    background: ${color === 'save'
      ? `linear-gradient(
      45deg,
      rgba(246, 193, 1, 1) 0%,
      rgba(255, 150, 1, 1) 40%,
      rgba(246, 219, 1, 1) 100%
    )`
      : theme.colors.grey};
  `}
`
