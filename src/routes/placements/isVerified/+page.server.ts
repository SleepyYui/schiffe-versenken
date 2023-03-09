/** @type {import('./$types').PageServerLoad} */
export async function load(params: { url: { searchParams: { get: (arg0: string) => any } } }) {
    //console.log(params)
    let player = params.url.searchParams.get('player')
    let isVerified;

    if (player === null) {
        //providedToken = undefined
        return {
            post: {
                verified: "undefined",
                status: 'error',
                message: 'Not enough parameters provided'
            }
        };
    } else {
        if (player === 'playerOne') {
            // @ts-ignore
            isVerified = globalThis.playerOneVerifiedPlacements;
        } else if (player === 'playerTwo') {
            // @ts-ignore
            isVerified = globalThis.playerTwoVerifiedPlacements;
        } else {
            return {
                post: {
                    verified: "undefined",
                    status: 'error',
                    message: 'Not enough parameters provided'
                }
            };
        }

        return {
            post: {
                verified: isVerified,
            }
        };
    }
}