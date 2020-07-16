import React from 'react'
import { SectionProvider } from './QuestionContext';
import Section from './section/Section';
import Button from './section/SubmitButton';
import Data from './section/Data';

import './App.css'

function App() {
  return (
    <>
        <SectionProvider>
            <h1>Foo section</h1>
            <Section index="foo" />
            <br /><br />
            <h1>Bar section</h1>
            <Section index="bar" application={{firstName: 'Nick', lastName: 'Jones'}}/>
            <Button />
            <Data />
        </SectionProvider>
    </>

  )
}

export default App
