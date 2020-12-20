import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import {
  Container,
  Phone,
  Address,
  Signature,
  AdressContainer
} from '../../styles/components/Footer'

const Footer: React.FC = () => {
  return (
    <Container>
      <Phone>
        <h3>Telefone:</h3>
        <p>(47) 3037-1012 | (47) 9.9265-5968</p>
        <a
          className="navbar-brand"
          href="https://api.whatsapp.com/send?phone=5547992655968&text="
        >
          <FaWhatsapp size={25} color={'#02ff0f'}></FaWhatsapp>
        </a>
      </Phone>
      <AdressContainer>
        <Address>
          <h3>Endereço:</h3>
          <p>Rua Mariana Bronnemann, 230, Blumenau - SC</p>
        </Address>
        <Signature>
          <p>
            2020 | All rights reserved | This template was created by Ycaro
            Lehmkuhl e Matheus Fischer.
          </p>
        </Signature>
      </AdressContainer>
    </Container>
  )
}

export default Footer
