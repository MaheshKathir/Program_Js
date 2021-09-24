describe('Check Account', () =>{
    it('should account the watch page', () =>{
        browser.url('https://www.amazon.in/ref=nav_logo');
        let account = $('//*[@id="nav-link-accountList-nav-line-1"]');
        account.moveTo();
        let a = $('//*[@id="nav-al-your-account"]/a[1]/span');
        a.click();
        expect(browser).toHaveUrlContaining('amazon')

    });
});