import {useState, useContext} from 'react'
import LetrasContext  from '../context/LetrasProvider'

const Formulario = () => {
        //state de los campos del formulario
    const [busqueda, setBusqueda] = useState({artista:'', cancion:''})
    const {artista, cancion} = busqueda;

    const {setAlerta, busquedaLetra } = useContext(LetrasContext);


        //cambios del state del form
    const onChange = ( e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }
        //submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
             //validando si hay campos vacios
        if(Object.values(busqueda).includes('')){
            setAlerta('eres un culero')
            return 
        }

        busquedaLetra(busqueda)
        setAlerta('')
    }


  return (
    <form
        onSubmit={handleSubmit}
    >
        <legend>Busca por artista o cancion</legend>

        <div className='form-grid'>

            <div>
                <label htmlFor="">Artista</label>
                <input
                     type="text" 
                     name='artista'
                     placeholder='Busca al artista'
                     value={artista}
                     onChange={ onChange}
                />
            </div>

            <div>
                <label htmlFor="">Cancion</label>
                <input
                     type="text" 
                     name='cancion'
                     placeholder='Busca la cancion'
                     value={cancion}
                     onChange={ onChange}
                />
            </div>

            <input type="submit" name="" id="" />
        </div>

    </form>
  )
}

export default Formulario