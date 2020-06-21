var b = [["-","-","-"],["-","-","-"],["-","-","-"]];
var userinput = 12;
var a = [1,2,3,4,5,6,7,8,9];
var i = 2;
var j = 1;

if (userinput >0 && userinput<10) 
{ 
    if ((b[i][j] == "O") || (b[i][j] == "X"))
    {
        console.log("this box is already full");
    } 
    else {

        b[i][j] = userinput;
        console.log("now userinput will be saved and tested");
    }
}
else {

    console.log("its out of context")
}