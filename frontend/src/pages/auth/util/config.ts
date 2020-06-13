import IConfig from '../types/IConfig';

const config: IConfig = {
  defaultLoginRedirectUri: '/index',
  defaultCookieMaxAge: 30 * 24 * 60 * 60,
  homePage: '/index',
  publicPages: [
    'index',
    'webinar',
    '/webinar/',
    '/webinar/[webId]',
    '/presenter/[presenterId]',
    'presenter',
    '/presenter',
    '/presenter/'
  ],
  keycloakConfig: {
    url: 'https://accounts.iknito.com/auth',
    realm: 'Accounts',
    clientId: 'iknito-receommender',
  },
};

export default config;
