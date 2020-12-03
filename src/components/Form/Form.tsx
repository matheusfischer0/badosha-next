import Head from 'next/head'

import { Container } from '../../styles/components/Form'

const Form = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        ></link>
      </Head>

      <form>
        <div className="form-group">
          <input
            name="title"
            type="text"
            className="form-control"
            id="title"
            placeholder="Seu nome"
          />
        </div>

        <div className="form-group">
          <input
            name="phone"
            type="text"
            className="form-control"
            id="phone"
            placeholder="Telefone"
          />
        </div>

        <div className="form-group">
          <input
            name="email"
            type="text"
            className="form-control"
            id="email"
            placeholder="E-mail"
          />
        </div>

        <div className="form-group">
          <input
            name="jobTitle"
            type="text"
            className="form-control"
            id="jobTitle"
            placeholder="Título da sua mensagem"
          />
        </div>

        <div className="form-group">
          <textarea
            name="description"
            rows="5"
            type="text"
            className="form-control"
            id="description"
            placeholder="Deixe aqui a sua mensagem"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <Container>
        <h1>Hello world</h1>
      </Container>
    </>
  )
}

export default Form
