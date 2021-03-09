$(document).ready(function () {
  $("#nesUserLabel").css("display", "none");
  $("#nesPassLabel").css("display", "none");

  $("#button").click(function () {
    let username = $("#user")[0].value;
    let password = $("#pass")[0].value;

    if (username === "" && password === "") {
      $("#nesUserLabel").css("display", "block");
      $("#user").css("background", "#ed8d8d");
      $("#user").addClass("plc");
      $("#pass").css("background", "#ed8d8d");
      $("#pass").addClass("plc");
      $("#nesPassLabel").css("display", "block");
    } else if (username === "") {
      $("#nesUserLabel").css("display", "block");
      $("#user").css("background", "#ed8d8d");
      $("#user").addClass("plc");
      $("#nesPassLabel").css("display", "none");
    } else if (password === "") {
      $("#nesUserLabel").css("display", "none");
      $("#pass").css("background", "#ed8d8d");
      $("#pass").addClass("plc");
      $("#nesPassLabel").css("display", "block");
    } else {
      $("#nesUserLabel").css("display", "none");
      $("#nesPassLabel").css("display", "none");
      ajax(username, password);
    }
  });

  let ajax = function (user, pass) {
    let url = "http://localhost:8888/login";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        check_user(this.response);
      }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(`{"userName": "${user}","password": "${pass}"}`);
  };

  function check_user(checkingData) {
    if (checkingData === "true") {
      alert("ورود موفقیت آمیز");
      $("#user").val("");
      $("#pass").val("");
    } else {
      alert("کاربری با این مشخصات وجود ندارد");
      $("#user").val("");
      $("#pass").val("");
    }
  }
});
