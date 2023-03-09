/** @type {import('./$types').PageServerLoad} */
export async function load(params: { url: { searchParams: { get: (arg0: string) => any } } }) {
    //console.log(params)
    let row = params.url.searchParams.get('row')
    let col = params.url.searchParams.get('col')
    let player = params.url.searchParams.get('player')

    if (player === null) {
        player = 'playerOne'
    }

    let board;
    if (player === 'playerOne') {
        // @ts-ignore
        board = globalThis.boardPlayerOne
    } else if (player === 'playerTwo') {
        // @ts-ignore
        board = globalThis.boardPlayerTwo
    } else {
        // @ts-ignore
        board = globalThis.boardPlayerOne
    }

    if (row === null) {
        row = '0'
    }
    if (col === null) {
        col = '0'
    }

    //console.log(row, col)

    return {
        post: {
            board: board,
        }
    };
}