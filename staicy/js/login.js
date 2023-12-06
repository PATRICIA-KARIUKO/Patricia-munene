document.getElementById("sign").onclick = function () {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;

      console.log(user);
      window.location.href = "/home.html";
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage);
    });
};
