(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(242),o=a(272),l=(a(19),a(40),a(24),a(25),a(12),a(47),a(489)),i=a(358),s=a(35),m=(a(233),a(110)),u=Object(l.d)({mapPropsToValues:function(e){return{email:e.email||"",name:e.name||"",message:e.message||""}},handleSubmit:function(e,t){var a,n=t.setError,r=t.setSubmitting,c=t.setFieldTouched;r(!0),c(),fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(a=Object.assign({"form-name":"contact"},e),Object.keys(a).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(a[e])}).join("&"))}).then(function(){r(!1),Object(s.b)("/success-sent/")}).catch(function(){r(!1),n("Something went wrong, check filled data")})},validationSchema:i.object().shape({name:i.string().min(3,"Name must be at least 3 characters").required("Name is a required field"),email:i.string().email("Please enter a valid email address").required("Email is a required field")})})(function(e){var t=e.values,a=e.errors,c=e.isSubmitting,o=e.touched,i=Object(n.useRef)(null),s=Object(n.useRef)(null),u=Object(n.useRef)(null),d=Object(n.useRef)(null),f=new m.a({paused:!0}),p=Object(n.useState)(!1),b=p[0],h=p[1],g=Object(n.useState)(!1),E=g[0],y=g[1],w=Object(n.useState)(!1),_=w[0],N=w[1];return Object(n.useEffect)(function(){t.name.length?h(!0):h(!1),t.email.length?y(!0):y(!1),t.message.length?N(!0):N(!1)},[t.name,t.email,t.message]),Object(n.useEffect)(function(){var e=i.current.querySelector("input");f.to(i.current,.25,{opacity:1,scaleX:1,transformOrigin:"0 0"},"+=0.25").to(s.current,.25,{opacity:1,scaleX:1,transformOrigin:"0 0"},"-=0.065").to(u.current,.25,{opacity:1,scaleX:1,transformOrigin:"0 0"},"-=0.1").to(d.current,.25,{opacity:1,y:0}).play().eventCallback("onComplete",function(){return e.focus()})},[]),r.a.createElement(l.c,{className:"contact-form",action:"/success-sent/",name:"contact",method:"POST","data-netlify":"true"},r.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),r.a.createElement("p",{hidden:!0},r.a.createElement("label",null,"Don’t fill this out: ",r.a.createElement("input",{name:"bot-field"}))),r.a.createElement("div",{className:"contact-form__body"},r.a.createElement("div",{className:"contact-form__fields"},r.a.createElement("div",{className:"form-control scale-to-right "+(b?"filled":"")+" "+(a.name&&o.name?"error":""),ref:i},r.a.createElement(l.b,{className:"form-control__field",name:"name",id:"contacts-name"}),r.a.createElement("label",{className:"form-control__label",htmlFor:"contacts-name"},"Name"),r.a.createElement(l.a,{className:"form-control__error",component:"span",name:"name"})),r.a.createElement("div",{className:"form-control scale-to-right "+(E?"filled":"")+" "+(a.email&&o.email?"error":""),ref:s},r.a.createElement(l.b,{type:"email",className:"form-control__field",name:"email",id:"contacts-email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",inputMode:"email"}),r.a.createElement("label",{className:"form-control__label",htmlFor:"contacts-email"},"E-mail"),r.a.createElement(l.a,{className:"form-control__error",component:"span",name:"email"}))),r.a.createElement("div",{className:"form-control scale-to-right "+(_?"filled":"")+" "+(a.message&&o.message?"error":""),ref:u},r.a.createElement(l.b,{className:"form-control__field",name:"message",id:"contacts-message"}),r.a.createElement("label",{className:"form-control__label",htmlFor:"contacts-message"},"What I need to know?"))),r.a.createElement("button",{ref:d,className:"contact-form__submit button slide-down "+(c&&"button--disabled"),disabled:c,type:"submit"},c?"Sending...":"Get in touch"))});t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{description:"Portfolio",title:"Contact"}),r.a.createElement(o.a,{child:r.a.createElement(u,null)}))}},242:function(e,t,a){"use strict";var n=a(243),r=a(0),c=a.n(r),o=a(248),l=a.n(o);function i(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,i=n.data.site,s=t||i.siteMetadata.description;return c.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}i.defaultProps={lang:"en",meta:[],description:""},t.a=i},243:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio by Pavel Tarasenko",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},272:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(226),a(110));t.a=function(e){var t=e.child,a=Object(n.useRef)(null),o=new c.a({paused:!0});return Object(n.useEffect)(function(){o.to(a.current,.25,{opacity:1,y:0}).play()}),r.a.createElement("section",{className:"contacts"},r.a.createElement("h1",{ref:a,className:"h1 contacts__title slide-down"},"Want to work with me?"),t)}}}]);
//# sourceMappingURL=component---src-pages-contacts-js-9049711df9a372a59ff7.js.map