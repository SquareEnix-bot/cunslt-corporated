!function(){console.log("xsaxsa");var e={name:document.querySelector("#name"),tel:document.querySelector("#tel"),service:document.querySelector("#service"),comment:document.querySelector("#comment")},t=document.querySelectorAll(".services__btn"),r=!0,a=!1,n=void 0;try{for(var l,c=t[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){l.value.addEventListener("click",(function(t){e.service.value=t.currentTarget.dataset.services,u()}))}}catch(e){a=!0,n=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw n}}for(var o in e)Object.hasOwnProperty.call(e,o)&&e[o].addEventListener("input",u);function u(){var t={name:e.name.value?e.name.value:"",tel:e.tel.value?e.tel.value:"",service:e.service.value?e.service.value:"",comment:e.comment.value?e.comment.value:""};localStorage.setItem("dataform",JSON.stringify(t)),v()}function v(){var t=JSON.parse(localStorage.getItem("dataform"));for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r].value=t[r])}v()}();
//# sourceMappingURL=index.807567e6.js.map