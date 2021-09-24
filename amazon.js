describe('Watches Page', () =>{
    it('should show the watch page', () =>{
        browser.url('https://www.amazon.in/ref=nav_logo');
        let categories = $('//*[@id="nav-hamburger-menu"]/span');
        expect(categories).toBeDisplayed();
        categories.click();
        
  
        let g = $('//*[@id="hmenu-content"]/ul[1]/li[7]/a');
        
        g.click();
        let i = $('//*[@id="hmenu-content"]/ul[2]/li[6]/a');
        i.click();
       
        let j = $('//*[@id="twotabsearchtextbox"]');
        j.setValue('Echo Dot');
        let k = $('//*[@id="nav-search-submit-button"]');
        k.click();
        browser.pause(2000);
        expect(browser).toHaveUrlContaining('amazon')
    });
});
