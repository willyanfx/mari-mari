import{d as B,e as p,r as g,c as o,a as s,t as e,F as w,b as y,g as f,h as z,w as D,i as V,f as F,o as c,n as k,j as _,R as L}from"./index-C3mCdXmK.js";import{v as O}from"./vignettes-CCsakr9K.js";const T={key:0,class:"question"},Y=["onClick"],j={key:1,class:"results"},E={class:"back-to-vignettes"},J=B({__name:"VignetteView",setup(S){const h=F(),x=Number(h.params.examId),I=Number(h.params.vignetteId),u=p(()=>O.vignettes.find(a=>a.id===I)),v=g(0),l=g([]),m=g(!1),i=p(()=>{var a;return(a=u.value)==null?void 0:a.questions[v.value]}),A=(a,t)=>a.options[t]||"No answer selected",Q=a=>{var t;i.value&&(l.value[v.value]=a,v.value<(((t=u.value)==null?void 0:t.questions.length)||0)-1?v.value++:m.value=!0)},R=p(()=>u.value?u.value.questions.reduce((a,t,d)=>a+(t.correctAnswer===l.value[d]?1:0),0):0);return(a,t)=>{var d,C,N,b;return c(),o(w,null,[s("h1",null,e((d=u.value)==null?void 0:d.title),1),s("p",null,e((C=u.value)==null?void 0:C.vignette),1),!m.value&&i.value?(c(),o("div",T,[s("h2",null,"Question "+e(v.value+1),1),s("p",null,e(i.value.text),1),s("ol",null,[(c(!0),o(w,null,y(i.value.options,(r,n)=>(c(),o("li",{key:n},[s("button",{onClick:$=>Q(n),class:k({selected:l.value[v.value]===n})},e(n)+". "+e(r),11,Y)]))),128))])])):f("",!0),m.value?(c(),o("div",j,[t[2]||(t[2]=s("h2",null,"Quiz Results",-1)),s("p",null,"Your score: "+e(R.value)+" / "+e((N=u.value)==null?void 0:N.questions.length),1),(c(!0),o(w,null,y((b=u.value)==null?void 0:b.questions,(r,n)=>(c(),o("div",{key:n},[s("h3",null,"Question "+e(n+1),1),s("p",null,e(r.text),1),s("p",{class:k({right:r.correctAnswer===l.value[n]})},"Your answer: Option "+e(l.value[n])+" - "+e(A(r,l.value[n])),3),r.correctAnswer!==l.value[n]?(c(),o("p",{key:0,class:k({wrong:r.correctAnswer!==l.value[n]})},[t[0]||(t[0]=_("Correct answer: ")),s("strong",null,"Option "+e(r.correctAnswer),1),_(" - "+e(A(r,r.correctAnswer)),1)],2)):f("",!0)]))),128)),s("nav",E,[z(V(L),{to:{name:"exam-detail",params:{id:V(x)}}},{default:D(()=>t[1]||(t[1]=[_(" 👈 Back")])),_:1},8,["to"])])])):f("",!0)],64)}}});export{J as default};
