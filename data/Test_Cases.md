## Feature: Login

### Scenario: User Login using valid credentials.

**Given: The user is on the login page.**

**When: The user submit valid credential.**

**Then: The user should be able to access the “Home” page.**

### Scenario: User login using  invalid credentials (Username & Password)

**Given: The user is on the login page.**

**When: The user submit invalid credentials.**

**Then: The user should see a error massage indicating the wrong credentials.** 

## Feature: Logout

### Scenario: User Logout from the “Home” page

**Given: The user is on the logged in.**

**When: The user click the logout button.**

**Then: The user should be redirected to the login page**

**And: The user should be able to see a message indicating he’s logged out.**

## Feature: Dynamic Controls

### Scenario: User Mark a Checkbox

**Given: The user is on the dynamic control page.**

**When: The user click the checkbox.**

**Then: The user should see the checkbox marked.**

### Scenario: User Uncheck a Checkbox

**Given: The user is on the dynamic control page.**

**When: The user click the checkbox.**

**Then: The user should see the checkbox unmarked.**

### Scenario: User Remove the Checkbox

**Given: The user is on the dynamic control page.**

**When: The user click the Remove button.**

**Then: The user should see the checkbox disappear.**

### Scenario: User Add a Checkbox

**Given: The user is on the dynamic control page.**

**And: The checkbox was removed.**

**When: The user click the Add button.**

**Then: The user should see the checkbox appears.**

### Scenario: User Disable the Input Field

**Given: The user is on the dynamic control page.**

**And: The input was previously enabled.**

**When: The user click the Disable button.**

**Then: The user should see the Input be disable.**

**And: still have the last text inputted.**