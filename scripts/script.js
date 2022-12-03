$(document).ready(function() { 


    $(function () { 
        $.each(welcomeInfoArray, (index, value) => {
        console.log('<div class="card col-md-4"> ' +
        value.hello +
        '<div class="card-body">' +
        value.reasonOne +'"</div></div>'
    );

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
    hello: "Hello! Welcome to the final project of CIS 376 (aka the favorite class)",
    reasonOne: "Echo Game", 
    }
  
  ]