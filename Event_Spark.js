///<reference types="Cypress"/>
///<reference types="@cypress/xpath" />
describe('Event spark application test cases:', () => {

it('Filtering the music events under 100 to 300', () => {
    cy.visit('https://eventspark.netlify.app/#');//opens the application in the browser
    cy.contains('Find Events').should('have.text','Find Events').click();//clicking the find events button     
    cy.xpath('(//*[@class="chakra-input css-1cjy4zv"])[1]').type('Music'); //Enter's "Music" in the search field
    cy.xpath('(//select[@class="chakra-select css-161pkch"])[1]').select('desc').should('have.value','desc');//selecting the option "new"
    //cy.wait(1000);//waits one second
    cy.xpath('(//select[@class="chakra-select css-161pkch"])[2]').select('100').should('have.value','100');//selecting minimum value as 100 
    //cy.wait(1000);
    cy.xpath('(//select[@class="chakra-select css-161pkch"])[3]').select('300').should('have.value','300');//selecting the maximum value as 300
});
it('Asserting - login Failing message due to not signing up', () => {
  cy.visit('https://eventspark.netlify.app/#');//opens the application in the browser
  cy.xpath('(//button[@type="button"])[2]').click();//clicking the login button
  cy.xpath('//input[@placeholder="Enter your Email"]').type('sprashanth080498@gmail.com');//Entering the e-mail address
  cy.get('#password').type('Prashanth1234');//entering the password
  cy.xpath('//button[@type="submit"]').click()//clicking the submit button
  cy.on('window:alert',(msg)=>{
expect(msg).to.eq('Login Failed Wrong Credential')
return false;
})//asserting the window alert messgae
cy.wait(2000);
});
it('Navigation command- Back to homepage and again login page', () => {
    cy.visit('https://eventspark.netlify.app/#');//opens the application in the browser
    //cy.wait(2000);
    cy.url().should('include','eventspark');//now we are inside the home page of the application-so we are asserting if the url has the text "eventspark"
    cy.contains('Log In').click();//clicking the login button
    cy.url().should('include','login');//now we are inside login page- so we are asserting if the url has login
    cy.go('back') //navigating back to the home page
    cy.url().should('include','eventspark')//again we are asserting if the url has "eventspark"
    cy.go('forward')//then we are navigating into the login page again
    cy.url().should('include','login');//verify if the url has "login"
});
it('Registering in the application', () => {
    cy.visit('https://eventspark.netlify.app/#');//opens the application in the browser
    cy.contains('Log In').click({force: true});//clicking the login button
    cy.xpath("//a[text()='Register']").click();//clicking the register button
    cy.get('#username').type('prashanth');//entering the username
    cy.get('#email').type('sprashanth0804');//entering the email id
    cy.xpath('//input[@name="password"]').type('Prashanth123#');//entering the password
    cy.get('#dateOfBirth').type('2002-08-28');//entering the date of birth
    cy.get('#profilePicture').type('Picture.jpg')//asserting the picture
    cy.contains('Register').should('have.text','Register').click();//clicking the register button
});
it('To verify the search field functionality of the find events page', () => {
    cy.visit('https://eventspark.netlify.app/#');//opens the application in the browser
    cy.contains('Find Events').click();//clickingt the find events button
    cy.xpath('(//input[@class="chakra-input css-1cjy4zv"])[1]').type('Music');//typing the text "MUSIC"
    cy.xpath('(//input[@class="chakra-input css-1cjy4zv"])[1]').type('ART');//typing the text "ART"
    cy.xpath('(//input[@class="chakra-input css-1cjy4zv"])[1]').type('FOOD');//typing the text "FOOD"
    cy.xpath('(//input[@class="chakra-input css-1cjy4zv"])[1]').type('DaNcE');//typing the "DaNcE"
});
});