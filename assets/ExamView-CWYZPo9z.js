import{d as p,e as u,c as a,a as s,F as _,b as f,u as v,f as x,o as n,t as g,_ as k}from"./index-Bxq36I3p.js";import{e as E}from"./exams-HomQA_NF.js";import{v as V}from"./vignettes-BxhhKaty.js";const h={class:"vignette-detail"},B=["onClick"],C=p({__name:"ExamView",setup(D){const c=v(),l=x(),o=Number(l.params.examId),r=u(()=>E.exams.find(e=>e.id===o)),m=u(()=>r.value?V.vignettes.filter(e=>r.value.vignettes.includes(e.id)):[]),d=e=>{c.push({name:"vignette-detail",params:{examId:o,vignetteId:e}})};return(e,i)=>(n(),a("div",h,[i[0]||(i[0]=s("h1",null,"Exam ",-1)),s("ul",null,[(n(!0),a(_,null,f(m.value,t=>(n(),a("li",{key:t.id},[s("a",{onClick:I=>d(t.id)},g(t.title),9,B)]))),128))])]))}}),F=k(C,[["__scopeId","data-v-3c2200a7"]]);export{F as default};
