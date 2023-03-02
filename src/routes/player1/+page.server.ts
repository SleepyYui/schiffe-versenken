/** @type {import('./$types').PageServerLoad} */
export async function load(params: { url: { searchParams: { get: (arg0: string) => any } } }) {

    //globalThis.playerOneToken = params.url.searchParams.get('playerOneToken')
    // @ts-ignore
    if (globalThis.playerOneToken === undefined) {
        // generate a token
        // @ts-ignore
        globalThis.playerOneToken = Math.random().toString(36).substr(2, 9);
    }



    return {
        post: {
            // @ts-ignore
            stuff: globalThis.playerOneToken,
        }
    };
}