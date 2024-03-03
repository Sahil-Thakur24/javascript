let btn = document.querySelector("#btn");
let profile = document.querySelector("#profile");
let curr = "a";

btn.addEventListener("click", () =>{
    if(curr === "a"){
        curr = "b";
        profile.classList.add("b");
    }
    else{
        curr = "a";
        profile.classList.remove("b");
    }
    console.log(curr);
});



let btn2 = document.querySelector("#btn2");
let text = document.querySelector("#text");
let currs = "a";

let writtentext = "Add your different images for close friends and other friends";

btn2.addEventListener("click", () =>{
    if(currs === "a"){
        currs = "b";
        document.write(writtentext);
    }
    else{
        currs = "a";
        document.write(writtentext.replace("different images for","same image for both"));
    }
    console.log(currs);
})