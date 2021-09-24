describe('Check Pincode', () =>{
    it('should change pincode', () =>{
        browser.url('https://www.amazon.in/ref=nav_logo');
        let address = $('//*[@id="nav-global-location-popover-link"]');
        address.click();

        let a = $('//*[@id="GLUXZipUpdateInput"]');
        a.setValue('600098');
        let b = $('//*[@id="GLUXZipUpdate"]/span/input')
        b.click();
        browser.pause(2000)
        let c = $('//*[@id="glow-ingress-line2"]');
        expect(c).toHaveText('Chennai 600098');
        browser.close();

    });
});