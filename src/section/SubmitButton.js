import React from 'react'
import Button from '@material-ui/core/Button';
import { useSectionDispatch } from '../QuestionContext';

export default function Btn () {
  const { submit } = useSectionDispatch()

  return <Button onClick={() => submit()}>Release the river.</Button>
}
