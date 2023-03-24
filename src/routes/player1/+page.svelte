<script>
    /** @type {import('./$types').PageData} */  export let data;
</script>
<head>
    <title>Player 1</title>
</head>
<body>
<button id="btn" style="display: none" value="{JSON.stringify(data.post.board)}">Start</button>
<script>
    // on page load
    window.onload = function () {
        //refresh every 2 seconds
        setInterval(refresh, 2000);
        // wait for 100ms
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
                        value = "🟦";
                        break;
                    case "1":
                        color = "green";
                        value = "🟩";
                        break;
                    case "2":
                        color = "red";
                        value = "🟥";
                        break;
                    case "3":
                        color = "green-destroyed";
                        value = "💥";
                        break;
                    case "4":
                        color = "red-destroyed";
                        value = "💥";
                        break;
                    case "5":
                        color = "green-missed";
                        value = "🟨";
                        break;
                    case "6":
                        color = "red-missed";
                        value = "🟨";
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
        xhr.open("GET", "/placements?player=playerOne", false);
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

</script>

{#if data.post.canStartGame}
    <button onclick="window.location.href='/player1/playing?sid='{data.post.playerToken}">Start Playing</button>
{/if}
{#if data.post.rejectedToken}
    <p>Du kannst diesem Spiel nicht mehr beitreten.</p>
{/if}


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
