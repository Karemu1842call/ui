import React from 'react'
import Doc from './Doc'
import useFetchData from '../hooks/fetchData'
import useFetchPatient from '../hooks/fetchPatient'
import Patient from './Patient'

function Doctors() {
  const [doc, setDoc, url] = useFetchData()
  const [pat, setPat] = useFetchPatient()

  return (
    <div>
      <h3>Our doctors:</h3>
        <ol>
            {!doc ? "Loading..." : doc?.map((doctor)=>{
              return (
              <li key={doctor?.id}>
                <Doc doctor={doctor}/>
              </li>
              )
            })}
        </ol>
        <h3>Current patients being served:</h3>
        <ol>
            {!pat ? "Loading..." : pat?.map((patient)=>{
              return (
              <li key={patient?.id}>
                <Patient patt={patient}/>
              </li>
              )
            })}
        </ol>
    </div>
  )
}

export default Doctors;