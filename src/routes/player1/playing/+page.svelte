<script>
    /** @type {import('./$types').PageData} */  export let data;
</script>
<head>
    <title>Player 1</title>
</head>
<body>
<button id="btn" style="display: none" value="{JSON.stringify(data.post.boardPlayerOne)}">Board</button>
<button id="sid" style="display: none" value="{data.post.playerToken}">Session ID</button>
<script>
    // on page load
    window.onload = function () {
        //refresh every 2 seconds
        setInterval(refresh, 2000);
        setTimeout(function () {
            refresh(); // refresh once on page load
        }, 200);
    };


    function refresh() {
        //get the value of the button
        let board = getBoard()
        // Loop through each column and row
        //console.log(board);
        for (let col in board) {
            for (let row in board[col]) {
                //console.log(board[col][row]);
                //console.log(col);
                //console.log(row);
                // Get the current value at the current location
                let currentValue = board[col][row];

                // Convert the value to the corresponding color
                let color;
                let value;
                switch (currentValue) {
                    case "0":
                        color = "blue";
                        // convert row and col to numbers (remove the first 3 letters)
                        // let row2 = row.substring(3);
                        // let col2 = col.substring(3);
                        value = "<button onclick='buttonPress(\"" + row + "\",\"" + col + "\")'>🟦</button>";
                        break;
                    case "1":
                        color = "green";
                        value = "<button onclick='buttonPress(\"" + row + "\",\"" + col + "\")'>🟩</button>";
                        break;
                    case "2":
                        color = "red";
                        value = "<button>🟥</button>";
                        break;
                    case "3":
                        color = "green-destroyed";
                        value = "<button>💥</button>";
                        break;
                    case "4":
                        color = "red-destroyed";
                        value = "<button>💥</button>";
                        break;
                    case "5":
                        color = "green-missed";
                        value = "<button>🟨</button>";
                        break;
                    case "6":
                        color = "red-missed";
                        value = "<button>🟨</button>";
                        break;

                }

                // Set the background color of the current location to the corresponding color
                let cell = document.querySelector(`[data-col="${col}"][data-row="${row}"]`);
                //console.log(cell);
                cell.classList.add(color);
                // set cell value
                cell.innerHTML = value;
                //console.log(cell);
            }
        }
    }

    function getBoard() {
        // set the board variable to the body of the /placements page
        let board;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "/placements", false);
        xhr.send();
        if (xhr.status === 200) {
            // console.log(xhr.responseText);
            // get stuff inside <body> tags
            board = xhr.responseText
            //console.log(board);
            board = board.match(/<body>([\s\S]*)<\/body>/)[1];
            // remove stuff after </board>
            //console.log(board);
            board = board.split("</body>")[0];
            //console.log(board);
            board = JSON.parse(board);
        }
        //console.log(board);
        return board;
    }

    function buttonPress(x, y) {
        // set the board variable to the body of the /placements page
        let board;
        let sid = document.getElementById("sid").value;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `/placements/place?row=${x}&col=${y}&sid=${sid}`, false);
        xhr.send();
        refresh();
    }

    function checkForVerification() {
        // set the board variable to the body of the /placements page
        let isVerified = false;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "/placements/isVerified?player=playerOne", false);
        xhr.send();
        if (xhr.status === 200) {
            // console.log(xhr.responseText);
            // get stuff inside <body> tags
            isVerified = xhr.responseText
            //console.log(board);
            isVerified = isVerified.match(/<body>([\s\S]*)<\/body>/)[1];
            // remove stuff after </board>
            //console.log(board);
            isVerified = isVerified.split("</body>")[0];
            //console.log(board);
            isVerified = JSON.parse(isVerified);
        }
        //console.log("isVerified");
        //console.log(isVerified);
        return isVerified;
    }

    function verifyPlacements() {
        let sid = document.getElementById("sid").value;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `/placements/verify?sid=${sid}`, false);
        xhr.send();
        refresh();
        let isVerified = checkForVerification();
        if (isVerified) {
            // remove verify button
            let verifyButton = document.getElementById("verify");
            verifyButton.parentNode.removeChild(verifyButton);
            // add a text saying that the placements have been verified
            let text = document.createElement("p");
            text.innerHTML = "Placements have been verified";
            document.body.appendChild(text);
        }
    }

</script>

