firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("out").onclick = function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Sign Out Successful");
          window.location.href = "/reg/login.html";
        })
        .catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    };
  } else {
    window.location.href = "../reg/login.html";
  }
});
