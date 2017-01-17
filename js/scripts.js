$(document).ready(function() {
  $("form#transportation-survey").submit(function(event) {
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {var workmode = $(this).val();
      $("#work-responses").append(workmode+"<br>")
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function() {var funmode = $(this).val();
      $("#fun-responses").append(funmode+"<br>");
    });
    $("#transportation-survey").hide();
  });
});
