import { array, number, object, string } from 'yup';

const useValidation = () => {
  const schema = object().shape({
    linkUrl: string().test((val, context) => {
      const { createError } = context;
      const regexUrl =
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
      if (val && regexUrl.test(val as string) === false) {
        return createError({
          path: 'linkUrl',
          message: 'Format URL tidak valid',
        });
      }

      return true;
    }),
    email: string().test((val, context) => {
      const { createError } = context;
      const regexEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (val && regexEmail.test(val as string) === false) {
        return createError({
          path: 'email',
          message: 'Format Email tidak valid',
        });
      }

      return true;
    }),
    recipient: object().shape({
      name: string().required('Wajib diisi'),
      email: string()
        .required('Wajib diisi')
        .test((val, context) => {
          const { createError } = context;
          const regexEmail =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (val && regexEmail.test(val as string) === false) {
            return createError({
              path: 'recipient.email',
              message: 'Format Email tidak valid',
            });
          }

          return true;
        }),
      phoneNumber: string()
        .required('Wajib diisi')
        .test((val, context) => {
          const { createError } = context;
          const regexPhone = /^\+?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,8}$/;
          if (val && regexPhone.test(val as string) === false) {
            return createError({
              path: 'recipient.phoneNumber',
              message: 'Format Nomor Handphone tidak valid',
            });
          }

          return true;
        }),
    }),
    address: object().shape({
      city: string().required('Wajib diisi'),
      zipCode: string().required('Wajib diisi'),
      fullAddress: string().required('Wajib diisi'),
      logisticOption: string(),
    }),
  });

  return {
    schema,
  };
};

export default useValidation;
