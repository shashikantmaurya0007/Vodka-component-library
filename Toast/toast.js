const toast = document.querySelector(".toast");
toast.style.display = "none";
const toastBtn = document.getElementById("generate-toast");
toastClosebtn = document.querySelector(".toast a");
toastClosebtn.addEventListener("click", () => {
    toast.style.display = "none";
});

toastBtn.addEventListener("click", () => {
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 2200);
});