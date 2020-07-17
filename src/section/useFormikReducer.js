import React from 'react';
import { useFormik } from 'formik';
import { useSectionDispatch, useSectionState } from '../QuestionContext';

export function useFormikReducer(formikConfig, index) {
    const formik = useFormik({
        ...formikConfig,
        onSubmit: (values, errors, touched) => {
            console.log('submit?')
            // console.log(index, {values, errors, touched})
        }
    });
    const { update } = useSectionDispatch();
    const state = useSectionState();

    React.useEffect(() => {
        if (state.isSubmitting) {
            formik.submitForm();
        }

    // make formik have a ref, so we can compare past to current.
    }, [ state.isSubmitting ]);

    React.useEffect(() => {
        update({
            index: index,
            values: formik.values,
            errors: formik.errors
        });
    }, [ state.release, formik.values, formik.errors, formik.dirty, index, update ]);

    return formik;
}
