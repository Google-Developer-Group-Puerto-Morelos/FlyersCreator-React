import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FlyerComponent from './FlyerComponent'



const HallOfOrganizationWithHOC = () => {
  const conference = useSelector((state: any) => state.conference)

  const formProp = {
    conference
  }

  return <FlyerComponent {...formProp} />
}

export default HallOfOrganizationWithHOC;