
// Make sure we wait to attach our handlers until the DOM is fully loaded.

 var burgerList = $("#burger-list");

$(function() {
  $.ajax("/burgers", {
    type: "GET"
  }).then(function(data) {
    console.log(data)

    var burgers = data.burgers;
    var len = burgers.length;

    for (var i = 0; i < len; i++) {
      burgerList.append("<li>" + burger[i].burger_name  + "<button class='change-devour' data-id='" +"</li>"); 
         
        // why are the i and bracket the same color in this set of code? 
        burgers[i].id + 
        ". "+ burgers[i].name +
        "<button class='change-devour' data-id='" +
        burgers[i].id +
        "' data-newburger='" +
        !burgers[i].devour +
        "'>";

      if (burgers[i].devoured === true) {    
      // should this be .type or .li?  🤔 should be .li b/c you are appending a type of burger to the li. Or type b/c your adding a type to the list
        new_elem += "devour";
      } else {
        new_elem += "delete";
      }

      new_elem += "</button>";

      new_elem +=
        "<button class='delete-burger' data-id='" +
        burgers[i].id +
        "'>DELETE!</button></li>";
        //example below
       //if (cats[i].sleepy) {sleepyElem.append(new_elem);} else {nosleepyElem.append(new_elem);
    //   }
    // }
      if (burgers[i].list) {
        newburger.append(burger_name);
      } else {
       burger.delete;
      } 
    }
  });
  // append to a section of the html 

  $(document).on("click", ".change-devour", function
  (event) {
    var id = $(this).data("id");
    var devour = $(this).data("devour")===true;

    var newburger = {
      devour : newburger
    };

  // here the computer changes to devour which is always true or defaults to false. 

    // Send the PUT request.
    $.ajax("/burgers/" + id, {
      type: "PUT",
      data: JSON.stringify(newburger),
      dataType:'json',
      contentType: 'application/json'
    }).then(function() {
      console.log("changed burger to", newburger);
      // Reload the page to get the updated list
      location.reload();
    });
  });

    // with the burgers we want it be devour===true or default to false. I am thinking, line 82 is wrong for my purposes. 
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    // event.preventDefault(); 
    var newburger = {
      name: $("#veggie") .val().trim(),
    devoured: $("[name=devoured]:checked").val().trim()
    };
    
    // Send the POST request.
    $.ajax("/burgers", {
      type: "POST",
      data: JSON.stringify(newBurger),
      dataType:'json',
      contentType: 'application/json'

    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(document).on("click", ".delete-burger", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
