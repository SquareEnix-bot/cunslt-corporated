console.log("xsaxsa");const e={name:document.querySelector("#name"),tel:document.querySelector("#tel"),service:document.querySelector("#service"),comment:document.querySelector("#comment")},t=document.querySelectorAll(".services__btn");for(const n of t)n.addEventListener("click",(t=>{e.service.value=t.currentTarget.dataset.services,c()}));for(const t in e)Object.hasOwnProperty.call(e,t)&&e[t].addEventListener("input",c);function c(){const t={name:e.name.value?e.name.value:"",tel:e.tel.value?e.tel.value:"",service:e.service.value?e.service.value:"",comment:e.comment.value?e.comment.value:""};localStorage.setItem("dataform",JSON.stringify(t)),n()}function n(){const t=JSON.parse(localStorage.getItem("dataform"));for(const c in t)Object.hasOwnProperty.call(t,c)&&(e[c].value=t[c])}n();
//# sourceMappingURL=index.12acd250.js.map
