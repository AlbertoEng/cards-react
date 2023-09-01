
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Card from './components/Card'

function App() {
  const [listCards, setListCards] = useState([])
  const [team, setTeam] = useState([])
  const [card, setCard] = useState({
    name: '',
    image: ''
  });

  const cardHandler = (e) => {
    setCard({
      ...card,
      id: uuidv4(),
      [e.target.name]: e.target.value
    })
  }

  const addCardHandler = (e) => {
    e.preventDefault()
    if (card.name === '' || card.image === '') {
      return
    }
    setListCards([...listCards, card])
  }


  const agregarAlEquipo = ( e, name, id )=>{
    if( team.length < 3){
      const newMember = {
        id: id,
        name: name
      }
      setTeam( [...team, newMember] )
      setListCards(listCards.filter( card  => card.id !== id))
    }
    
  } 


  return (
    <>
      <div className="container-fluid pt-3">
        <div className=" row p-3">
          <div className="col-3" style={{ minWidth: '300px'}}>
            <form className='border p-4 rounded'>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" name='name' id="nombre" aria-describedby="emailHelp" onChange={cardHandler} />
              </div>
              <div className="mb-3">
                <label htmlFor="imagen" className="form-label">URL de imagen</label>
                <input type="text" className="form-control" name='image' id="" onChange={cardHandler} />
              </div>
              <button onClick={addCardHandler} type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className='mt-3'>
              <h3>Team</h3>
              {
                team.length >= 3 ? <div className="alert alert-warning" role="alert">
                El equipo solo es de 3 personas
            </div> : null
              }
              {
                  team.map(( person )=>{
                      return <ul  key={person.id} className="list-group mb-1">
                        <li className='list-group-item bg-primary text-white fw-bold'>
                          <p>{person.name}</p>
                        </li>
                      </ul>
                  })
              }
            </div>
          </div>
          <div className="col-8 d-flex flex-wrap">
            {
              listCards.map((card) => {
                return <Card
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    image={card.image}
                    agregarAlEquipo={agregarAlEquipo}
                  />
                
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
