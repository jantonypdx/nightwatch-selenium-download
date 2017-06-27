module.exports = {
  'Simple Google test' : function (client) {

    let url = 'http://www.google.com';
    let expectedTitle = 'Google';
    let searchBox = 'input#lst-ib';
    let searchString = 'nightwatch.js';
    let searchButton = 'button[name=btnG]';
    let searchResult = 'div.g:first-child > div > div.rc >  h3.r > a';
    let expectedResult = 'Node.js powered End-to-End testing framework'

    client
      // go to website, wait until body is loaded
      .url(url)
      // .waitForElementVisible('body', 10000)

      // make sure expected title matches & search box is visible
      .assert.title(expectedTitle)
      .assert.visible(searchBox)

      // enter search string in search box, click search button
      .setValue(searchBox, searchString)
      .waitForElementVisible(searchButton, 1000)
      .click(searchButton)

      // wait for results, then verify expected string
      .waitForElementVisible(searchResult, 15000)
      .assert.containsText(searchResult, expectedResult)

      // cleanup, shutdown browser
      .end();
  }
};