import React from 'react'

const Variables = () => {

    const saludo = 'Hola desde constante'
    const image = 'https://hipertextual.com/files/2017/03/Fondos-de-pantalla-espaciales-34.jpg'

    return (
        <div>
            <h2>Nuevo componente { saludo }</h2>
            <img src={image} alt="" width="350px" />
        </div>
    )
}

export default Variables
