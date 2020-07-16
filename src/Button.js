import React from 'react'
import { useUIDispatch } from './UIContext'

export const Button = () => {
  const { add, substract } = useUIDispatch()

  return (
    <>
      <button
        type="button"
        onClick={() => {
          add('foo')
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          substract('bar')
        }}
      >
        -
      </button>
    </>
  )
}
