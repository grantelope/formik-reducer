import React from 'react';
import * as yup from 'yup';
import { useFormikReducer } from './useFormikReducer';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

export default function Section({ application, index }) {
    const validationSchema = yup.object().shape({
        firstName: yup.string().required('Field required.'),
        lastName: yup.string().required('Field required.')
    });

    const formik = useFormikReducer({
        validationSchema,
        enableReinitialize: true,
        initialValues: {
            firstName: application?.firstName ?? '',
            lastName: application?.lastName ?? ''
        }
    }, index);

    React.useEffect(() => {
        if (application) {
            formik.setFieldValue('firstName', application?.firstName);
            formik.setFieldValue('lastName', application?.lastName);
        }
    // maybe make application have a ref, so we can compare past to current.
    // something isn't right if adding 'formik' here chugs it.
    }, [ application ]);

    return (
        <>
            <Box style={{width: '500px', margin: '20px '}}>
                <TextField
                    error={
                        !!(
                            formik.errors
                                .firstName &&
                            formik.touched
                                .firstName
                        )
                    }
                    fullWidth
                    helperText={
                        formik.errors
                            .firstName &&
                        formik.touched.firstName
                            ? formik.errors
                                .firstName
                            : ''
                    }
                    onChange={
                        formik.handleChange
                    }
                    name="firstName"
                    type="text"
                    value={
                        formik.values.firstName
                    }
                    placeholder="First name"
                />
            </Box>
            <Box style={{width: '500px', margin: '20px '}}>
                <TextField
                    error={
                        !!(
                            formik.errors
                                .lastName &&
                            formik.touched
                                .lastName
                        )
                    }
                    fullWidth
                    helperText={
                        formik.errors
                            .lastName &&
                        formik.touched.lastName
                            ? formik.errors
                                .lastName
                            : ''
                    }
                    onChange={
                        formik.handleChange
                    }
                    name="lastName"
                    type="text"
                    value={
                        formik.values.lastName
                    }
                    placeholder="Last name"
                />
            </Box>
        </>
    );
}
