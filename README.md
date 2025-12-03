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

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in a specific file
```bash
npx playwright test tests/login.spec.ts
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run tests in debug mode
```bash
npx playwright test --debug
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

## Contributing

When adding new tests:
1. Create page objects for new pages in `pages/`
2. Keep locators in `locators.ts` files
3. Follow existing naming conventions
4. Add meaningful test descriptions

## Support

For Playwright documentation, visit: https://playwright.dev
