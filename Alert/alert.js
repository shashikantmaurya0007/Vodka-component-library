const scrollbtn = document.querySelector(".direct-upward");
console.log(scrollbtn);
scrollbtn.addEventListener("click", () => {
    console.log("hello");
    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth",
    });
});