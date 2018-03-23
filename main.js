/****************CHALLENGE ONE**************/
// Challenge #1: How old will I be in 2099?

function calculateAge(birth, year) {
    const difference = year - birth;
    if( difference > 0 ) {
        let msg = `You are ${difference} year${difference > 1 ? 's' : ''} old.`;
        } else if( difference < 0 ) {
        msg = `You will be born in ${-difference} year${difference < -1 ? 's' : ''}.`;
        } else {
        msg = 'You were born this very year!';
    }
  }
  calculateAge(2042, 2000);

  document.getElementById("challenge-1").innerHTML += '<h2>' + msg + '</h2>';
  

