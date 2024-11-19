export const getRequiredEnvVar = (key: keyof NodeJS.ProcessEnv): string => {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Required environment variable "${key}" is not set`);
    }
    return value;
  };