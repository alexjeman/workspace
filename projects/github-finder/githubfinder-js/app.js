// Init github
const github = new Github();

// Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;
  if (userText !== "") {
    // Make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Call custom alert with 2 parameters (text and class)
        ui.showAlert('User not found', 'alert-dangerCustom')
      } else {
        ui.showProfile(data.profile);
      }
    });
  } else {
    //Clear profile
    ui.clearProfile();
  }
});
