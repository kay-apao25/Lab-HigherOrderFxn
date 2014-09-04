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
<<<<<<< HEAD
                  $("p").html(" ");
				  $("p").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ");
				  $("p").append(res);
=======
                  $("p").html("<br>");
				  $("p").append(res);
				  
>>>>>>> 98a11c8734a7aa86e137b4281d7ecf780b4cd4e7
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
<<<<<<< HEAD
                  $("p").html(" ");
				  $("p").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ");
=======
                  $("p").html("<br>");
>>>>>>> 98a11c8734a7aa86e137b4281d7ecf780b4cd4e7
				  $("p").append(res);
				  }
	})
}

