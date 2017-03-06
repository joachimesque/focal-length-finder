$(document).ready(function() {

  $("#sensorselect").on("change", function(e) {
    $(".invisible").show();
    updateFullframe();
    updateSensor();
  })

  function updateFullframe() {
    if ($("#fullframe")[0].value) {
      if ($("#fullframe")[0].value.indexOf("-") > -1) {
        result = "";
        $("#fullframe")[0].value.split("-").forEach(function(i, j) {
          nombre = (isNaN(parseInt(i)) ? 0 : i);
          result += Math.round(parseInt(nombre) * Math.sqrt(parseInt($("#sensorselect")[0].value)) / Math.sqrt(864));
          result += (j == 0 ? "-" : "");
        });
        $("#fullframeresult").text(result + "mm zoom lens");
      }
      else if (!isNaN($("#fullframe")[0].value)) {
        result = parseInt($("#fullframe")[0].value) * Math.sqrt(parseInt($("#sensorselect")[0].value)) / Math.sqrt(864);
        $("#fullframeresult").text(Math.round(result) + "mm lens");
      }
    }

  }

  function updateSensor() {
    if ($("#sensor")[0].value) {
      if ($("#sensor")[0].value.indexOf("-") > -1) {
        result = "";
        $("#sensor")[0].value.split("-").forEach(function(i, j) {
          nombre = (isNaN(parseInt(i)) ? 0 : i);
          result += Math.round(parseInt(nombre) * Math.sqrt(864) / Math.sqrt(parseInt($("#sensorselect")[0].value)));
          result += (j == 0 ? "-" : "");
        });
        $("#sensorresult").text(result + "mm zoom lens");
      }
      else if (!isNaN($("#sensor")[0].value)) {
        result = parseInt($("#sensor")[0].value) * Math.sqrt(864) / Math.sqrt(parseInt($("#sensorselect")[0].value));
        $("#sensorresult").text(Math.round(result) + "mm lens");
      }
    }

  }

  $("#fullframe").on("input", function(e) {
    updateFullframe()
  });

  $("#sensor").on("input", function(e) {
    updateSensor()
  });

});