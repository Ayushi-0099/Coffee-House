function storeData(){
    let usr=document.querySelector('#usr').value
    let mail=document.querySelector('#mail').value
    let pass=document.querySelector('#pass').value
    let phn=document.querySelector('#phn').value

    localStorage.setItem("usr",usr)
    localStorage.setItem("mail",mail)
    localStorage.setItem("pass",pass)
    localStorage.setItem("phn",phn)
}

function loginData(){
    let mail=document.querySelector('#mail').value
    let pass=document.querySelector('#pass').value

    localStorage.setItem("mail",mail)
    localStorage.setItem("pass",pass)
}