export const actions = {
  UPDATE: 'UPDATE',
  SUBMIT: 'SUBMIT'
};

export const initialContext = {
    release: null
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.SUBMIT:
        return {
            ...state,
            release: Date.now()
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
