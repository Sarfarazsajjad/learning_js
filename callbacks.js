
//library function
var readLine = {
    Question : 
    function(str,f) {
        console.log(str);
        let userInput = "Sarfaraz"
        f(userInput);
    }
}
r1 = new readLine();

//---------------

r1.Question('What is your name ',function (data) {
    console.log('annonymous function',data);
    r1.Question('What is your age',function(data){
        console.log('second annonymous function',data);
        r1.Question('What is your age',function(data){
            console.log('second annonymous function',data);
            r1.Question('What is your age',function(data){
                console.log('second annonymous function',data);
                r1.Question('What is your age',function(data){
                    console.log('second annonymous function',data);
                    r1.Question('What is your age',function(data){
                        console.log('second annonymous function',data);
                        r1.Question('What is your age',function(data){
                            console.log('second annonymous function',data);
                            r1.Question('What is your age',function(data){
                                console.log('second annonymous function',data);
                                r1.Question('What is your age',function(data){
                                    console.log('second annonymous function',data);
                                    r1.Question('What is your age',function(data){
                                        console.log('second annonymous function',data);
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});

//---------------

let f1 = function(data){
    console.log('second annonymous function',data);
};

let f2 = function (data) {
    console.log('annonymous function',data);
    r1.Question('What is your age',f1);
}

r1.Question('What is your name ',f2);