import {json} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load(params: { url: { searchParams: { get: (arg0: string) => any } } }) {

    // @ts-ignore
    globalThis.playerOneToken = undefined
    // @ts-ignore
    globalThis.playerTwoToken = undefined
    // @ts-ignore
    globalThis.playerOne = undefined
    // @ts-ignore
    globalThis.playerTwo = undefined
    // set globalThis.board to the object inside the defaultField.json file
    let defaultField = (await import('../../../static/defaultField.json')).default
    // @ts-ignore
    globalThis.board = defaultField
    // @ts-ignore
    // console.log(globalThis.board.col1)
    globalThis.playerOneStarted = undefined
    // @ts-ignore
    globalThis.playerTwoStarted = undefined

    return {
        post: {
            // @ts-ignore
            stuff: globalThis.board,
        }
    };
}