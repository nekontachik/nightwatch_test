module.exports = {
  'Check title': function (browser) {
    // Browser is the browser that is being controlled
    browser
      .url('https://duckduckgo.com') // Navigate to the url
      .waitForElementVisible('body', 1000) // Wait until you can see the body element.
      .verify.title('DuckDuckGo Search Engine') // Verify that the title is 'Bing'
      .assert.containsText('#logo_homepage_link', 'About DuckDuckGo')
      .end(); // This must be called to close the browser at the end 
  },
};
