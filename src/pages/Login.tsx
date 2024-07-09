import { Button, Row } from 'antd';
import { FieldValues } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { setUser } from '../redux/features/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';

import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import CustomForm from '../components/form/Form';
import FormInput from '../components/form/Input';
import { IUser } from '../interface';
import verifyToken from '../utils/verifyToken';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const defaultValues = {
    userId: 'A-0001',
    password: '12346',
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Logging in');

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as IUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success('Logged in', { id: toastId });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error('Something went wrong', { id: toastId });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <CustomForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <FormInput type="text" name="userId" label="ID:" />
        <FormInput type="text" name="password" label="Password:" />
        <Button type='primary' htmlType="submit">Login</Button>
      </CustomForm>
    </Row>
  );
};

export default Login;