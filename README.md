# Playwright Automation

A comprehensive Playwright-based test automation framework for testing web applications, specifically designed for the Saucedemo inventory management system.

## Project Structure

```
├── config/
│   └── env.ts                 # Environment configuration
├── pages/
│   ├── LoginPage.ts           # Login page object model
│   └── Inventory/
│       ├── InventoryPage.ts   # Inventory page object model
│       └── locators.ts        # UI locators for inventory page
├── tests/
│   ├── auth.setup.ts          # Authentication setup for test sessions
│   ├── login.spec.ts          # Login page test cases
│   └── inventory.spec.ts      # Inventory page test cases
├── playwright-report/         # Test execution reports
├── test-results/              # Test result artifacts
├── playwright.config.ts       # Playwright configuration
└── package.json               # Project dependencies
```

## Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd playwrightlearning
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Configuration

Environment-specific configurations are managed in `config/env.ts`. Update this file to set your target environment URLs and credentials.

## Environment Setup

### Configure Environments

Update `config/env.ts` to specify the URLs and credentials for each environment:
- **dev** - Development environment
- **uat** - User Acceptance Testing environment
- **prod** - Production environment

### Create Environment Variables File

Copy `.env.example` to `.env` and update with your environment-specific credentials:
```bash
cp .env.example .env
```

Then edit `.env` with your credentials:
```
DEV_USERNAME=your_dev_user
DEV_PASSWORD=your_dev_password

UAT_USERNAME=your_uat_user
UAT_PASSWORD=your_uat_password

PROD_USERNAME=your_prod_user
PROD_PASSWORD=your_prod_password
```

## Running Tests

### Run tests by environment

```bash
# Development environment (default)
npm run test:dev

# UAT environment
npm run test:uat

# Production environment
npm run test:prod
```

### Run all tests
```bash
npm test
```

### Run tests in headed mode (see browser)
```bash
# Default environment
npm run test:headed

# Specific environment
npm run test:headed:dev
npm run test:headed:uat
npm run test:headed:prod
```

### Run tests in debug mode
```bash
# Default environment
npm run test:debug

# Specific environment
npm run test:debug:dev
npm run test:debug:uat
npm run test:debug:prod
```

### Run tests in a specific file
```bash
npx playwright test tests/login.spec.ts

# With environment variable
TEST_ENV=dev npx playwright test tests/login.spec.ts
```

### Run tests with specific browser
```bash
npx playwright test --project=chromium
```

## View Test Reports

After running tests, open the HTML report:
```bash
npx playwright show-report
```

## Test Structure

### Page Object Model
- **LoginPage.ts** - Contains login-related page interactions and assertions
- **InventoryPage.ts** - Contains inventory page interactions and assertions
- **locators.ts** - Centralized UI element locators for the inventory page

### Test Files
- **auth.setup.ts** - Sets up authentication state for tests
- **login.spec.ts** - Test cases for login functionality
- **inventory.spec.ts** - Test cases for inventory page features

## Key Test Cases

### Login Tests
- Login form elements visibility
- Invalid login error handling
- Successful login flow

### Inventory Tests
- Page loads with correct title
- Logo text validation
- Product title, description, and price display
- Price format validation on inventory page

## Best Practices

1. Use Page Object Model pattern for maintainability
2. Store locators in dedicated files
3. Use meaningful test descriptions
4. Implement proper waits and assertions
5. Keep tests independent and isolated

## Debugging

- Use `--debug` flag for step-by-step debugging
- Use `page.pause()` in test code to pause execution
- Check `test-results/` directory for failed test artifacts
- Review `playwright-report/` for detailed test reports

## CI/CD Integration

This project is ready for integration with CI/CD pipelines. Configure your pipeline to:
1. Install dependencies
2. Install browsers
3. Run tests with `npx playwright test`
4. Archive test reports

## Environment-Specific Testing

The test suite supports running against different environments using the `TEST_ENV` variable:

- **dev** - For testing against development environment
- **uat** - For testing against UAT environment
- **prod** - For testing against production environment (default)

### Available npm Scripts

```json
{
  "test": "playwright test",
  "test:dev": "TEST_ENV=dev playwright test",
  "test:uat": "TEST_ENV=uat playwright test",
  "test:prod": "TEST_ENV=prod playwright test",
  "test:headed": "playwright test --headed",
  "test:headed:dev": "TEST_ENV=dev playwright test --headed",
  "test:headed:uat": "TEST_ENV=uat playwright test --headed",
  "test:headed:prod": "TEST_ENV=prod playwright test --headed",
  "test:debug": "playwright test --debug",
  "test:debug:dev": "TEST_ENV=dev playwright test --debug",
  "test:debug:uat": "TEST_ENV=uat playwright test --debug",
  "test:debug:prod": "TEST_ENV=prod playwright test --debug",
  "report": "playwright show-report"
}
```

## Contributing

When adding new tests:
1. Create page objects for new pages in `pages/`
2. Keep locators in `locators.ts` files
3. Follow existing naming conventions
4. Add meaningful test descriptions
5. Ensure tests work across all environments (dev, uat, prod)

## Support

For Playwright documentation, visit: https://playwright.dev
