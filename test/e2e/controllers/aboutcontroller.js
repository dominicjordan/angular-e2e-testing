describe('E2E: AboutController', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/#!/about');
    });
    
    it('should display a proper h1 message', function() {
        expect(element(by.tagName('h1')).getText()).toBe("About page");
    });

});