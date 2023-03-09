/** @type {import('./$types').PageServerLoad} */
export async function load(params: { url: { searchParams: { get: (arg0: string) => any } } }) {
    console.log(params)
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



    }

    if (row === null) {
        row = '0'
    }
    if (col === null) {
        col = '0'
    }

    console.log(row, col)

    return {
        post: {
            // @ts-ignore
            board: globalThis.board,
        }
    };
}