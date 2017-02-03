$(document).on('ready', function(){
    $('#call-back-submit').on('click', function(e){
        var pattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        var userTel = $('#field-id').val();
        var valid = pattern.test(userTel);
        if(valid || userTel == ''){
        $('#call-back-checkbox-id').removeAttr('checked');}
    });
});