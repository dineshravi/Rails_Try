$(document).ready(function(){

    $("#b1").click(function (){
      $("body").css("background-color","#00FF00");
      console.log("hello!!")
    });

    $("#new_content").submit(function(e){
      e.preventDefault();
      
      console.log("Ajax test");
    
    var content_name = $("input#content_commenter").val();
      if (content_name =="") {
        $(".error").html("Name is empty");
        return;
      }

    var content_body = $("#content_body").val();
      if (content_body == "") {
        $(".error").html("Body is empty");
        return;
      }

      $.ajax({
          type : "POST",
          url : "/submit",
          data: {
                  "content": {
                    "content_commenter": content_name,
                    "content_body": content_body
                  }
                },
          success: function (r){
            $("#t1").append(r.data.template);
            $(".error").html("Ajax success");

        }

      });
      //alert('jkhj');
    });

    $(".btnclk").on("click",function(e){
       var self = $(this)
        console.log(self.attr('data-key'));
        console.log(self.parent().parent());
      //self.parent().parent().remove();
      $.ajax({
        type :"DELETE",
        url : "/delete",
        data : { 
                  "id" : self.attr('data-key')
                },

        success: function(r) {
          self.parent().parent().remove();
          $(".error").html("Ajax Delete success");
        }



      });




    });

  });