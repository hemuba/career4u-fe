let questionId = document.getElementById("question_id")
let answerId = document.getElementById("answer_id")
let skillsId = document.getElementById("skills_id")

answerId.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        let answVar = answerId.value.trim()
        if(!answVar) return;
        
        const li = document.createElement("li")
        li.textContent = answVar;
        skillsId.appendChild(li)
        console.log(answVar)
        answerId.value = "";
    }
}) 