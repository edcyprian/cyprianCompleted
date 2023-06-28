# Angular Sign-up page

Complete user registration flow by setting up routing, integrating the signup form with data services and adding proper input validation.

## Introduction

This app is nearly completed, yet the user signup page and results page are missing. Follow the instructions below in order to complete the project.


## Task Description

The HTML and styling of the form are provided. Your job is to connect it to Angular and add proper validation.

Use **Template-Driven Forms** approach when implementing the requirements.

### 1. Implement service to get country and states

- Implement methods to fetch data of `country` and `state`

- Data for `countries` and `states` should be fetched from `assets/data.json` file

- The stub for `country` fetching service is already present, but its methods are not implemented yet

- Integrate this service with `SignupForm` in step 2 service configuration

### 2. Setup routes

- Set the default route to render `SignupFormComponent`

- Setup signup results route so that `SignupDetailsComponent` is rendered for `/signup-details` url

### 3. Implement helpers

- Finish `SignupDetailsComponent` implementation

- Implement `FieldmatchesDirective` to validate if both fields contain the same value and to make it react on changes

### 4. Add validation to fields

- All fields should be required

- `Email` should be validated (use Angular built-in email validation)

- `Password` should match pattern - minimum 8 characters, just numbers and letters, at least one upper case, at least one lower case, at least one number

- `Password` match value should match password value. Use `FieldmatchesDirective` here

- `Phone` should allow only numbers and match pattern `(#99) 999-9999`, where `#` denotes a non-zero digit, and `9` any digit

- Use service to populate `States` and `Country` dropdown

- Values of the `State` field should be loaded based on selected `country` value

- When `country` is selected or changed, `state` should display the default value

- If a field is invalid it should be marked as such - use Angular validation

### 5. Some user feedback

- If a field is invalid, it should display error. Even if not yet touched or changed by the user

- Use error elements that are provided

- Make sure elements include the correct class, i.e. `.form-username-error`

- Don't hide elements with CSS if there is no error. Make sure they are not present in DOM

### 6. Display Results

- Make sure when _Signup Form_ is submitted (not only with button) the component emits proper `save` event that the parent component can subscribe to

- Prevent the event from occurring if any of form fields are invalid

- Use `SignupService` to store and retrieve data submitted in the signup form. Redirect to _Signup Details_ page after successful form submission.

- _Signup Details_ should appear in the same place where _Signup Form_ currently is.

For more details please run a task on the Devskiller platform and review the tests that are failing.

## Structure

Please note, that some tests rely on the public API of your components. If you rename something, e.g. `FieldmatchesDirective` to a different name or put it at a different location, some tests will fail, because they're bound to specific classes available at specific file locations. If you rename anything that should not be renamed, tests in `structure.spec.ts` will alert you  with the details.

However, you are free to add new components, services etc.

## Setup

Follow these steps if you are using zip/git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies
2. `npm test` – run all tests (this will be used to evaluate your solutions)
3. `npm run test:watch` – run all tests in _watch mode_ (alternative to `npm test` which you might find more convenient to use locally)
4. `npm start` – (optional) serve the application locally at [http://localhost:4200/](http://localhost:4200/) (it won't be used to evaluate your solutions)
5. `nvm install` - (optional) set up the expected _major_ version of Node.js locally ([`nvm`](https://github.com/nvm-sh/nvm) required; Node.js version defined in `.nvmrc` file)

This application was generated using [Angular CLI](https://angular.io/cli). It has all the standard setups.

**Good Luck!**
