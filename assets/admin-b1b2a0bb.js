import{_ as i,b as o,o as d,c as r,d as s,e as a,f as t,i as c,p as _}from"./index-e4697372.js";const u={},v={class:"navbar",id:"navigation"},m={class:"center-nav"},b=s("li",null,[s("i",{class:"fa-sharp fa-solid fa-chart-simple"}),c("Create News")],-1),x=s("li",null,[s("i",{class:"fa-sharp fa-solid fa-chart-simple"}),c("Create Tour")],-1),$=s("li",null,[s("i",{class:"fa-sharp fa-solid fa-chart-simple"}),c("Tour")],-1),N=_('<ul class="bottom-nav"><hr><li><i class="fa-solid fa-gear"></i><a href="#"> Settings </a></li><li><i class="fa-solid fa-power-off"></i><a href="#"> Logout </a></li></ul>',1);function k(n,l){const e=o("RouterLink");return d(),r("div",v,[s("ul",m,[a(e,{to:"create-news"},{default:t(()=>[b]),_:1}),a(e,{to:"create-tour"},{default:t(()=>[x]),_:1}),a(e,{to:"/admin/tour"},{default:t(()=>[$]),_:1})]),N])}const w=i(u,[["render",k]]),T={},g=_('<div class="main-top"><div class="bars" id="menu"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div><div class="input"><input type="text" placeholder="Search here..."></div><div class="user"></div></div><div class="dashboard"><h2 class="heading"> Dashboard </h2><div class="color-box"><div class="box skyblue"><p><i class="fa-solid fa-thumbs-up"></i></p><p> Total Likes </p><h3> 50,120 </h3></div><div class="box yellow"><p><i class="fa-solid fa-comment"></i></p><p> Total Comments </p><h3> 25,120 </h3></div><div class="box purple"><p><i class="fa-solid fa-share"></i></p><p> Total Share </p><h3> 10,320 </h3></div><div class="box red"><p><i class="fa-sharp fa-solid fa-floppy-disk"></i></p><p> Total Saves </p><h3> 20,129 </h3></div></div></div>',2);function y(n,l){return g}const B=i(T,[["render",y]]);const V={components:{Menu:w,NavBar:B}},C={class:"main-content"};function S(n,l,e,L,R,M){const p=o("Menu"),f=o("NavBar"),h=o("RouterView");return d(),r("section",null,[a(p),s("div",C,[a(f),a(h)])])}const E=i(V,[["render",S]]);export{E as default};
