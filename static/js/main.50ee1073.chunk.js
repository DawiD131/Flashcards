(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(24),l=t.n(o),c=t(6),u=t(15),i=t(4),s=t(2),d=t(3);function f(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 85vh;\n  width: 100%;\n"]);return f=function(){return e},e}var m=d.b.div(f());function b(){var e=Object(s.a)(["\n  background-color: #3098d9;\n  display: flex;\n  height: 9vh;\n  justify-content: center;\n  box-shadow: 0 4px 2px -2px black;\n"]);return b=function(){return e},e}function h(){var e=Object(s.a)(["\n  margin-top: 1%;\n  font-size: 50px;\n  font-weight: 200;\n  color: black;\n"]);return h=function(){return e},e}var p=d.b.h1(h()),E=d.b.div(b()),g=function(e){return r.a.createElement(E,null,r.a.createElement(p,null,e.txt))};t(19);function w(){var e=Object(s.a)(["\n  font-size: 35px;\n"]);return w=function(){return e},e}var j=d.b.h2(w()),v=function(e){return r.a.createElement(j,null,e.word)};function x(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 70%;\n  height: 25%;\n  border-bottom: 1px solid black;\n  margin: 2%;\n"]);return x=function(){return e},e}function y(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  height: 93%;\n  background-color: #41a1dc;\n  box-shadow: inset 0 0 5px #000000;\n"]);return y=function(){return e},e}var O=d.b.div(y()),k=d.b.div(x()),S=function(e){var n=e.word,t=e.translation,a=e.lessonsSubjects,o=e.isTranslationVisible;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,n?r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null,r.a.createElement(v,{word:n})),r.a.createElement(k,null,o?r.a.createElement(v,{word:t}):null)):a.length>0?r.a.createElement(v,{word:"Brak s\u0142\xf3wek"}):r.a.createElement(v,{word:"Najpierw dodaj lekcj\u0119"})))};function L(){var e=Object(s.a)(["\n  background: ",";\n  font-size: 16px;\n  box-shadow: 1px 2px 4px black;\n  border: 0;\n  border-radius: 5px;\n  margin-right: ",";\n  color: black;\n  width: ",";\n  height: 30px;\n  outline: none;\n  cursor: pointer;\n  margin-top: ",";\n  &:hover {\n    box-shadow: 3px 3px 4px black;\n  }\n"]);return L=function(){return e},e}var V=d.b.button(L(),(function(e){return e.dangerous?"#ff691f":e.good?"green":e.warning?"#ffa91f":e.control?"#0e486c":"#0276f2"}),(function(e){return e.secondary?"7px":"null"}),(function(e){return e.isLearned?"8%":""}),(function(e){return e.submit?"5px":null})),D=function(e){return r.a.createElement(V,{submit:e.submit,control:e.control,isLearned:e.isLearned,dangerous:e.dangerous,secondary:e.secondary,warning:e.warning,good:e.good,onClick:e.function},e.txt)};function C(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 3%;\n  width: 100%;\n  border-radius: 10px;\n  height: 4%;\n"]);return C=function(){return e},e}var T=d.b.div(C()),F=function(e){var n=e.handleIsLearnedClick,t=e.words,a=e.handleNextOrPrevClick,o=e.handleShowTranslationVisibleClick,l=e.isTranslationVisible;return r.a.createElement(r.a.Fragment,null,t.length>0?r.a.createElement(T,null,r.a.createElement(D,{isLearned:!0,secondary:!0,dangerous:!0,function:function(){return n(!1,t)},txt:"-"}),r.a.createElement(D,{control:!0,secondary:!0,function:function(){return a("Prev")},txt:"<"}),r.a.createElement(D,{control:!0,secondary:!0,function:o,txt:l?"HIDE":"SHOW"}),r.a.createElement(D,{control:!0,secondary:!0,function:function(){return a("Next")},txt:">"}),r.a.createElement(D,{isLearned:!0,secondary:!0,good:!0,function:function(){return n(!0,t)},txt:"+"})):null)},A=t(28),z=t.n(A);function _(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  height: 35%;\n"]);return _=function(){return e},e}var I=d.b.div(_()),P=function(e){var n=e.words,t=e.lessonsSubjects,o=e.currentLessonValue,l=e.handleAction,u=Object(a.useState)(0),i=Object(c.a)(u,2),s=i[0],d=i[1],f=Object(a.useState)(!1),m=Object(c.a)(f,2),b=m[0],h=m[1],p=function(){return h((function(e){return!e}))},E=function(e){switch(h(!1),e){case"Next":s+1===n.length?d(0):d((function(e){return e+1}));break;case"Prev":d(s<1?n.length-1:function(e){return e-1});break;default:return null}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{handleKeys:["left","right","down"],onKeyEvent:function(e){return function(e){switch(e){case"left":E("Prev");break;case"right":E("Next");break;case"down":p();break;default:return null}}(e)}}),r.a.createElement(I,null,r.a.createElement(S,{isTranslationVisible:b,word:n.length>0?n[s].word:null,translation:n.length>0?n[s].translation:null,lessonsSubjects:t}),r.a.createElement(F,{words:n,isTranslationVisible:b,handleIsLearnedClick:function(e,t){fetch("http://localhost:9000/words/update_word_status",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({lesson:o,word:n[s].word,translation:n[s].translate,isLearned:e})}),l({type:"IS_WORD_LEARNED",lesson:o,word:n[s].word,status:e})},handleNextOrPrevClick:E,handleShowTranslationVisibleClick:p})))},W=t(29);function N(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 20%;\n  padding: 8px;\n  margin: 10px;\n  background-color: #3098d9;\n  box-shadow: 3px 3px 4px black;\n  border-radius: 10px;\n"]);return N=function(){return e},e}var R=d.b.form(N());function J(){var e=Object(s.a)(["\n  width: 40%;\n  height: 17%;\n  font-size: 13px;\n  margin-bottom: 1%;\n  background: #f2e3bc;\n  outline: none;\n  display: block;\n  border: none;\n  border-radius: 4px;\n"]);return J=function(){return e},e}var H=d.b.select(J()),M=function(e){var n=e.lessonsSubjects,t=e.handleSubmit,a=e.value,o=e.handleLessonSelect;return r.a.createElement(r.a.Fragment,null,n.length>0?r.a.createElement(R,{onSubmit:t},r.a.createElement("h2",null,"Lekcja:"),r.a.createElement(H,{value:a,onChange:o},n.map((function(e,n){return r.a.createElement("option",{key:n,value:e},e)}))),r.a.createElement(D,{submit:!0,type:"submit",txt:"Wybierz"})):null)};function B(){var e=Object(s.a)(["\n  width: 100%;\n  background-color: #f2e3bc;\n  color: black;\n  border: none;\n  outline: none;\n  height: 40%;\n  padding: 3%;\n  margin-bottom: 1%;\n  margin-top: 2%;\n  border-radius: 4px;\n  cursor: pointer;\n  display: block;\n"]);return B=function(){return e},e}var U=d.b.input(B()),K=function(e){var n=e.lessonsSubjects,t=e.currentLessonValue,o=e.handleAction,l=Object(a.useState)(""),u=Object(c.a)(l,2),i=u[0],s=u[1],d=Object(a.useState)(""),f=Object(c.a)(d,2),m=f[0],b=f[1];return r.a.createElement(r.a.Fragment,null,n.length>0?r.a.createElement(R,{onSubmit:function(e){e.preventDefault(),fetch("http://localhost:9000/words/save_word",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lesson:t,word:i,translation:m,isLearned:!1})}),o({type:"ADD_WORD",lesson:t,wordToAdd:{word:i,translation:m,isLearned:!1}}),b(""),s("")}},r.a.createElement("h2",null,"Dodaj fiszk\u0119"),r.a.createElement("label",{htmlFor:"wordValue"},"S\u0142\xf3wko:",r.a.createElement(U,{autoComplete:"off",type:"text",name:"wordValue",placeholder:"Wpisz s\u0142\xf3wko",value:i,onChange:function(e){return s(e.target.value)}})),r.a.createElement("label",{htmlFor:"translationValue"},"T\u0142umaczenie:",r.a.createElement(U,{autoComplete:"off",type:"text",name:"translationValue",placeholder:"Wpisz t\u0142umaczenie",value:m,onChange:function(e){return b(e.target.value)}})),r.a.createElement(D,{submit:!0,type:"submit",txt:"Dodaj"})):null)},Q=function(e){var n=e.handleLessonSubmit,t=e.lessonValue,a=e.handleLessonInput;return r.a.createElement(R,{onSubmit:n},r.a.createElement("h2",null,"Dodaj lekcj\u0119"),r.a.createElement("label",{htmlFor:"lessonValue"},"Temat:",r.a.createElement(U,{autoComplete:"off",type:"text",name:"lessonValue",placeholder:"Wpisz temat lekcji",value:t,onChange:a})),r.a.createElement(D,{submit:!0,type:"submit",txt:"Dodaj!"}))};function q(){var e=Object(s.a)(["\n  animation: 1s ",";\n  display: flex;\n  width: 100%;\n  justify-content: center;\n"]);return q=function(){return e},e}function G(){var e=Object(s.a)(["",""]);return G=function(){return e},e}var X=Object(d.c)(G(),W.bounce),Y=d.b.div(q(),X),Z=function(e){var n=e.isFormPanelVisible,t=e.lessonsSubjects,a=e.handleAction,o=e.currentLessonValue,l=e.value,c=e.handleSubmit,u=e.handleLessonSelect,i=e.handleLessonSubmit,s=e.handleWordInput,d=e.handleLessonInput,f=e.handleTranslationInput,m=e.lessonValue;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(Y,null,r.a.createElement(M,{lessonsSubjects:t,value:l,handleSubmit:c,handleLessonSelect:u}),r.a.createElement(K,{lessonsSubjects:t,handleAction:a,currentLessonValue:o,handleTranslationInput:f,handleWordInput:s}),r.a.createElement(Q,{lessonValue:m,handleLessonSubmit:i,handleLessonInput:d})):null)};function $(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 50%;\n  background-color: #3098d9;\n"]);return $=function(){return e},e}function ee(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  background-color: #3098d9;\n"]);return ee=function(){return e},e}function ne(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-end;\n  width: 50%;\n  background-color: #3098d9;\n"]);return ne=function(){return e},e}function te(){var e=Object(s.a)(["\n  display: flex;\n  height: 6vh;\n  border-top: 0.1vh solid black;\n"]);return te=function(){return e},e}var ae=d.b.div(te()),re=d.b.div(ne()),oe=d.b.div(ee()),le=d.b.div($()),ce=function(e){var n=e.main,t=e.handleIsFormPanelVisibleClick,a=e.visible;return r.a.createElement(ae,null,n?r.a.createElement(r.a.Fragment,null,r.a.createElement(le,null),r.a.createElement(re,null,r.a.createElement(u.b,{to:"/WordList"},r.a.createElement(D,{secondary:!0,warning:!0,renderAs:"button",txt:"word list"})),r.a.createElement(D,{secondary:!0,warning:!0,function:t,txt:a?"Ukryj panel":"Pokaz panel"}))):r.a.createElement(oe,null,r.a.createElement(u.b,{to:"/"},r.a.createElement(D,{secondary:!0,renderAs:"button",txt:"Main Board"}))))};function ue(){var e=Object(s.a)(["\nbody {\n  background: #53a9df;\n  font-family: 'Questrial', sans-serif;\n margin:0;\n \n}\n"]);return ue=function(){return e},e}var ie=Object(d.a)(ue()),se=function(e){var n=e.data,t=e.handleAction,o=Object(a.useState)([]),l=Object(c.a)(o,2),u=l[0],i=l[1],s=Object(a.useState)(""),d=Object(c.a)(s,2),f=d[0],b=d[1],h=Object(a.useState)([]),p=Object(c.a)(h,2),E=p[0],w=p[1],j=Object(a.useState)(""),v=Object(c.a)(j,2),x=v[0],y=v[1],O=Object(a.useState)(""),k=Object(c.a)(O,2),S=k[0],L=k[1],V=Object(a.useState)(!0),D=Object(c.a)(V,2),C=D[0],T=D[1];Object(a.useEffect)((function(){console.log(n);var e=n.map((function(e){return e.lesson}));n.length>0&&(i(n[0].words),b(e[0]),y(e[0])),w(e)}),[n]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,null),r.a.createElement(g,{txt:"FLASHCARDS"}),r.a.createElement(m,null,r.a.createElement(P,{words:u,lessonsSubjects:E,currentLessonValue:f,handleAction:t}),C?r.a.createElement(Z,{isFormPanelVisible:C,handleAction:t,handleLessonInput:function(e){return L(e.target.value)},handleLessonSelect:function(e){return y(e.target.value)},lessonsSubjects:E,value:x,handleSubmit:function(e){e.preventDefault(),fetch("http://localhost:9000/words/get_words/".concat(x)).then((function(e){return e.json()})).then((function(e){i(e.words)})),b(x)},currentLessonValue:f,lessonValue:S,handleLessonSubmit:function(e){e.preventDefault(),fetch("http://localhost:9000/lessons/create_new_lesson",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lesson:S})}),t({type:"ADD",lessonValue:S}),L("")}}):null),r.a.createElement(ce,{main:!0,handleIsFormPanelVisibleClick:function(){return T((function(e){return!e}))},visible:C,show:!1,lessonsSubjects:E}))},de=t(17);function fe(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  border-bottom: 1px solid black;\n  padding: 3px;\n"]);return fe=function(){return e},e}function me(){var e=Object(s.a)(["\n  border-bottom: 1px solid black;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 4px;\n"]);return me=function(){return e},e}function be(){var e=Object(s.a)(["\n  font-family: arial, sans-serif;\n  text-align: center;\n  border-collapse: collapse;\n  width: 35%;\n"]);return be=function(){return e},e}var he=d.b.table(be()),pe=d.b.td(me()),Ee=d.b.th(fe()),ge=function(e){var n=e.data,t=e.handleConfirm;return r.a.createElement(r.a.Fragment,null,0===n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Brak lekcji"),r.a.createElement("br",null),r.a.createElement("h1",null,"Przejd\u017a do panelu g\u0142\xf3wnego i dodaj lekcj\u0119")):n.map((function(e,n){return r.a.createElement(he,{key:n},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement(Ee,null,"Temat: ".concat(e.lesson),r.a.createElement(D,{dangerous:!0,txt:"Usu\u0144",function:function(){return t("lesson",e.lesson,null)}}))),e.words.map((function(n,a){return r.a.createElement("tr",{key:a},r.a.createElement(pe,{key:n.word},"".concat(n.word," - ").concat(n.translation),r.a.createElement(D,{key:n.translation,warning:!0,txt:"Usu\u0144",function:function(){return t("word",n.word,e.lesson)}})))}))))})))};function we(){var e=Object(s.a)(["\n  display: flex;\n  overflow: scroll;\n  flex-direction: column;\n  align-items: center;\n  height: 85vh;\n  width: 100%;\n"]);return we=function(){return e},e}var je=d.b.div(we()),ve=function(e){var n=e.words,t=e.handleAction,o=Object(a.useState)(n),l=Object(c.a)(o,2),u=l[0],i=l[1];Object(a.useEffect)((function(){i(n)}),[n]);var s=function(e,n){fetch("http://localhost:9000/words/delete_word",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({lesson:e,word:n.word,translation:n.translate})}),u.map((function(t,a){e===t.lesson&&u[a].words.map((function(e,t){n===e.word&&u[a].words.splice(t,1)})),i(Object(de.a)(u))}))},d=function(e){fetch("http://localhost:9000/lessons/delete_lesson/".concat(e),{method:"DELETE"}).then((function(e){return e.json()})),t({type:"REMOVE",itemToDelete:e})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,null),r.a.createElement(g,{txt:"Lista fiszek"}),r.a.createElement(je,null,r.a.createElement(ge,{data:u,handleConfirm:function(e,n,t){switch(e){case"lesson":window.confirm("Czy na pewno chcesz usun\u0105\u0107 lekcj\u0119 ".concat(n,"?"))&&d(n);break;case"word":window.confirm("Czy na pewno chcesz usun\u0105\u0107 s\u0142\xf3wko ".concat(n,"?"))&&s(t,n);break;default:return null}}})),r.a.createElement(ce,null))},xe=function(e,n){switch(n.type){case"ADD":return[].concat(Object(de.a)(e),[{lesson:n.lessonValue,words:[]}]);case"REMOVE":return e.filter((function(e){return e.lesson!==n.itemToDelete}));case"ADD_WORD":return e.filter((function(e){return e.lesson===n.lesson}))[0].words.push(n.wordToAdd),console.log(e),e;case"IS_WORD_LEARNED":return e.filter((function(e){return e.lesson===n.lesson}))[0].words.filter((function(e){return e.word===n.word}))[0].isLearned=n.status,e;case"REMOVE_WORD":return;case"FETCH":return n.data;default:return e}},ye=function(){var e=Object(a.useReducer)(xe,[]),n=Object(c.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)((function(){fetch("http://localhost:9000/lessons/get_lessons_with_words").then((function(e){if(e.ok)return e;throw Error(e.status)})).then((function(e){return e.json()})).then((function(e){o({type:"FETCH",data:e})})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(u.a,{basename:"/Flashcards"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(se,{data:t,handleAction:o})),r.a.createElement(i.a,{path:"/WordList"},r.a.createElement(ve,{words:t,handleAction:o}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye,null)),document.getElementById("root"))},19:function(e,n,t){},30:function(e,n,t){e.exports=t(118)}},[[30,1,2]]]);
//# sourceMappingURL=main.50ee1073.chunk.js.map