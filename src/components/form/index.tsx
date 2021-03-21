import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormComponent from './FormComponent'

import {
    log,
    updateSpeakerName,
    updateDate,
    updateName,
    updateCity,
    updateTheme,
    saveFlyer
} from './thunks'

const FormWithHOC = () => {
  const conference = useSelector((state: any) => state.conference)
  const dispatch = useDispatch()

  const formProp = {
    conference,
    log: () => dispatch(log()),
    updateName: (event: any) => dispatch(updateName(event)),
    updateSpeakerName: (event: any) => dispatch(updateSpeakerName(event)),
    updateCity: (event: any) => dispatch(updateCity(event)),
    updateDate: (event: any) => dispatch(updateDate(event)),
    updateTheme: (event: any) => dispatch(updateTheme(event)),
    saveFlyer: (event: any) => saveFlyer
  }

  return <FormComponent {...formProp} />
}

export default FormWithHOC;