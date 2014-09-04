//define functions and global variables here...
var siteloc = "http://localhost/Lab-HigherOrderFxn";
var scriptloc = "/script/"

function square()
{
  $.ajax({
      url: siteloc + scriptloc + "horder.py",
      data: {e:$("#e").val(),
             },
	  success: function (res) {
                  $("p").html("<br>");
				  $("p").append(res);
				  
				  }
	})
}

function cube()
{
  $.ajax({
      url: siteloc + scriptloc + "horder1.py",
      data: {e:$("#e").val(),
             },
	  success: function (res) {
                  $("p").html("<br>");
				  $("p").append(res);
				  }
	})
}

