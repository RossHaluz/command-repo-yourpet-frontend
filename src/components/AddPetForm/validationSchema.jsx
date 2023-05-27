import * as Yup from 'yup';
import parse from 'date-fns/parse';

const validationSchema = step => {
  let schema;
  const today = new Date();

  if (step === 0) {
    schema = Yup.object().shape({
      category: Yup.string()
        .oneOf(['my-pet', 'sell', 'lost-found', 'for-free'])
        .required(),
    });
  }

  if (step === 1) {
    schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .trim()
        .min(2, 'Too Short!')
        .max(16, 'Too Long!'),
      dateOfBirth: Yup.date()
        .transform(function (value, originalValue) {
          if (this.isType(value)) {
            return value;
          }
          const result = parse(originalValue, 'dd.MM.yyyy', new Date());
          return result;
        })
        .typeError('please enter a valid date')
        .max(today, 'Date of birth should be less then today')
        .required(),
      breed: Yup.string()
        .required()
        .min(2, 'Too Short!')
        .max(16, 'Too Long!')
        .trim(),
      title: Yup.string().when('category', {
        is: category => ['sell', 'lost-found', 'for-free'].includes(category),
        then: () => Yup.string().trim().required('Title is required'),
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
      place: Yup.string().when('category', {
        is: category => ['sell', 'lost-found', 'for-free'].includes(category),
        then: () => Yup.string().trim().required('Location is required'),
      }),
      price: Yup.number().when('category', {
        is: category => category === 'sell',
        then: () =>
          Yup.number()
            .required('Price is required')
            .positive('Price should be positive')
            .typeError('please enter a valid number'),
      }),
      comments: Yup.string()
        .min(4, 'Comments should be at least 4 characters')
        .max(120, 'Comments should not exceed 120 characters')
        .trim(),
      image: Yup.mixed()
        .required('Image is required')
        .test(
          'image',
          'Image size must be less then 3mb',
          value => value && value.size <= 3 * 1024 * 1024
        ),
    });
  }

  return schema;
};

export default validationSchema;
