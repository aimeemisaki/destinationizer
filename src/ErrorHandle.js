import React, { useState } from 'react';


const ErrorHandle = ({res}) => {
    const [error, setError] = useState('')

    if(res.status === 401 || res.status === 402){
        setError("Invalid request!")
      } else if (res.status === 404) {
        setError("You must enter the name of the destination in proper format.")
      } else if (res.status >= 400) {
        setError("Something went wrong!")
      }
    return (
        <p>{error}</p>
    )
}

export default ErrorHandle 