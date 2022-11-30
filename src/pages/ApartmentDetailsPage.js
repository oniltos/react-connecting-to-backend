import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'

const APIUrl = 'https://ironbnb-m3.herokuapp.com/apartments'

const ApartmentDetailsPage = () => {
    const { apartmentId } = useParams()
    const [apartment, setApartment] = useState(null)

    useEffect(() => {
        axios.get(`${APIUrl}/${apartmentId}`)
            .then(response => {
                setApartment(response.data)
            }).catch(error => console.log(error))
    }, [apartmentId])

    return (
        <div>
            <h1>Apartment Details</h1>
            { apartment && <>
                <img src={ apartment.img } alt="apartment" />
                <h2>{ apartment.title }</h2>
                <p>Price: { apartment.pricePerDay }</p>
                <p>Created At: { apartment.createdAt }</p>
            </>}
            
        </div>
    )
}

export default ApartmentDetailsPage