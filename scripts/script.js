$(document).ready(function() { 

    // event listener to make the buttons looked pressed down when clicked on
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
    button.addEventListener('click', () => {
    buttons.forEach(button => button.classList.remove('active'));
    button.classList.add('active');
    });
});

// function for welcome card
    $(function () { 
        $.each(welcomeInfoArray, (index, value) => {
        console.log('<div class="card col-md-4"> ' +
        value.hello +
        '<div class="card-body">' +
        value.reasonOne +'"</div></div>'
    );


// appending the card and info on the card in html
$('#welcome').append(

    `
    <div id="welcomeCard" class="card col-sm-6 offset-sm-3">
    <div class="card-body">
      <h5 class="card-title">${ welcomeInfoArray[index].hello }</h5>
      <p class="card-title">${ welcomeInfoArray[index].reasonOne }</p>

    </div>
  </div>
    `
  )

});
});
});


// card info for introduction to page
let welcomeInfoArray = [
    {
    hello: "Hello! Welcome to the final project of CIS 376",
    reasonOne: "UX design should be important for interface. I have given an example of a bad UX as well as an improved version of how I think things could work better.", 
    }
  
  ]

  // functions for buttons of bad and good UX hidden before clicked on and shows after click
  function myFunction1() {
    var cardDisplay = document.getElementById("badUX");
    if (cardDisplay.style.display === "none") {
        cardDisplay.style.display = "block";
    } else {
      cardDisplay.style.display = "none";
    }
  }

  // for good UX to show when clicked
  function myFunction2() {
    var cardDisplay = document.getElementById("goodUX");
    if (cardDisplay.style.display === "none") {
        cardDisplay.style.display = "block";
    } else {
      cardDisplay.style.display = "none";
    }
  }