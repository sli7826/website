//var myFormData = new FormData();
//var form = document.forms.namedItem("fileinfo");
//var oData = new FormData(form);

function submit(){
    var form = document.forms.namedItem("fileinfo");
    var oData = new FormData(form);
    alert(oData.get('filelabel'));
    $.ajax({
        type: 'POST',
        url: '/upload',
        processData: false,
        contentType: false,
        data: {
            refreshToken: getCookie('refreshJwt'),
            file: oData,
        },
        success: function(data) {
        },
        error: function(xhr) {
        console.log(xhr);
        }
    });
}
