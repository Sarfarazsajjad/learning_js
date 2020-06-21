const readline = require("readline");

let user1input = "no input until user enter a value";
let user2input = "no input untill user 2 enters a value";
var i;
var j;
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var b = [["-","-","-"],
["-","-","-"],
["-","-","-"]];


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function ask() {
    //1st

    rl.question("which row?", function (row) {
               i = row - 1;
        rl.question("which column?", function (column)
         {
            j = column - 1;
            if ((b[i][j] == "O") || (b[i][j] == "X"))
    {
        console.log("this box is already full");
    } 
    else {

        b[i][j] = 'O';
        console.table(b);
    }
//2nd
    rl.question("which row?", function(row)
    {
        i = row - 1;
        rl.question("which column?" , function(column)
        {
j = column - 1;
if ((b[i][j] == "O") || (b[i][j] == "X"))
{
    console.log("this box is already full");
} 
else {

    b[i][j] = 'X';
    console.table(b);
}
//3rd
rl.question("which row?", function(row)
    {
        i = row - 1;
        rl.question("which column?" , function(column)
        {
j = column - 1;
if ((b[i][j] == "O") || (b[i][j] == "X"))
{
    console.log("this box is already full");
} 
else {

    b[i][j] = 'O';
    console.table(b);
}
//4th
rl.question("which row?", function(row)
    {
        i = row - 1;
        rl.question("which column?" , function(column)
        {
j = column - 1;
if ((b[i][j] == "O") || (b[i][j] == "X"))
{
    console.log("this box is already full");
} 
else {

    b[i][j] = 'X';
    console.table(b);
}
//5th
rl.question("which row?", function(row)
    {
        i = row - 1;
        rl.question("which column?" , function(column)
        {
j = column - 1;
if ((b[i][j] == "O") || (b[i][j] == "X"))
{
    console.log("this box is already full");
} 
else {

    b[i][j] = 'O';
    console.table(b);
    
    
}

rl.question("which row?", function(row)
    {
        i = row - 1;
        rl.question("which column?" , function(column)
        {
j = column - 1;
if ((b[i][j] == "O") || (b[i][j] == "X"))
{
    console.log("this box is already full");
} 
else {

    b[i][j] = 'X';
    console.table(b);
}

rl.question("which row?", function(row)
    {
        i = row - 1;
        rl.question("which column?" , function(column)
        {
j = column - 1;
if ((b[i][j] == "O") || (b[i][j] == "X"))
{
    console.log("this box is already full");
} 
else {

    b[i][j] = 'O';
    console.table(b);
}

rl.question("which row?", function(row)
    {
        i = row - 1;
        rl.question("which column?" , function(column)
        {
j = column - 1;
if ((b[i][j] == "O") || (b[i][j] == "X"))
{
    console.log("this box is already full");
} 
else {

    b[i][j] = 'X';
    console.table(b);
}

rl.question("which row?", function(row)
    {
        i = row - 1;
        rl.question("which column?" , function(column)
        {
j = column - 1;
if ((b[i][j] == "O") || (b[i][j] == "X"))
{
    console.log("this box is already full");
} 
else {

    b[i][j] = 'O';
    console.table(b);
}

        }
        
        )
    }
    
    )
        }
        
        )
    }
    
    )

        }
        
        )
    }
    
    )

        }
        
        )
    }
    
    )

        }
        
        )
    }
    
    )

        }
        
        )
    }
    
    )

        }
        
        )
    }
    
    )

        }
        
        )
    }
    
    )


        }

        )
        
    });

}


    ask();




