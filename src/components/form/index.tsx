import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormComponent from './FormComponent'
import { IFormComponentProps } from './interfaces'

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

  const formProp : IFormComponentProps = {
    conference,
    updateName: (event: InputEvent) => dispatch(updateName(event)),
    updateSpeakerName: (event: InputEvent) => dispatch(updateSpeakerName(event)),
    updateCity: (event: InputEvent) => dispatch(updateCity(event)),
    updateDate: (event: InputEvent) => dispatch(updateDate(event)),
    updateTheme: (event: InputEvent) => dispatch(updateTheme(event)),
    saveFlyer: () => saveFlyer
  }

  return <FormComponent {...formProp} />
}

export default FormWithHOC;