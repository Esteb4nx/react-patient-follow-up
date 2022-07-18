import React from "react";

export function PatientItem() {
  return (
    <>
      <div className="text-left mt-4 bg-slate-200 rounded-md p-4">
        <p className="font-medium">
          NOMBRE: <span>Perro ql</span>
        </p>
        <p className="font-medium">
          PROPIETARIO: <span>XD</span>
        </p>
        <p className="font-medium">
          EMAIL: <span>correo@correo.com</span>
        </p>
        <p className="font-medium">
          FECHA ALTA: <span>2022-04-13</span>
        </p>
        <p className="font-medium">
          SÍNTOMAS: <span>ASASAASSASA</span>
        </p>
        <div className="mt-4 flex justify-around">
          <button className="btn btn-primary h-2">EDITAR</button>
          <button className="btn btn-secondary h-2">ELIMINAR</button>
        </div>
      </div>
    </>
  );
}
