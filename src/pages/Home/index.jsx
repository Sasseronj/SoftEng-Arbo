import React from 'react'
import AuthConsumer from '../../hooks/auth'
import QRCode from '../../services/QRCode'

function Home() {

  const [authed] = AuthConsumer()
  return (
    <div className='pageHome boxContent'>
      
      <h1>Home</h1>
        <h5>Olá, {authed.name}!</h5>
        <p>Desejamos uma ótima navegação pelo ambiente da plataforma.</p>
        <p>Caso haja necessidade, solicite ajuda aos administradores. Para isso, basta acessar o menu <span className='mark'>Opcões</span> e depois clicar em <span className='mark'>Contato</span>.</p>
        <QRCode text='Teste do Sasseron!!' sizer={300}/>
    </div>
  )
}

export default Home