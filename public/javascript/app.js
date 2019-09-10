 // add a new burger to db by POST request
$(function() {
    $("#addBurger").on("click   ", function(event) {
        event.preventDefault();

        if ($("#bur").val().trim() === "") {
            alert("Please enter a valid burger name!");
        } 
        else {
            console.log("hi in js")
            let Burger = {
                burger_name: $("#bur").val().trim()
            };
            console.log(Burger);
            let currentURL = window.location.origin;
            $.post(currentURL + "/api/burgers", Burger)
            .then(function (data) {
            console.log(data);
            location.reload();
            });
        };

    });

    $(".devoured").on("click", function(event) {
        let idInput = $(this).data("id");
        console.log(idInput);

        $.ajax(`/api/burgers/${idInput}`, {type: "PUT"}).then(
            function() {
                location.reload();
            }
        );

    });

});
