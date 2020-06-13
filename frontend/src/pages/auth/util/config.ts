import IConfig from '../types/IConfig';

const config: IConfig = {
  defaultLoginRedirectUri: '/profile',
  defaultCookieMaxAge: 30 * 24 * 60 * 60,
  homePage: '/how-it-works',
  publicPages: [
    'how-it-works',
    'home/how-it-works',
    'logout-callback',
    'public',
    'not-found',
  ],
  keycloakConfig: {
    url: 'https://accounts.iknito.com/auth',
    realm: 'Accounts',
    clientId: 'iknito-receommender',
  },
};

export default config;
