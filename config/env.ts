export interface EnvironmentConfig {
  baseURL: string;
  apiURL?: string;
  credentials?: {
    username: string;
    password: string;
  };
}

const ENV_CONFIGS: Record<string, EnvironmentConfig> = {
  dev: {
    baseURL: "https://dev.example.com",
    apiURL: "https://api-dev.example.com",
    credentials: {
      username: process.env.DEV_USERNAME || "standard_user",
      password: process.env.DEV_PASSWORD || "secret_sauce"
    }
  },
  uat: {
    baseURL: "https://uat.example.com",
    apiURL: "https://api-uat.example.com",
    credentials: {
      username: process.env.UAT_USERNAME || "standard_user",
      password: process.env.UAT_PASSWORD || "secret_sauce"
    }
  },
  prod: {
    baseURL: "https://www.saucedemo.com",
    apiURL: "https://api.example.com",
    credentials: {
      username: process.env.PROD_USERNAME || "standard_user",
      password: process.env.PROD_PASSWORD || "secret_sauce"
    }
  }
};

// Default to 'dev' if not specified
export const environment = (process.env.TEST_ENV || "prod").toLowerCase() as keyof typeof ENV_CONFIGS;

// Validate environment
if (!ENV_CONFIGS[environment]) {
  throw new Error(`Invalid environment: ${environment}. Supported: dev, uat, prod`);
}

export const envConfig = ENV_CONFIGS[environment];
export const ENV_URLS = Object.fromEntries(
  Object.entries(ENV_CONFIGS).map(([key, config]) => [key, config.baseURL])
);
