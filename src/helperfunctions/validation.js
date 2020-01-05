export const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Required';
    } else if (values.title.length > 15) {
        errors.title = 'Must be 15 characters or less';
    }

    if (!values.director) {
        errors.director = 'Required';
    } else if (values.director.length > 15) {
        errors.director = 'Must be 15 characters or less';
    }

    if (!values.year) {
        errors.year = 'Required';
    } else if (values.year.length > 15) {
        errors.year = 'Must be 15 characters or less';
    }

    if (!values.rating) {
        errors.rating = 'Required';
    } else if (values.rating.length > 15) {
        errors.rating = 'Must be 15 characters or less';
    }

    return errors;
};