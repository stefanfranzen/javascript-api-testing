import { urls } from './urls.js';
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

global.chai = chai;
global.expect = chai.expect;
global.baseUrl = urls[process.env.env];
