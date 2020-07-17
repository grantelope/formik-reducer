export const actions = {
  UPDATE: 'UPDATE',
  SUBMIT: 'SUBMIT'
};

export const initialContext = {
    isSubmitting: false
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.SUBMIT:
        return {
            ...state,
            isSubmitting: !state.isSubmitting
        };

    case actions.UPDATE:
        const { index, ...formik } = payload;

        return {
            ...state,
            [index]: formik
        };

    default:
        return state
  }
}
