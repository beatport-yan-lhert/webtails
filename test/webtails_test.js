var should = require('should'),
    webtails = require('../lib/webtails.js')


describe('webtails', function () {
    before(function () {

    })
    it('should be awesome', function(){
        webtails.awesome().should.eql('awesome')
    })
})