/** @type {import('./$types').PageServerLoad} */
export async function load(params: { url: { searchParams: { get: (arg0: string) => any } } }) {
    //console.log(params)
    let row = params.url.searchParams.get('row')
    let col = params.url.searchParams.get('col')
    let player = params.url.searchParams.get('player')

    if (row === null) {
        row = '0'
    }
    if (col === null) {
        col = '0'
    }

    //console.log(row, col)

    return {
        post: {
            // @ts-ignore
            board: globalThis.board,
        }
    };
}