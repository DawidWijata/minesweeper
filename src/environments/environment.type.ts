export type EnvironmentConfig = {
  name: Environment;
};

export enum Environment {
  Development = 'development',
  Production = 'production',
  Mock = 'mock',
}
