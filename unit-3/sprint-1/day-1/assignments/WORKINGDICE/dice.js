
    function roll(){
        // user 1
        const firstNumberOfRandom = Math.floor(Math.random()*6) + 1;

        const firstDiceImage = 'assets/dice' + firstNumberOfRandom + '.png';

        document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

        // user 2

        const secondNumberOfRandom = Math.floor(Math.random()*6) + 1;

        const secondDiceImage = 'assets/dice' + secondNumberOfRandom + '.png';

        document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

        // user 3
        const thirdNumberOfRandom = Math.floor(Math.random()*6) + 1;

        const thirdDiceImage = 'assets/dice' + thirdNumberOfRandom + '.png';
        document.querySelectorAll('img')[2].setAttribute('src', thirdDiceImage);
        // Condition
        if(firstNumberOfRandom > secondNumberOfRandom && firstNumberOfRandom > thirdNumberOfRandom){
            document.querySelector('h1').innerHTML = "Winner is Member A";
        }
        else if(firstNumberOfRandom < secondNumberOfRandom && secondNumberOfRandom > thirdNumberOfRandom){
            document.querySelector('h1').innerHTML = "Winner is Member B";
        }
        else if(thirdNumberOfRandom > secondNumberOfRandom && firstNumberOfRandom < thirdNumberOfRandom){
            document.querySelector('h1').innerHTML = "Winner is Member C";
        }
        else{
            document.querySelector('h1').innerHTML = "It's Draw!";
            document.querySelector('h1').style.color = 'blue';
        }
    }
        