const timesheet = document.getElementById("timesheet");
const timesheetForm = document.getElementById("timesheetForm");
const openForm = document.getElementById("openForm");
const openSheet = document.getElementById("openSheet");
const closeProfileUpdatePopup = document.getElementById(
  "closeProfileUpdatePopup"
);
const openProfileUpdatePopup = document.getElementById(
  "openProfileUpdatePopup"
);
const profileUpdatePopup = document.getElementById("profileUpdatePopup");

const oepnDeletionPopup = document.getElementById("oepnDeletionPopup");
const openLogoutPopup = document.getElementById("openLogoutPopup");
const closeLogoutPopup = document.getElementById("closeLogoutPopup");
const logoutPopup = document.getElementById("logoutPopup");
const closeDeletionPopup = document.getElementById("closeDeletionPopup");
const deletionPopup = document.getElementById("deletionPopup");

openForm.addEventListener("click", () => {
  if (timesheetForm.classList.contains("hidden")) {
    timesheet.classList.add("hidden");
    timesheetForm.classList.remove("hidden");
  }
});

openSheet.addEventListener("click", () => {
  if (timesheet.classList.contains("hidden")) {
    timesheet.classList.remove("hidden");
    timesheetForm.classList.add("hidden");
  }
});

openProfileUpdatePopup.addEventListener("click", () => {
  if (profileUpdatePopup.classList.contains("hidden")) {
    profileUpdatePopup.classList.remove("hidden");
    profileUpdatePopup.classList.add("flex");
  }
});

closeProfileUpdatePopup.addEventListener("click", () => {
  if (profileUpdatePopup.classList.contains("flex")) {
    profileUpdatePopup.classList.add("hidden");
    profileUpdatePopup.classList.remove("flex");
  }
});

openLogoutPopup.addEventListener("click", () => {
  if (logoutPopup.classList.contains("hidden")) {
    logoutPopup.classList.remove("hidden");
    logoutPopup.classList.add("flex");
  }
});

closeLogoutPopup.addEventListener("click", () => {
  if (logoutPopup.classList.contains("flex")) {
    logoutPopup.classList.add("hidden");
    logoutPopup.classList.remove("flex");
  }
});

oepnDeletionPopup.addEventListener("click", () => {
  if (deletionPopup.classList.contains("hidden")) {
    deletionPopup.classList.remove("hidden");
    deletionPopup.classList.add("flex");
  }
});

closeDeletionPopup.addEventListener("click", () => {
  if (deletionPopup.classList.contains("flex")) {
    deletionPopup.classList.add("hidden");
    deletionPopup.classList.remove("flex");
  }
});
