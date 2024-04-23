# Pinterest Automation Tests

This repository contains automated tests written in TypeScript using Playwright for testing the [Pinterest](https://pinterest.com/) website.

## Overview

Pinterest is a social media platform and visual discovery engine where users discover and save ideas for various projects and interests. Users can explore and curate content such as images, videos, and more by "pinning" them to personalized collections called boards. It serves as a source of inspiration and a tool for organizing and planning projects and events.

This test suite aims to automate the validation of Pinterest's functionality, ensuring a seamless user experience and identifying potential issues or regressions. By leveraging Playwright, we can efficiently simulate user interactions and verify the behavior of critical features across different browsers and environments.

## Getting Started

Follow these steps to set up the project and run the automated tests locally:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/aleksjonas/pinterest-automation-test.git
   ```

2. Navigate to the project directory:
    ```bash
    cd pinterest-automation-tests
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```


### Configuration

Update the config.ts file with your Pinterest account credentials or any other necessary configurations.

### Running Tests

1. You can either run the tests in the backgroung
    ```bash
    npx playwright test
    ```

    or use the ```headed``` option to see the progress of executed tests "live".

    ```bash
    npx playwright test --headed
    ```

## Project Structure


- **/tests**: Contains the actual test scripts written in TypeScript using Playwright.
- **/config.ts**: Configuration file for storing constants and settings used across the project.
- **/playwright.config.ts**: Configuration file for playwright tests.

## Reporting

Test reports open automatically if any of them fails. We can find the reports in the directory **playwrirght-report** generated automatically upon running tests.

We're also able to access the report from terminal:

```bash
    npx playwright show-report
```

## Contributing

Contributions to this project are welcome! If you encounter any issues, have suggestions for improvements, or want to add new features, feel free to open an issue or submit a pull request.

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Pinterest Developer Documentation](https://developers.pinterest.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
