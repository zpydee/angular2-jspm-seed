import Apple from 'Apple.js';
describe('An Apple', function(){
    var apple
    beforeEach(function(){
       apple = new Apple();
        
    });
    it('should be green', function(){
       expect(apple.color).toBe('green'); 
    })
})