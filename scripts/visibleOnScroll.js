let skillBox = document.getElementById("skills-box");
let pythonBar = document.getElementById("skill-python-bar");
let frontendBar = document.getElementById("skill-frontend-bar");
let reactBar = document.getElementById("skill-react-bar");
let c_java_bar = document.getElementById("skill-c-java-bar");
let nodeBar = document.getElementById("skill-node-bar");
let flutterBar = document.getElementById("skill-flutter-bar");

let io = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("skill-box-visible");
            setTimeout(()=>{
                pythonBar.classList.add("python-bar-visible");
                frontendBar.classList.add("frontend-bar-visible");
                reactBar.classList.add("react-bar-visible");
                c_java_bar.classList.add("c-java-bar-visible");
                nodeBar.classList.add("node-bar-visible");
                flutterBar.classList.add("flutter-bar-visible");
            },1000)
        }else{
            entry.target.classList.remove("skill-box-visible");
        }
    })
});
io.observe(skillBox);
