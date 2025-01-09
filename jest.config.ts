import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    transformIgnorePatterns: ['/node_modules/(?!flat)/'],
    moduleDirectories: ['node_modules', 'src'],
    fakeTimers: {
      enableGlobally: true,
    },
  };
};
