beforeEach(() => {
  
  cy
    .request('DELETE', 'localhost:3000/accounts');

});

it('sends a welcome email', () => {

  cy
    .visit('localhost:3000/signup');

  cy
    .get('[type=\'email\']')
    .type('distance-damage.mzt3fjhb@mailosaur.io');

  cy
    .get('[type=\'password\']')
    .type('admin');

  cy
    .contains('Send me a welcome email')
    .prev()
    .check();

  cy
    .get('.signup-button')
    .click();
  
  cy
    .request({
      method: 'POST',
      url: 'https://mailosaur.com/api/messages/await?server=mzt3fjhb',
      headers: {
        authorization: 'Basic ' + Buffer.from('7e8nIuq7P8cVdAD').toString('base64')
      },
      body: {
        sentTo: 'distance-damage.mzt3fjhb@mailosaur.io'
      }
    }).then( message => {

      expect(message.body.html.links[0].href).to.eq('https://www.youtube.com/channel/UCDOCAVIhSh5VpJMEfdak1OA');

    });
});