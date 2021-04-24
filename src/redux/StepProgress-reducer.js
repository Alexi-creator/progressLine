const ADD_STEP_PROGRESS = 'ADD_STEP_PROGRESS'

const initialState = {
  data: {
    numberStep: 2,
    currentStep: 0,
    textStep: ['1point', '2point', '3point']
  } 
}


const StepProgressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STEP_PROGRESS:
        return {
          ...state,
          data: {
            ...state.data,
            currentStep: action.newStep
          }
        }
    default:
      return state;
  }
}

export const setStepProgress = (newStep) => ({ type: ADD_STEP_PROGRESS, newStep})

export default StepProgressReducer;