(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61bc75c0"],{"10e8":function(t,e,a){},3835:function(t,e,a){"use strict";function c(t){if(Array.isArray(t))return t}a.d(e,"a",(function(){return r}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0");function o(t,e){var a=t&&("undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=a){var c,o,i=[],n=!0,l=!1;try{for(a=a.call(t);!(n=(c=a.next()).done);n=!0)if(i.push(c.value),e&&i.length===e)break}catch(r){l=!0,o=r}finally{try{n||null==a["return"]||a["return"]()}finally{if(l)throw o}}return i}}a("fb6a"),a("b0c0"),a("a630");function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,c=new Array(e);a<e;a++)c[a]=t[a];return c}function n(t,e){if(t){if("string"===typeof t)return i(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){return c(t)||o(t,e)||n(t,e)||l()}},"4df4":function(t,e,a){"use strict";var c=a("0366"),o=a("7b0b"),i=a("9bdd"),n=a("e95a"),l=a("50c4"),r=a("8418"),s=a("35a1");t.exports=function(t){var e,a,b,d,u,p,f=o(t),m="function"==typeof this?this:Array,j=arguments.length,O=j>1?arguments[1]:void 0,g=void 0!==O,v=s(f),h=0;if(g&&(O=c(O,j>2?arguments[2]:void 0,2)),void 0==v||m==Array&&n(v))for(e=l(f.length),a=new m(e);e>h;h++)p=g?O(f[h],h):f[h],r(a,h,p);else for(d=v.call(f),u=d.next,a=new m;!(b=u.call(d)).done;h++)p=g?i(d,O,[b.value,h],!0):b.value,r(a,h,p);return a.length=h,a}},"4fad":function(t,e,a){var c=a("23e7"),o=a("6f53").entries;c({target:"Object",stat:!0},{entries:function(t){return o(t)}})},"53ca":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0");function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}},"6f53":function(t,e,a){var c=a("83ab"),o=a("df75"),i=a("fc6a"),n=a("d1e7").f,l=function(t){return function(e){var a,l=i(e),r=o(l),s=r.length,b=0,d=[];while(s>b)a=r[b++],c&&!n.call(l,a)||d.push(t?[a,l[a]]:l[a]);return d}};t.exports={entries:l(!0),values:l(!1)}},"9bdd":function(t,e,a){var c=a("825a"),o=a("2a62");t.exports=function(t,e,a,i){try{return i?e(c(a)[0],a[1]):e(a)}catch(n){throw o(t),n}}},a630:function(t,e,a){var c=a("23e7"),o=a("4df4"),i=a("1c7e"),n=!i((function(t){Array.from(t)}));c({target:"Array",stat:!0,forced:n},{from:o})},d28b:function(t,e,a){var c=a("746f");c("iterator")},ee0b:function(t,e,a){"use strict";a("10e8")},fb6a:function(t,e,a){"use strict";var c=a("23e7"),o=a("861d"),i=a("e8b5"),n=a("23cb"),l=a("50c4"),r=a("fc6a"),s=a("8418"),b=a("b622"),d=a("1dde"),u=d("slice"),p=b("species"),f=[].slice,m=Math.max;c({target:"Array",proto:!0,forced:!u},{slice:function(t,e){var a,c,b,d=r(this),u=l(d.length),j=n(t,u),O=n(void 0===e?u:e,u);if(i(d)&&(a=d.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?o(a)&&(a=a[p],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return f.call(d,j,O);for(c=new(void 0===a?Array:a)(m(O-j,0)),b=0;j<O;j++,b++)j in d&&s(c,b,d[j]);return c.length=b,c}})},fd2d:function(t,e,a){"use strict";a("ac1f"),a("1276"),a("a4d3"),a("e01a"),a("9911");var c=a("7a23"),o=Object(c["J"])("data-v-fac47728");Object(c["u"])("data-v-fac47728");var i={class:["main-footer","bg-dark"]},n={key:0,class:"position-absolute cog p-4"},l={class:"btn btn-light bg-gradient btn-sm","data-bs-toggle":"modal","data-bs-target":"#footerProps"},r={class:"container p-4 mb-4"},s={class:"row mt-2"},b={class:"col-lg-4 col-md-12 mb-4"},d={class:"text-uppercase heading text-white fw-bold mb-2"},u={key:0},p={class:"col-lg-3 col-md-6 col-sm-12"},f=Object(c["i"])("h6",{class:"text-uppercase heading text-white fw-bold mb-2"},"Reach out",-1),m={class:"row list-unstyled mb-0"},j={class:"col-md-12 col-sm-6"},O={class:"row mt-3 reach-out"},g={class:"d-flex"},v={class:"mt-0 mb-0"},h={class:"d-block ms-2"},_={class:"col-md-12 col-sm-6"},y={class:"row mt-2 reach-out"},x={class:"d-flex"},w={class:"mt-0 mb-0"},k={class:"d-block ms-2 mt-1"},S={class:"mb-0"},E={class:"col-md-12 col-sm-6"},A={class:"row mt-1 reach-out"},C={class:"d-flex"},H={class:"mt-0 mb-0"},q={class:"d-block ms-2 mt-1"},U={class:"mb-0"},L={class:"d-inline-flex"},D={class:"col-lg-2 col-md-6 mb-4 col-sm-12"},T=Object(c["i"])("h6",{class:"text-uppercase mb-0 heading text-white fw-bold"},"Navigate",-1),I={class:"list-unstyled"},P=Object(c["i"])("div",{id:"copyright",class:"text-center p-3 copyright-background"}," Copyright ©2021 All rights reserved | Powered by Kipepeo Properties ",-1),V={class:"modal fade",id:"footerProps",tabindex:"-1","aria-labelledby":"footerPropsLabel","aria-hidden":"true"},N={class:"modal-dialog"},B={class:"modal-content"},F=Object(c["i"])("div",{class:"modal-header pb-0 border-bottom-0"},[Object(c["i"])("span",{class:"d-block w-100"},[Object(c["i"])("h5",{class:"text-dark text-center"},"Edit Footer Section")])],-1),M={class:"modal-body container"},z={class:"row"},J={class:"row mb-4"},$=Object(c["i"])("label",{for:"title",class:"fw-bold mb-2"},"Title",-1),W={class:"input-group"},K=Object(c["i"])("small",{class:"text-muted"},"Enter your title.",-1),R={class:"row mb-4"},G=Object(c["i"])("label",{for:"address",class:"fw-bold mb-2"},"Address",-1),Q={class:"input-group"},X=Object(c["i"])("small",{class:"text-muted"},"Enter your address.",-1),Y={class:"row mb-4"},Z=Object(c["i"])("label",{for:"phone_number",class:"fw-bold mb-2"},"Phone Number",-1),tt={class:"input-group"},et=Object(c["i"])("small",{class:"text-muted"},"Enter your phone number.",-1),at={class:"row mb-4"},ct=Object(c["i"])("label",{for:"background_color",class:"fw-bold mb-2"},"Background color",-1),ot={class:"input-group"},it=Object(c["g"])('<option data-v-fac47728></option><option value="white" data-v-fac47728>White</option><option value="light" data-v-fac47728>Light</option><option value="dark" data-v-fac47728>Dark</option><option value="burgundy" data-v-fac47728>Burgundy</option><option value="primary" data-v-fac47728>Primary</option><option value="info" data-v-fac47728>Info</option>',7),nt=Object(c["i"])("small",{class:"text-muted"},"Enter the background color.",-1),lt={class:"row mb-4"},rt=Object(c["i"])("label",{for:"email",class:"fw-bold mb-2"},"Email",-1),st={class:"input-group"},bt=Object(c["i"])("small",{class:"text-muted"},"Enter your email.",-1),dt={class:"row mb-4"},ut=Object(c["i"])("label",{for:"description",class:"fw-bold mb-2"},"Description",-1),pt={class:"input-group"},ft=Object(c["i"])("small",{class:"text-muted"},"Enter description.",-1),mt={class:"row mb-4 mt-2"},jt={class:"col-md-12 mt-2 d-flex"},Ot=Object(c["i"])("button",{type:"submit",class:"btn btn-dark w-75 me-2"}," Submit ",-1),gt=Object(c["i"])("p",{class:"text-burgundy fw-bold"},"Call to Action",-1),vt={class:"row mb-4"},ht=Object(c["i"])("label",{for:"call_to_action_background",class:"fw-bold mb-2"},"Button Color",-1),_t={class:"input-group"},yt=Object(c["g"])('<option value="light" data-v-fac47728>Light</option><option value="dark" data-v-fac47728>Dark</option><option value="burgundy" data-v-fac47728>Burgundy</option><option value="primary" data-v-fac47728>Primary</option><option value="info" data-v-fac47728>Info</option>',5),xt=Object(c["i"])("small",{class:"text-muted"},"Enter the button background color.",-1),wt={class:"row mb-4"},kt=Object(c["i"])("label",{for:"call_to_action_text",class:"fw-bold mb-2"},"Button Text",-1),St={class:"input-group"},Et=Object(c["i"])("small",{class:"text-muted"},"Enter the text on button.",-1),At={class:"row mb-4"},Ct=Object(c["i"])("label",{for:"call_to_action_link",class:"fw-bold mb-2"},"Button Link",-1),Ht={class:"input-group"},qt=Object(c["i"])("small",{class:"text-muted"},"Enter the link the button leads to.",-1),Ut={class:"row mb-4 mt-2"},Lt={class:"col-md-12 mt-2 d-flex"},Dt=Object(c["i"])("button",{type:"submit",class:"btn btn-dark w-75 me-2"}," Submit ",-1),Tt={class:"w-25 d-flex"},It=Object(c["i"])("p",{class:"text-burgundy fw-bold"},"Add a Social",-1),Pt={class:"row mb-4"},Vt=Object(c["i"])("label",{for:"socials.social",class:"fw-bold mb-2"},"Socials",-1),Nt={class:"input-group"},Bt=Object(c["g"])('<option data-v-fac47728></option><option value="facebook" data-v-fac47728>Facebook</option><option value="twitter" data-v-fac47728>Twitter</option><option value="instagram" data-v-fac47728>Instagram</option><option value="tiktok" data-v-fac47728>Tiktok</option><option value="telegram" data-v-fac47728>Telegram</option>',6),Ft=Object(c["i"])("small",{class:"text-muted"},"Enter platform.",-1),Mt={class:"row mb-4"},zt=Object(c["i"])("label",{for:"socials.link",class:"fw-bold mb-2"},"Link",-1),Jt={class:"input-group"},$t=Object(c["i"])("small",{class:"text-muted"},"Enter link to platform chosen.",-1),Wt={class:"row mb-4"},Kt=Object(c["i"])("label",{for:"socials.background_color",class:"fw-bold mb-2"},"Background color",-1),Rt={class:"input-group"},Gt=Object(c["g"])('<option data-v-fac47728></option><option value="white" data-v-fac47728>White</option><option value="light" data-v-fac47728>Light</option><option value="dark" data-v-fac47728>Dark</option><option value="burgundy" data-v-fac47728>Burgundy</option><option value="primary" data-v-fac47728>Primary</option><option value="info" data-v-fac47728>Info</option>',7),Qt=Object(c["i"])("small",{class:"text-muted"},"Enter the background color.",-1),Xt={class:"row mb-4 mt-2"},Yt={class:"col-md-12 mt-2 d-flex"},Zt=Object(c["i"])("button",{type:"submit",class:"btn btn-dark w-75 me-2"}," Submit ",-1),te={class:"w-25 d-flex"},ee=Object(c["i"])("p",{class:"text-burgundy fw-bold"},"Add Navigation item",-1),ae={class:"row mb-4"},ce=Object(c["i"])("label",{for:"navigation.text",class:"fw-bold mb-2"},"Text",-1),oe={class:"input-group"},ie=Object(c["i"])("small",{class:"text-muted"},"Enter navigation text.",-1),ne={class:"row mb-4"},le=Object(c["i"])("label",{for:"navigation.link",class:"fw-bold mb-2"},"Link",-1),re={class:"input-group"},se=Object(c["i"])("small",{class:"text-muted"},"Enter link.",-1),be={class:"row mb-4"},de=Object(c["i"])("label",{for:"navigation.type",class:"fw-bold mb-2"},"Link Type",-1),ue={class:"input-group"},pe=Object(c["i"])("option",null,null,-1),fe=Object(c["i"])("option",{value:"route"},"Link within website",-1),me=Object(c["i"])("option",{value:"link"},"Link outside website",-1),je=Object(c["i"])("small",{class:"text-muted"},"Choose background color.",-1),Oe={class:"row mb-4 mt-2"},ge={class:"col-md-12 mt-2 d-flex"},ve=Object(c["i"])("button",{type:"submit",class:"btn btn-dark w-75 me-2"}," Submit ",-1),he={class:"w-25 d-flex"},_e=Object(c["i"])("p",{class:"text-burgundy fw-bold"},"Delete Socials",-1),ye={class:"col-md-12 d-flex"},xe={class:"d-block me-4"},we={class:"mb-0 mt-2 text-dark text-capitalize"},ke={class:"text-muted"},Se={class:"d-block ms-auto"},Ee={class:"col-md-12 mt-2 d-flex"},Ae=Object(c["i"])("button",{type:"submit",class:"btn btn-dark w-75 me-2"}," Submit ",-1),Ce={class:"w-25 d-flex"},He=Object(c["i"])("p",{class:"text-burgundy fw-bold"},"Delete Socials",-1),qe={class:"col-md-12 d-flex"},Ue={class:"d-block me-4"},Le={class:"mb-0 mt-2 text-dark text-capitalize"},De={class:"text-muted"},Te={class:"text-capitalize"},Ie={class:"d-block ms-auto"},Pe={class:"col-md-12 mt-2 d-flex"},Ve=Object(c["i"])("button",{type:"submit",class:"btn btn-dark w-75 me-2"}," Submit ",-1),Ne={class:"w-25 d-flex"};Object(c["s"])();var Be=o((function(t,e,a,Be,Fe,Me){var ze=Object(c["y"])("font-awesome-icon"),Je=Object(c["y"])("router-link"),$e=Object(c["y"])("status");return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["i"])("footer",i,[Fe.if_logged_in?(Object(c["r"])(),Object(c["e"])("div",n,[Object(c["i"])("button",l,[Object(c["i"])(ze,{icon:["fas","cogs"]})])])):Object(c["f"])("",!0),Object(c["i"])("div",r,[Object(c["i"])("div",s,[Object(c["i"])("div",b,[Object(c["i"])("h6",d,Object(c["A"])(a.prop_data.title),1),(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(a.prop_data.description.split("."),(function(t){return Object(c["r"])(),Object(c["e"])("p",{class:"text-muted",key:t},[""!=t?(Object(c["r"])(),Object(c["e"])("span",u,Object(c["A"])(t)+".",1)):Object(c["f"])("",!0)])})),128)),Object(c["i"])("a",{href:a.prop_data.call_to_action.link,class:"btn btn-lg btn-"+a.prop_data.call_to_action.background_color+" btn-sm fw-bold bg-gradient"},[Object(c["h"])(Object(c["A"])(a.prop_data.call_to_action.text)+" ",1),Object(c["i"])(ze,{class:"ms-2",icon:["fas","chevron-circle-right"]})],10,["href"])]),Object(c["i"])("div",p,[f,Object(c["i"])("ul",m,[Object(c["i"])("li",j,[Object(c["i"])("div",O,[Object(c["i"])("div",g,[Object(c["i"])("p",v,[Object(c["i"])(ze,{class:"me-2 bg-secondary text-white circle-icon",icon:["fas","location-arrow"]})]),Object(c["i"])("div",h,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(a.prop_data.address.split(","),(function(t){return Object(c["r"])(),Object(c["e"])("p",{key:t,class:"mb-0"},Object(c["A"])(t),1)})),128))])])])]),Object(c["i"])("li",_,[Object(c["i"])("div",y,[Object(c["i"])("div",x,[Object(c["i"])("p",w,[Object(c["i"])(ze,{class:"me-2 bg-secondary text-white circle-icon",icon:["fas","phone-alt"]})]),Object(c["i"])("div",k,[Object(c["i"])("p",S,Object(c["A"])(a.prop_data.phone_number),1)])])])]),Object(c["i"])("li",E,[Object(c["i"])("div",A,[Object(c["i"])("div",C,[Object(c["i"])("p",H,[Object(c["i"])(ze,{class:"me-2 bg-secondary text-white circle-icon",icon:["fas","envelope"]})]),Object(c["i"])("div",q,[Object(c["i"])("p",U,Object(c["A"])(a.prop_data.email),1)])])])]),Object(c["i"])("li",L,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(a.prop_data.socials,(function(t,e){var a=t.social,o=t.link,i=t.background_color;return Object(c["r"])(),Object(c["e"])("a",{target:"_blank",key:e,class:"text-white",href:o},[Object(c["i"])(ze,{class:"bg-"+i+" text-white circle-icon me-3",icon:["fab",a]},null,8,["class","icon"])],8,["href"])})),128))])])]),Object(c["i"])("div",D,[T,Object(c["i"])("ul",I,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(a.prop_data.navigation,(function(t){var e=t.text,a=t.link,i=t.type;return Object(c["r"])(),Object(c["e"])("li",{class:"mt-3",key:e},["id"==i?(Object(c["r"])(),Object(c["e"])("a",{key:0,class:"text-muted text-decoration-none",href:a}," • "+Object(c["A"])(e),9,["href"])):Object(c["f"])("",!0),"route"==i?(Object(c["r"])(),Object(c["e"])(Je,{key:1,class:"text-muted text-decoration-none",to:a},{default:o((function(){return[Object(c["h"])(" • "+Object(c["A"])(e),1)]})),_:2},1032,["to"])):Object(c["f"])("",!0)])})),128))])])])]),P]),Object(c["i"])("div",V,[Object(c["i"])("div",N,[Object(c["i"])("div",B,[F,Object(c["i"])("div",M,[Object(c["i"])("div",z,[Object(c["i"])($e,{status_data:Fe.status_data,"onUpdate:status_data":e[1]||(e[1]=function(t){return Fe.status_data=t})},null,8,["status_data"]),Object(c["H"])(Object(c["i"])("form",{action:"#",onSubmit:e[9]||(e[9]=Object(c["I"])((function(t){return Me.submitProps(Fe.form_data,[!1,""],"footer")}),["prevent"]))},[Object(c["i"])("div",J,[$,Object(c["i"])("div",W,[Object(c["H"])(Object(c["i"])("input",{id:"title",type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=function(t){return Fe.form_data.title=t}),required:""},null,512),[[c["D"],Fe.form_data.title]])]),K]),Object(c["i"])("div",R,[G,Object(c["i"])("div",Q,[Object(c["H"])(Object(c["i"])("input",{id:"address",type:"text",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=function(t){return Fe.form_data.address=t}),required:""},null,512),[[c["D"],Fe.form_data.address]])]),X]),Object(c["i"])("div",Y,[Z,Object(c["i"])("div",tt,[Object(c["H"])(Object(c["i"])("input",{id:"phone_number",type:"number",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=function(t){return Fe.form_data.phone_number=t}),required:""},null,512),[[c["D"],Fe.form_data.phone_number]])]),et]),Object(c["i"])("div",at,[ct,Object(c["i"])("div",ot,[Object(c["H"])(Object(c["i"])("select",{id:"background_color",class:"form-select","onUpdate:modelValue":e[5]||(e[5]=function(t){return Fe.form_data.background_color=t}),required:""},[it],512),[[c["C"],Fe.form_data.background_color]])]),nt]),Object(c["i"])("div",lt,[rt,Object(c["i"])("div",st,[Object(c["H"])(Object(c["i"])("input",{id:"email",type:"text",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=function(t){return Fe.form_data.email=t}),required:""},null,512),[[c["D"],Fe.form_data.email]])]),bt]),Object(c["i"])("div",dt,[ut,Object(c["i"])("div",pt,[Object(c["H"])(Object(c["i"])("textarea",{id:"description",type:"text",class:"form-control","onUpdate:modelValue":e[7]||(e[7]=function(t){return Fe.form_data.description=t}),required:""},null,512),[[c["D"],Fe.form_data.description]])]),ft]),Object(c["i"])("div",mt,[Object(c["i"])("div",jt,[Ot,Object(c["i"])("button",{type:"button",class:"btn bg-secondary text-white w-25",onClick:e[8]||(e[8]=function(t){return Me.changeScreen(2)})},[Object(c["i"])(ze,{icon:["fas","angle-right"]})])])])],544),[[c["E"],1==Fe.screen]]),Object(c["H"])(Object(c["i"])("form",{action:"#",onSubmit:e[15]||(e[15]=Object(c["I"])((function(t){return Me.submitProps(Fe.call_to_action,[!0,"call_to_action"],"footer")}),["prevent"]))},[gt,Object(c["i"])("div",vt,[ht,Object(c["i"])("div",_t,[Object(c["H"])(Object(c["i"])("select",{id:"call_to_action_background",class:"form-select","onUpdate:modelValue":e[10]||(e[10]=function(t){return Fe.call_to_action.background_color=t}),required:""},[yt],512),[[c["C"],Fe.call_to_action.background_color]])]),xt]),Object(c["i"])("div",wt,[kt,Object(c["i"])("div",St,[Object(c["H"])(Object(c["i"])("input",{id:"call_to_action_text",type:"text",class:"form-control","onUpdate:modelValue":e[11]||(e[11]=function(t){return Fe.call_to_action.text=t}),required:""},null,512),[[c["D"],Fe.call_to_action.text]])]),Et]),Object(c["i"])("div",At,[Ct,Object(c["i"])("div",Ht,[Object(c["H"])(Object(c["i"])("input",{id:"call_to_action_link",type:"text",class:"form-control","onUpdate:modelValue":e[12]||(e[12]=function(t){return Fe.call_to_action.link=t}),required:""},null,512),[[c["D"],Fe.call_to_action.link]])]),qt]),Object(c["i"])("div",Ut,[Object(c["i"])("div",Lt,[Dt,Object(c["i"])("span",Tt,[Object(c["i"])("button",{type:"button",class:"btn bg-secondary text-white me-2 w-50",onClick:e[13]||(e[13]=function(t){return Me.changeScreen(1)})},[Object(c["i"])(ze,{icon:["fas","angle-left"]})]),Object(c["i"])("button",{type:"button",class:"btn bg-secondary text-white w-50",onClick:e[14]||(e[14]=function(t){return Me.changeScreen(3)})},[Object(c["i"])(ze,{icon:["fas","angle-right"]})])])])])],544),[[c["E"],2==Fe.screen]]),Object(c["H"])(Object(c["i"])("form",{action:"#",onSubmit:e[23]||(e[23]=Object(c["I"])((function(t){return Me.submitProps(Fe.socials,[!1,""],"socials",!0)}),["prevent"]))},[It,Object(c["i"])("div",Pt,[Vt,Object(c["i"])("div",Nt,[Object(c["H"])(Object(c["i"])("select",{"onUpdate:modelValue":e[16]||(e[16]=function(t){return Fe.socials.social=t}),id:"socials.social",onChange:e[17]||(e[17]=function(t){return Me.ifUnique("social",t.currentTarget,"socials")}),class:"form-select"},[Bt],544),[[c["C"],Fe.socials.social]])]),Ft]),Object(c["i"])("div",Mt,[zt,Object(c["i"])("div",Jt,[Object(c["H"])(Object(c["i"])("input",{id:"socials.link",class:"form-control",type:"text","onUpdate:modelValue":e[18]||(e[18]=function(t){return Fe.socials.link=t}),onChange:e[19]||(e[19]=function(t){return Me.ifUnique("link",t.currentTarget,"socials")}),required:""},null,544),[[c["D"],Fe.socials.link]])]),$t]),Object(c["i"])("div",Wt,[Kt,Object(c["i"])("div",Rt,[Object(c["H"])(Object(c["i"])("select",{id:"socials.background_color",class:"form-select","onUpdate:modelValue":e[20]||(e[20]=function(t){return Fe.socials.background_color=t}),required:""},[Gt],512),[[c["C"],Fe.socials.background_color]])]),Qt]),Object(c["i"])("div",Xt,[Object(c["i"])("div",Yt,[Zt,Object(c["i"])("span",te,[Object(c["i"])("button",{type:"button",class:"btn bg-secondary text-white me-2 w-50",onClick:e[21]||(e[21]=function(t){return Me.changeScreen(2)})},[Object(c["i"])(ze,{icon:["fas","angle-left"]})]),Object(c["i"])("button",{type:"button",class:"btn bg-secondary text-white w-50",onClick:e[22]||(e[22]=function(t){return Me.changeScreen(4)})},[Object(c["i"])(ze,{icon:["fas","angle-right"]})])])])])],544),[[c["E"],3==Fe.screen]]),Object(c["H"])(Object(c["i"])("form",{action:"#",onSubmit:e[31]||(e[31]=Object(c["I"])((function(t){return Me.submitProps(Fe.navigation,[!1,""],"navigation",!0)}),["prevent"]))},[ee,Object(c["i"])("div",ae,[ce,Object(c["i"])("div",oe,[Object(c["H"])(Object(c["i"])("input",{id:"navigation.text",class:"form-control",type:"text","onUpdate:modelValue":e[24]||(e[24]=function(t){return Fe.navigation.text=t}),onChange:e[25]||(e[25]=function(t){return Me.ifUnique("text",t.currentTarget,"navigation")}),required:""},null,544),[[c["D"],Fe.navigation.text]])]),ie]),Object(c["i"])("div",ne,[le,Object(c["i"])("div",re,[Object(c["H"])(Object(c["i"])("input",{id:"navigation.link",class:"form-control",type:"text","onUpdate:modelValue":e[26]||(e[26]=function(t){return Fe.navigation.link=t}),onChange:e[27]||(e[27]=function(t){return Me.ifUnique("link",t.currentTarget,"navigation")}),required:""},null,544),[[c["D"],Fe.navigation.link]])]),se]),Object(c["i"])("div",be,[de,Object(c["i"])("div",ue,[Object(c["H"])(Object(c["i"])("select",{id:"navigation.type",class:"form-control","onUpdate:modelValue":e[28]||(e[28]=function(t){return Fe.navigation.type=t}),required:""},[pe,fe,me],512),[[c["C"],Fe.navigation.type]])]),je]),Object(c["i"])("div",Oe,[Object(c["i"])("div",ge,[ve,Object(c["i"])("span",he,[Object(c["i"])("button",{type:"button",class:"btn bg-secondary text-white me-2 w-50",onClick:e[29]||(e[29]=function(t){return Me.changeScreen(3)})},[Object(c["i"])(ze,{icon:["fas","angle-left"]})]),Object(c["i"])("button",{type:"button",class:"btn bg-secondary text-white w-50",onClick:e[30]||(e[30]=function(t){return Me.changeScreen(5)})},[Object(c["i"])(ze,{icon:["fas","angle-right"]})])])])])],544),[[c["E"],4==Fe.screen]]),Object(c["H"])(Object(c["i"])("div",null,[_e,(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(a.prop_data.socials,(function(t,e){var o=t.social,i=t.link;return Object(c["r"])(),Object(c["e"])("div",{class:"row",key:e},[Object(c["i"])("div",ye,[Object(c["i"])("div",xe,[Object(c["i"])("p",we,"• "+Object(c["A"])(o),1),Object(c["i"])("p",ke,Object(c["A"])(i),1)]),Object(c["i"])("div",Se,[Object(c["i"])("p",{class:"mb-0",style:{cursor:"pointer"},onClick:function(t){return Me.deleteService(a.prop_data.socials,e,"socials")}},[Object(c["i"])(ze,{class:"text-burgundy",icon:["fas","trash-alt"]})],8,["onClick"])])])])})),128)),Object(c["i"])("div",Ee,[Ae,Object(c["i"])("span",Ce,[Object(c["i"])("button",{type:"button",class:"btn bg-secondary text-white me-2 w-50",onClick:e[32]||(e[32]=function(t){return Me.changeScreen(4)})},[Object(c["i"])(ze,{icon:["fas","angle-left"]})]),Object(c["i"])("button",{type:"button",class:"btn bg-secondary text-white w-50",onClick:e[33]||(e[33]=function(t){return Me.changeScreen(6)})},[Object(c["i"])(ze,{icon:["fas","angle-right"]})])])])],512),[[c["E"],5==Fe.screen]]),Object(c["H"])(Object(c["i"])("div",null,[He,(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(a.prop_data.navigation,(function(e,a){var o=e.text,i=e.type,n=e.link;return Object(c["r"])(),Object(c["e"])("div",{class:"row",key:a},[Object(c["i"])("div",qe,[Object(c["i"])("div",Ue,[Object(c["i"])("p",Le,"• "+Object(c["A"])(o),1),Object(c["i"])("p",De,[Object(c["i"])("span",Te,Object(c["A"])(i),1),Object(c["h"])(" : "+Object(c["A"])(n),1)])]),Object(c["i"])("div",Ie,[Object(c["i"])("p",{class:"mb-0",style:{cursor:"pointer"},onClick:function(e){return Me.deleteService(t.prop.navigation,a,"navigation")}},[Object(c["i"])(ze,{class:"text-burgundy",icon:["fas","trash-alt"]})],8,["onClick"])])])])})),128)),Object(c["i"])("div",Pe,[Ve,Object(c["i"])("span",Ne,[Object(c["i"])("button",{type:"button",class:"btn bg-secondary text-white me-2 w-50",onClick:e[34]||(e[34]=function(t){return Me.changeScreen(5)})},[Object(c["i"])(ze,{icon:["fas","angle-left"]})])])])],512),[[c["E"],6==Fe.screen]])])])])])])],64)})),Fe=a("53ca"),Me=a("3835"),ze=(a("159b"),a("4fad"),a("a434"),a("3865")),Je={name:"Footer",props:{prop_data:{type:Object,required:!0},page:{required:!0,type:String}},components:{Status:ze["a"]},mounted:function(){this.ifLoggedIn()},data:function(){return{form_data:{title:this.prop_data.title,address:this.prop_data.address,phone_number:this.prop_data.phone_number,background_color:this.prop_data.background_color,email:this.prop_data.email,description:this.prop_data.description},call_to_action:{text:this.prop_data.call_to_action.text,background_color:this.prop_data.call_to_action.background_color,link:this.prop_data.call_to_action.link},status_data:{success:!1,success_message:"Form Submission was successful!",error:!1,error_message:"There are some errors.",loading:!1},socials:{social:"",link:"",background_color:""},navigation:{text:"",link:"",type:""},screen:1,description:{text:""},if_logged_in:!1}},methods:{changeScreen:function(t){this.screen=t},submitProps:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.form_data,a=arguments.length>1?arguments[1]:void 0,c=Object(Me["a"])(a,2),o=c[0],i=void 0!==o&&o,n=c[1],l=void 0===n?"":n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],b=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.page.toLowerCase(),d=[];Object.entries(e).forEach((function(e){if(void 0==t.prop_data[e[0]]||t.prop_data[e[0]]!=e[1]){var a=Object(Fe["a"])(e[1]);"object"==a?Object.entries(e[1]).forEach((function(t){d.push({value:t[1],prop:t[0],component:r,container:s,page:b,child:i,parent:e[0]})})):0==i?d.push({value:e[1],prop:e[0],component:r,container:s,page:b,child:i,parent:""}):d.push({value:e[1],prop:e[0],component:r,container:s,page:b,child:i,parent:l})}})),this.axios.post("api/prop",d).then((function(){t.status_data.loading=!1,t.status_data.error=!1,t.status_data.success=!0;var a=Object.create(t.prop_data);a[r].push(e),t.$emit("update:prop_data",a)})).catch((function(e){t.status_data.loading=!1,t.status_data.error=!0,t.status_data.error_message="Section data was not successfully updated!"+e,t.status_data.success=!1}))},deleteService:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.form_data,a=arguments.length>1?arguments[1]:void 0,c=arguments.length>2?arguments[2]:void 0,o=[];Object.entries(e[a]).forEach((function(e){o.push({value:e[1],prop:e[0],component:c,container:!0,page:t.page.toLowerCase(),child:!1,parent:""})})),this.axios.post("api/component-props/delete",o).then((function(e){t.status_data.loading=!1,t.status_data.error=!1,t.status_data.success=!0,console.log(e);var o=Object.create(t.prop_data);o[c].splice(a,1),t.$emit("update:prop_data",o)})).catch((function(e){t.status_data.loading=!1,t.status_data.error=!0,t.status_data.error_message="Section data was not successfully updated!"+e,t.status_data.success=!1}))},ifUnique:function(t,e,a){var c=this,o=null;this.prop_data[a].forEach((function(i){i[t]==c[a][t]&&(o=e.parentNode.nextElementSibling,c[a][t]="",o.innerHTML="This "+t+" is already taken. Please choose something unique.",e.parentNode.nextElementSibling.classList.remove("text-muted"),e.parentNode.nextElementSibling.classList.add("text-burgundy"))})),null==o&&e.parentNode.nextElementSibling.classList.contains("text-burgundy")&&(e.parentNode.nextElementSibling.innerHTML="Nice!",e.parentNode.nextElementSibling.classList.remove("text-burgundy"),e.parentNode.nextElementSibling.classList.add("text-primary"))},ifLoggedIn:function(){null!=localStorage.getItem("user")?this.if_logged_in=!0:this.if_logged_in=!1}}};a("ee0b");Je.render=Be,Je.__scopeId="data-v-fac47728";e["a"]=Je}}]);
//# sourceMappingURL=chunk-61bc75c0.12c3702b.js.map