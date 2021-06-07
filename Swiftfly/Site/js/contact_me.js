$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
	
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message,
					country: country,
					mobile: mobile,
					sourcelanguage: sourcelanguage,
					targetlanguage: targetlanguage,
					file: file		
                },
                cache: false,
                success: function() {
					
					var dvjQuery = null;
					dvjQuery = $("#success").hide();
					
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
					
					var dvjQuery = null;
					dvjQuery = $("#success").hide();
		
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});


/*set file upload size*/

   $("#file").change(function ()
   {
     var f=this.files[0]
	 if(f.size >= 10000)
	 {
		 $("#success").show();
		 $('#success').html("<div class='alert alert-danger'>");
         $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
         .append("</button>");
         $('#success > .alert-danger').append("<strong>Sorry your file size above 10MB!");
         $('#success > .alert-danger').append('</div>');
		 var $el = $('#file');
		 $el.wrap('<form>').closest('form').get(0).reset();
		 $el.unwrap();
	 }
	 else
	 {
		var dvjQuery = null;
		dvjQuery = $("#success").hide();
	 }
  });
