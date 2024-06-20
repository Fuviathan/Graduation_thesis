import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Provider, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getUser } from '@/state/Auth/Action';

const Authenticate = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    // Lấy token từ URL
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token');

    if (token) {
      // Lưu token vào localStorage
      localStorage.setItem('userToken', `"${token}"`);
      const user = dispatch(getUser(token))
      if (user) {
        router.push('/');
      }else{
        router.push('/login');
        toast.error("Dang nhap that bai!");
      }

      ;
    }
  }, []);

  return <div></div>
};

export default Authenticate;
