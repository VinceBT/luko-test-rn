import React, { createContext, useReducer } from 'react'

import insuredItems, { InsuredItems } from './mock/data/insured-items'

export type State = {
  insuredItems: InsuredItems
}

export type Action = Function

const initialState = {
  insuredItems: insuredItems,
}

const store = createContext({
  state: initialState,
  dispatch: (action: Action) => initialState,
})

const { Provider } = store

const StateProvider = (props: any) => {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => action(state),
    initialState
  )

  const dispatchAction = (action: Action) => dispatch(action)

  return <Provider value={{ state, dispatch: dispatchAction }} {...props} />
}

export { store, StateProvider }
