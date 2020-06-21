function r(x){
    console.log(x);
    if(x==0){
        return
    }
    r(x-1);
}
r(10);
console.log('done');
a = 1;
b = 2;