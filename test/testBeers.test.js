describe('Testing Beers', function () {
  it('should get a specific beer', function () {
    return chai.request(baseUrl)
      .get('/beers')
      .set('Accept', 'application/json')
      .query({'ids': '1'})

      .then(function (response) {
        expect(response).to.be.json;
        expect(response.body[0].id).to.equal(1);
      });
  });
});
