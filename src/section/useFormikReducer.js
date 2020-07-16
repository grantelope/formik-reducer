import React from 'react';
import { useFormik } from 'formik';
import { useSectionDispatch, useSectionState } from '../QuestionContext';

export function useFormikReducer(formikConfig, index) {
    const formik = useFormik({
        ...formikConfig,
        onSubmit: (values, errors, touched) => {
            console.log('submit?')
            console.log(index, {values, errors, touched})
        }
    });
    const { update } = useSectionDispatch();
    const state = useSectionState();

    // this shit is cargo culty
    React.useEffect(() => {
        if (state.release) {
            formik.submitForm();
        }

    }, [ state.release ]);

    React.useEffect(() => {
        update({
            index: index,
            values: formik.values,
            errors: formik.errors
        });
    }, [ state.release, formik.values, formik.errors, formik.dirty, index, update ]);

    return formik;
}
