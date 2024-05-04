// >>>>>>>>>>>>>>>>>>>>>Login Page<<<<<<<<<<<<<<<<<<<<<<<<<<
let mainLoginPage = document.getElementById("main-login-page");
let stuName = document.querySelector(".student-name");
stuName.style.textTransform = "capitalize";
let Hi_User = document.getElementById("hi-user");
Hi_User.style.textTransform = "capitalize";
let SelectCourseSection = document.getElementById("Select-Course-Section");
let signUp = document.querySelector(".sign-up");
let login = document.querySelector(".login");
login.style.display = "none";

let sign_up = () => {
  let signUpName = document.getElementById("signup-name").value;
  let signUpEmail = document.getElementById("signup-email").value;
  let signUpPassword = document.getElementById("signup-paswrd").value;
  localStorage.setItem(
    "users",
    JSON.stringify({
      signup_name: signUpName,
      signup_email: signUpEmail,
      signup_password: signUpPassword,
    })
  );
  if (signUpName === "" || signUpEmail === "" || signUpPassword === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all fields.",
    });
    return;
  }
  signUp.style.display = "none";
  login.style.display = "flex";
};
let login_page = () => {
  let loginEmail = document.getElementById("login-email").value;
  let loginPassword = document.getElementById("login-paswrd").value;
  let userData = JSON.parse(localStorage.getItem("users"));
  // let stuLogo = document.getElementById('stu-logo');
  // let stuName = document.getElementById('stu-name');
  if (loginEmail === "" || loginPassword === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all fields.",
    });
  } else if (
    userData.signup_email === loginEmail &&
    userData.signup_password === loginPassword
  ) {
    // First alert for successful login
    Swal.fire({
      icon: "success",
      title: "Congratulations",
      text: "Logged In Successfully!",
      didClose: () => {
        // After the first alert is closed, show the timer alert
        let timerInterval;
        Swal.fire({
          title: "JOIN",
          html: "JavaScript",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              // timer.innerHTML = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
            // After the timer alert is closed, display SelectCourseSection
            mainLoginPage.style.display = "none";
            stuName.innerHTML = userData.signup_name;
            Hi_User.innerHTML = userData.signup_name;
            // if(stuName !== "fahad"){
            //   let img = stuLogo.querySelector('img');
            //   if(img){
            //     img.src = 'none';
            //     img.style.backgroundColor = '00000066';
            //   }
            // }
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
        if(SelectCourseSection) {
          SelectCourseSection.style.display = "block";
        };
      }
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid Credentials!",
    });
  }
};

