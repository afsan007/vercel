import { useEffect, useState } from 'react';
import Router from 'next/router';
import { LoadingData } from "bp-components";
// import { includeDefaultNamespaces } from '../../i18n';
import config from './auth/util/config';

const LogoutCallback = () => {
  const [loading] = useState(true);
  useEffect(() => {
    process();
  }, []);

  const process = () => {
    console.log(config.homePage)
    Router.push(config.homePage);
  };

  return <>{loading ? <LoadingData loading = {loading}> 
    {()=> {return (<></>)}}</LoadingData>: ''}</>;
};

// LogoutCallback.getInitialProps = () => {
//   return {
//     namespacesRequired: includeDefaultNamespaces(['front']),
//   };
// };

export default LogoutCallback;