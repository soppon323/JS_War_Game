var expect = chai.expect

describe("myFunction",function(){
    describe("#checkPlayerHand",function(){
        it("Should check to see if the size of both the arrays is the same",function(){
            let a = [1,2,3];
            let b = [6,9,0];
            let x = checkPlayerHand(a,b);
            expect(x).to.equal(true);
        })
        it("Should throw an error if the length of both arrays are not the same", function(){
            
                let c =[3,4,5,6,7]
                let d = [9,8]
                let y = checkPlayerHand(c,d);
                expect(y).to.equal(false)
                
            });
        });

    });
