const signUpBtn = document.querySelector(".sign-up-button");

const signInBtn = document.querySelector(".sign-in-button");

const formsWrapper = document.querySelector(".forms-wrapper")

signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formsWrapper.classList.add("change")
});

signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
});