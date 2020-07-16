import React from 'react';
import Box from '@material-ui/core/Box';
import { useSectionState } from '../QuestionContext';

export default function Data() {
    const state = useSectionState();

    function areYouScrewed() {
        return Boolean(Object.keys(state).filter(s =>
            Boolean(state[s]?.errors) && Boolean(Object.keys(state[s].errors).length)
        ).length);
    }

    return <Box style={{width: '500px', margin: '20px'}}>
        {JSON.stringify(state)}
        <br /><br />
        { areYouScrewed() && <>YOU SHALL NOT PASS</>}
    </Box>;
}
