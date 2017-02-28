
var chai = require('chai');
var chaiHttp = require('chai-http'); 
chai.use(chaiHttp); 

//var request = require('request');
//var expect = chai.expect; 
//var should = chai.should; 

var baseurl = 'http://favoritehotelsapi.' + env + '.int';

var env = 'dev';
//var env = 'test';
//var env = 'acctest';
//var env = 'prod';

describe('Simple http requests', function () {

	// http://favoritehotelsapi.acctest.int
	it('GET from favorites baseurl', function () {
		chai.request(baseurl)
		  .get('/')
		  .end(function (err, res) {
		     expect(err).to.be.null;
		     expect(res).to.have.status(200);
		  });
	})

	// http://favoritehotelsapi.acctest.int/favoritehotels/get/v2/7311332/1?callback=jQuery1111005372513617574226_1488267012255&_=1488267012256
	it('GET hotels from specific user', function () {
		
		chai.request(baseurl) 
		  .get('/favoritehotels/get/v2/7311332/1')
		  .query({callback: 'jQuery1111005372513617574226_1488267012255', _: '1488267012256'})
		  .end(function (err, res) {
		     expect(err).to.be.null;
		     expect(res).to.have.status(200);
		  });
	})
	
})