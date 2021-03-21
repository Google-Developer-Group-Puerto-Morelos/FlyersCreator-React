import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormComponent from './FormComponent'

import {
    log,
    updateSpeakerName,
    updateDate,
    updateName,
    updateAddress
} from './thunks'

const FormWithHOC = () => {
  const conference = useSelector((state: any) => state.conference)
  const dispatch = useDispatch()

  const formProp = {
    conference,
    log: () => dispatch(log()),
    updateName: (event: any) => dispatch(updateName(event)),
    updateSpeakerName: (event: any) => dispatch(updateSpeakerName(event)),
    updateAddress: (event: any) => dispatch(updateAddress(event)),
    updateDate: (event: any) => dispatch(updateDate(event)),
  }

  return <FormComponent {...formProp} />
}

export default FormWithHOC;