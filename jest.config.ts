import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.ts$': ['ts-jest', { isolatedModules: true }],
    },
    fakeTimers: {
      enableGlobally: true,
    },
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    transformIgnorePatterns: ['/node_modules/(?!flat)/'],
    moduleDirectories: ['node_modules', 'src'],
  };
};
