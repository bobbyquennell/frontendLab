 $(document).ready(function(){
                    //1) register a click handler to validate the input fields.
                   $("input[type='submit']").on('click', validate);
                 });
                 
 var validate = function(evt){
                       //do some validation here and get the result
                     
                         var isValid = false;

                    // If the form didn't validate, prevent the
                    //  form submission.
                     if (!isValid)
                        evt.preventDefault();
};