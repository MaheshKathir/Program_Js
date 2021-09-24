describe('Watches Page', () =>{
    it('should show the watch page', () =>{
        browser.url('https://www.amazon.in/ref=nav_logo');
        let categories = $('//*[@id="nav-hamburger-menu"]/span');
        expect(categories).toBeDisplayed();
        categories.click();
        let c = $('//*[@id="hmenu-content"]/ul[1]/li[17]/a');
        c.scrollIntoView();
        c.click();
       
        let i = $('//*[@id="hmenu-content"]/ul[10]/li[10]/a');
        i.click();
       
        let j = $('//*[@id="twotabsearchtextbox"]');
        j.setValue('Watches');
        let k = $('//*[@id="nav-search-submit-button"]');
        k.click();
        browser.pause(2000);
        expect(browser).toHaveUrlContaining('amazon')
    });
});