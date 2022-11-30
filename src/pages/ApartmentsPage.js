import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

const APIUrl = 'https://ironbnb-m3.herokuapp.com/apartments'

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    axios.get(APIUrl)
      .then(response => {
        setApartments(response.data)
      }).catch(error => console.log(error))
  }, [])
  
  return (
    <div>
      <h3>List of apartments</h3>
      {
        apartments.map(apartment => {
          return (
            <div key={apartment._id} className="card">
              <img src={apartment.img} alt="apartment" />
              <h3><Link to={`/apartments/${apartment._id}`}>{ apartment.title }</Link></h3>
              <p>Price: { apartment.pricePerDay }</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default ApartmentsPage;