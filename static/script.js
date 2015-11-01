$(function() {
    $('button').click(function() {
        var date = $('#txtDate').val();
        var memo = $('#txtMemo').val();
        $.ajax({
            url: '/_send_post',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});
