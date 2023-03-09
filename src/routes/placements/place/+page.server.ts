/** @type {import('./$types').PageServerLoad} */
export async function load(params: { url: { searchParams: { get: (arg0: string) => any } } }) {
    //console.log(params)
    let row = params.url.searchParams.get('row')
    let col = params.url.searchParams.get('col')
    //let player = params.url.searchParams.get('player')
    let providedToken = params.url.searchParams.get('sid')

    if (providedToken === null || row === null || col === null) {
        //providedToken = undefined
        return {
            post: {
                // @ts-ignore
                board: undefined,
                status: 'error',
                message: 'Not enough parameters provided'
            }
        };
    } else {

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
                    board: undefined,
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
                    board: undefined,
                }
            };
        }

        if (player === 'playerOne') {
            // @ts-ignore
            if (globalThis.playerOneTotalShips != 0) {
                // @ts-ignore
                globalThis.playerOneTotalShips = globalThis.playerOneTotalShips - 1
            } else {
                return {
                    post: {
                        board: board,
                    }
                };
            }
        } else if (player === 'playerTwo') {
            // @ts-ignore
            if (globalThis.playerTwoTotalShips != 0) {
                // @ts-ignore
                globalThis.playerTwoTotalShips = globalThis.playerTwoTotalShips - 1
            } else {
                return {
                    post: {
                        board: board,
                    }
                };
            }
        }



        if (player === 'playerOne') {
            board[col][row] = '1'
            // @ts-ignore
            globalThis.boardPlayerOne = board
        } else if (player === 'playerTwo') {
            board[col][row] = '2'
            // @ts-ignore
            globalThis.boardPlayerTwo = board
        }


        return {
            post: {
                board: board,
            }
        };
    }
}