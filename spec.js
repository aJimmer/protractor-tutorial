describe('Protractor Demo App', function () {
	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var latestResult = element(by.binding('latest'));
	var history = element.all(by.repeater('result in memory'));

	function add(a, b) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		goButton.click();
	}

	beforeEach(function() {
		browser.get('http://juliemr.github.io/protractor-demo/');
	}); 

	it('should have a history', function() {
		add(1, 2);
		add(3, 4);

		// expect(history.count()).toEqual(2);

		// add(5, 6);

		// expect(history.count()).toEqual(3);
		expect(history.last().getText()).toContain('1 + 2');
		expect(history.first().getText()).toContain('3 + 4');
	});

	it('should have a title', function() {
		expect(browser.getTitle()).toEqual('Super Calculator');
	});

	it('should add one and two', function() {
		/* NOTES:
		 * - element() function is used for finding HTML elements on your webpage. 
		 *   It returns an ElementFinder object, which can be used to interact with 
		 *   the element or get information from it. 
		 * 
		 * - Element() takes one parameter, a 'Locator', which describes how to find the element. 
		 *   The 'by' object creates Locators.
		 */

		//  find the element with ng-model="first/second".
		element(by.model('first')).sendKeys(1);
		element(by.model('second')).sendKeys(2);
		//  find the element with the given id. This finds <button id="gobutton">
		element(by.id('gobutton')).click();
		//  find the element bound to the variable latest. This finds the span containing {{latest}}
		expect(latestResult.getText()).toEqual('3');
	});

	it('should add four and six', function() {
		
		element(by.model('first')).sendKeys(4);
		element(by.model('second')).sendKeys(6);
		
		element(by.id('gobutton')).click();
		
    	expect(latestResult.getText()).toEqual('10');
  	});

  	it('should read the value from an input', function() {
  		firstNumber.sendKeys(1);
  		expect(firstNumber.getAttribute('value')).toEqual('1');
  	});
});