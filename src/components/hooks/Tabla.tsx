import React from 'react'
//Tabla se considera como Tarjeta
import { IDatum } from '../interfaces/IReqRestApiContry';
//Actualizacion diseño de tabla en general
const Tabla = (contry: IDatum) => {
    console.log(contry);
    return (
    <table className='table table-dark'>
        <thead>    
            <tr className='table-primary'>
                <th scope="col" className='text-center text-success'> ID </th>
                <th scope="col" className='text-center text-success'> Nombre </th>
                <th scope="col" className='text-center text-danger'> Año </th>
                <th scope="col" className='text-center text-danger'> Color </th>
            </tr>
        </thead>
                <tbody className='text-center'>
                    <tr>
                        <td className='table-primary'>{contry.id}</td>
                        <td className='table-primary'>{contry.name}</td>
                        <td className='table-secondary'>{contry.year}</td>
                        <td className='table-secondary'>{contry.color}</td>
                    </tr>
                    </tbody>
    </table>
    );
}

export default Tabla