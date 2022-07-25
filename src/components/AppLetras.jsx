import {useContext} from 'react'

import LetrasContext from '../context/LetrasProvider'
import Formulario from './Formulario'
import Alerta from './Alerta'
import Letra from './Letra'



const AppLetras = () => {

    const {alerta, letra} = useContext(LetrasContext)

  return (
    <>
        <header>Busqueda de canciones</header>

        <Formulario />

        <main>
            {alerta ? <Alerta>{alerta}</Alerta> : 
            letra ? <Letra/>: <p>busca la letra</p> }
        </main>

    </>
    
  )
}

export default AppLetras