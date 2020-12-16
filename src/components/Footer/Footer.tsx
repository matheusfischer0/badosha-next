import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'

import { Container } from '../../styles/components/Footer'

const Footer: React.FC = () => {
  return (
    <Container>
      <h3> Telefone: </h3>
       <p>
         3037-1012 | 99265-5968
          <a
          className="navbar-brand"
          href="https://api.whatsapp.com/send?phone=5547992655968&text="
        >
          <FaWhatsapp
            size={20}
            color={"#02ff0f"}
          ></FaWhatsapp>
        </a>
      </p>
    </Container>
  )
}

export default Footer
