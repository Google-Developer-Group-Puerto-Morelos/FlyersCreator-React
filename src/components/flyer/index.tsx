import React from 'react'
import { useSelector } from 'react-redux'
import { IDefaultState } from '../../models/IState';
import FlyerComponent from './FlyerComponent'
import {
  getBackground
} from './thunks';


const HallOfOrganizationWithHOC = () => {
  const conference = useSelector((state: IDefaultState) => state.conference)
  

  const formProp = {
    conference,
    background: getBackground(conference)
  }

  return <FlyerComponent {...formProp} />
}

export default HallOfOrganizationWithHOC;