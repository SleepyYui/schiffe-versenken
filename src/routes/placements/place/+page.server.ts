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
            board = globalThis.boardPlayerTwo
        } else if (player === 'playerTwo') {
            // @ts-ignore
            board = globalThis.boardPlayerOne
        } else {
            // @ts-ignore
            board = globalThis.boardPlayerTwo
        }
        console.log(board)
        board[col][row] = "1"

        if (player === 'playerOne') {
            // @ts-ignore
            globalThis.boardPlayerTwo = board
        } else if (player === 'playerTwo') {
            // @ts-ignore
            globalThis.boardPlayerOne = board
        }


        return {
            post: {
                board: board,
            }
        };
    }
}