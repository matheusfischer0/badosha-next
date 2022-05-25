import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

import { useRouter } from 'next/router'

import {
  Container,
  Form,
  Header,
  Placeholder,
  Input,
  LoginContainer,
  Logo,
  Submit,
  Title
} from '../../styles/pages/login.style'

function Login() {
  const { user, login } = useAuth()

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (user) {
      router.push('/dashboard/products')
    }
  }, [user])

  function handleChangeEmail(value: string) {
    setEmail(value)
  }

  function handleChangePassword(value: string) {
    setPassword(value)
  }

  function handleSubmit(e: any) {
    e.preventDefault()

    login(email, password)
  }

  return (
    <Container>
      <LoginContainer>
        <Header>
          <Logo>
            <Image
              id="logo1"
              src={'/logo_badosha.png'}
              alt="Badosha logo"
              width={300}
              height={100}
            />
          </Logo>
          <Title>Acesse o painel com suas credenciais</Title>
        </Header>
        <Form>
          {/* <Placeholder>Email</Placeholder> */}
          <Input
            type={'email'}
            placeholder="E-mail"
            name="email"
            value={email}
            onChange={e => {
              handleChangeEmail(e.target.value)
            }}
          ></Input>
          {/* <Placeholder>Senha</Placeholder> */}
          <Input
            type={'password'}
            placeholder="Senha"
            name="password"
            value={password}
            onChange={e => {
              handleChangePassword(e.target.value)
            }}
          ></Input>
          <Submit type="submit" onClick={handleSubmit}>
            Entrar
          </Submit>
        </Form>
      </LoginContainer>
    </Container>
  )
}

export default Login
