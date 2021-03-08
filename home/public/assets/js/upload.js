//var myFormData = new FormData();
//var form = document.forms.namedItem("fileinfo");
//var oData = new FormData(form);

function submit(){
    var form = document.forms.namedItem("fileinfo");
    var oData = new FormData(form);
    alert(oData.get)
    $.ajax({
        type: 'POST',
        url: '/upload',
        data: {
            refreshToken: getCookie('refreshJwt')
        },
        success: function(data) {
        },
        error: function(xhr) {
        console.log(xhr);
        }
    });
}
