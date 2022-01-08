function loadWidget(e){let t,{waifuPath:a,apiPath:n,cdnPath:o}=e,i=!1;if("string"==typeof o)i=!0,o.endsWith("/")||(o+="/");else{if("string"!=typeof n)return void console.error("Invalid initWidget argument!");n.endsWith("/")||(n+="/")}function s(e){return Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e}localStorage.removeItem("waifu-display"),sessionStorage.removeItem("waifu-text"),document.body.insertAdjacentHTML("beforeend",'<div id="waifu">\n\t\t\t<div id="waifu-tips"></div>\n\t\t\t<canvas id="live2d" width="800" height="800"></canvas>\n\t\t\t<div id="waifu-tool">\n\t\t\t\t<span class="fa fa-lg fa-comment"></span>\n\t\t\t\t<span class="fa fa-lg fa-paper-plane"></span>\n\t\t\t\t<span class="fa fa-lg fa-user-circle"></span>\n\t\t\t\t<span class="fa fa-lg fa-street-view"></span>\n\t\t\t\t<span class="fa fa-lg fa-camera-retro"></span>\n\t\t\t\t<span class="fa fa-lg fa-info-circle"></span>\n\t\t\t\t<span class="fa fa-lg fa-times"></span>\n\t\t\t</div>\n\t\t</div>'),setTimeout((()=>{document.getElementById("waifu").style.bottom=0}),0);let l,d,c=!1,r=["好久不见，日子过得好快呢……","大坏蛋！你都多久没理人家了呀，嘤嘤嘤～","嗨～快来逗我玩吧！","拿小拳拳锤你胸口！","记得把小家加入 Adblock 白名单哦！"];function u(){fetch("https://v1.hitokoto.cn").then((e=>e.json())).then((e=>{const t=`这句一言来自 <span>「${e.from}」</span>，是 <span>${e.creator}</span> 在 hitokoto.cn 投稿的。`;m(e.hitokoto,6e3,9),setTimeout((()=>{m(t,4e3,9)}),6e3)}))}function m(e,t,a){if(!e||sessionStorage.getItem("waifu-text")&&sessionStorage.getItem("waifu-text")>a)return;d&&(clearTimeout(d),d=null),e=s(e),sessionStorage.setItem("waifu-text",a);const n=document.getElementById("waifu-tips");n.innerHTML=e,n.classList.add("waifu-tips-active"),d=setTimeout((()=>{sessionStorage.removeItem("waifu-text"),n.classList.remove("waifu-tips-active")}),t)}async function f(){const e=await fetch(`${o}model_list.json`);t=await e.json()}async function g(e,a,l){if(localStorage.setItem("modelId",e),localStorage.setItem("modelTexturesId",a),m(l,4e3,10),i){t||await f();const a=s(t.models[e]);loadlive2d("live2d",`${o}model/${a}/index.json`)}else loadlive2d("live2d",`${n}get/?id=${e}-${a}`),console.log(`Live2D 模型 ${e}-${a} 加载完成`)}async function p(){const e=localStorage.getItem("modelId"),a=localStorage.getItem("modelTexturesId");if(i){t||await f();const a=s(t.models[e]);loadlive2d("live2d",`${o}model/${a}/index.json`),m("我的新衣服好看嘛？",4e3,10)}else fetch(`${n}rand_textures/?id=${e}-${a}`).then((e=>e.json())).then((t=>{1!==t.textures.id||1!==a&&0!==a?g(e,t.textures.id,"我的新衣服好看嘛？"):m("我还没有其他衣服呢！",4e3,10)}))}async function w(){let e=localStorage.getItem("modelId");if(i){t||await f();const a=++e>=t.models.length?0:e;g(a,0,t.messages[a])}else fetch(`${n}switch/?id=${e}`).then((e=>e.json())).then((e=>{g(e.model.id,0,e.model.message)}))}window.addEventListener("mousemove",(()=>c=!0)),window.addEventListener("keydown",(()=>c=!0)),setInterval((()=>{c?(c=!1,clearInterval(l),l=null):l||(l=setInterval((()=>{m(s(r),6e3,9)}),2e4))}),1e3),function(){document.querySelector("#waifu-tool .fa-comment").addEventListener("click",u),document.querySelector("#waifu-tool .fa-paper-plane").addEventListener("click",(()=>{if(window.Asteroids)window.ASTEROIDSPLAYERS||(window.ASTEROIDSPLAYERS=[]),window.ASTEROIDSPLAYERS.push(new Asteroids);else{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/gh/stevenjoezhang/asteroids/asteroids.js",document.head.appendChild(e)}})),document.querySelector("#waifu-tool .fa-user-circle").addEventListener("click",w),document.querySelector("#waifu-tool .fa-street-view").addEventListener("click",p),document.querySelector("#waifu-tool .fa-camera-retro").addEventListener("click",(()=>{m("照好了嘛，是不是很可爱呢？",6e3,9),Live2D.captureName="photo.png",Live2D.captureFrame=!0})),document.querySelector("#waifu-tool .fa-info-circle").addEventListener("click",(()=>{open("https://github.com/stevenjoezhang/live2d-widget")})),document.querySelector("#waifu-tool .fa-times").addEventListener("click",(()=>{localStorage.setItem("waifu-display",Date.now()),m("愿你有一天能与重要的人重逢。",2e3,11),document.getElementById("waifu").style.bottom="-500px",setTimeout((()=>{document.getElementById("waifu").style.display="none",document.getElementById("waifu-toggle").classList.add("waifu-toggle-active")}),3e3)}));const e=()=>{};console.log("%c",e),e.toString=()=>{m("哈哈，你打开了控制台，是想要看看我的小秘密吗？",6e3,9)},window.addEventListener("copy",(()=>{m("你都复制了些什么呀，转载要记得加上出处哦！",6e3,9)})),window.addEventListener("visibilitychange",(()=>{document.hidden||m("哇，你终于回来了～",6e3,9)}))}(),function(){let e;if("/"===location.pathname){const t=(new Date).getHours();e=t>5&&t<=7?"早上好！一日之计在于晨，美好的一天就要开始了。":t>7&&t<=11?"上午好！工作顺利嘛，不要久坐，多起来走动走动哦！":t>11&&t<=13?"中午了，工作了一个上午，现在是午餐时间！":t>13&&t<=17?"午后很容易犯困呢，今天的运动目标完成了吗？":t>17&&t<=19?"傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～":t>19&&t<=21?"晚上好，今天过得怎么样？":t>21&&t<=23?["已经这么晚了呀，早点休息吧，晚安～","深夜时要爱护眼睛呀！"]:"你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？"}else if(""!==document.referrer){const t=new URL(document.referrer),a=t.hostname.split(".")[1];e=location.hostname===t.hostname?`欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`:"baidu"===a?`Hello！来自 百度搜索 的朋友<br>你是搜索 <span>${t.search.split("&wd=")[1].split("&")[0]}</span> 找到的我吗？`:"so"===a?`Hello！来自 360搜索 的朋友<br>你是搜索 <span>${t.search.split("&q=")[1].split("&")[0]}</span> 找到的我吗？`:"google"===a?`Hello！来自 谷歌搜索 的朋友<br>欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`:`Hello！来自 <span>${t.hostname}</span> 的朋友`}else e=`欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;m(e,7e3,8)}(),function(){let e=localStorage.getItem("modelId"),t=localStorage.getItem("modelTexturesId");null===e&&(e=2,t=54),g(e,t),fetch(a).then((e=>e.json())).then((e=>{window.addEventListener("mouseover",(t=>{for(let{selector:a,text:n}of e.mouseover)if(t.target.matches(a))return n=s(n),n=n.replace("{text}",t.target.innerText),void m(n,4e3,8)})),window.addEventListener("click",(t=>{for(let{selector:a,text:n}of e.click)if(t.target.matches(a))return n=s(n),n=n.replace("{text}",t.target.innerText),void m(n,4e3,8)})),e.seasons.forEach((({date:e,text:t})=>{const a=new Date,n=e.split("-")[0],o=e.split("-")[1]||n;n.split("/")[0]<=a.getMonth()+1&&a.getMonth()+1<=o.split("/")[0]&&n.split("/")[1]<=a.getDate()&&a.getDate()<=o.split("/")[1]&&(t=(t=s(t)).replace("{year}",a.getFullYear()),r.push(t))}))}))}()}function initWidget(e,t){"string"==typeof e&&(e={waifuPath:e,apiPath:t}),document.body.insertAdjacentHTML("beforeend",'<div id="waifu-toggle">\n\t\t\t<span>看板娘</span>\n\t\t</div>');const a=document.getElementById("waifu-toggle");a.addEventListener("click",(()=>{a.classList.remove("waifu-toggle-active"),a.getAttribute("first-time")?(loadWidget(e),a.removeAttribute("first-time")):(localStorage.removeItem("waifu-display"),document.getElementById("waifu").style.display="",setTimeout((()=>{document.getElementById("waifu").style.bottom=0}),0))})),localStorage.getItem("waifu-display")&&Date.now()-localStorage.getItem("waifu-display")<=864e5?(a.setAttribute("first-time",!0),setTimeout((()=>{a.classList.add("waifu-toggle-active")}),0)):loadWidget(e)}