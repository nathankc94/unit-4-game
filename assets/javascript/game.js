

    // 1. create varribles //////////////////////////////

    var crystal1 = Math.floor(Math.random() * 12) + 1;
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    var crystal4 = Math.floor(Math.random() * 12) + 1;

    var winningNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $("#targetNumber").html(winningNumber);

    var totalScore = 0;
    $("#totalScore").html(totalScore);

    var wins = 0;
    var losses = 0;  

    //  2. user input ///////////////////////////////////
    $('#crystal1').click(() => {
        totalScore = totalScore + crystal1;
        $('#totalScore').text(totalScore);
        if (totalScore === winningNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > winningNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#crystal2').click(() => {
        totalScore = totalScore + crystal2;
        $('#totalScore').text(totalScore);
        if (totalScore === winningNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > winningNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#crystal3').click(() => {
        totalScore = totalScore + crystal3;
        $('#totalScore').text(totalScore);
        if (totalScore === winningNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > winningNumber) {
            lose();
            reset();
            resetTwo();
        }
    });
    $('#crystal4').click(() => {
        totalScore = totalScore + crystal4;
        $('#totalScore').text(totalScore);
        if (totalScore === winningNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > winningNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    // 3. count wins and losses //////////////////////////////

    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
        resetTwo();
        reset();
    }

    function lose() {
        losses = losses + 1;
        $('#losses').text(losses);
        resetTwo();
        reset();
    }

    // 4. reset game ////////////////////////
    function reset() {
        totalScore = 0;
        $('#totalScore').text(totalScore);
    }

    function resetTwo() {
        winningNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $('#targetNumber').html(winningNumber);
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
    }




