import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStepProgress } from '../../redux/StepProgress-reducer'
import Step from './Step'

const StepContainerProgress = (props) => {

  const valueStore = useSelector(state => state.step.data)
  const dispatch = useDispatch()

  const changePoint = (data) => {
    if (data > valueStore.currentStep && (data - valueStore.currentStep) > 1) {
      dispatch(setStepProgress(valueStore.currentStep + 1))
      return
    } else if (data > valueStore.currentStep && (data - valueStore.currentStep) === 1) {
      dispatch(setStepProgress(data))
      return
    }
    if (data < valueStore.currentStep && (valueStore.currentStep - data) > 1) {
      dispatch(setStepProgress(valueStore.currentStep - 1))
      return
    } else if (data < valueStore.currentStep && (valueStore.currentStep - data) === 1) {
      dispatch(setStepProgress(data))
      return
    }
  }

  return <Step {...valueStore} changePoint={changePoint}/>
}

export default StepContainerProgress