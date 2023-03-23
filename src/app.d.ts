// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}
    }
    let boardTemplate: any;
    let boardPlayerOne: any;
    let boardPlayerTwo: any;
    let playerOne: any;
    let playerTwo: any;
    let playerOneToken: any;
    let playerTwoToken: any;
    let playerOneStarted: any;
    let playerTwoStarted: any;
    let playerOneShips: any;
    let playerTwoShips: any;
    let playerOneDoubleShips: any;
    let playerTwoDoubleShips: any;
    let playerOneTripleShips: any;
    let playerTwoTripleShips: any;
    let playerOneQuadrupleShips: any;
    let playerTwoQuadrupleShips: any;
    let playerOneTotalShips: any;
    let playerTwoTotalShips: any;
    let playerOneVerifiedPlacements: any;
    let playerTwoVerifiedPlacements: any;
}

export {};
