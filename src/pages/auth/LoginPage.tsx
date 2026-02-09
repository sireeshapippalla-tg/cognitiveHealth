import { useLoginMutation } from '../../features/auth/authApi';
import { useAppDispatch } from '../../app/hooks';
import { loginSuccess } from '../../features/auth/authSlice';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  type UserResponse = {
    id: string;
    email: string;
    role?: string;
  };
  
  const handleLogin = async () => {
    const res = await login({
      email: 'test@test.com',
      password: 'Password123!',
    }).unwrap() as { user: UserResponse; token: string };
  
    dispatch(loginSuccess({
      user: {
        id: res.user.id,
        email: res.user.email,
        role: res.user.role ?? '', // Provide a default string if role is undefined
      },
      token: res.token,
      isAuthenticated: true,
    }));
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginPage;
