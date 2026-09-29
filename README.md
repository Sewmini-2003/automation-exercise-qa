# 🧪 Automation Exercise QA Testing Project

A QA portfolio project demonstrating **manual testing** and **automated web testing** using **Playwright with JavaScript**.

---

## 📌 Project Overview

This project tests key workflows of the **Automation Exercise** web application using both manual and automated testing.

The project was created to practice software quality assurance concepts such as:

- Manual Testing
- Functional Testing
- Negative Testing
- Smoke Testing
- Test Case Design
- Web UI Test Automation
- Page Object Model (POM)
- Assertions
- Test Documentation

---

## 🛠️ Technologies Used

- **Playwright**
- **JavaScript**
- **Node.js**
- **Git**
- **GitHub**
- **Visual Studio Code**

---

## 📁 Project Structure

```text
automation-exercise-qa/
│
├── docs/
│   ├── test-cases.md
│
├── pages/
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── SignupPage.js
│   ├── ProductsPage.js
│   └── CartPage.js
│
├── tests/
│   ├── home.spec.js
│   ├── login.spec.js
│   ├── signup.spec.js
│   ├── product.spec.js
│   └── cart.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ✅ Test Scenarios Covered

| Test Case | Scenario | Description |
|---|---|---|
| **TC-001** | Home Page Validation | Verifies that the home page loads successfully and important navigation elements are visible. |
| **TC-002** | Invalid Login | Verifies that login fails when invalid credentials are entered. |
| **TC-003** | Signup Form Validation | Verifies that the signup form and required fields are displayed. |
| **TC-004** | Product Search | Verifies that a valid product can be searched successfully. |
| **TC-005** | Invalid Product Search | Verifies application behavior when searching for a non-existing product. |
| **TC-006** | Add Product to Cart | Verifies that a selected product can be successfully added to the shopping cart. |
| **TC-007** | Remove Product from Cart | Verifies that a product can be removed from the shopping cart. |

---

## 📝 Manual Testing

Manual test cases are documented in:

```text
docs/test-cases.md
```

Each manual test case includes:

- Test Case ID
- Test Type
- Priority
- Preconditions
- Test Data
- Test Steps
- Expected Result
- Actual Result
- Status

---

## 🤖 Automated Testing

Automated tests are implemented using **Playwright with JavaScript**.

The **Page Object Model (POM)** is used to separate page locators and reusable actions from the test files.

### Example

```javascript
await productsPage.searchProduct('Blue Top');
```

This helps avoid repeating the same locators and actions across multiple test files and makes the test code easier to maintain.

---

## 🔥 Smoke Testing

Important test cases are marked using the `@smoke` tag.

Run only smoke tests with:

```bash
npx playwright test --grep "@smoke"
```

---

## 🚀 Running the Project

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

### 4. Run All Tests

```bash
npx playwright test
```

### 5. Run Tests in Headed Mode

```bash
npx playwright test --headed
```

### 6. Run a Specific Test File

For example:

```bash
npx playwright test tests/login.spec.js
```

### 7. Run Smoke Tests

```bash
npx playwright test --grep "@smoke"
```

### 8. View the Playwright HTML Report

```bash
npx playwright show-report
```

---

## 🎯 QA Concepts Practiced

QA Concepts Practiced:

- Manual Testing
- Functional Testing
- Negative Testing
- Smoke Testing
- Test Case Design
- Test Case Execution
- Web UI Automation
- Page Object Model (POM)
- Assertions
- Test Documentation
- Git Version Control

---

## 🔮 Future Improvements

The project can be further improved by adding:

- API Testing using Postman
- Jira defect tracking
- Regression test organization
- Cross-browser testing
- CI/CD integration using GitHub Actions

---

## 👩‍💻 Author

**Sewmini Balahewa**

Computer Science Undergraduate  
University of Colombo School of Computing (UCSC)