// $(document).ready(function() {
//     $("#friend-form").submit( (e) => {
//         e.preventDefault();
//         let newFriend = $("#input").val();
//         let newElement = createFriend(newFriend);
//         $("#friend-list").append(newElement);
//         $("#input").val("");
//         console.log(e.currentTarget[0].value);
    
// })
//     function creatFriend(name) {
//         return $(`<li>${name}</li>`).addClass("list-group-item list-group-item-action list-group-item-dark");
//     }
// });
// $(document).ready(function(){
//     $('#friend-form').submit( (e) => {
//         e.preventDefault();
//         let newFriend = $('#input').val();
//         let newElement = createFriend(newFriend);
//         $('#friend-list').append(newElement);
//         $('#input').val('');
//         console.log(e.currentTarget[0].value);
//     })
//     $('#friend-list').on('click', 'li', function(e) {
//         $(this).remove();

//     })
//     function createFriend(name) {
//         return $(`<li> ${name}</li>`).addClass('list-group-item list-group-item-action list-group-item-dark');
//     }
// })
// $(() => {

$(document).ready(function() {

  $.ajax({
    url: 'http://rest.learncode.academy/api/theDude/friends',
    type: 'GET'
  }).done( (data) => {
    data.forEach( (eachFriend) => {
      let name= eachFriend.firstName + " " + eachFriend.lastName;
      let newElement = createFriend(name);
      $('#friend-list').append(newElement);
    })
  }).fail( () => {
    alert('AJAX call failed, unable to retreive data.');
  })
  

    $("#friend-form").submit( (e) => {
      e.preventDefault();
      let newFriend = $('#input').val();
      let newElement = createFriend(newFriend);
      $('#friend-list').append(newElement);
      $('#input').val("");

      $('friend-list').on('click', 'li', function(e) {
          console.log('clicked!');
          console.log($(this));
      })
      console.log(e.currentTarget[0].value);
    })
    $('#friend-list').on('click', 'li', function(e) {
      $(this).remove();
    })
    function createFriend(name) {
      return $(`<li> ${name}</li>`).addClass('list-group-item list-group-item-action list-group-item-dark');
    }
  });


// // example of ajax call request

// /*
// $.ajax({
//   url: 'http://www.website.com/api',
//   type: 'get'
//   }).done( (data) => {
//     //do something with the data we get back
//   }).fail( () => {
//     //handle the error
//   })
// */

// // $(document).ready(function(){
// //  })  this is the old way of doing things. the new way is bellow. 




  $.ajax({
   url: 'http://rest.learncode.academy/api/theDude/friends',
  type: 'GET'
}).done( (data) => {
data.forEach( (eachFriend) => {
  console.log(eachFriend.firstName + " " + eachFriend.lastName);
})
}).fail( () => {
  alert('AJAX call fialed, Unable to retrive Requested DAta');

})

// // $.ajax({
// //   url: 'http://rest.learncode.academy/api/theDude/friends',
// //   type: 'GET'
// // }).done( (data) => { 
// //   console.log(data);
// // })



// })



