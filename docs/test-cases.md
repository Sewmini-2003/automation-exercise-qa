# Manual Test Cases

## TC-001 - Verify Home Page Loads Successfully

**Test Type:** Functional / Smoke Testing  
**Priority:** High

**Preconditions:**
- User has an active internet connection.
- User has access to a supported web browser.

**Test Data:**
- URL: https://automationexercise.com/

**Steps:**
1. Open a web browser.
2. Navigate to the Automation Exercise website.
3. Observe the home page.
4. Verify that the main navigation menu is visible.

**Expected Result:**
The home page should load successfully and the main navigation menu should be visible.

**Actual Result:**
The home page loads successfully and the main navigation menu is visible.

**Status:**
PASS

---

## TC-002 - Login With Invalid Credentials

**Test Type:** Functional / Negative Testing  
**Priority:** High

**Preconditions:**
- User is on the Automation Exercise home page.
- User is not logged in.

**Test Data:**
- Email: invaliduser@example.com
- Password: wrongpassword123

**Steps:**
1. Click "Signup / Login".
2. Enter the invalid email address.
3. Enter the invalid password.
4. Click the Login button.

**Expected Result:**
An error message should be displayed and the user should not be logged in.

**Actual Result:**
The message "Your email or password is incorrect!" is displayed.

**Status:**
PASS

---

## TC-003 - Verify Signup Form Is Displayed

**Test Type:** Functional Testing  
**Priority:** Medium

**Preconditions:**
- User is on the Automation Exercise home page.
- User is not logged in.

**Test Data:**
- No specific test data required.

**Steps:**
1. Click "Signup / Login" from the navigation menu.
2. Observe the "New User Signup!" section.
3. Verify that the Name field is visible.
4. Verify that the Email field is visible.
5. Verify that the Signup button is visible.

**Expected Result:**
The "New User Signup!" section should be displayed with the Name field, Email field, and Signup button.

**Actual Result:**
The "New User Signup!" section is displayed with the Name field, Email field, and Signup button.

**Status:**
PASS

---

## TC-004 - Search For a Product

**Test Type:** Functional Testing  
**Priority:** Medium

**Preconditions:**
- User is on the Automation Exercise website.

**Test Data:**
- Product Name: Blue Top

**Steps:**
1. Click "Products".
2. Enter "Blue Top" in the search field.
3. Click the Search button.

**Expected Result:**
The searched products section should be displayed and "Blue Top" should appear in the results.

**Actual Result:**
"Blue Top" is displayed in the search results.

**Status:**
PASS

---
## TC-005 - Add Product To Cart

**Test Type:** Functional Testing  
**Priority:** High

**Preconditions:**
- User is on the Products page.

**Test Data:**
- Product: Blue Top

**Steps:**
1. Locate "Blue Top".
2. Click "Add to cart".
3. Click "View Cart".

**Expected Result:**
The selected product should appear in the shopping cart.

**Actual Result:**
"Blue Top" appears in the shopping cart.

**Status:**
PASS