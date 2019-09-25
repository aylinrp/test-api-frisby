const frisby = require('frisby');

it('ping service should return status code 200 and ok should be true', function(){
  return frisby
	.get('https://echo-serv.tbxnet.com/v1/system/ping')
	.expect('status', 200)
	.expect('json', {
        "ok": true
      })
} );

it('echo service should return status code 200 and text should be test', function(){
  return frisby
	.get('https://echo-serv.tbxnet.com/v1/echo?text=test')
	.expect('status', 200)
	.expect('json', {
        "text": "test"
      })
} );

