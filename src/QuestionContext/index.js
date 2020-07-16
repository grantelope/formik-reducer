import React from 'react'
import { reducer, actions, initialContext } from './reducer'

const StateContext = React.createContext(initialContext);
const DispatchContext = React.createContext(undefined);

export const SectionProvider = ({ children }) => {
  const [ state, dispatch ] = React.useReducer(reducer, initialContext);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export const useSectionState = () => React.useContext(StateContext);

export const useSectionDispatch = () => {
  const dispatch = React.useContext(DispatchContext);

  if (dispatch === undefined) {
    throw new Error('Dispatch must be within a provider');
  }

  const update = React.useCallback((payload) => {
    dispatch({ type: actions.UPDATE, payload });
  }, [ dispatch ]);

  const submit = React.useCallback(() => {
    dispatch({ type: actions.SUBMIT });
  }, [ dispatch ]);



  return React.useMemo(
    () => ({
      update,
      submit
    }),
    [ submit, update]
  )
}
