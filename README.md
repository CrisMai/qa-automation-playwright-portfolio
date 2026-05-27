QA Automation Portfolio - Playwright & TypeScript

This repository serves as a technical showcase of an End-to-End (E2E) test automation framework developed using Playwright and TypeScript. The project demonstrates the application of industry-standard best practices in quality assurance, focusing on maintainability, scalability, and automated validation.

🚀 Key Features & Scenarios
Architecture: Implemented the Page Object Model (POM) pattern to ensure clean, reusable, and maintainable test code.

Test Scenarios:

Authentication: Validated successful login and robust error handling for invalid credentials (negative testing).

Inventory Flow: End-to-end purchasing process, including product selection and cart management.

Session Management: Automated logout flows to verify secure session termination.

CI/CD Integration: Automated cross-browser validation (Chromium, Firefox, WebKit) configured via GitHub Actions to ensure code quality on every commit.

🛠 Tech Stack
Language: TypeScript

Test Framework: Playwright

Design Pattern: Page Object Model (POM)

CI/CD: GitHub Actions (Automated Workflows)

📋 How to Run
Clone the repository:

Bash
git clone https://github.com/CrisMai/qa-automation-playwright-portfolio.git
cd qa-automation-playwright-portfolio
Install dependencies:

Bash
npm install
Install browser binaries:

Bash
npx playwright install
Execute the test suite:

Bash
npx playwright test

Developed with a focus on high-quality software delivery, maintainability, and scalability.
