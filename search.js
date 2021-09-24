describe('amazon product search', () => {
    
    it('should open and verify title', () => {
        browser.url('https://www.amazon.in/');
        browser.pause(5000);
        expect(browser).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in'
        );
    });

    it('should search a product and verify the text value', () => {
      let txtSearch =  $('#twotabsearchtextbox');
      let btnSearch = $('#nav-search-submit-button');
      txtSearch.setValue('Laptop'); 

      btnSearch.click();
      expect(txtSearch).toHaveValue('Laptop');
    });

    it('should redirect to new page and verify title', () => {
        expect(browser).toHaveTitle('Amazon.in : Laptop')
    });

    it('should update the search category', () => {
        let category = $('#searchDropdownBox option:nth-child(3)');
        expect(category).toHaveText('Alexa Skills');
    });

});
