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
        <div>
          <p>
            <a href="tel:+554730371012">
              <span className="topbar-phone">(47) 3037-1012</span>
            </a>{' '}
            |{' '}
            <a href="tel:+5547992655968">
              {' '}
              <span className="topbar-phone">(47) 99265-5968</span>
            </a>
          </p>
          <a
            className="navbar-brand"
            href="https://api.whatsapp.com/send?phone=5547992655968&text="
          >
            <FaWhatsapp size={25} color={'#02ff0f'}></FaWhatsapp>
          </a>
        </div>
      </Phone>
      <AdressContainer>
        <Address>
          <h3>Endereço:</h3>
          <address>Rua Mariana Bronnemann, 230, Blumenau - SC</address>
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
