module.exports = {
  projects: [
    {
      displayName: 'test',
      testMatch: ['<rootDir>/test/*.test.+(js|ts|tsx)'],
      transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    },
    {
      displayName: 'lint',
      runner: 'jest-runner-eslint',
      testMatch: ['<rootDir>/**/*.+(js|ts|tsx)'],
      testPathIgnorePatterns: ['node_modules', 'dist', 'coverage'],
    },
  ],
};
