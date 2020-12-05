import React from 'react'

import { Container } from '../../styles/components/Footer'

const Footer: React.FC = () => {
  return (
    <Container>
      <h3>Telefone:</h3>
      <p> 3037-1012</p>
      <p>
        99265-5968
        <a
          className="navbar-brand"
          href="https://api.whatsapp.com/send?phone=5547992655968&text="
        >
          <img
            src="imagens/iconfinder_Social-media_Whatsapp_4362952.png"
            width="20"
            height="20"
            alt=""
            loading="lazy"
          />
        </a>
      </p>
    </Container>
  )
}

export default Footer
