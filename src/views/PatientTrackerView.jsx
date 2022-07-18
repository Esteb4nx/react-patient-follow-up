import React from 'react'
import {PatientList} from '../components/PatientList'
import {PatitentForm} from '../components/PatitentForm'
export function PatientTrackerView() {
  return (
    <>
    <div className='flex justify-center mt-4'>
      <h1 className='text-center text-5xl font-bold'>Seguimiento pacientes <span className='text-violet-700'>Veterinaria</span></h1>
    </div>
    <div className='flex flex-wrap justify-center mt-6'>

      <div className='text-center m-2 p-2 min-w-[300px]'>
        <h2 className='text-4xl font-bold'>Seguimiento Pacientes</h2>
        <p className='text-xl font-medium mt-3'>Añade Pacientes y <span className='text-violet-700'>Administralos</span></p>
        <PatitentForm/>
      </div>

      <div className='text-center ml-8 m-2 p-2 max-w-md w-[28rem] min-w-[300px]'>
        <h2 className='text-4xl font-bold'>Listado Pacientes</h2>
        <p className='text-xl font-medium mt-3'>Administras tus <span className='text-violet-700'>Pacientes y Citas</span></p>
        <PatientList/>
      </div>

    </div>
    </>
  )
}
