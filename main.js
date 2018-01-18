

$(document).ready(function() {




  $.ajax({
    url: 'http://rest.learncode.academy/api/theDude/friends',
    type: 'GET'
  }).done( (data) => {
    data.forEach( (eachFriend) => {
      let name= eachFriend.firstName + " " + eachFriend.lastName;
      let newElement = createFriend(name, eachFriend.id);   
      $('#friend-list').append(newElement);
    })
  }).fail( () => {
    alert('AJAX call failed, unable to retreive data.');
  })
  


$("#friend-form").submit( (e) => {
  e.preventDefault();
let newFriend = $('#input').val();
//split the name based on the first space we find
let firstName = newFriend.substr(0, newFriend.indexOf(' '));
let lastName = newFriend.substr(newFriend.indexOf(' ')+1);
// construct the ajax request
$.ajax({
    url: 'http://rest.learncode.academy/api/theDude/friends',
    type: "POST",
    data: {
        firstName: firstName,
        lastName: lastName,
        email: `${firstName}@${lastName}.com`
    }

}).done( (data) =>{
  
  let newElement = createFriend(newFriend, data.id); ///  The green section splits up the name into the first name vs last name, and then sends that new friend’s information off to the API. When we get an answer back from the API, we print the answer to the console, and we alert if the ajax request fails.
  $('#friend-list').append(newElement); //the blue section creates a new HTML list-item for that friend and adds it to the screen (sadly, without an ID attribute).

  $('#input').val("");

}).fail( () => {
  alert('AJAX call failed, unable to post new friend');
})


})
  // $("#friend-form").submit( (e) => {   //  this section 
    //  e.preventDefault();               //    stops the page from reloading and gets the value of the input field- then saves that value to a variable
     // let newFriend = $('#input').val(); //////   
      //let newElement = createFriend(newFriend); ///  The green section splits up the name into the first name vs last name, and then sends that new friend’s information off to the API. When we get an answer back from the API, we print the answer to the console, and we alert if the ajax request fails.
      //$('#friend-list').append(newElement); //the blue section creates a new HTML list-item for that friend and adds it to the screen (sadly, without an ID attribute).

      //$('#input').val("");

      // $('friend-list').on('click', 'li', function(e) {
      //     console.log('clicked!');
      //     console.log($(this));
      // })
      // console.log(e.currentTarget[0].value);
   // })
    $('#friend-list').on('click', 'li', function(e) {
      $(this).remove();
    })
    function createFriend(name, id) {
      return $(`<li> ${name}</li>`).addClass('list-group-item list-group-item-action list-group-item-dark').attr('id', id); // added .attr('id', id); this adds a new atribute the this element In the id part. in this curent situation, its my unerstanding that the <li>${name}</li> is created when submit is cicked, its given classes by the .addclass() method. and now we are adding an ID of id
    }
  })

// example of ajax call request

/*
$.ajax({
  url: 'http://www.website.com/api',
  type: 'get'
  }).done( (data) => {
    //do something with the data we get back
  }).fail( () => {
    //handle the error
  })
*/




