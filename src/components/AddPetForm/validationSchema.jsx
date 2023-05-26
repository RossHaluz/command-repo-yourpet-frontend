import * as Yup from 'yup';

const validationSchema = step => {
  let schema;

  if (step === 0) {
    schema = Yup.object().shape({
      category: Yup.string()
        .oneOf(['my-pet', 'sell', 'lost-found', 'for-free'])
        .required(),
    });
  }
  if (step === 1) {
    schema = Yup.object().shape({
      name: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required(),
      date: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(),
      breed: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required(),
      title: Yup.string().when('category', {
        is: category => ['sell', 'lost-found', 'for-free'].includes(category),
        then: () => Yup.string().required('Title is required'),
      }),
    });
  }

  if (step === 2) {
    schema = Yup.object().shape({
      sex: Yup.string().when('category', {
        is: category => ['sell', 'lost-found', 'for-free'].includes(category),
        then: () =>
          Yup.string()
            .oneOf(['male', 'female'])
            .required('The sex is required'),
      }),
      location: Yup.string().when('category', {
        is: category => ['sell', 'lost-found', 'for-free'].includes(category),
        then: () => Yup.string().required('Location is required'),
      }),
      price: Yup.string().when('category', {
        is: category => category === 'sell',
        then: () => Yup.string().required('Price is required'),
      }),
      comments: Yup.string()
        .min(4, 'Comments should be at least 4 characters')
        .max(120, 'Comments should not exceed 120 characters'),
    });
  }

  return schema;
};

export default validationSchema;
