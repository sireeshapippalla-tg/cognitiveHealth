// import { Navigate } from 'react-router-dom';
// import { useAppSelector } from '../app/hooks';

type Props = {
  children: JSX.Element;
};

const AuthGuard = ({ children }: Props) => {
  // const isAuthenticated = useAppSelector(
  //   (state) => state.auth.isAuthenticated
  // );

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  return children;
};

export default AuthGuard;
