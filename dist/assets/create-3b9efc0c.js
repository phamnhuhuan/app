import{_ as d,a as c,t as w,b as p,o as i,c as r,i as _,d as a,l as g,v as f,e as u,k as v,j as h}from"./index-4ddc6401.js";const V={setup(){const e=c({name_news:"",content_news:"",img_news:"",imgPreview:null});return{create_news:()=>{const n=new FormData;n.append("name_news",e.name_news),n.append("content_news",e.content_news),n.append("file",e.img_news),axios.post("http://localhost/travelapi/api/new",n).then(o=>{e.img_news="",e.imgPreview="",console.log(o)}).catch(function(o){console.log(o)})},onChange:n=>{e.img_news=n.target.files[0];let o=new FileReader;o.addEventListener("load",(function(){e.imgPreview=o.result}).bind(e),!1),e.img_news&&/\.(jpe?g|png|gif)$/i.test(e.img_news.name)&&o.readAsDataURL(e.img_news)},...w(e)}}},b={key:0},C={class:"max-w-[50px]"},k=["src"],y=a("button",{type:"submit",class:"border"},"them tin tuc",-1);function D(e,t,l,n,o,N){const m=p("ckeditor");return i(),r("div",null,[_("tao tin moi "),a("form",{onSubmit:t[3]||(t[3]=h((...s)=>n.create_news&&n.create_news(...s),["prevent"]))},[g(a("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>e.name_news=s),class:"border w-full"},null,512),[[f,e.name_news]]),u(m,{modelValue:e.content_news,"onUpdate:modelValue":t[1]||(t[1]=s=>e.content_news=s),class:"my-5"},null,8,["modelValue"]),a("input",{type:"file",ref:"reload",name:"",id:"file",onChange:t[2]||(t[2]=(...s)=>n.onChange&&n.onChange(...s))},null,544),e.img_news?(i(),r("div",b,[a("div",C,[a("img",{src:e.imgPreview},null,8,k)])])):v("",!0),y],32)])}const x=d(V,[["render",D]]);export{x as default};