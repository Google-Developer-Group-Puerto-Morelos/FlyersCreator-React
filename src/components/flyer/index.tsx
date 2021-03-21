import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FlyerComponent from './FlyerComponent'
import {
  getBackground
} from './thunks';


const HallOfOrganizationWithHOC = () => {
  const conference = useSelector((state: any) => state.conference)
  

  const formProp = {
    conference,
    background: getBackground(conference)
  }

  return <FlyerComponent {...formProp} />
}

export default HallOfOrganizationWithHOC;