describe('Mobile Page', () =>{
    it('should show the mobile page', () =>{
        browser.url('https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles_9292c6cb7b394d30b2467b8f631090a7');
        let BannerImage = $('//*[@id="sobe_d_b_3_1"]/a/img');
        expect(BannerImage).toBeDisplayed();
    });
    
    it('Should Show Banner Title Text', () =>{
        let Text = $('//*[@id="contentGrid_20892"]/div/div[1]/div/div/div/h2');
        expect(Text).toHaveText('Shop by Price');
    });


    it('should contain banner button and verify its clickable', () => {
        let Bannerbtn = $('#contentGrid_20892 > div > div:nth-child(1) > div > div > div > h2');
        expect(Bannerbtn).toHaveLinkContaining('/Shop by Price/');
        expect(Bannerbtn).toBeClickable();
        expect(Bannerbtn).toHaveUrl();
    });

    it('should click ShopByBrand and choose first brand', () => {
        let shopByBrand = $('https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/MayArt/Teaser1/Budget_brand/template_cg_440x3001151.jpg');
        expect(shopByBanner).toBeDisplayed();
        shopByBrand.click();
    });
});