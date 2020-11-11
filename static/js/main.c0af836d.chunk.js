(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(25),l=t.n(o),s=t(20),c=t.n(s),u=t(26),i=t(8),d=t(15),f=t(4),m=t(2),b=t(3);function p(){var n=Object(m.a)(["\n  display: grid;\n  grid-template-rows: auto 1fr auto auto;\n  height: 100vh;\n  width: 100%;\n"]);return p=function(){return n},n}var h=b.b.div(p());function w(){var n=Object(m.a)(["\n  align-items: center;\n  grid-row: 1/2;\n  background-color: #3e5c76;\n  display: flex;\n  height: 55px;\n  width: 100%;\n  justify-content: center;\n  box-shadow: 0 4px 2px -2px black;\n"]);return w=function(){return n},n}function g(){var n=Object(m.a)(["\n  margin-top: 20px;\n  font-size: 30px;\n  font-weight: 300;\n  letter-spacing: 3px;\n  color: black;\n"]);return g=function(){return n},n}var x=b.b.h1(g()),E=b.b.div(w()),j=function(n){return r.a.createElement(E,null,r.a.createElement(x,null,n.txt))};t(19);function v(){var n=Object(m.a)(["\n  font-size: 35px;\n"]);return v=function(){return n},n}var y=b.b.h2(v()),S=function(n){return r.a.createElement(y,null,n.word)};function O(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95%;\n  height: 25%;\n  border-bottom: 1px solid black;\n  margin: 2%;\n"]);return O=function(){return n},n}function k(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 240px;\n  margin-top: 15px;\n  background-color: #5c7699;\n  box-shadow: inset 0 0 5px #000000;\n  @media all and (max-width: 750px) {\n    margin-top: 60px;\n  }\n"]);return k=function(){return n},n}var L=b.b.div(k()),V=b.b.div(O()),T=function(n){var e=n.word,t=n.translation,a=n.lessonsSubjects,o=n.isTranslationVisible;return r.a.createElement(L,null,e?r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null,r.a.createElement(S,{word:e})),r.a.createElement(V,null,o?r.a.createElement(S,{word:t}):null)):a.length>0?r.a.createElement(S,{word:"Brak s\u0142\xf3wek"}):r.a.createElement(S,{word:"Najpierw dodaj lekcj\u0119"}))};function D(){var n=Object(m.a)(["\n  background: ",";\n  font-size: 15px;\n  box-shadow: 1px 1px 2px black;\n  border-radius: 3px;\n  border: none;\n  margin-right: ",";\n  color: black;\n  width: ",";\n  height: 30px;\n  outline: none;\n  cursor: pointer;\n  margin-top: ",";\n  &:hover {\n    box-shadow: 3px 3px 4px black;\n  }\n"]);return D=function(){return n},n}var C=b.b.button(D(),(function(n){return n.dangerous?"#F25F5C":n.good?"#70C1B3":n.warning?"#FFE066":n.control?"#247BA0":n.toggle?"#59B3D9":"#87A5C0"}),(function(n){return n.secondary?"7px":"null"}),(function(n){return n.toggle?"60px":n.isLearned?"40px":n.control?"30px":null}),(function(n){return n.submit?"15px":null})),I=function(n){return r.a.createElement(C,{submit:n.submit,control:n.control,isLearned:n.isLearned,dangerous:n.dangerous,secondary:n.secondary,warning:n.warning,good:n.good,onClick:n.function,toggle:n.toggle},n.txt)};function z(){var n=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n  width: 100%;\n  border-radius: 10px;\n  height: 4%;\n"]);return z=function(){return n},n}var A=b.b.div(z()),_=function(n){var e=n.handleIsLearnedClick,t=n.words,a=n.handleNextOrPrevClick,o=n.handleShowTranslationVisibleClick,l=n.isTranslationVisible;return r.a.createElement(r.a.Fragment,null,t.length>0?r.a.createElement(A,null,r.a.createElement(I,{isLearned:!0,secondary:!0,dangerous:!0,function:function(){return e(!1,t)},txt:"-"}),r.a.createElement(I,{control:!0,secondary:!0,function:function(){return a("Prev")},txt:"<"}),r.a.createElement(I,{toggle:!0,secondary:!0,function:o,txt:l?"HIDE":"SHOW"}),r.a.createElement(I,{control:!0,secondary:!0,function:function(){return a("Next")},txt:">"}),r.a.createElement(I,{isLearned:!0,secondary:!0,good:!0,function:function(){return e(!0,t)},txt:"+"})):null)},F=t(30),W=t.n(F),N="https://flashcards--api.herokuapp.com/";function P(){var n=Object(m.a)(["\n  display: flex;\n  grid-row: 2/3;\n  justify-self: center;\n  align-self: center;\n  width: 400px;\n  margin-bottom: 20px;\n  flex-direction: column;\n  justify-content: center;\n  // @media all and (min-width: 1368px) {\n  //   width: 30%;\n  // }\n  // @media all and (max-width: 1367px) {\n  //   width: 40%;\n  // }\n\n  // @media all and (max-width: 1050px) {\n  //   width: 45%;\n  // }\n\n  // @media all and (max-width: 750px) {\n  //   width: 60%;\n  // }\n\n  // @media all and (max-width: 749px) {\n  //   width: 75%;\n  // }\n\n  @media all and (max-width: 550px) {\n    width: 90%;\n  }\n  height: 38%;\n"]);return P=function(){return n},n}var R=b.b.div(P()),B=function(n){var e=n.words,t=n.lessonsSubjects,o=n.currentLessonValue,l=n.dispatch,s=Object(a.useState)(0),c=Object(i.a)(s,2),u=c[0],d=c[1],f=Object(a.useState)(!1),m=Object(i.a)(f,2),b=m[0],p=m[1],h=function(){return p((function(n){return!n}))},w=function(n){switch(p(!1),n){case"Next":u+1===e.length?d(0):d((function(n){return n+1}));break;case"Prev":d(u<1?e.length-1:function(n){return n-1});break;default:return null}};return r.a.createElement(R,null,r.a.createElement(W.a,{handleKeys:["left","right","down"],onKeyEvent:function(n){return function(n){switch(n){case"left":w("Prev");break;case"right":w("Next");break;case"down":h();break;default:return null}}(n)}}),r.a.createElement(T,{isTranslationVisible:b,word:e.length>0?e[u].word:null,translation:e.length>0?e[u].translation:null,lessonsSubjects:t}),r.a.createElement(_,{words:e,isTranslationVisible:b,handleIsLearnedClick:function(n){fetch("".concat(N,"words/update_word_status"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({lesson:o,word:e[u].word,translation:e[u].translate,isLearned:n})}),l({type:"IS_WORD_LEARNED",lesson:o,word:e[u].word,translation:e[u].translate,status:n})},handleNextOrPrevClick:w,handleShowTranslationVisibleClick:h}))},J=t(31);function H(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  width: 20%;\n  padding: 6px;\n  margin: 15px;\n  background-color: #5c7699;\n  box-shadow: 3px 3px 4px black;\n  @media all and (max-width: 750px) {\n    flex-basis: 60%;\n  }\n"]);return H=function(){return n},n}var U=b.b.form(H());function M(){var n=Object(m.a)(["\n  width: 40%;\n  height: 17%;\n  font-size: 13px;\n  margin-bottom: 1%;\n  background: #f0ebd8;\n  outline: none;\n  display: block;\n  border: none;\n"]);return M=function(){return n},n}var G=b.b.select(M()),K=function(n){var e=n.lessonsSubjects,t=n.lessonSelectValue,a=n.currentLesson,o=n.handleSubmit,l=n.handleLessonSelect;return r.a.createElement(r.a.Fragment,null,e.length>0?r.a.createElement(U,{onSubmit:o},r.a.createElement("h2",null,"Lekcja:"),r.a.createElement(G,{value:t,onChange:l,defaultValue:a},e.map((function(n,e){return r.a.createElement("option",{key:e,value:n},n)}))),r.a.createElement(I,{submit:!0,type:"submit",txt:"Wybierz"})):null)};function q(){var n=Object(m.a)(["\n  width: 100%;\n  background-color: #f0ebd8;\n  color: black;\n  border: none;\n  outline: none;\n  height: 40%;\n  padding: 3%;\n  margin-bottom: 1%;\n  margin-top: 2%;\n  cursor: pointer;\n  display: block;\n"]);return q=function(){return n},n}var Q=b.b.input(q()),X=function(n){var e=n.lessonsSubjects,t=n.handleAddWordSubmit,a=n.wordValue,o=n.translationValue,l=n.handleWordInput,s=n.handleTranslationInput;return r.a.createElement(r.a.Fragment,null,e.length>0?r.a.createElement(U,{onSubmit:t},r.a.createElement("h2",null,"Dodaj fiszk\u0119"),r.a.createElement("label",{htmlFor:"wordValue"},"S\u0142\xf3wko:",r.a.createElement(Q,{autoComplete:"off",type:"text",name:"wordValue",placeholder:"Wpisz s\u0142\xf3wko",value:a,onChange:l})),r.a.createElement("label",{htmlFor:"translationValue"},"T\u0142umaczenie:",r.a.createElement(Q,{autoComplete:"off",type:"text",name:"translationValue",placeholder:"Wpisz t\u0142umaczenie",value:o,onChange:s})),r.a.createElement(I,{submit:!0,type:"submit",txt:"Dodaj"})):null)},Y=function(n){var e=n.handleAddLessonSubmit,t=n.lessonInputValue,a=n.handleLessonInput;return r.a.createElement(U,{onSubmit:e},r.a.createElement("h2",null,"Dodaj lekcj\u0119"),r.a.createElement("label",{htmlFor:"lessonValue"},"Temat:",r.a.createElement(Q,{autoComplete:"off",type:"text",name:"lessonValue",placeholder:"Wpisz temat lekcji",value:t,onChange:a})),r.a.createElement(I,{submit:!0,type:"submit",txt:"Dodaj!"}))};function Z(){var n=Object(m.a)(["\n  animation: 1s ",";\n  display: flex;\n  grid-row: 3/4;\n  margin-bottom: 70px;\n  width: 100%;\n  justify-content: center;\n  @media all and (max-width: 750px) {\n    margin: 50px 0 30px 0;\n    flex-wrap: wrap;\n  }\n"]);return Z=function(){return n},n}function $(){var n=Object(m.a)(["",""]);return $=function(){return n},n}var nn=Object(b.c)($(),J.bounce),en=b.b.div(Z(),nn),tn=function(n){var e=n.isFormPanelVisible,t=n.currentLesson,a=n.lessonsSubjects,o=n.handleAction,l=n.currentLessonValue,s=n.lessonSelectValue,c=n.handleSubmit,u=n.handleLessonSelect,i=n.handleAddLessonSubmit,d=n.handleWordInput,f=n.handleLessonInput,m=n.handleTranslationInput,b=n.handleAddWordSubmit,p=n.wordValue,h=n.translationValue,w=n.lessonInputValue;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement(en,null,r.a.createElement(K,{currentLesson:t,lessonsSubjects:a,lessonsSelectValue:s,handleSubmit:c,handleLessonSelect:u}),r.a.createElement(X,{lessonsSubjects:a,handleAddWordSubmit:b,wordValue:p,handleWordInput:d,translationValue:h,handleTranslationInput:m,handleAction:o,currentLessonValue:l}),r.a.createElement(Y,{lessonInputValue:w,handleAddLessonSubmit:i,handleLessonInput:f})):null)};function an(){var n=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-end;\n  width: 100%;\n  background-color: #3e5c76;\n"]);return an=function(){return n},n}function rn(){var n=Object(m.a)(["\n  min-height: 40px;\n  display: flex;\n  girid-row: 4/5;\n  self-align: flex-end;\n  width: 100%;\n  border-top: 0.1vh solid black;\n"]);return rn=function(){return n},n}var on=b.b.div(rn()),ln=b.b.div(an()),sn=function(n){var e=n.main,t=n.handleIsFormPanelVisibleClick,a=n.visible;return r.a.createElement(on,null,e?r.a.createElement(r.a.Fragment,null,r.a.createElement(ln,null,r.a.createElement(d.b,{to:"/WordList"},r.a.createElement(I,{secondary:!0,warning:!0,renderAs:"button",txt:"word list"})),r.a.createElement(I,{secondary:!0,warning:!0,function:t,txt:a?"Ukryj panel":"Pokaz panel"}))):r.a.createElement(ln,null,r.a.createElement(d.b,{to:"/"},r.a.createElement(I,{warning:!0,secondary:!0,renderAs:"button",txt:"Main Board"}))))};function cn(){var n=Object(m.a)(["\nbody {\n background: #8096B3;\n font-family: 'Questrial', sans-serif;\n margin:0;\n}\n"]);return cn=function(){return n},n}var un=Object(b.a)(cn()),dn=function(n){var e=n.state,t=n.dispatch,o=Object(a.useState)(""),l=Object(i.a)(o,2),s=l[0],c=l[1],u=Object(a.useState)(""),d=Object(i.a)(u,2),f=d[0],m=d[1],b=Object(a.useState)([]),p=Object(i.a)(b,2),w=p[0],g=p[1],x=Object(a.useState)(""),E=Object(i.a)(x,2),v=E[0],y=E[1],S=Object(a.useState)(""),O=Object(i.a)(S,2),k=O[0],L=O[1],V=Object(a.useState)(!0),T=Object(i.a)(V,2),D=T[0],C=T[1];Object(a.useEffect)((function(){y(e.currentLesson?e.currentLesson:e.lessonsSubjects?e.lessonsSubjects[0]:""),g(e.lessonsSubjects?e.lessonsSubjects:[])}),[e]);var I=function(n){switch(n){case"lesson":return 0!==k.length&&" "!==k[0]&&-1===w.indexOf(k)!==!1||(window.alert("Nazwa lekcji nie moze by\u0107 pusta, powtarza\u0107 si\u0119 i zaczyna\u0107 od spacji!"),!1);case"flashcard":return 0!==s.length&&0!==f.length&&" "!==s[0]&&" "!==f[0]&&void 0===e.words.find((function(n){return n.word===s&&n.translation===f}))||(window.alert("S\u0142\xf3wko i t\u0142umaczenie nie mog\u0105 by\u0107 puste i zaczyna\u0107 si\u0119 od spacji lub powtarza\u0107 si\u0119!"),!1)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(un,null),r.a.createElement(h,null,r.a.createElement(j,{txt:"FLASHCARDS"}),r.a.createElement(B,{dispatch:t,words:e.words,lessonsSubjects:w,currentLessonValue:v}),D?r.a.createElement(tn,{currentLesson:e.currentLesson,handleAddWordSubmit:function(n){n.preventDefault(),I("flashcard")&&(fetch("".concat(N,"words/save_word"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lesson:v,word:s,translation:f,isLearned:!1})}),t({type:"ADD_WORD",lesson:v,wordToAdd:{word:s,translation:f,isLearned:!1}})),m(""),c("")},wordValue:s,handleWordInput:function(n){return c(n.target.value)},translationValue:f,handleTranslationInput:function(n){return m(n.target.value)},isFormPanelVisible:D,handleLessonInput:function(n){return L(n.target.value)},handleLessonSelect:function(n){return y(n.target.value)},lessonsSubjects:w,lessonSelectValue:v,handleSubmit:function(n){n.preventDefault(),fetch("".concat(N,"words/get_words/").concat(v)).then((function(n){return n.json()})).then((function(n){t({type:"GET_LESSON",words:n.words,currentLesson:v})}))},currentLessonValue:v,lessonInputValue:k,handleAddLessonSubmit:function(n){n.preventDefault(),I("lesson")&&(fetch("".concat(N,"lessons/create_new_lesson"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lesson:k})}),t({type:"ADD_LESSON",lessonInputValue:k})),L("")}}):null,r.a.createElement(sn,{main:!0,handleIsFormPanelVisibleClick:function(){return C((function(n){return!n}))},visible:D,show:!1,lessonsSubjects:w})))};function fn(){var n=Object(m.a)(["\n  width: 250px;\n  text-align: center;\n  background: #fff;\n  padding: 10px;\n"]);return fn=function(){return n},n}var mn=b.b.div(fn()),bn=function(){return r.a.createElement(mn,null,r.a.createElement("h1",null,"Brak Lekcji"),r.a.createElement("h3",null,"Przejd\u017a do panelu g\u0142\xf3wnego"),r.a.createElement("h3",null,"i dodaj lekcj\u0119"))},pn=function(n){var e=0;return n.map((function(n){return!0===n.isLearned?(e++,n):n})),0===n.length?0:Math.round(e/n.length*100)};function hn(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  overflow-y: scroll;\n  height: 100%;\n  align-items: center;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  ::-webkit-scrollbar {\n    width: 0px;\n    background: transparent; /* make scrollbar transparent */\n  }\n"]);return hn=function(){return n},n}function wn(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  border-bottom: 1px solid black;\n  padding: 3px;\n"]);return wn=function(){return n},n}function gn(){var n=Object(m.a)(["\n  border-bottom: 1px solid black;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 4px;\n"]);return gn=function(){return n},n}function xn(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"]);return xn=function(){return n},n}function En(){var n=Object(m.a)(["\n  margin-right: 10px;\n"]);return En=function(){return n},n}function jn(){var n=Object(m.a)(["\n  font-family: arial, sans-serif;\n  text-align: center;\n  border-collapse: collapse;\n  width: 50%;\n  @media all and (max-width: 750px) {\n    width: 95%;\n  }\n"]);return jn=function(){return n},n}var vn=b.b.table(jn()),yn=b.b.div(En()),Sn=b.b.div(xn()),On=b.b.td(gn()),kn=b.b.th(wn()),Ln=b.b.div(hn()),Vn=function(n){var e=n.data,t=n.handleConfirm;return r.a.createElement(Ln,null,0===e.length?r.a.createElement(bn,null):e.map((function(n,e){return r.a.createElement(vn,{key:e},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement(kn,null,r.a.createElement(Sn,null,"Temat: ".concat(n.lesson),r.a.createElement(yn,null,n.words.length>0?"".concat(pn(n.words),"%"):null)),r.a.createElement(I,{dangerous:!0,txt:"Usu\u0144",function:function(){return t("lesson",n.lesson,null)}}))),n.words.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement(On,{key:e.word},"".concat(e.word," - ").concat(e.translation),r.a.createElement(I,{key:e.translation,warning:!0,txt:"Usu\u0144",function:function(){return t("word",e.word,n.lesson)}})))}))))})))};function Tn(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  justify-content: space-between;\n  width: 100%;\n"]);return Tn=function(){return n},n}var Dn=b.b.div(Tn()),Cn=function(n){var e=n.state,t=n.dispatch,a=function(n,e){fetch("".concat(N,"words/delete_word"),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({lesson:n,word:e.word,translation:e.translate})}),console.log(n,e),t({type:"DELETE_WORD",lesson:n,wordToDelete:e})},o=function(n){fetch("".concat(N,"lessons/delete_lesson/").concat(n),{method:"DELETE"}).then((function(n){return n.json()})),t({type:"DELETE_LESSON",lessonToDelete:n})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(un,null),r.a.createElement(Dn,null,r.a.createElement(j,{txt:"Lista fiszek"}),r.a.createElement(Vn,{data:e.data,handleConfirm:function(n,e,t){switch(n){case"lesson":window.confirm("Czy na pewno chcesz usun\u0105\u0107 lekcj\u0119 ".concat(e,"?"))&&o(e);break;case"word":window.confirm("Czy na pewno chcesz usun\u0105\u0107 s\u0142\xf3wko ".concat(e,"?"))&&a(t,e);break;default:return null}}}),r.a.createElement(sn,null)))},In=t(17),zn=function(n,e){switch(e.type){case"ADD_LESSON":return{data:[].concat(Object(In.a)(n.data),[{lesson:e.lessonInputValue,words:[]}]),lessonsSubjects:[].concat(Object(In.a)(n.lessonsSubjects),[e.lessonInputValue]),words:n.words,currentLesson:n.currentLesson};case"DELETE_LESSON":return{data:n.data.filter((function(n){return n.lesson!==e.lessonToDelete})),words:n.data.filter((function(n){return n.lesson!==e.lessonToDelete}))[0].words,currentLesson:n.currentLesson,lessonsSubjects:n.lessonsSubjects.filter((function(n){return n!==e.lessonToDelete}))};case"GET_LESSON":return{words:e.words,currentLesson:e.currentLesson,lessonsSubjects:n.lessonsSubjects,data:n.data};case"ADD_WORD":return n.data.map((function(n){return n.lesson===e.lesson?(n.words.push(e.wordToAdd),n):n})),{words:[].concat(Object(In.a)(n.words),[e.wordToAdd]),data:n.data,lessonsSubjects:n.lessonsSubjects,currentLesson:n.currentLesson};case"DELETE_WORD":return n.data.map((function(n){return n.lesson===e.lesson?(n.words.map((function(t,a){t.word===e.wordToDelete&&n.words.splice(a,1)})),n):n})),{data:n.data,words:n.words.filter((function(n){return n.word!==e.wordToDelete})),currentLesson:n.currentLesson,lessonsSubjects:n.lessonsSubjects};case"IS_WORD_LEARNED":return console.log(e.status),n.data.map((function(n){return n.lesson===e.lesson?(n.words.map((function(n){n.word===e.word&&(n.isLearned=e.status)})),n):n})),n;case"FETCH":return{data:e.data,words:e.data.length?e.data[0].words:[],lessonsSubjects:e.data.map((function(n){return n.lesson})),currentLesson:e.data.length?e.data[0].lesson:""};default:return n}},An=function(){var n=Object(a.useReducer)(zn,{data:[],words:[],lessonSubjects:[],currentLesson:""}),e=Object(i.a)(n,2),t=e[0],o=e[1];return Object(a.useEffect)((function(){function n(){return(n=Object(u.a)(c.a.mark((function n(e){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(N,"lessons/get_lessons_with_words")).then((function(n){return n.json()})).then((function(n){localStorage.clear(),localStorage.setItem("data",JSON.stringify(n.hits)),o({type:"FETCH",data:n})})).catch((function(n){console.log("Request failed",n)}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}()}),[]),r.a.createElement(d.a,{basename:"/Flashcards"},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/"},r.a.createElement(dn,{state:t,dispatch:o})),r.a.createElement(f.a,{path:"/WordList"},r.a.createElement(Cn,{state:t,dispatch:o}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(An,null)),document.getElementById("root"))},19:function(n,e,t){},32:function(n,e,t){n.exports=t(121)}},[[32,1,2]]]);
//# sourceMappingURL=main.c0af836d.chunk.js.map