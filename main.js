$(document).ready(function() {
  $("#add").click(function(e) {
    e.preventDefault()
    var numone = Number($("#numone").val())

    var numtwo = Number($("#numtwo").val())

    $("#answer").val(numone + numtwo)
  })

  $("#subtract").click(function(e) {
    e.preventDefault()
    var numone = Number($("#numone").val())

    var numtwo = Number($("#numtwo").val())

    $("#answer").val(numone - numtwo)
  })

  $("#multiply").click(function(e) {
    e.preventDefault()
    var numone = Number($("#numone").val())

    var numtwo = Number($("#numtwo").val())

    $("#answer").val(numone * numtwo)
  })

  $("#divide").click(function(e) {
    e.preventDefault()
    var numone = Number($("#numone").val())

    var numtwo = Number($("#numtwo").val())

    $("#answer").val(numone / numtwo)
  })
})
