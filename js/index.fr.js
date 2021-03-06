$(document).ready(function() {

  function updateFullframe() {
    if ($("#fullframe")[0].value) {
      if ($("#fullframe")[0].value.indexOf("-") > -1) {
        result = "";
        $("#fullframe")[0].value.split("-").forEach(function(i, j) {
          if(j <= 1) {
            itemValue = (isNaN(parseFloat(i)) ? 0 : i);
            result += Math.round(parseFloat(itemValue) * parseFloat($("#sensorselect")[0].value) / 43.2);
            result += (j == 0 ? "-" : "");
          }
        });
        $("#fullframeresult").text("optique zoom " + result + "mm");
      }
      else if (!isNaN($("#fullframe")[0].value)) {
        result = parseFloat($("#fullframe")[0].value) * parseFloat($("#sensorselect")[0].value) / 43.2;
        $("#fullframeresult").text("optique " + Math.round(result) + "mm");
      }
    }

  }

  function updateSensor() {
    if ($("#sensor")[0].value) {
      if ($("#sensor")[0].value.indexOf("-") > -1) {
        result = "";
        $("#sensor")[0].value.split("-").forEach(function(i, j) {
          if(j <= 1) {
            itemValue = (isNaN(parseFloat(i)) ? 0 : i);
            result += Math.round(parseFloat(itemValue) * 43.2 / parseFloat($("#sensorselect")[0].value));
            result += (j == 0 ? "-" : "");
          }
        });
        $("#sensorresult").text("optique zoom " + result + "mm");
      }
      else if (!isNaN($("#sensor")[0].value)) {
        result = parseFloat($("#sensor")[0].value) * 43.2 / parseFloat($("#sensorselect")[0].value);
        $("#sensorresult").text("optique " + Math.round(result) + "mm");
      }
    }

  }

  $("#sensorselect").on("change", function(e) {
    $(".invisible").show();
    updateFullframe();
    updateSensor();
  })

  $("#fullframe").on("input", function(e) {
    updateFullframe()
  });

  $("#sensor").on("input", function(e) {
    updateSensor()
  });

});