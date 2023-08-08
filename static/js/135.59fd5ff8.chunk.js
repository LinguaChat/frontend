"use strict";(self.webpackChunkconversation_exchange_frontend=self.webpackChunkconversation_exchange_frontend||[]).push([[135],{4345:function(e,n,i){i.r(n),i.d(n,{default:function(){return Q}});var s=i(9439),a=i(2791),t=i(7689),r=i(9658),c=i(4942),l=i(1413),m=i(4925),o=i(1694),p=i.n(o),_={inputElement:"Input_inputElement__dwu-m",inputElement__label:"Input_inputElement__label__fkEGs",inputElement__hint:"Input_inputElement__hint__kqst1",inputElement__hint_true:"Input_inputElement__hint_true__fmlno",inputElement__hint_false:"Input_inputElement__hint_false__tgwDi",inputElement__input:"Input_inputElement__input__TQCnw"},u=i(184),h=["className","onValue","value","name","label","labelHint","isLabelHintHidden","type","placeholder","hint","required","hasError","error"],d=function(e){var n=e.className,i=e.onValue,s=e.value,a=e.name,t=e.label,r=e.labelHint,o=e.isLabelHintHidden,d=e.type,g=e.placeholder,f=e.hint,x=e.required,A=e.hasError,j=e.error,b=(0,m.Z)(e,h),k=function(e){var n=e.currentTarget,s=n.value,a=n.name;i({value:s,name:a}),console.log(e.currentTarget.validationMessage)};return t?(0,u.jsxs)("label",{className:_.inputElement,children:[(0,u.jsx)("span",{className:_.inputElement__label,children:t}),(0,u.jsx)("span",{className:p()(_.inputElement__hint,_["inputElement__hint_".concat(o)]),children:r}),(0,u.jsx)("input",(0,l.Z)({className:p()(_.inputElement__input,n),name:a,value:s,type:d,placeholder:g,required:x,onChange:k},b)),A?(0,u.jsx)("span",{className:_.inputElement__input_error,children:j}):f&&(0,u.jsx)("span",{className:_.inputElement__input_hint,children:f})]}):(0,u.jsxs)("div",{className:_.inputElement,children:[(0,u.jsx)("input",(0,l.Z)({className:p()(_.inputElement__input,(0,c.Z)({},_.inputElement__input_hasError,A),n),name:a,value:s,type:d,placeholder:g,required:x,onChange:k},b)),A?(0,u.jsx)("span",{className:_.inputElement__input_error,children:j}):f&&(0,u.jsx)("span",{className:_.inputElement__input_hint,children:f})]})},g=i(2163),f={form:"SignupSigninForm_form__+7xsT",form_input:"SignupSigninForm_form_input__iVyhx",form_textTag:"SignupSigninForm_form_textTag__KcH+3",form_links:"SignupSigninForm_form_links__IUVzQ",form_links_activeLinkItem:"SignupSigninForm_form_links_activeLinkItem__NPQAz",form_links_linkItem:"SignupSigninForm_form_links_linkItem__W7uIH",form_checkbox:"SignupSigninForm_form_checkbox__jyvGc",form_checkbox_input:"SignupSigninForm_form_checkbox_input__0qKq1",form_checkbox_visible:"SignupSigninForm_form_checkbox_visible__eV7n1",form_checkbox_span_text:"SignupSigninForm_form_checkbox_span_text__RwY8x",form_checkbox_span_text_underline:"SignupSigninForm_form_checkbox_span_text_underline__Qbv-a",form_forgotLink:"SignupSigninForm_form_forgotLink__J8Dic",form_button:"SignupSigninForm_form_button__6aeLK",form_button_signUp:"SignupSigninForm_form_button_signUp__x5a-s",form_button_signIn:"SignupSigninForm_form_button_signIn__chBlX"},x=i(5843),A=(0,r.Pi)((function(){var e=(0,x.t)(),n=(0,t.TH)().pathname,i=(0,a.useState)(!0),r=(0,s.Z)(i,2),c=r[0],l=r[1];return(0,a.useEffect)((function(){l("/signup"===n)}),[n]),(0,u.jsxs)("form",{className:f.form,onSubmit:c?e.handleRegister:e.handleLogin,children:[(0,u.jsxs)("ul",{className:f.form_links,children:[(0,u.jsx)("a",{className:c?f.form_links_linkItem:f.form_links_activeLinkItem,href:"/signin",children:"\u0412\u0445\u043e\u0434"}),(0,u.jsx)("a",{className:c?f.form_links_activeLinkItem:f.form_links_linkItem,href:"/signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),c&&(0,u.jsx)(d,{className:f.form_input,type:"text",name:"username",value:e.username,label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f",isLabelHintHidden:!0,placeholder:"\u0418\u043c\u044f",required:!0,onValue:e.handleUsernameChange}),(0,u.jsx)(d,{className:f.form_input,type:"email",name:"email",value:e.email,label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443\u044e \u043f\u043e\u0447\u0442\u0443",labelHint:c?"\u041d\u0430 \u043f\u043e\u0447\u0442\u0443 \u043f\u0440\u0438\u0434\u0435\u0442 \u043f\u0438\u0441\u044c\u043c\u043e \u0434\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438":"",isLabelHintHidden:!c,placeholder:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",required:!0,error:e.error,onValue:e.handleEmailChange}),(0,u.jsx)(d,{className:f.form_input,type:"password",name:"password",value:e.password,label:c?"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",labelHint:c?"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u043c\u0438 \u0431\u0443\u043a\u0432\u0430\u043c\u0438":"",isLabelHintHidden:!c,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,error:e.error,onValue:e.handlePasswordChange}),c&&(0,u.jsx)(d,{className:f.form_input,type:"password",name:"confirmPassword",value:e.confirmPassword,label:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",isLabelHintHidden:!0,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,error:e.error,onValue:e.handleConfirmPasswordChange}),(0,u.jsxs)("div",{className:f.form_textTag,children:[c&&(0,u.jsxs)("label",{className:f.form_checkbox,children:[(0,u.jsx)("input",{className:p()(f.form_checkbox_input,f.form_checkbox_input_signUp),type:"checkbox",required:!0}),(0,u.jsx)("span",{className:f.form_checkbox_visible}),(0,u.jsxs)("span",{className:f.form_checkbox_span_text,children:["\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u044f, \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441",(0,u.jsx)("span",{className:f.form_checkbox_span_text_underline,children:" \u0423\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0421\u0435\u0440\u0432\u0438\u0441\u043e\u043c"})]})]}),!c&&(0,u.jsxs)("label",{className:f.form_checkbox,children:[(0,u.jsx)("input",{className:p()(f.form_checkbox_input,f.form_checkbox_input_signIn),type:"checkbox"}),(0,u.jsx)("span",{className:f.form_checkbox_visible}),"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"]}),!c&&(0,u.jsx)("a",{className:f.form_forgotLink,href:"src/components/UI/SignInForm#",children:"\u041d\u0435 \u043f\u043e\u043c\u043d\u044e \u043f\u0430\u0440\u043e\u043b\u044c"})]}),(0,u.jsx)(g.z,{className:p()(f.form_button,c?f.form_button_signUp:f.form_button_signIn),type:"submit",variant:"primary",disabled:e.isLoading,children:e.isLoading?"Loading":c?"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c":"\u0412\u043e\u0439\u0442\u0438"})]})})),j="SignupSigninPage_content__rgPO8",b="SignupSigninPage_content__signInContainer__FzXIH",k="SignupSigninPage_content__signInContainer_logoLink__Ffo7U",S="SignupSigninPage_content__signInContainer_logo__fOsQz",I="SignupSigninPage_content__picturesContainer__pro6N",E=i(1536),N="PicturesBlock_picturesBlock__KTM1A",v="PicturesBlock_picturesBlock__img__rAjBE",F="PicturesBlock_picturesBlock__container__vfwEL",R="PicturesBlock_picturesBlock__picActive__enrhk",P="PicturesBlock_picturesBlock__item__FTLhp",U="PicturesBlock_picturesBlock__item1__a7b1D",H="PicturesBlock_picturesBlock__item2__kEfRR",B="PicturesBlock_picturesBlock__item3__V42jh",w="PicturesBlock_picturesBlock__img3__Y0a8W",Y="PicturesBlock_picturesBlock__img4__Z8q4m",C=i.p+"static/media/step1.eb6ae64f45d5292d1594.png",W=i.p+"static/media/step21.23de71eb7015c2b78d59.png",z=i.p+"static/media/step22.973a25b0a08323dac615.png",D=i.p+"static/media/step3.d7492e04c6f893e65655.png",L=i.p+"static/media/step4.f11935a1899756661523.png",y=i.p+"static/media/step5.2518a250f1c029f53297.png";var q=i.p+"static/media/line1.b3d1947cac497d3e8532494acaec4cb5.svg",M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAECAYAAADfyyz1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABKSURBVHgB5dEBDYAwDADBb6mAzRkOkIYFUMAShOAABJC0m47uHHxerq8Ug82dSkKL8vxwmjk7IqsKKUXAGNnkfmswAR3Njewijg5z4xK9JxIRZwAAAABJRU5ErkJggg==",O=function(){var e=(0,a.useState)(1),n=(0,s.Z)(e,2),i=n[0],t=n[1];return(0,a.useEffect)((function(){var e=setInterval((function(){i<5&&t(i+1),5===i&&t(1)}),5e3);return function(){return clearInterval(e)}}),[i]),(0,u.jsxs)("div",{className:N,children:[1===i&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:["\u0423\u0447\u0438 \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u0439 \u0438\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0439 \u044f\u0437\u044b\u043a ",(0,u.jsxs)("span",{children:[(0,u.jsx)("br",{}),"\u0441 \u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044f\u043c\u0438 \u0438\u0437 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c 50 \u0441\u0442\u0440\u0430\u043d"]})]}),(0,u.jsx)("img",{src:C,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u043c\u0438 \u043b\u044e\u0434\u044c\u043c\u0438",className:v})]}),2===i&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:["\u041d\u0430\u0445\u043e\u0434\u0438 \u043d\u043e\u0432\u044b\u0445 \u0434\u0440\u0443\u0437\u0435\u0439 \u0438 \u0435\u0434\u0438\u043d\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a\u043e\u0432 ",(0,u.jsxs)("span",{children:[(0,u.jsx)("br",{}),"\u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0433\u0438\u0431\u043a\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043d\u0438\u043a\u0430"]})]}),(0,u.jsx)("img",{src:W,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u043c\u0438 \u043b\u044e\u0434\u044c\u043c\u0438",className:U}),(0,u.jsx)("img",{src:z,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u043c\u0438 \u043b\u044e\u0434\u044c\u043c\u0438",className:H}),(0,u.jsx)("img",{src:"data:image/png;base64,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",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u043c\u0438 \u043b\u044e\u0434\u044c\u043c\u0438",className:B})]}),3===i&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:["\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0443\u0439 \u0438 \u0432\u0441\u0442\u0443\u043f\u0430\u0439 \u0432",(0,u.jsx)("span",{children:" \u0433\u0440\u0443\u043f\u043f\u043e\u0432\u044b\u0435 \u0447\u0430\u0442\u044b "}),(0,u.jsx)("br",{}),"\u0438 \u043e\u0442\u0442\u0430\u0447\u0438\u0432\u0430\u0439 \u044f\u0437\u044b\u043a\u043e\u0432\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"]}),(0,u.jsx)("img",{src:D,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u043c\u0438 \u043b\u044e\u0434\u044c\u043c\u0438",className:w})]}),4===i&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:[(0,u.jsx)("span",{children:"\u0414\u0435\u043b\u0438\u0441\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u043c\u0438 "}),"\u0438 \u0441\u043b\u0435\u0434\u0438 \u0437\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u043c\u0438 \u0434\u0440\u0443\u0437\u0435\u0439"]}),(0,u.jsx)("img",{src:L,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u043c\u0438 \u043b\u044e\u0434\u044c\u043c\u0438",className:Y})]}),5===i&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:["\u0418\u0437\u0443\u0447\u0430\u0439 \u044f\u0437\u044b\u043a ",(0,u.jsx)("span",{children:"\u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f"})," \u0438 ",(0,u.jsx)("span",{children:"\u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435"})]}),(0,u.jsx)("img",{src:y,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u043c\u0438 \u043b\u044e\u0434\u044c\u043c\u0438",className:v})]}),(0,u.jsxs)("div",{className:F,children:[(0,u.jsx)("img",{src:1===i?M:q,alt:"\u041b\u0438\u043d\u0438\u044f",className:1===i?R:P,onClick:function(){t(1)}}),(0,u.jsx)("img",{src:2===i?M:q,alt:"\u041b\u0438\u043d\u0438\u044f",className:2===i?R:P,onClick:function(){t(2)}}),(0,u.jsx)("img",{src:3===i?M:q,alt:"\u041b\u0438\u043d\u0438\u044f",className:3===i?R:P,onClick:function(){t(3)}}),(0,u.jsx)("img",{src:4===i?M:q,alt:"\u041b\u0438\u043d\u0438\u044f",className:4===i?R:P,onClick:function(){t(4)}}),(0,u.jsx)("img",{src:5===i?M:q,alt:"\u041b\u0438\u043d\u0438\u044f",className:5===i?R:P,onClick:function(){t(5)}})]})]})},Q=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("section",{className:j,children:[(0,u.jsxs)("div",{className:b,children:[(0,u.jsx)("a",{className:k,href:"/",children:(0,u.jsx)("img",{className:S,src:E.Z,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430"})}),(0,u.jsx)(A,{})]}),(0,u.jsx)("div",{className:I,children:(0,u.jsx)(O,{})})]})})}}}]);
//# sourceMappingURL=135.59fd5ff8.chunk.js.map