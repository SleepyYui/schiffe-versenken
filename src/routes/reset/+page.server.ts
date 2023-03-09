/** @type {import('./$types').PageServerLoad} */

function getDefaultField() {
    const defaultField = {
        "col1": {
            "row1": "0",
            "row2": "0",
            "row3": "0",
            "row4": "0",
            "row5": "0",
            "row6": "0",
            "row7": "0",
            "row8": "0"
        },
        "col2": {
            "row1": "0",
            "row2": "0",
            "row3": "0",
            "row4": "0",
            "row5": "0",
            "row6": "0",
            "row7": "0",
            "row8": "0"
        },
        "col3": {
            "row1": "0",
            "row2": "0",
            "row3": "0",
            "row4": "0",
            "row5": "0",
            "row6": "0",
            "row7": "0",
            "row8": "0"
        },
        "col4": {
            "row1": "0",
            "row2": "0",
            "row3": "0",
            "row4": "0",
            "row5": "0",
            "row6": "0",
            "row7": "0",
            "row8": "0"
        },
        "col5": {
            "row1": "0",
            "row2": "0",
            "row3": "0",
            "row4": "0",
            "row5": "0",
            "row6": "0",
            "row7": "0",
            "row8": "0"
        },
        "col6": {
            "row1": "0",
            "row2": "0",
            "row3": "0",
            "row4": "0",
            "row5": "0",
            "row6": "0",
            "row7": "0",
            "row8": "0"
        },
        "col7": {
            "row1": "0",
            "row2": "0",
            "row3": "0",
            "row4": "0",
            "row5": "0",
            "row6": "0",
            "row7": "0",
            "row8": "0"
        },
        "col8": {
            "row1": "0",
            "row2": "0",
            "row3": "0",
            "row4": "0",
            "row5": "0",
            "row6": "0",
            "row7": "0",
            "row8": "0"
        }
    }
    return defaultField
}

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
    //let defaultField = (await import('../../../static/defaultField.json')).default
    // @ts-ignore
    globalThis.boardTemplate = getDefaultField()
    // @ts-ignore
    globalThis.boardPlayerOne = getDefaultField()
    // @ts-ignore
    globalThis.boardPlayerTwo = getDefaultField()
    // console.log(globalThis.board.col1)
    // @ts-ignore
    globalThis.playerOneStarted = undefined
    // @ts-ignore
    globalThis.playerTwoStarted = undefined
    // @ts-ignore
    globalThis.playerOneShips = 1
    // @ts-ignore
    globalThis.playerTwoShips = 1
    // @ts-ignore
    globalThis.playerOneDoubleShips = 2
    // @ts-ignore
    globalThis.playerTwoDoubleShips = 2
    // @ts-ignore
    globalThis.playerOneTripleShips = 3
    // @ts-ignore
    globalThis.playerTwoTripleShips = 3
    // @ts-ignore
    globalThis.playerOneQuadrupleShips = 4
    // @ts-ignore
    globalThis.playerTwoQuadrupleShips = 4
    // @ts-ignore
    globalThis.playerOneTotalShips = 10
    // @ts-ignore
    globalThis.playerTwoTotalShips = 10
    // @ts-ignore
    globalThis.playerOneVerifiedPlacements = false
    // @ts-ignore
    globalThis.playerTwoVerifiedPlacements = false

    return {
        post: {
            // @ts-ignore
            stuff: globalThis.boardPlayerOne,
            // @ts-ignore
            stuff2: globalThis.boardPlayerTwo,
            // @ts-ignore
            stuff3: globalThis.boardTemplate,
        }
    };
}