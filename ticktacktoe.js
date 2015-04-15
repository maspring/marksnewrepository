// calculates whether either player can win at tic tac toe in one move

// loads game board 

var board = [
	['X', 'X', ''],
	[' ', 'O', 'X'],
	['O', 'O', '']

	];


// function begins 

function checker(board) {

	// Convert board or read O and X as values
	// New board "nb" initialized 


	var nb = [[],
	          [],
	          []]

    var winner;


    // Converted board and checked for a horizontal win


	for (var i = 0; i < 3; i++){
		for (var j = 0; j <3; j++) {
			if (board[i][j] === "O") {
				nb[i][j] = 1;

			}
			else if (board[i][j] === "X") {
				nb[i][j] = -1;
			}
			else {
				nb[i][j] = 0;
			} //else
		

		} //element iterator


		// Begin calcualtion to determine horizontal winner
		// If any horizontal row sums to 2 or greater = win by "O." -2 or less = win by "X."


		if (nb[i][0]+nb[i][1]+nb[i][2] >= 2 || nb[i][0]+nb[i][1]+nb[i][2] <= -2) {

			console.log("Potential horizontal win by", (nb[i][0]+nb[i][1]+nb[i][2] > 0 ? "O" : "X"));

		} //horizontal checker

	} // row iterator



	for (var x = 0; x <3; x++){
		if (nb[0][x]+nb[1][x]+nb[2][x] >= 2 || nb[0][x]+nb[1][x]+nb[2][x] <= -2) {
				console.log("Potential vertical win by", (nb[0][x]+nb[1][x]+nb[2][x] > 0 ? "O" : "X"));
			} //vertical checker

	}// vertical incrementor

	if (nb[0][0]+nb[1][1]+nb[2][2] >= 2 || nb[0][0]+nb[1][1]+nb[2][2] <= -2) {
			console.log("Potential back slash win by", (nb[0][0]+nb[1][1]+nb[2][2] >0 ? "O" : "X"));

	}// backslash

	if (nb[0][2]+nb[1][1]+nb[2][0] >= 2 || nb[0][2]+nb[1][1]+nb[2][0] <= -2) {
		console.log("Potential forward slash win by", (nb[0][2]+nb[1][1]+nb[2][0] >0 ? "O" : "X"));

	}// backslash

	// Create a flag for game continues set to true
	// Create a while loop that exits on flag = false or use a break
	// Within the while loop:
		// Iterate through a set of tests
		// >>> 3 rows, 3 columns, 2 diagnals

console.log(nb)
}

checker(board)


