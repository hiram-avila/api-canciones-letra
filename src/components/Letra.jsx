import {useContext} from 'react'
import LetrasContext  from '../context/LetrasProvider'


const Letra = () => {
    
    const {letra} = useContext(LetrasContext)

  return (

    <div className='letra'>
        {letra}
    </div>
  )
}

export default Letra