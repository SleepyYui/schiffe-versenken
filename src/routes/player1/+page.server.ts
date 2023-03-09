/** @type {import('./$types').PageServerLoad} */
export async function load(params: { url: { searchParams: { get: (arg0: string) => any } } }) {

    //globalThis.playerOneToken = params.url.searchParams.get('playerOneToken')
    let providedToken = params.url.searchParams.get('sid')
    let rejectedToken = undefined
    // @ts-ignore
    let playerToken = globalThis.playerOneToken
    let canStartGame = false
    let debug = undefined
    let token = Math.random().toString(36).substr(2, 9);
    let startedGame = false
    // @ts-ignore
    let board = globalThis.boardPlayerOne

    if (params.url.searchParams.get('debug') === 'true') {
        debug = true
    }

    if (providedToken === null) {
        providedToken = undefined
    } else {
        // @ts-ignore
        if (globalThis.playerOneToken != providedToken && globalThis.playerOneToken) {
            rejectedToken = providedToken
            //playerToken = providedToken
            // @ts-ignore
        } else if (globalThis.playerOneToken != providedToken && !globalThis.playerOneToken) {
            //playerToken = providedToken
            token = providedToken
            // @ts-ignore
            globalThis.playerOneToken = providedToken
            // @ts-ignore
            globalThis.playerOneStarted = true
            //canStartGame = false
            startedGame = true
            // @ts-ignore
        } else if (globalThis.playerOneToken === providedToken) {
            playerToken = providedToken
            // @ts-ignore
            // canStartGame = false
            startedGame = true
        }
    }
    // @ts-ignore
    if (globalThis.playerOneToken === undefined && globalThis.playerOneStarted === undefined) {
        // generate a token
        canStartGame = true
        playerToken = token
        // @ts-ignore
    } else if (globalThis.playerOneToken === undefined && globalThis.playerOneStarted === true) {
        // @ts-ignore
        playerToken = providedToken
        // @ts-ignore
        globalThis.playerOneToken = providedToken
    }

    return {
        post: {
            // @ts-ignore
            stuff: undefined,
            playerToken: playerToken,
            rejectedToken: rejectedToken,
            providedToken: providedToken,
            canStartGame: canStartGame,
            debug: debug,
            startedGame: startedGame,
            board: board
        }
    };
}

