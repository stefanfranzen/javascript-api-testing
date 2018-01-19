
describe('TESTING QRCODE', function () {
  it('should generate a qr-code/picture', function () {
    return chai.request(baseUrl)
      .get('/create-qr-code/')
      .set('Accept', 'application/json')
      .query({'data': 'myDataForQRCode'})
      .query({'size': '10x10'})
      .query({'charset-target': 'UTF-8'})
      .query({'bgcolor': '255-255-255'})
      .query({'color': '255-0-0'})
      .query({'format': 'gif'})
      .then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.header['content-type']).to.equal('image/gif');
      });
  });
});
