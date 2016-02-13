/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var SignupPage = function() {
  var form = this.form = element(by.css('.form'));
  form.name = form.element(by.model('vm.user.name'));
  form.email = form.element(by.model('vm.user.email'));
  form.password = form.element(by.model('vm.user.password'));
  form.confirmPassword = form.element(by.model('vm.user.confirmPassword'));
  form.submit = form.element(by.css('.btn-register'));
  form.oauthButtons = require('../../components/oauth-buttons/oauth-buttons.po').oauthButtons;

  this.signup = function(data) {
    for (var prop in data) {
      var formElem = form[prop];
      if (data.hasOwnProperty(prop) && formElem && typeof formElem.sendKeys === 'function') {
        formElem.sendKeys(data[prop]);
      }
    }

    return form.submit.click();
  };
};

module.exports = new SignupPage();

