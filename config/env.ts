export const ENV_URLS: Record<string, string> = {
  dev: "https://dev.example.com",
  uat: "https://www.saucedemo.com",
  prod: "https://www.saucedemo.com"
};

// read environment variable
export const environment = process.env.TEST_ENV || "prod";
