import './styles.css';


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let paras = $("input#paras").val();
    let words = $("input#words").val();
    let getIpsum = $.get("http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=" + paras + "&words=" + words),
      result = function(html) {
        $("#results").html(html);
      },
      error = function() {
        $("errors").text("Something went wrong with your request. Try again.");
      };
    getIpsum.then(result, error);
    $("#ipsum").show();
  });
});
