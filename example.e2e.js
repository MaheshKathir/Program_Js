const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('amazon product search', () => {
    it('should open and verify title', () => {
        browser.url('https://www.amazon.in/');
        browser.pause(5000);
        expect(browser).toHaveTitle('nav-logo-sprites');
    });

    it('should search a product and verify the text value', () => {
      let search =  $('desktop-3');
      let searchAnother = $('desktop-btf-grid-6');
      search.addvalue('Laptop');
      searchAnother.click();
      browser.pause(5000);

      expect(search).toHaveValue('Laptop');
    });
    it('should redirect to new page and verify title', () => {
        expect(browser).toHaveTitle('Amazon.in : Laptop')
        browser.pause(5000);
    });

    it('should update the search category', () => {
        let category = $('#searchDropdownBox option:nth-child(3)');

        expect(category).toHaveText('Alexa Skills');
        browser.pause(5000);
    });
});


