import { useEffect, useState, useContext } from 'react';
import Router, { useRouter } from 'next/router';
import { LoadingData } from "bp-components";
// import { includeDefaultNamespaces } from '../../i18n';
import config from './auth/util/config';
import AuthContext from './auth/context/AuthContext';

const LoginCallback = () => {
  const { showComponent, getToken } = useContext(AuthContext);
  const router = useRouter();
  const [loading] = useState(true);
  let lastPage = '';
  useEffect(() => {}, []);

  useEffect(() => {
    if (showComponent && getToken()) {
      process();
    }
  }, [showComponent, getToken()]);

  const process = () => {
    lastPage = atob(router.query.lastPage as string);
    if (!lastPage || lastPage === config.homePage) {
      lastPage = config.defaultLoginRedirectUri;
    }
    Router.push(lastPage);
  };

  return <>{loading ? <LoadingData loading = {loading}> 
    {()=> {return (<></>)}}</LoadingData>: ''}</>;
};

// LoginCallback.getInitialProps = () => {
//   return {
//     namespacesRequired: includeDefaultNamespaces(['front']),
//   };
// };

export default LoginCallback;