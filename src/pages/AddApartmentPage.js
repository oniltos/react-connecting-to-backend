import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const APIUrl = 'https://ironbnb-m3.herokuapp.com/apartments'

function AddApartmentPage() {
    const [title, setTitle] = useState('')
    const [pricePerDay, setPricePerDay] = useState(1)

    const navigate = useNavigate()

    const handleSubmit = e => {
      e.preventDefault()
      const newApartment = { title, pricePerDay }

      axios.post(APIUrl, newApartment)
        .then(response => {
          setTitle('')
          setPricePerDay(1)

          navigate('/')

        }).catch(error => console.log(error))
    }

    return (
      <div className="AddApartmentPage">
        <h3>Add New Apartment</h3>

        <form onSubmit={ handleSubmit }>
          <label htmlFor="title">Title</label>
          <input 
            type="text"
            name="title"
            value={title} 
            onChange={ e => setTitle(e.target.value) }
          />

          <label htmlFor='pricePerDay'>Price per Day</label>
          <input
            type="number"
            name="pricePerDay"
            value={pricePerDay}
            onChange={ e => setPricePerDay(e.target.value )}
          />

          <button type="submit">Create Apartment</button>
        </form>
      </div>
    );
  }
  
  export default AddApartmentPage;