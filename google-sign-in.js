console.log('holi :3');

var googleUser = {};
  var startApp = function () {
    gapi.load('auth2', function () {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: '967070380942-grt0ll53mjrqced5h4o36fv2aillg02q.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      attachSignin(document.getElementById('customBtn'));
    });
  };

  function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
      function (googleUser) {
        document.getElementById('name').innerText = "Signed in: " +
          googleUser.getBasicProfile().getName();
      },
      function (error) {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
