/* CONTACT */

(function () {
    $("#send_btn").on("click", function () {
      if ($("#name").val() != "" && $("#email").val() != "" && $("#typemsg").val() != ""){

        setTimeout(function () {
        $("#message").addClass("sending").text("Sending");
        $("#send_btn").addClass("sending");
      }, 0);

      setTimeout(function () {
        $("#message").addClass("sent").text("Sent");
        $("#send_btn").addClass("sent");
      }, 2600);
      setTimeout(function () {
        $(".contactForm").css("display", "none");
        $(".popup").css("display", "block");
      }, 4000);
      }
      else{
        alert("Please fill all the blanks.")
      }
    });
  });
  (function () {
    $("#message").on("click", function () {
      if ($("#name").val() != "" && $("#email").val() != "" && $("#typemsg").val() != ""){
        setTimeout(function () {
        $("#message").addClass("sending").text("Sending");
        $("#send_btn").addClass("sending");
      }, 0);

      setTimeout(function () {
        $("#message").addClass("sent").text("Sent");
        $("#send_btn").addClass("sent");
      }, 2600);
      setTimeout(function () {
        $(".contactForm").css("display", "none");
        $(".popup").css("display", "block");
      }, 4000);
      }
      else{
        alert("Please fill all the blanks.")
      }   
    });
  });