// // Garantir termo de consentimento com input
// const termo = document.getElementById("termo_consentimento_campo")
// const btnSend = document.getElementById("submit")

// termo.addEventListener('click', e => {
//     if(e.target.checked){
//         btnSend.removeAttribute("disabled") 
//     } else {
//         btnSend.setAttribute("disabled", "true") 
//     }
// })

// Coleta de dados e envio para a base 
const form = document.getElementById("form-captacao");
const sucess = document.getElementById("success-message");
const error = document.getElementById("error-message");

var responsavel = document.querySelector('input[name="responsavel_nome"]');
var aluno = document.querySelector('input[name="nome"]');
var telefone = document.querySelector('input[name="telefone_celular"]');
var email = document.querySelector('input[name="email"]');
var escola = document.querySelector('input[name="escola_origem_nome"]');
var curso = document.querySelector('select[name="curso"]');
var leadOrigin = document.querySelector('select[name="lead_id"]');

var button = document.getElementById("submit");


curso.addEventListener('change', ()=>{
    if(curso.value === curso[0].value){
        curso.style.color = '#777'
    } else {
        curso.style.color = '#000'
    }
})

leadOrigin.addEventListener('change', ()=>{
    if(leadOrigin.value === leadOrigin[0].value){
        leadOrigin.style.color = '#777'
    } else {
        leadOrigin.style.color = '#000'
    }
})

// responsavel.value = "Joe"
// aluno.value="Aluno"
// telefone.value="(21) 97027-5532"
// email.value= "joe@gmail.com"
// escola.value = "Loide Martha"

form.addEventListener("submit", event =>{
    event.preventDefault(); 
    button.innerHTML= "Aguarde..."
    button.style.backgroundColor = "#29a844"
    var data = new FormData(event.target);
    var reqBody = Object.fromEntries(data); 
    reqBody.telefone_celular = 
        reqBody.telefone_celular.replace(/\D/g, "")


    //const url = "http://localhost:3000/capture"
    const url = "https://capturebox-loide.herokuapp.com/capture"
    const fetchData = {
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify(reqBody)
    };

    fetch(url, fetchData)
    .then( data => data.json())
    .then(() => {
        lightbox.style.display = "flex";
        sucess.style.display = "flex";
        setTimeout(()=>  window.location.reload(), 8000)
    })
    .catch(err=> {
        console.error(err)
        button.innerHTML= "Enviar"
        button.style.backgroundColor = "#46ce64"
        lightbox.style.display = "flex";
        error.style.display = "flex";
        setTimeout(()=> {
            lightbox.style.display = "none";
            error.style.display = "none";
        }, 5000)
    })
})