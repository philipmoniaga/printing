import { Fragment, useEffect, useMemo, useState } from 'react';
import { Typography, Button, TextField, Dialog, Box, FormControl } from '@mui/material';
import { useForm, Controller, FieldValues } from 'react-hook-form';

interface Props {
  isOpen: boolean;
  handleOpen: (val: boolean) => void;
}

export default function LoginModal({ isOpen, handleOpen }: Props) {
  const { control, handleSubmit, watch, resetField } = useForm({
    defaultValues: {
      loginEmail: '',
      loginPassword: '',
      registerEmail: '',
      registerName: '',
      registerPassword: '',
    },
  });
  const { loginEmail, loginPassword, registerEmail, registerName, registerPassword } = watch();
  const [isLoginState, setIsLoginState] = useState(true);

  const handleClose = () => {
    handleOpen(false);
    setIsLoginState(true);
  };

  const submitForm = (data: FieldValues) => {
    console.log('data', data);
  };

  useEffect(() => {
    resetField('loginEmail');
    resetField('loginPassword');
    resetField('registerEmail');
    resetField('registerName');
    resetField('registerPassword');
  }, [isLoginState, resetField]);

  const renderField = () => {
    const Login = [
      { name: 'loginEmail', type: 'email', placeHolder: 'Email' },
      { name: 'loginPassword', type: 'password', placeHolder: 'Password' },
    ];
    const Register = [
      { name: 'registerName', type: 'string', placeHolder: 'Nama' },
      { name: 'registerPassword', type: 'password', placeHolder: 'Password' },
      { name: 'registerEmail', type: 'email', placeHolder: 'Email' },
    ];

    return (isLoginState ? Login : Register).map((item, index) => {
      return (
        <Box mb={1} key={index}>
          <Controller
            name={item.name as any}
            control={control}
            render={({ field }) => {
              return (
                <FormControl fullWidth {...field}>
                  <TextField
                    value={field.value}
                    margin="dense"
                    size="small"
                    type={item.type}
                    fullWidth
                    placeholder={item.placeHolder}
                  />
                </FormControl>
              );
            }}
          />
        </Box>
      );
    });
  };

  const disabledButton = useMemo(() => {
    if (isLoginState) {
      return !loginEmail || !loginPassword;
    } else {
      return !registerEmail || !registerName || !registerPassword;
    }
  }, [isLoginState, loginEmail, loginPassword, registerEmail, registerName, registerPassword]);

  return (
    <Fragment>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          sx: { borderRadius: '10px' },
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}>
        <Box width="400px" px={3} py={5}>
          <Box display="flex" justifyContent="space-between" pb={2}>
            <Typography variant="h5" fontWeight={600}>
              {isLoginState ? 'Masuk' : 'Daftar'}
            </Typography>

            <Typography
              color="primary"
              fontWeight={600}
              sx={{ cursor: 'pointer' }}
              onClick={() => setIsLoginState(!isLoginState)}>
              {isLoginState ? 'Daftar' : 'Masuk'}
            </Typography>
          </Box>
          {renderField()}
          <Box mt={4}>
            <Button fullWidth variant="contained" disabled={disabledButton} onClick={() => handleSubmit(submitForm)()}>
              {isLoginState ? 'Masuk' : 'Daftar'}
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Fragment>
  );
}
