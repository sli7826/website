let users;
var data = {
    myemail: "a@a"
};
$.ajax({
    type: 'GET',
    url: '/upload',
    data,
    success: function(data) {
      //game = new Phaser.Game(config);
      users = data;
      alert(users);
    },
    error: function(xhr) {
      console.log(xhr);
    }
  });