import React from 'react'

export function PatitentForm() {
  return (
    <>
        <div className='mt-4 bg-slate-200 rounded-md p-4'>
            <label className='label font-medium'>NOMBRE MASCOTA</label>
            <input type="text" placeholder="Nombre de la Mascota" className="input input-bordered w-full" />

            <label className='label font-medium'>NOMBRE PROPIETARIO</label>
            <input type="text" placeholder="Nombre del propiertario" className="input input-bordered w-full" />

            <label className='label font-medium'>EMAIL</label>
            <input type="email" placeholder="Email" className="input input-bordered w-full" />

            <label className='label font-medium'>ALTA</label>
            <input className='input input-bordered w-full' type="date" name="" id="" />

            <label className='label font-medium'>SÍNTOMAS</label>
            <textarea className="textarea textarea-bordered w-full" placeholder="Ingresa los sintomas"></textarea>

            <button className='btn btn-primary w-full mt-4'>AGREGAR PACIENTE</button>
        </div>
    </>

  )
}
