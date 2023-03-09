/** @type {import('./$types').PageServerLoad} */

function checkQuadrupleShips(board: any) {
    // check if there are any quadruple ships left by checking the fields around every ship and determine if there are 4 ships in a row
    // if there are 4 ships in a row, return true
    // if there are not 4 ships in a row, return false

}

function checkSingleShips(board: any) {
    let checkedShips = false;
    let checkedShipCount = 0;
    let nextrow = "row0";
    let nextcol = "col0";
    let prevrow = "row0";
    let prevcol = "col0";
    // for every column
    for (let col in board) {
        for (let row in board[col]) {
            // check if the field is a ship
            if (board[col][row] === "1") {
                console.log("single ship testing");
                // check if the field is the first field of a ship
                prevcol = "col" + (parseInt(col.substring(3)) - 1);
                console.log(prevcol);
                prevrow = "row" + (parseInt(row.substring(3)) - 1);
                console.log(prevrow);
                nextcol = "col" + (parseInt(col.substring(3)) + 1);
                console.log(nextcol);
                nextrow = "row" + (parseInt(row.substring(3)) + 1);
                console.log(nextrow);
                if (board[prevcol][prevrow] !== "1" && board[nextcol][nextrow] !== "1" && board[prevcol][nextrow] !== "1" && board[nextcol][prevrow] !== "1" && board[prevcol][row] !== "1" && board[nextcol][row] !== "1" && board[col][prevrow] !== "1" && board[col][nextrow] !== "1") { // forgive me for what I have done
                    console.log("ship has no neighbours");
                    checkedShipCount++;
                }
            }
        }
    }
    // @ts-ignore
    checkedShips = checkedShipCount === globalThis.playerOneShips;
    return checkedShips;
}

export async function load(params: { url: { searchParams: { get: (arg0: string) => any } } }) {
    //console.log(params)
    let providedToken = params.url.searchParams.get('sid')
    let shipCountCheck = false;
    let singleShipCheck = false;
    let doubleShipCheck = false;
    let tripleShipCheck = false;
    let quadrupleShipCheck = false;

    if (providedToken === null) {
        //providedToken = undefined
        return {
            post: {
                // @ts-ignore
                board: 'undefined',
                status: 'error',
                message: 'Not enough parameters provided'
            }
        };
    } else {
        console.log(providedToken);
        let player;
        // @ts-ignore
        if (globalThis.playerOneToken === providedToken) {
            player = 'playerOne'
            // @ts-ignore
        } else if (globalThis.playerTwoToken === providedToken) {
            player = 'playerTwo'
        } else {
            return {
                post: {
                    // @ts-ignore
                    board: 'undefined',
                    status: 'error',
                    message: 'Invalid token provided'
                }
            }
        }

        let board;
        if (player === 'playerOne') {
            // @ts-ignore
            board = globalThis.boardPlayerOne
        } else if (player === 'playerTwo') {
            // @ts-ignore
            board = globalThis.boardPlayerTwo
        } else {
            return {
                post: {
                    board: 'undefined',
                }
            };
        }
        console.log(player);
        //console.log(board);

        if (player === 'playerOne') {
            // @ts-ignore
            if (globalThis.playerOneTotalShips === 0) {
                shipCountCheck = true;
            } else {
                return {
                    post: {
                        board: 'undefined',
                    }
                };
            }
        } else if (player === 'playerTwo') {
            // @ts-ignore
            if (globalThis.playerTwoTotalShips === 0) {
                shipCountCheck = true;
            } else {
                return {
                    post: {
                        board: 'undefined',
                    }
                };
            }
        }
        console.log(shipCountCheck);
        singleShipCheck = checkSingleShips(board);
        console.log(singleShipCheck);

        if (singleShipCheck && shipCountCheck) {
            // @ts-ignore
            globalThis.playerOneVerifiedPlacements = true;
            console.log('verified placements');
            return {
                post: {
                    board: board,
                }
            };
        } else {
            console.log('resetting board');
            // @ts-ignore
            let defaultBoard = globalThis.boardTemplate;
            //console.log(defaultBoard);
            // @ts-ignore
            //console.log(globalThis.boardTemplate);
            if (player === 'playerOne') {
                // @ts-ignore
                globalThis.playerOneTotalShips = 10;
                // @ts-ignore
                globalThis.playerOneDoubleShips = 2;
                // @ts-ignore
                globalThis.playerOneTripleShips = 3;
                // @ts-ignore
                globalThis.playerOneQuadrupleShips = 4;
                // @ts-ignore
                globalThis.boardPlayerOne = defaultBoard;
                return {
                    post: {
                        // @ts-ignore
                        board: globalThis.boardPlayerOne,
                    }
                };
            } else if (player === 'playerTwo') {
                // @ts-ignore
                globalThis.playerTwoTotalShips = 10;
                // @ts-ignore
                globalThis.playerTwoDoubleShips = 2;
                // @ts-ignore
                globalThis.playerTwoTripleShips = 3;
                // @ts-ignore
                globalThis.playerTwoQuadrupleShips = 4;
                // @ts-ignore
                globalThis.boardPlayerTwo = defaultBoard;
                return {
                    post: {
                        // @ts-ignore
                        board: globalThis.boardPlayerTwo,
                    }
                };
            }

        }


    }
}