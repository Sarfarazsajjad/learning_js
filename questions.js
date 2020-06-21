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