{#if data.post.canStartGame}
    <button onclick="window.location.href='/player1?sid={data.post.playerToken}'">Start Playing</button>
{/if}
{#if data.post.rejectedToken}
    <script>
        // redirect to home page
        window.location.href = "/";
    </script>
{/if}
{#if !data.post.startedGame}
    <script>
        // redirect to home page
        window.location.href = "/";
    </script>
{/if}
<button onclick="window.location.href='/reset'">Reset</button>
<button onclick="window.location.href='/'">Home</button>
{#if !data.post.verifiedPlacements}
    <button id="verify" onclick='verifyPlacements()'>Verify Placements</button>
{/if}

{JSON.stringify(data.post)}

<table>
    <tbody id="board">
    <tr>
        <th></th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
        <th>7</th>
        <th>8</th>
    </tr>
    <tr>
        <th>A</th>
        <td data-col="col1" data-row="row1"></td>
        <td data-col="col2" data-row="row1"></td>
        <td data-col="col3" data-row="row1"></td>
        <td data-col="col4" data-row="row1"></td>
        <td data-col="col5" data-row="row1"></td>
        <td data-col="col6" data-row="row1"></td>
        <td data-col="col7" data-row="row1"></td>
        <td data-col="col8" data-row="row1"></td>
    </tr>
    <tr>
        <th>B</th>
        <td data-col="col1" data-row="row2"></td>
        <td data-col="col2" data-row="row2"></td>
        <td data-col="col3" data-row="row2"></td>
        <td data-col="col4" data-row="row2"></td>
        <td data-col="col5" data-row="row2"></td>
        <td data-col="col6" data-row="row2"></td>
        <td data-col="col7" data-row="row2"></td>
        <td data-col="col8" data-row="row2"></td>
    </tr>
    <tr>
        <th>C</th>
        <td data-col="col1" data-row="row3"></td>
        <td data-col="col2" data-row="row3"></td>
        <td data-col="col3" data-row="row3"></td>
        <td data-col="col4" data-row="row3"></td>
        <td data-col="col5" data-row="row3"></td>
        <td data-col="col6" data-row="row3"></td>
        <td data-col="col7" data-row="row3"></td>
        <td data-col="col8" data-row="row3"></td>
    </tr>
    <tr>
        <th>D</th>
        <td data-col="col1" data-row="row4"></td>
        <td data-col="col2" data-row="row4"></td>
        <td data-col="col3" data-row="row4"></td>
        <td data-col="col4" data-row="row4"></td>
        <td data-col="col5" data-row="row4"></td>
        <td data-col="col6" data-row="row4"></td>
        <td data-col="col7" data-row="row4"></td>
        <td data-col="col8" data-row="row4"></td>
    </tr>
    <tr>
        <th>E</th>
        <td data-col="col1" data-row="row5"></td>
        <td data-col="col2" data-row="row5"></td>
        <td data-col="col3" data-row="row5"></td>
        <td data-col="col4" data-row="row5"></td>
        <td data-col="col5" data-row="row5"></td>
        <td data-col="col6" data-row="row5"></td>
        <td data-col="col7" data-row="row5"></td>
        <td data-col="col8" data-row="row5"></td>
    </tr>
    <tr>
        <th>F</th>
        <td data-col="col1" data-row="row6"></td>
        <td data-col="col2" data-row="row6"></td>
        <td data-col="col3" data-row="row6"></td>
        <td data-col="col4" data-row="row6"></td>
        <td data-col="col5" data-row="row6"></td>
        <td data-col="col6" data-row="row6"></td>
        <td data-col="col7" data-row="row6"></td>
        <td data-col="col8" data-row="row6"></td>
    </tr>
    <tr>
        <th>G</th>
        <td data-col="col1" data-row="row7"></td>
        <td data-col="col2" data-row="row7"></td>
        <td data-col="col3" data-row="row7"></td>
        <td data-col="col4" data-row="row7"></td>
        <td data-col="col5" data-row="row7"></td>
        <td data-col="col6" data-row="row7"></td>
        <td data-col="col7" data-row="row7"></td>
        <td data-col="col8" data-row="row7"></td>
    </tr>
    <tr>
        <th>H</th>
        <td data-col="col1" data-row="row8"></td>
        <td data-col="col2" data-row="row8"></td>
        <td data-col="col3" data-row="row8"></td>
        <td data-col="col4" data-row="row8"></td>
        <td data-col="col5" data-row="row8"></td>
        <td data-col="col6" data-row="row8"></td>
        <td data-col="col7" data-row="row8"></td>
        <td data-col="col8" data-row="row8"></td>
    </tr>
    </tbody>
</table>

</body>
