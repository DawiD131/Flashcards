(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{119:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(24),o=t.n(l),s=t(9),i=t(4),c=t(25),u=t(14),d=t(15),h=t(17),m=t(16),f=t(2),b=(t(23),t(3)),p=t(26),w=t.n(p);function g(){var e=Object(f.a)(["\n  background-color: #3098d9;\n  display: flex;\n  height: 9vh;\n  justify-content: center;\n"]);return g=function(){return e},e}function v(){var e=Object(f.a)(["\n  margin-top: 1%;\n  font-size: 50px;\n  font-weight: 300;\n  color: black;\n"]);return v=function(){return e},e}var E=b.b.h1(v()),j=b.b.div(g());var V=function(e){return r.a.createElement(j,null,r.a.createElement(E,null,e.txt))};function x(){var e=Object(f.a)(["\n  font-size: 35px;\n"]);return x=function(){return e},e}var y=b.b.h2(x());var S=function(e){return r.a.createElement(y,null,e.word)};function k(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 70%;\n  height: 25%;\n  border-bottom: 1px solid black;\n  margin: 2%;\n"]);return k=function(){return e},e}function C(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  height: 93%;\n  background-color: #41a1dc;\n  box-shadow: inset 0 0 5px #000000;\n"]);return C=function(){return e},e}var L=b.b.div(C()),O=b.b.div(k());var z=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null,!0===e.show?r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,r.a.createElement(S,{word:e.word})),r.a.createElement(O,null,e.isWordVisible?r.a.createElement(S,{word:e.translation}):null)):e.lessonsSubjects.length>0?r.a.createElement(S,{word:"Brak s\u0142\xf3wek"}):r.a.createElement(S,{word:"Najpierw dodaj lekcj\u0119"})))};function W(){var e=Object(f.a)(["\n  background: ",";\n  font-size: 16px;\n  box-shadow: 1px 2px 4px black;\n  border: 0;\n  border-radius: 5px;\n  margin-right: ",";\n  color: black;\n  width: ",";\n  height: 30px;\n  outline: none;\n  cursor: pointer;\n  margin-top: ",";\n  &:hover {\n    box-shadow: 3px 3px 4px black;\n  }\n"]);return W=function(){return e},e}var P=b.b.button(W(),(function(e){return e.dangerous?"#ff691f":e.good?"green":e.warning?"#ffa91f":e.control?"#0e486c":"#0276f2"}),(function(e){return e.secondary?"7px":"null"}),(function(e){return e.isLearned?"8%":""}),(function(e){return e.submit?"5px":null}));var F=function(e){return r.a.createElement(P,{submit:e.submit,control:e.control,isLearned:e.isLearned,dangerous:e.dangerous,secondary:e.secondary,warning:e.warning,good:e.good,onClick:e.function},e.txt)};function D(){var e=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 3%;\n  width: 100%;\n  border-radius: 10px;\n  height: 4%;\n"]);return D=function(){return e},e}var T=b.b.div(D());var _=function(e){return r.a.createElement(T,null,r.a.createElement(F,{isLearned:!0,secondary:!0,dangerous:!0,function:function(){return e.handleIsLearnedClick(!1)},txt:"-"}),r.a.createElement(F,{control:!0,secondary:!0,function:e.Prevfunc,txt:"<"}),r.a.createElement(F,{control:!0,secondary:!0,function:e.Showfunc,txt:e.isWordVisible?"HIDE":"SHOW"}),r.a.createElement(F,{control:!0,secondary:!0,function:e.Nextfunc,txt:">"}),r.a.createElement(F,{isLearned:!0,secondary:!0,good:!0,function:function(){return e.handleIsLearnedClick(!0)},txt:"+"}))},A=t(30);function I(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 20%;\n  padding: 8px;\n  margin: 10px;\n  background-color: #3098d9;\n  box-shadow: 3px 3px 4px black;\n  border-radius: 10px;\n"]);return I=function(){return e},e}var N=b.b.form(I());function U(){var e=Object(f.a)(["\n  width: 40%;\n  height: 17%;\n  font-size: 13px;\n  margin-bottom: 1%;\n  background: #f2e3bc;\n  outline: none;\n  display: block;\n  border: none;\n  border-radius: 4px;\n"]);return U=function(){return e},e}var M=b.b.select(U());var J=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{onSubmit:e.handleSubmit},r.a.createElement("h2",null,"Lekcja:"),r.a.createElement(M,{name:"lessonSelectValue",value:e.value,onChange:e.handleChange},e.lessons.map((function(e,n){return r.a.createElement("option",{key:n,value:e},e)}))),r.a.createElement(F,{submit:!0,type:"submit",txt:"Wybierz"})))};function B(){var e=Object(f.a)(["\n  width: 100%;\n  background-color: #f2e3bc;\n  color: black;\n  border: none;\n  outline: none;\n  height: 40%;\n  padding: 3%;\n  margin-bottom: 1%;\n  margin-top: 2%;\n  border-radius: 4px;\n  cursor: pointer;\n  display: block;\n"]);return B=function(){return e},e}var H=b.b.input(B());var K=function(e){return r.a.createElement(N,{onSubmit:e.handleAddWordSubmit},r.a.createElement("h2",null,"Dodaj fiszk\u0119"),r.a.createElement("label",{htmlFor:"wordValue"},"S\u0142\xf3wko:",r.a.createElement(H,{autoComplete:"off",type:"text",name:"wordValue",placeholder:"Wpisz s\u0142\xf3wko",value:e.WordValue,onChange:e.handleChange})),r.a.createElement("label",{htmlFor:"translationValue"},"T\u0142umaczenie:",r.a.createElement(H,{autoComplete:"off",type:"text",name:"translationValue",placeholder:"Wpisz t\u0142umaczenie",value:e.TranslationValue,onChange:e.handleChange})),r.a.createElement(F,{submit:!0,type:"submit",txt:"Dodaj"}))};var R=function(e){return r.a.createElement(N,{onSubmit:e.handleLessonSubmit},r.a.createElement("h2",null,"Dodaj lekcj\u0119"),r.a.createElement("label",{htmlFor:"lessonValue"},"Temat:",r.a.createElement(H,{autoComplete:"off",type:"text",name:"lessonValue",placeholder:"Wpisz temat lekcji",value:e.LessonValue,onChange:e.handleChange})),r.a.createElement(F,{submit:!0,type:"submit",txt:"Dodaj!"}))};function Q(){var e=Object(f.a)(["\n  animation: 1s ",";\n  display: flex;\n  width: 100%;\n  justify-content: center;\n"]);return Q=function(){return e},e}function q(){var e=Object(f.a)(["",""]);return q=function(){return e},e}var G=Object(b.c)(q(),A.bounce),X=b.b.div(Q(),G);var Y=function(e){return r.a.createElement(X,null,e.lessonsSubjects.length>0?r.a.createElement(J,{lessons:e.lessonsSubjects,value:e.value,handleSubmit:e.handleSubmit,handleChange:e.handleChange}):null,e.lessonsSubjects.length>0?r.a.createElement(K,{WordValue:e.WordValue,TranslationValue:e.TranslationValue,handleAddWordSubmit:e.handleAddWordSubmit,handleChange:e.handleChange}):null,r.a.createElement(R,{LessonValue:e.LessonValue,handleLessonSubmit:e.handleLessonSubmit,handleChange:e.handleChange}))};function Z(){var e=Object(f.a)(["\n  margin-left: 20px;\n"]);return Z=function(){return e},e}var $=b.b.h3(Z());var ee=function(e){return r.a.createElement($,null,e.txt)};function ne(){var e=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 50%;\n  background-color: #3098d9;\n"]);return ne=function(){return e},e}function te(){var e=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  background-color: #3098d9;\n"]);return te=function(){return e},e}function ae(){var e=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-end;\n  width: 50%;\n  background-color: #3098d9;\n"]);return ae=function(){return e},e}function re(){var e=Object(f.a)(["\n  display: flex;\n  height: 5vh;\n  border-top: 0.1vh solid black;\n"]);return re=function(){return e},e}var le=b.b.div(re()),oe=b.b.div(ae()),se=b.b.div(te()),ie=b.b.div(ne());var ce=function(e){return r.a.createElement(le,null,e.main?r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,null,e.words.length>0?r.a.createElement(ee,{txt:"Lekcja: ".concat(e.lesson," zosta\u0142a opanowana w ").concat(e.procentValue,"%")}):null),r.a.createElement(oe,null,r.a.createElement(s.b,{to:"/WordList"},r.a.createElement(F,{secondary:!0,warning:!0,renderAs:"button",txt:"word list"})),r.a.createElement(F,{secondary:!0,warning:!0,function:e.handleIsFormPanelVisibleClick,txt:e.visible?"Ukryj panel":"Pokaz panel"}))):r.a.createElement(se,null,r.a.createElement(s.b,{to:"/"},r.a.createElement(F,{secondary:!0,renderAs:"button",txt:"Main Board"}))))};function ue(){var e=Object(f.a)(["\nbody {\n  background: #53a9df;\n  font-family: 'Questrial', sans-serif;\n margin:0;\n \n}\n"]);return ue=function(){return e},e}var de=Object(b.a)(ue());function he(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  height: 35%;\n"]);return he=function(){return e},e}function me(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 85vh;\n  width: 100%;\n"]);return me=function(){return e},e}var fe=b.b.div(me()),be=b.b.div(he()),pe=function(e){Object(h.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=n.call.apply(n,[this].concat(r))).state={words:[],currentLessonValue:"",lessonsSubjects:[],number:0,lessonSelectValue:"",wordValue:"",translationValue:"",lessonValue:"",isWordVisible:!1,isFormPanelVisible:!0,procentValue:0},e.messages={text_incorrect:"Pole nie moze by\u0107\xa0puste i lekcja/s\u0142\xf3wko nie moze si\u0119 powtarzac"},e.handleChange=function(n){e.setState(Object(c.a)({},n.target.name,n.target.value))},e.handleSubmit=function(n){var t=e.state.lessonSelectValue,a=0;fetch("http://localhost:9000/get_words/".concat(t)).then((function(e){return e.json()})).then((function(n){e.setState({words:n.words}),n.words.map((function(e){!0===e.isLearned&&a++})),e.setState({procentValue:Math.round(a/n.words.length*100)})})),e.setState({number:0,currentLessonValue:t}),n.preventDefault()},e.handleAddWordSubmit=function(n){n.preventDefault();var t=e.formValidation(e.state.words,"words");if(!0===t.wordValue||!0===t.translationValue)window.alert("\u017badne pole nie moze byc puste i s\u0142\xf3wko nie moze zaczyna\u0107 si\u0119 od spacji");else if(t.isRepeat)window.alert("S\u0142\xf3wko nie moze si\u0119 powtarza\u0107");else{var a=0,r=e.state,l=r.currentLessonValue,o=r.wordValue,s=r.translationValue,i=r.words,c=i;fetch("http://localhost:9000/save_word",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lesson:l,word:o,translation:s,isLearned:!1})});var u={word:o,translate:s,isLearned:!1};i.push(u),i.map((function(e){return!0===e.isLearned?(a++,e):e})),0===a?e.setState({procentValue:0}):e.setState({procentValue:Math.round(a/i.length*100)}),e.setState({words:c,translationValue:"",wordValue:""})}},e.handleLessonSubmit=function(n){n.preventDefault();var t=e.formValidation(e.state.lessonsSubjects,"lessons");if(!0===t.lessonValue)window.alert("Pole lekcji nie moze by\u0107 puste i zaczyna\u0107 si\u0119 od spacji!");else if(!0===t.isRepeat)window.alert("Lekcja nie moze si\u0119 powtarza\u0107!");else{var a={lesson:e.state.lessonValue};fetch("http://localhost:9000/create_new_lesson",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),e.state.lessonsSubjects.push(e.state.lessonValue),1===e.state.lessonsSubjects.length&&e.setState({lessonSelectValue:e.state.lessonValue}),e.setState({lessonsSubjects:e.state.lessonsSubjects,lessonValue:"",currentLessonValue:1===e.state.lessonsSubjects.length?e.state.lessonValue:e.state.lessonsSubjects[0]})}},e.handleClick=function(n){var t=e.state,a=t.number,r=t.words;switch(e.setState({isWordVisible:!1}),n){case"Next":a+1===r.length?e.setState({number:0}):e.setState({number:a+1});break;case"Prev":a<1?e.setState({number:r.length-1}):e.setState({number:a-1})}},e.handleIsFormPanelVisibleClick=function(){e.setState({isFormPanelVisible:!e.state.isFormPanelVisible})},e.handleShowWordClick=function(){e.setState({isWordVisible:!e.state.isWordVisible})},e.handleIsLearnedClick=function(n){var t=e.state,a=t.words,r=t.number,l=t.currentLessonValue,o=0,s={lesson:l,word:a[r].word,translate:a[r].translate,isLearned:n};fetch("http://localhost:9000/update_word_status",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),e.setState({words:a.map((function(e){return a[r].word===e.word?(e.isLearned=n,e):e}))}),a.map((function(e){!0===e.isLearned&&o++})),e.setState({procentValue:Math.round(o/a.length*100)})},e.handleKeyEvent=function(n){"left"===n?e.handleClick("Prev"):"right"===n?e.handleClick("Next"):"down"===n&&e.setState({isWordVisible:!e.state.isWordVisible})},e.formValidation=function(n,t){var a=!1,r=!1,l=!1,o=!1;switch(t){case"words":n.map((function(n){n.word.toUpperCase()!==e.state.wordValue.toUpperCase()&&n.translate.toUpperCase()!==e.state.lessonValue.toUpperCase()||(o=!0,console.log("powtarza si\u0119"))}));break;case"lessons":n.map((function(n){n.toUpperCase()===e.state.lessonValue.toUpperCase()&&(o=!0)}))}return 0!==e.state.lessonValue.length&&" "!==e.state.lessonValue[0]||(a=!0),0!==e.state.wordValue.length&&" "!==e.state.wordValue[0]||(r=!0),0!==e.state.translationValue.length&&" "!==e.state.translationValue[0]||(l=!0),{lessonValue:a,wordValue:r,translationValue:l,isRepeat:o}},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:9000/get_lessons_with_words").then((function(e){if(e.ok)return e;throw Error(e.status)})).then((function(e){return e.json()})).then((function(n){var t=[],a=n.map((function(e){return e.lesson}));console.log(a.length),a.length>0?(t=n[0].words,e.setState({words:t,currentLessonValue:a[0],lessonSelectValue:a[0]})):t=[],e.setState({lessonsSubjects:a})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,n=this.state,t=n.currentLessonValue,a=n.isWordVisible,l=n.words,o=n.number,s=n.lessonsSubjects,i=n.lessonSelectValue,c=n.lessonValue,u=n.wordValue,d=n.translationValue,h=n.isFormPanelVisible;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{handleKeys:["left","right","down"],onKeyEvent:function(n){return e.handleKeyEvent(n)}}),r.a.createElement(de,null),r.a.createElement(V,{txt:"FLASHCARDS"}),r.a.createElement(fe,null,r.a.createElement(be,null,l.length>0?r.a.createElement(z,{isWordVisible:a,show:!0,word:l[o].word,translation:l[o].translate}):r.a.createElement(z,{show:!1,lessonsSubjects:s}),l.length>0?r.a.createElement(_,{isWordVisible:a,handleIsLearnedClick:this.handleIsLearnedClick,Prevfunc:function(){return e.handleClick("Prev")},Showfunc:this.handleShowWordClick,Nextfunc:function(){return e.handleClick("Next")}}):null),h?r.a.createElement(Y,{lessonsSubjects:s,value:i,handleSubmit:this.handleSubmit,handleChange:this.handleChange,WordValue:u,TranslationValue:d,handleAddWordSubmit:this.handleAddWordSubmit,LessonValue:c,handleLessonSubmit:this.handleLessonSubmit}):null),r.a.createElement(ce,{main:!0,lesson:t,procentValue:this.state.procentValue,words:l,lessonsSubjects:s,handleIsFormPanelVisibleClick:this.handleIsFormPanelVisibleClick,visible:h}))}}]),t}(r.a.Component);function we(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  border-bottom: 1px solid black;\n  padding: 3px;\n"]);return we=function(){return e},e}function ge(){var e=Object(f.a)(["\n  border-bottom: 1px solid black;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 4px;\n"]);return ge=function(){return e},e}function ve(){var e=Object(f.a)(["\n  font-family: arial, sans-serif;\n  text-align: center;\n  border-collapse: collapse;\n  width: 35%;\n"]);return ve=function(){return e},e}function Ee(){var e=Object(f.a)(["\n  display: flex;\n  overflow: scroll;\n  flex-direction: column;\n  align-items: center;\n  height: 85vh;\n  width: 100%;\n"]);return Ee=function(){return e},e}var je=b.b.div(Ee()),Ve=b.b.table(ve()),xe=b.b.td(ge()),ye=b.b.th(we()),Se=function(e){Object(h.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=n.call.apply(n,[this].concat(r))).state={data:[]},e.handleConfirm=function(n,t,a){switch(n){case"lesson":window.confirm("Czy na pewno chcesz usun\u0105\u0107 lekcj\u0119 ".concat(t,"?"))&&e.handleDeleteLessonClick(t);break;case"word":window.confirm("Czy na pewno chcesz usun\u0105\u0107 s\u0142\xf3wko ".concat(t,"?"))&&e.handleDeleteClick(a,t)}},e.handleDeleteClick=function(n,t){var a=e.state.data;fetch("http://localhost:9000/delete_word",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lesson:n,word:t.word,translation:t.translate})}),e.state.data.map((function(r,l){n===r.lesson&&e.state.data[l].words.map((function(n,a){t===n.word&&e.state.data[l].words.splice(a,1)})),e.setState({data:a})}))},e.handleDeleteLessonClick=function(n){fetch("http://localhost:9000/delete_lesson/".concat(n)).then((function(e){return e.json()}));var t=e.state.data;t.map((function(a,r){a.lesson===n&&t.splice(r,1),e.setState({data:t})}))},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:9000/get_lessons_with_words").then((function(e){if(e.ok)return e;throw Error(e.status)})).then((function(e){return e.json()})).then((function(n){e.setState({data:n})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(de,null),r.a.createElement(V,{txt:"Lista fiszek"}),r.a.createElement(je,null,0===this.state.data.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Brak lekcji"),r.a.createElement("br",null),r.a.createElement("h1",null,"Przejd\u017a do panelu g\u0142\xf3wnego i dodaj lekcj\u0119")):this.state.data.map((function(n,t){return r.a.createElement(Ve,{key:t},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement(ye,null,"Temat: ".concat(n.lesson),r.a.createElement(F,{dangerous:!0,txt:"Usu\u0144",function:function(){return e.handleConfirm("lesson",n.lesson,null)}}))),n.words.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement(xe,{key:t.word},"".concat(t.word," - ").concat(t.translate)," ",r.a.createElement(F,{key:t.translate,warning:!0,txt:"Usu\u0144",function:function(){return e.handleConfirm("word",t.word,n.lesson)}})))}))))}))),r.a.createElement(ce,null))}}]),t}(r.a.Component);var ke=function(){return r.a.createElement(s.a,{basename:"/Flashcards"},r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/WordList"},"WordList")))),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(pe,null)),r.a.createElement(i.a,{path:"/WordList"},r.a.createElement(Se,null)))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ke,null)),document.getElementById("root"))},23:function(e,n,t){},31:function(e,n,t){e.exports=t(119)}},[[31,1,2]]]);
//# sourceMappingURL=main.32306e8f.chunk.js.map