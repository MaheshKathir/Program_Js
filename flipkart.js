describe('dropdown Page', () =>{
    it('should select dropdown list', () =>{
        browser.url('https://www.flipkart.com/');
        let closeIcon =  $("//button[@class='_2KpZ6l _2doB4z']");
        closeIcon.click();
        //browser.dismissAlert();
        let fashionPro = $("//div[text()='Fashion']");
        fashionPro.moveTo();
        
        let menFwear = $("//a[text()='Men Footwear']");
        menFwear.moveTo();
        browser.pause(5000);
        let footAll = $("//a[text()='All']");
        footAll.moveTo();
        footAll.click();
        browser.pause(5000);
        

        let dropdown = $('//*[@id="container"]/div/div[3]/div[1]/div[1]/div/div/div/section[2]/div[4]/div[3]/select');
        dropdown.click();
        dropdown.selectByAttribute('value', '2000');
        dropdown.click();
        browser.pause(5000);


        
    });
});
  