(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],d=0,m=[];d<o.length;d++)i=o[d],a[i]&&m.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},a={app:0},r=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Rect-Psychology-Test/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0239":function(e,t,s){},"034f":function(e,t,s){"use strict";var n=s("64a9"),a=s.n(n);a.a},"0858":function(e,t,s){"use strict";var n=s("e1e1"),a=s.n(n);a.a},"255f":function(e,t,s){"use strict";var n=s("b20f"),a=s.n(n);a.a},2618:function(e,t,s){},3777:function(e,t,s){},"3bf0":function(e,t,s){"use strict";var n=s("a25d"),a=s.n(n);a.a},"510b":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view",{key:e.$route.fullPath})],1)},r=[],i={name:"app",data:function(){return{mode100:!0,user:null}}},o=i,l=(s("034f"),s("2877")),c=Object(l["a"])(o,a,r,!1,null,null,null),u=c.exports,d=s("9f7b"),m=s.n(d),b=(s("f9e3"),s("2dd8"),s("8c4f")),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",{attrs:{fluid:""}},[s("b-row",{staticClass:"welcome-title"},[s("b-col",{attrs:{sm:"12",md:"12",lg:"12",xl:"12"}},[s("p",{staticClass:"title"},[e._v("Instrucciones")]),s("p",{staticClass:"subtitle"},[e._v("Trata de ubicar el número lo más rápido posible, no es necesario que hagas cálculos para dividir la recta, recuerda que no hay respuesta correctas o incorrectas."),s("br"),e._v("\nSe te presentarán dos series de ejercicios, uno es una recta del 0 al 100 y el otro es una recta de 0 a 1000. Habrá un ensayo de prueba antes de iniciar los ejercicios de cada recta."),s("br"),e._v("\nAl terminar la primera serie de ejercicios de una recta se te dará un descanso para continuar con la siguiente recta. Da clic al ejercicio con el que prefieras comenzar.")])])],1),s("b-row",{staticClass:"welcome-button-row"},[s("b-col",{staticClass:"button-container"},[s("div",{staticClass:"button-green button-green-welcome",on:{click:e.mode100Click}},[s("p",{staticClass:"button-title"},[e._v("100")]),s("p",[e._v("Recta numérica de 0 a 100")])])]),s("b-col",{staticClass:"button-container"},[s("div",{staticClass:"button-green button-green-welcome",on:{click:e.mode1000Click}},[s("p",{staticClass:"button-title"},[e._v("1000")]),s("p",[e._v("Recta numérica de 0 a 1000")])])])],1),s("b-row",[s("b-col",[s("p",{staticClass:"subtitle selection"},[e._v("Selección: Línea numérica "+e._s(e.selectedTest))])])],1),s("b-row",{staticClass:"start-button-row"},[s("b-col",[s("button",{staticClass:"button-green-little button-green-welcome",on:{click:e.begin}},[e._v("\n          Comenzar\n        ")])])],1)],1)},f=[],h={name:"ExerciseMenu",props:{msg:String},computed:{selectedTest:function(){return this.$parent.mode100?"0-100":"0-1000"}},methods:{mode100Click:function(){this.$parent.mode100=!0},mode1000Click:function(){this.$parent.mode100=!1},begin:function(){this.$router.push({path:"test",query:{testMode:!0,mode100:this.$parent.mode100}})}}},v=h,g=(s("6843"),Object(l["a"])(v,p,f,!1,null,"576c3ced",null)),x=g.exports,_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",{attrs:{fluid:""}},[s("b-row",[s("b-col",[s("p",{staticClass:"title instructions-title"},[e._v("Bienvenido")])])],1),s("b-row",[s("b-col",{attrs:{sm:"6",md:"8",lg:"8"}},[s("p",{staticClass:"subsubtitle instructions-subtitle"},[e._v("El siguiente estudio forma parte de un proyecto de la Facultad de Psicología de la UNAM con el fin de conocer la\nestimación de diversos números en una recta numérica."),s("br"),s("br"),e._v("\nTu participación es muy importante para nosotros, por lo que es necesario que sepas que la información que se\nrecoja será confidencial y se usará sólo para fines académicos."),s("br"),s("br"),e._v("\nTus respuestas serán guardadas usando un número de identificación asignado automáticamente."),s("br"),s("br"),e._v("\nSi tiene alguna duda sobre este proyecto, puede hacer preguntas en cualquier momento durante su participación\nen él. Igualmente, puede retirarse del proyecto en cualquier momento sin que te perjudique en alguna forma."),s("br"),s("br"),e._v("\nDa clic el botón de “comenzar” si aceptas participar voluntariamente en esta investigación. ")])])],1),s("b-row",[s("b-col",{staticClass:"button-start-container"},[s("button",{staticClass:"button-green-little",on:{click:e.next}},[e._v("\n          Comenzar\n        ")])])],1)],1)},C=[],w={name:"Instructions",methods:{next:function(){this.$router.push("form")}}},y=w,T=(s("bc40"),Object(l["a"])(y,_,C,!1,null,"3a4308de",null)),$=T.exports,N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",[s("b-row",[s("b-col",[s("p",{staticClass:"title form-title"},[e._v("Datos Personales")]),s("p",{staticClass:"subtitle form-title"},[e._v("Para continuar, por favor introduce los siguientes datos.")])])],1),s("b-row",[s("b-col",{attrs:{md:"3",lg:"3",xl:"3"}},[s("div",[s("p",{staticClass:"field-title"},[e._v("Número de participante")]),s("p",{staticClass:"subtitle"},[e._v(e._s(e.getLastUserId()))])])]),s("b-col",{attrs:{md:"3",lg:"3",xl:"3"}},[s("div",[s("p",{staticClass:"field-title"},[e._v("Preferencia de mano")]),s("b-form-radio",{staticClass:"form-title subsubtitle",attrs:{value:"left"},model:{value:e.hand,callback:function(t){e.hand=t},expression:"hand"}},[e._v("Zurdo")]),s("b-form-radio",{staticClass:"form-title subsubtitle",attrs:{value:"right"},model:{value:e.hand,callback:function(t){e.hand=t},expression:"hand"}},[e._v("Diestro")])],1)])],1),s("b-row",[s("b-col",{attrs:{md:"3",lg:"3",xl:"3"}},[s("div",[s("p",{staticClass:"field-title"},[e._v("Género")]),s("b-form-radio",{staticClass:"form-title subsubtitle",attrs:{value:"man"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[e._v("Hombre")]),s("b-form-radio",{staticClass:"form-title subsubtitle",attrs:{value:"woman"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[e._v("Mujer")])],1)]),s("b-col",{attrs:{md:"3",lg:"3",xl:"3"}},[s("div",{staticStyle:{"text-align":"left"}},[s("p",{staticClass:"field-title"},[e._v("Edad")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],staticClass:"form-input",attrs:{type:"number",min:"10",max:"60"},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}}),e.invalidAge?s("p",{staticClass:"error field-title error"},[e._v("Introduce una fecha válida.")]):e._e()])])],1),s("b-row",[s("b-col",{staticClass:"button-start-container"},[s("button",{staticClass:"button-green-little",on:{click:e.next}},[e._v("\n        Siguiente\n      ")])])],1)],1)},k=[],O=(s("ac4d"),s("8a81"),s("ac6a"),{name:"PersonalDataForm",computed:{},data:function(){return{gender:"woman",hand:"left",age:null,invalidAge:!1}},methods:{next:function(){if(this.validate()){this.$parent.user={gender:this.gender,handPreference:this.hand,age:this.age,participantNumber:this.getLastUserId()};var e=window.localStorage;if(null==e.getItem("users")){var t=JSON.stringify([this.$parent.user]);e.setItem("users",t)}else{var s=JSON.parse(e.getItem("users"));s.push(this.$parent.user),e.setItem("users",JSON.stringify(s))}this.$router.push("exerciseExample")}else console.log("Invalid form data")},validate:function(){return this.age<10?this.invalidAge=!0:this.invalidAge=!1,!this.invalidAge},getLastUserId:function(){var e=window.localStorage;if(null==e.getItem("users"))return 1;var t=JSON.parse(e.getItem("users")),s=0,n=!0,a=!1,r=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var l=i.value;s=l.participantNumber}}catch(c){a=!0,r=c}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return s+1}}}),M=O,j=(s("fb0a"),Object(l["a"])(M,N,k,!1,null,"7c3cbd55",null)),E=j.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",{attrs:{fluid:""}},[s("b-row",[s("b-col",[s("p",{staticClass:"title example-title"},[e._v("Instrucciones")])])],1),s("b-row",[s("b-col",{attrs:{sm:"4",md:"6",lg:"6"}},[s("p",{staticClass:"subsubtitle example-subtitle"},[e._v("\n        A continuación trabajarás con una serie de ejercicios de la recta numérica.\n        Se te pedirá ubicar el número que se encuentra escrito en el círculo superior de la pantalla.\n        Cuando decidas dónde va el número, mueve el cursor para ubicar la línea\n        azul en la recta."),s("br"),e._v("\n        Como en el siguiente ejemplo: "),s("br"),s("b",[e._v("Esta línea va de 0 a 1000. ¿Dónde ubicaría este número?")])])]),s("b-col",{staticClass:"line-test-container"},[s("LineTest",{attrs:{mode:"1000"},model:{value:e.expectedNumber,callback:function(t){e.expectedNumber=t},expression:"expectedNumber"}})],1)],1),s("b-row",[s("b-col",{staticClass:"button-start-container"},[s("button",{staticClass:"button-green-little",on:{click:e.next}},[e._v("\n        Siguiente\n      ")])])],1)],1)},q=[],I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",{attrs:{fluid:""}},[s("b-row",[s("b-col",[s("span",{staticClass:"dot"},[e._v(e._s(e.expectedNumber))])])],1),s("b-row",[s("b-col",[s("vue-slider",e._b({ref:"slider",staticClass:"slider",attrs:{tooltip:"none"},scopedSlots:e._u([{key:"dot",fn:function(){return[s("svg",{attrs:{width:"5",height:"30"}},[s("line",{staticClass:"slide-line",attrs:{x1:"0",x2:"0",y1:"0",y2:"30"}})])]},proxy:!0}])},"vue-slider",e.options,!1))],1)],1)],1)},P=[],L=s("4971"),z=s.n(L),A={name:"LineTest",props:["mode","value"],components:{VueSlider:z.a},methods:{defaultValue:function(){var e=0,t="100"==this.mode?100:1e3;return Math.random()*(t-e)+e},reset:function(){this.options.value=this.defaultValue()},getValue:function(){return this.$refs.slider.getValue()}},data:function(){return{options:{min:0,max:"100"==this.mode?100:1e3,value:this.defaultValue(),marks:[0,"100"==this.mode?100:1e3]},expectedNumber:this.value}}},D=A,J=(s("701b"),Object(l["a"])(D,I,P,!1,null,null,null)),U=J.exports,R={name:"ExerciseExample",components:{LineTest:U},methods:{next:function(){this.$router.push("chooseExercise")}},data:function(){return{expectedNumber:350}}},V=R,F=(s("255f"),Object(l["a"])(V,S,q,!1,null,"0f97652d",null)),H=F.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",[s("b-row",[s("b-col",[s("p",{staticClass:"title"},[e._v("Ubica la barra azul en el número que se te indica.")]),e.testMode?s("p",{staticClass:"subtitle"},[e._v("Este es un ensayo de prueba para que te familarices con la tarea.")]):e._e()])],1),s("b-row",[s("LineTest",{ref:"lineTest",attrs:{mode:e.getMode},model:{value:e.expectedNumber,callback:function(t){e.expectedNumber=t},expression:"expectedNumber"}})],1),s("b-row",{staticClass:"third-row"},[s("b-col",{staticClass:"counter-container"},[e.testMode?e._e():s("p",{staticClass:"title"},[e._v(e._s(e.remaining))])]),s("b-col",{staticClass:"button-container"},[s("button",{staticClass:"button-green-little button-green-welcome",on:{click:e.buttonClick}},[e._v("\n        "+e._s(e.buttonText)+"\n        ")])])],1)],1)},W=[],B=(s("a481"),{name:"Test",components:{LineTest:U},computed:{getMode:function(){return this.mode100?"100":"1000"},remaining:function(){var e=this.mode100?this.mode100Tests.length:this.mode1000Tests.length;return"".concat(this.testNumber+1,"/").concat(e)},buttonText:function(){return this.testMode?"Comenzar":this.testNumber+1==this.actualTests.length?"Terminar":"Siguiente"},actualTests:function(){return this.mode100?this.mode100Tests:this.mode1000Tests},expectedNumber:function(){return this.testMode?350:this.actualTests[this.testNumber]}},data:function(){return{testMode:this.$route.query.testMode,mode100:this.$route.query.mode100,lastExercise:this.$route.query.lastExercise,mode100Tests:[10,37],mode1000Tests:[120,147],testNumber:0,user:this.$parent.user,results:[]}},methods:{buttonClick:function(){this.testMode?this.$router.replace({path:"test",query:{testMode:!1,mode100:this.$parent.mode100}}):this.testNumber+1!=this.actualTests.length||this.lastExercise?this.testNumber+1==this.actualTests.length&&this.lastExercise?(this.saveListOfResults(),this.saveUser(),this.$router.push("finish")):this.testMode||(this.saveListOfResults(),this.testNumber=this.testNumber+1,this.$refs.lineTest.expectedNumber=this.actualTests[this.testNumber],this.$refs.lineTest.reset()):(this.saveListOfResults(),this.saveUser(),this.$router.push({path:"wait",query:{nextMode100:!this.mode100}}))},saveUser:function(){for(var e=window.localStorage,t=JSON.parse(e.getItem("users")),s=0,n=0;n<t.length;n++)if(t[n].participantNumber==this.user){s=n;break}this.mode100?this.user["resultsOf100"]=this.results:this.user["resultsOf1000"]=this.results,t[s]=this.user,e.setItem("users",JSON.stringify(t)),console.log(t)},saveListOfResults:function(){var e=this.actualTests[this.testNumber],t=0|this.$refs.lineTest.getValue();this.results.push({expected:e,entered:t,difference:e-t}),console.log(this.results)}},mounted:function(){console.log("Test Mode: ".concat(this.testMode)),console.log("Mode 100: ".concat(this.mode100)),this.testMode||(this.$refs.lineTest.expectedNumber=this.actualTests[this.testNumber],this.$refs.lineTest.reset())}}),Z=B,K=(s("3bf0"),Object(l["a"])(Z,G,W,!1,null,null,null)),Q=K.exports,X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",[s("b-row",[s("b-col",[s("p",{staticClass:"title wait-text"},[e._v("\n          Has terminado la primera serie de ejercicios.\nAhora se te dará un descanso y en breve contestarás la siguiente serie con la otra recta numérica.\nDa clic en el botón de “comenzar” cuando estés listo.\n        ")])])],1),s("b-row",[s("b-col",{staticClass:"button-container"},[s("button",{staticClass:"button-green-little",on:{click:e.click}},[e._v("\n          Comenzar\n        ")])])],1)],1)},Y=[],ee={name:"Wait",data:function(){return{nextMode:this.$route.query.nextMode100}},methods:{click:function(){this.$router.push({path:"test",query:{testMode:!1,mode100:this.nextMode,lastExercise:!0}})}}},te=ee,se=(s("a7bf"),Object(l["a"])(te,X,Y,!1,null,null,null)),ne=se.exports,ae=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",{attrs:{fluid:""}},[s("b-row",[s("b-col",[s("p",{staticClass:"title"},[e._v("Gracias por participar.")])])],1),s("b-row",[s("b-col",[s("button",{staticClass:"button-green-little",on:{click:e.click}},[e._v("Terminar")])])],1)],1)},re=[],ie={name:"Finish",methods:{click:function(){this.$router.replace("/")}}},oe=ie,le=(s("0858"),Object(l["a"])(oe,ae,re,!1,null,"618f36e8",null)),ce=le.exports,ue=[{path:"",redirect:"/instructionsText"},{path:"/chooseExercise",name:"ExerciseChoose",component:x},{path:"/instructionsText",name:"Instructions",component:$},{path:"/form",name:"PersonalDataForm",component:E},{path:"/exerciseExample",name:"ExerciseExample",component:H},{path:"/test",name:"Test",component:Q},{path:"/wait",name:"Wait",component:ne},{path:"/finish",name:"Finish",component:ce}];n["default"].use(b["a"]);var de=new b["a"]({mode:"history",routes:ue});n["default"].use(m.a),n["default"].config.productionTip=!1,new n["default"]({router:de,render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,t,s){},6843:function(e,t,s){"use strict";var n=s("3777"),a=s.n(n);a.a},"701b":function(e,t,s){"use strict";var n=s("0239"),a=s.n(n);a.a},9148:function(e,t,s){},a25d:function(e,t,s){},a7bf:function(e,t,s){"use strict";var n=s("510b"),a=s.n(n);a.a},b20f:function(e,t,s){},bc40:function(e,t,s){"use strict";var n=s("2618"),a=s.n(n);a.a},e1e1:function(e,t,s){},fb0a:function(e,t,s){"use strict";var n=s("9148"),a=s.n(n);a.a}});
//# sourceMappingURL=app.edf8bb8b.js.map