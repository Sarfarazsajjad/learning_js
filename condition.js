var b = [["-","-","-"],["-","-","-"],["-","-","-"]];
b[0][0] = "O";
b[1][1] = "O";
b[2][2] = "O";

//for rows
if (b[0][0] && b[0][1] && b[0][2] == "O" || b[1][0] && b[1][1] && b[1][2] == "O" || b[2][0] && b[2][1] && b[2][2] == "O")
{
    console.log("Player 1 is the winner row");
}
else if(b[0][0] && b[0][1] && b[0][2] == "X" || b[1][0] && b[1][1] && b[1][2] == "X" || b[2][0] && b[2][1] && b[2][2] == "X")
{
    console.log("Player 2 is the winnerow")
}
 // for columns
else if(b[0][0] && b[1][0] && b[2][0] == "O" || b[0][1] && b[1][1] && b[2][1] == "O" || b[0][2] && b[1][2] && b[2][2] == "O")
{
    console.log("Player 1 is winner column");
}
else if(b[0][0] && b[1][0] && b[2][0] == "X" || b[0][1] && b[1][1] && b[2][1] == "X" || b[0][2] && b[1][2] && b[2][2] == "X")
{
    console.log("Player 2 is winner column");
}


// //for diagonal
else if(b[0][0] && b[1][1] && b[2][2] == "O" || b[0][1] && b[1][1] && b[2][1] == "O")
{
    console.log("Player 2 is winner column");
}
// else if (b[0][0] && b[1][1] && b[2][2] == "X" || b[0][2] && b[1][1] && b[2][0] == "X")
// {
//     console.log("Player 2 is winner");
// }
// else {
//     console.log("Continue");
// }