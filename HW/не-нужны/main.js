
window.addEventListener ("load", () => {
   const button = $("div", {
       className: "button",
    onclick: () => {
        disp.classList.toggle ("disp__hidden");
    } 
    });
   const disp = $("div", {
       className: "disp"
    });
    document.body.append(button, disp, $("div", {}, "asdfsfdsgf"));
});
