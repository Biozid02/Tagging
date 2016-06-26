


$( document ).ready(function() {
    var count= 1;
    $('#b-id').click(function () {
        var container = $('#in').val();
  //      $('#parent').append('<a id="tag' + count + '"> '+ container +' </a> <br/>');

        $('#parent').append('<div class="child_div"  id="d">'+ container +  '<a class = "tags" id="tag' + count + '"> delete </a> </div> ');

        $('#tag' + count).on('click', function(){

            this.closest("#d").remove();
        });
        count = count +1 ;
    });

});

