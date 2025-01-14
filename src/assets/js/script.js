const timesheet = document.getElementById("timesheet");
const timesheetForm = document.getElementById("timesheetForm");
const openForm = document.getElementById("openForm");
const openSheet = document.getElementById("openSheet");

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
