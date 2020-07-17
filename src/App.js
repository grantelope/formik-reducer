import React from 'react'
import { SectionProvider } from './QuestionContext';
import Section from './section/Section';
import Button from './section/SubmitButton';
import Data from './section/Data';

import './App.css'

const initApp = {firstName: 'Nick', lastName: 'Jones'};

function App() {
    const [application, setApplication] = React.useState(initApp);
  return (
    <>
        <SectionProvider>
            <h1>Foo section</h1>
            <Section index="foo" />
            <br /><br />
            <h1>Bar section</h1>
            <Section index="bar" application={application}/>
            <Button />
            <Data />

        </SectionProvider>

        <button onClick={() => setApplication({firstName: 'Peter', lastName: 'Pan'})}>Reset</button>
    </>

  )
}

export default App
