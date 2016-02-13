[![Build Status](https://travis-ci.org/TheSharpieOne/angular-validation-match.svg?branch=master)](https://travis-ci.org/TheSharpieOne/angular-validation-match)
[![Code Climate](https://codeclimate.com/github/TheSharpieOne/angular-validation-match/badges/gpa.svg)](https://codeclimate.com/github/TheSharpieOne/angular-validation-match) [![Test Coverage](https://codeclimate.com/github/TheSharpieOne/angular-validation-match/badges/coverage.svg)](https://codeclimate.com/github/TheSharpieOne/angular-validation-match)
[![Coverage Status](https://coveralls.io/repos/TheSharpieOne/angular-validation-match/badge.png)](https://coveralls.io/r/TheSharpieOne/angular-validation-match)
[![Dependency Status](https://david-dm.org/thesharpieone/angular-validation-match.svg?style=flat)](https://david-dm.org/thesharpieone/angular-validation-match)
[![devDependency Status](https://david-dm.org/thesharpieone/angular-validation-match/dev-status.svg?style=flat)](https://david-dm.org/thesharpieone/angular-validation-match#info=devDependencies)

Angular Validation: Match
===================

Checks if one input matches another.  Useful for confirming passwords, emails, or anything.

The `match` attribute should be set equal to the ng-model value of the field to match.

**Demo:** http://jsfiddle.net/TheSharpieOne/r6Ltru6c/

Installation
------------

`bower install angular-validation-match`

Then add `validation.match` to your angular dependencies

<small>*Note: For angular 1.2 or lower use* `bower install angular-validation-match#1.3`</small>

Also: `npm install angular-validation-match`

Usage
-----

**Simple Property Example**

```html
Password: <input ng-model="password" type="password" />
Confirm: <input ng-model="passwordConfirm" type="password" match="password" />
```

**Object Property Example**

```html
Password: <input ng-model="user.password" type="password" />
Confirm: <input ng-model="user.passwordConfirm" type="password" match="user.password" />
```

**Case insensitive (caseless) Example**

```html
Password: <input ng-model="user.password" type="password" />
Confirm: <input ng-model="user.passwordConfirm" type="password" match="user.password" match-caseless="true" />
```
<small>`match-caseless` can accept a scoped variable to allow the matching to be toggle-able between case insensitive and case sensitive.</small>

**Display Custom Error**<br>
If your form and field both are named, you can access the validation result to show/hide messages.

```html
<form name="myForm">
      Password: <input ng-model="user.password" type="password" name="passwordName" />
      Confirm: <input ng-model="user.passwordConfirm" type="password" match="user.password" name="myConfirmField" />
      <div ng-show="myForm.myConfirmField.$error.match">Fields do not match!</div>
</form>
```

**Validate Against the `$viewValue` shown in the input**<br>
The internal value (`$modelValue`) can differ from the external value (`$viewValue`) as appears in the input field shown to the user.  If your form and field both are named, you can validate against value displayed in the field, even if the field is invalid.

```html
<form name="myForm">
    Password: <input ng-model="user.password" type="password" name="myPasswordField" />
    Confirm: <input ng-model="user.passwordConfirm" type="password" match="myForm.myPasswordField" name="myConfirmField" />
</form>
```
<small>Note: `$viewValue`s are specific to fields/elements, not models.  Different fields with the same `ngModel` and have different `$viewValue`s.  Becuase of this, you need to use the form directive (assigning a `name` to a form tag) in combination with the specific field's name attribute to specific which field/element you want to match in particular.</small>
