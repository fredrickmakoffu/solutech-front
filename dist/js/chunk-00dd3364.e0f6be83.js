(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00dd3364"],{"1ae6":function(t,e,s){"use strict";s("42ea")},2241:function(t,e,s){"use strict";var a=s("7a23"),c={class:"container text-center"},r={class:"row"},i={class:"d-flex"};function o(t,e,o,n,d,u){return Object(a["r"])(),Object(a["e"])("div",c,[Object(a["i"])("div",r,[Object(a["i"])("div",i,[Object(a["i"])("img",{src:s("c810"),style:{width:"100px"},class:"mx-auto",alt:""},null,8,["src"])])])])}var n={name:"Logo"};n.render=o;e["a"]=n},"26e8":function(t,e,s){},3865:function(t,e,s){"use strict";var a=s("7a23"),c=Object(a["J"])("data-v-5b2c65f2");Object(a["u"])("data-v-5b2c65f2");var r={class:"container"},i={class:"row"},o={key:0,class:"alert alert-dismissible fixed alert-success fade show",role:"alert"},n={class:"text-start fw-bold text-uppercase"},d=Object(a["h"])(" Success! "),u={class:"mb-0 pt-2"},l={key:0,class:"alert fixed alert-dismissible alert-danger fade show",role:"alert"},b={class:"text-start fw-bold text-uppercase"},f=Object(a["h"])(" Error! "),j={class:"mb-0 pt-2"},O={key:0,class:"d-flex"},m=Object(a["i"])("h3",{class:"spinner-border spinner-border-sm fw-bold text-warning mx-auto mt-2",role:"status"},[Object(a["i"])("span",{class:"sr-only"},"Loading...")],-1);Object(a["s"])();var p=c((function(t,e,s,p,_,h){var g=Object(a["y"])("font-awesome-icon");return Object(a["r"])(),Object(a["e"])("div",r,[Object(a["i"])("div",i,[Object(a["i"])(a["b"],{name:"fade"},{default:c((function(){return[1==s.status_data.success?(Object(a["r"])(),Object(a["e"])("div",o,[Object(a["i"])("h6",n,[Object(a["i"])(g,{class:"icon me-2",icon:["fa","info-circle"]}),d]),Object(a["i"])("p",u,Object(a["A"])(s.status_data.success_message),1),Object(a["i"])("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:e[1]||(e[1]=function(t){return h.hideAlert()})})])):Object(a["f"])("",!0)]})),_:1}),Object(a["i"])(a["b"],{name:"fade"},{default:c((function(){return[1==s.status_data.error?(Object(a["r"])(),Object(a["e"])("div",l,[Object(a["i"])("h6",b,[Object(a["i"])(g,{class:"icon me-2",icon:["fa","info-circle"]}),f]),Object(a["i"])("p",j,Object(a["A"])(s.status_data.error_message),1),Object(a["i"])("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:e[2]||(e[2]=function(t){return h.hideAlert()})})])):Object(a["f"])("",!0)]})),_:1}),Object(a["i"])(a["b"],{name:"fade"},{default:c((function(){return[s.status_data.loading?(Object(a["r"])(),Object(a["e"])("div",O,[m])):Object(a["f"])("",!0)]})),_:1})])])})),_={name:"Status",props:{status_data:{type:Object,required:!0}},methods:{hideAlert:function(){if(1==this.status_data.success){var t={success:!1,success_message:this.status_data.success_message,error:this.status_data.error,error_message:this.status_data.error_message,loading:!1};this.$emit("update:status_data",t)}else if(1==this.status_data.error){var e={success:this.status_data.success,success_message:this.status_data.success_message,error:!1,error_message:this.status_data.error_message,loading:!1};this.$emit("update:status_data",e)}}}};s("4ee2");_.render=p,_.__scopeId="data-v-5b2c65f2";e["a"]=_},"42ea":function(t,e,s){},"4ee2":function(t,e,s){"use strict";s("26e8")},c810:function(t,e,s){t.exports=s.p+"img/kipekee.3ad7ed68.png"},d9b6:function(t,e,s){"use strict";s.r(e);var a=s("7a23"),c=Object(a["J"])("data-v-acf40072");Object(a["u"])("data-v-acf40072");var r={id:"wrapper",class:"bg-light pt-4"},i={class:"container-fluid"},o={class:"row"},n={class:"col-xl-4 offset-xl-4 col-lg-4 col-md-5 offset-lg-4 offset-md-2"},d={class:"card bg-gradient border-0"},u=Object(a["i"])("div",{class:"bg-dark pt-1"},null,-1),l={class:"card-body border-bottom-0 p-4"},b={class:"form-row mt-4"},f={class:"input-group"},j=Object(a["i"])("small",null,"Enter the email attached to your account",-1),O={class:"row",id:"login"},m={class:"col"},p={class:"btn btn-dark btn-sm mt-4 w-100 text-uppercase fw-bold pt-2 pb-2",type:"submit"},_=Object(a["i"])("span",{style:{"letter-spacing":"2px"}},"Send",-1),h=Object(a["h"])(),g={class:"row mt-1"},v={class:"text-muted text-start"},w=Object(a["h"])("Go back to "),x=Object(a["h"])("Login");Object(a["s"])();var y=c((function(t,e,s,y,k,S){var A=Object(a["y"])("logo"),C=Object(a["y"])("status"),L=Object(a["y"])("font-awesome-icon"),J=Object(a["y"])("router-link");return Object(a["r"])(),Object(a["e"])("div",r,[Object(a["i"])("div",i,[Object(a["i"])("div",o,[Object(a["i"])("div",n,[Object(a["i"])("div",d,[u,Object(a["i"])(A,{class:"pt-4"}),Object(a["i"])(C,{status_data:k.status_data,"onUpdate:status_data":e[1]||(e[1]=function(t){return k.status_data=t})},null,8,["status_data"]),Object(a["i"])("form",{id:"form",action:"#",onSubmit:e[4]||(e[4]=Object(a["I"])((function(t){return S.handleSubmit()}),["prevent"]))},[Object(a["i"])("div",l,[Object(a["i"])("div",b,[Object(a["i"])("div",f,[Object(a["i"])("span",{class:"input-group-text border-right-0",onClick:e[2]||(e[2]=function(e){return t.seePassword()})},[Object(a["i"])(L,{id:"eye",icon:["fa","envelope"]})]),Object(a["H"])(Object(a["i"])("input",{id:"email",type:"email",class:"form-control no-border","onUpdate:modelValue":e[3]||(e[3]=function(t){return k.form_data.password=t}),placeholder:"Enter your new Password.",required:""},null,512),[[a["D"],k.form_data.password]])]),j]),Object(a["i"])("div",O,[Object(a["i"])("div",m,[Object(a["i"])("button",p,[_,h,Object(a["i"])(L,{class:"icon ms-1 me-1",icon:["fa","angle-right"]})])])]),Object(a["i"])("div",g,[Object(a["i"])("small",v,[w,Object(a["i"])(J,{class:"text-dark fw-bold text-decoration-none",to:"/login"},{default:c((function(){return[x]})),_:1})])])])],32)])])])])])})),k=s("3865"),S=s("2241"),A={name:"Login",components:{Status:k["a"],Logo:S["a"]},data:function(){return{form_data:{email:""},status_data:{success:!1,success_message:"We have sent a email to you with instructions on resetting your password.",error:!1,error_message:"There are some input errors."},loading:!1}},methods:{handleSubmit:function(){var t=this;this.status_data.loading=!0,this.axios.post("api/reset-password",this.form_data).then((function(){t.status_data.loading=!1,t.status_data.success=!0,t.status_data.error=!1,t.status_data.success_message="Password has been reset! ",setTimeout((function(){t.status_data.success=!1}),2e3)})).catch((function(e){t.status_data.loading=!1,t.status_data.success=!1,t.status_data.error=!0,t.status_data.error_message=e.message,console.log(e)}))},hideAlert:function(){1==this.success?this.success=!1:1==this.error&&(this.error=!1)}}};s("1ae6");A.render=y,A.__scopeId="data-v-acf40072";e["default"]=A}}]);
//# sourceMappingURL=chunk-00dd3364.e0f6be83.js.map