import IKeycloakConfig from './IKeycloakConfig';

export default interface IConfig {
  homePage: string;
  defaultLoginRedirectUri: string;
  defaultCookieMaxAge: number;
  publicPages: string[];
  keycloakConfig: IKeycloakConfig;
}