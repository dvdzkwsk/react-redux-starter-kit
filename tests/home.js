
module.exports = {
  "test home page button click" : function (browser) {

    browser
      .url(browser.launchUrl)
      .click('button')
      .click('button')
      .click('button')
      .assert.containsText('h2', 'Sample Counter: 3')
      .end();

  }
};
