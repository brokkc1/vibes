var BASE_CATS=["Greetings","Shopping","Directions","Help","Templates","My cards"];
var CATS=BASE_CATS.slice();
var RAW=[
["Greetings","How are you?","GEN-kee dess kah?","Genki desu ka?","元気ですか？","げんきですか？"],
["Greetings","How was your weekend?","SHOO-maht-soo doh desh-tah?","Shuumatsu dou deshita?","週末はどうでしたか？","しゅうまつはどうでしたか？"],
["Greetings","I’m good.","GEN-kee dess.","Genki desu.","元気です。","げんきです。"],
["Greetings","It was fun.","tah-no-SHEE-kaht-tah dess.","Tanoshikatta desu.","楽しかったです。","たのしかったです。"],
["Greetings","Excuse me.","soo-mee-mah-SEN","Sumimasen.","すみません。","すみません。"],
["Greetings","Thank you.","ah-ree-gah-TOH goh-zah-ee-mahss","Arigatou gozaimasu.","ありがとうございます。","ありがとうございます。"],
["Shopping","How much is this?","KOH-reh wah ee-KOO-rah dess kah?","Kore wa ikura desu ka?","これはいくらですか？","これはいくらですか？"],
["Shopping","How much is that?","SOH-reh wah ee-KOO-rah dess kah?","Sore wa ikura desu ka?","それはいくらですか？","それはいくらですか？"],
["Shopping","Can I have this, please?","KOH-reh oh koo-dah-SIGH","Kore o kudasai.","これをください。","これをください。"],
["Shopping","Can I have that, please?","SOH-reh oh koo-dah-SIGH","Sore o kudasai.","それをください。","それをください。"],
["Greetings","Please.","oh-neh-gah-ee-shee-MAHSS","Onegaishimasu.","お願いします。","おねがいします。"],
["Directions","Where is the train station?","EH-kee wah DOH-koh dess kah?","Eki wa doko desu ka?","駅はどこですか？","えきはどこですか？"],
["Directions","Where is the toilet?","TOH-ee-reh wah DOH-koh dess kah?","Toire wa doko desu ka?","トイレはどこですか？","といれはどこですか？"],
["Directions","Where is the temple?","oh-TEH-rah wah DOH-koh dess kah?","Otera wa doko desu ka?","お寺はどこですか？","おてらはどこですか？"],
["Directions","Where is the shrine?","JEEN-jah wah DOH-koh dess kah?","Jinja wa doko desu ka?","神社はどこですか？","じんじゃはどこですか？"],
["Directions","Where is the hotel?","HOH-teh-roo wah DOH-koh dess kah?","Hoteru wa doko desu ka?","ホテルはどこですか？","ほてるはどこですか？"],
["Directions","Where is the restaurant?","reh-soo-toh-RAHN wah DOH-koh dess kah?","Resutoran wa doko desu ka?","レストランはどこですか？","れすとらんはどこですか？"],
["Directions","Where is the convenience store?","kohn-BEE-nee wah DOH-koh dess kah?","Konbini wa doko desu ka?","コンビニはどこですか？","こんびにはどこですか？"],
["Directions","Where is the bus stop?","bah-soo-TEH-ee wah DOH-koh dess kah?","Basutei wa doko desu ka?","バス停はどこですか？","ばすていはどこですか？"],
["Directions","Where is the airport?","KOO-koh wah DOH-koh dess kah?","Kuukou wa doko desu ka?","空港はどこですか？","くうこうはどこですか？"],
["Directions","Where is the entrance?","ee-ree-GOO-chee wah DOH-koh dess kah?","Iriguchi wa doko desu ka?","入口はどこですか？","いりぐちはどこですか？"],
["Directions","Where is the exit?","deh-GOO-chee wah DOH-koh dess kah?","Deguchi wa doko desu ka?","出口はどこですか？","でぐちはどこですか？"],
["Help","Could you help me?","teh-tsoo-DAHT-teh moh-rah-eh-MAHSS kah?","Tetsudatte moraemasu ka?","手伝ってもらえますか？","てつだってもらえますか？"],
["Help","Can you speak English?","EH-goh wah hah-nah-seh-MAHSS kah?","Eigo wa hanasemasu ka?","英語は話せますか？","えいごははなせますか？"],
["Help","I don’t understand.","wah-kah-ree-mah-SEN","Wakarimasen.","わかりません。","わかりません。"],
["Help","Please say that again.","MOH ee-chee-doh oh-neh-gah-ee-shee-MAHSS","Mou ichido onegaishimasu.","もう一度お願いします。","もういちどおねがいします。"],
["Help","Please speak slowly.","YOOK-koo-ree hah-nah-shee-teh koo-dah-SIGH","Yukkuri hanashite kudasai.","ゆっくり話してください。","ゆっくりはなしてください。"],
["Templates","Where is ___?","___ wah DOH-koh dess kah?","___ wa doko desu ka?","＿＿はどこですか？","＿＿はどこですか？"],
["Templates","How much is ___?","___ wah ee-KOO-rah dess kah?","___ wa ikura desu ka?","＿＿はいくらですか？","＿＿はいくらですか？"],
["Templates","___, please.","___ oh koo-dah-SIGH","___ o kudasai.","＿＿をください。","＿＿をください。"],
["Templates","Excuse me, could I ask something?","soo-mee-mah-SEN, CHOHT-toh EE dess kah?","Sumimasen, chotto ii desu ka?","すみません、ちょっといいですか？","すみません、ちょっといいですか？"]
];
var $=function(id){return document.getElementById(id)};
var KEY="jp.phrasebook.v2";
var store={get:function(k){try{return localStorage.getItem(k)}catch(e){return null}},set:function(k,v){try{localStorage.setItem(k,v);return true}catch(e){return false}}};
var S={};try{S=JSON.parse(store.get(KEY)||"{}")||{}}catch(e){S={}}
function esc(t){return String(t).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function clampW(v){return Math.max(-100,Math.min(100,v))}
function kata(h){return h.replace(/[\u3041-\u3096]/g,function(c){return String.fromCharCode(c.charCodeAt(0)+96)})}
function toHira(k){return k.replace(/[\u30A1-\u30F6]/g,function(c){return String.fromCharCode(c.charCodeAt(0)-96)})}
function isKana(t){return /^[\u3040-\u30ffー、。！？＿\s]+$/.test(t)}
function fmt(p){return esc(p).replace(/[A-Z]{2,}/g,function(m){return "<span class='stress'>"+m.toLowerCase()+"</span>"})}
function isTpl(c){return c.jp.indexOf("＿＿")===0}

/* cards */
var customCats=[];(Array.isArray(S.cats)?S.cats:[]).forEach(function(n){n=typeof n==="string"?n.trim():"";if(n&&BASE_CATS.indexOf(n)<0&&customCats.indexOf(n)<0)customCats.push(n)});
CATS=BASE_CATS.concat(customCats);
var BASE=RAW.map(function(r,i){return {id:"b"+i,cat:r[0],en:r[1],pr:r[2],ro:r[3],jp:r[4],hi:r[5]}});
var custom=(Array.isArray(S.custom)?S.custom:[]).filter(function(c){return c&&typeof c.id==="string"&&typeof c.en==="string"&&typeof c.jp==="string"});
var ALL=[],byId={};
function rebuild(){ALL=BASE.concat(custom);byId={};ALL.forEach(function(c){byId[c.id]=c})}
rebuild();
function recon(a){var seen={},out=[];(a||[]).forEach(function(id){if(byId[id]&&!seen[id]){seen[id]=1;out.push(id)}});ALL.forEach(function(c){if(!seen[c.id])out.push(c.id)});return out}
var selMap={};
/* selection is saved as studySel; fall back to the older "sel" key */
var rawSel=Array.isArray(S.studySel)?S.studySel:(Array.isArray(S.sel)?S.sel:null);
if(rawSel)rawSel.forEach(function(id){if(byId[id])selMap[id]=true});else ALL.forEach(function(c){selMap[c.id]=true});
function deck(o){return o.filter(function(id){return selMap[id]})}
var forder=recon(S.order),rorder=recon(S.rorder);
var pos=Math.max(+S.pos||0,0),jpFirst=!!S.jp,flipped=!!S.flipped,mode=(S.mode==="fc"||S.mode==="study")?S.mode:"rev";
var scripts=S.scripts!==false,cover=!!S.cover,voiceId=S.voice||null,scrollY0=+S.scroll||0;
var speed=[1,0.75,0.5].indexOf(+S.speed)>=0?+S.speed:1;
var theme=(S.theme==="light"||S.theme==="dark")?S.theme:"system";
var RM=window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)"):{matches:false};
var W={};if(S.w&&typeof S.w==="object")Object.keys(S.w).forEach(function(k){if(byId[k])W[k]=clampW(Math.round(+S.w[k]||0))});
var sess=null,sbusy=false,openCats={},addIn=null,editId=null,addCatOpen=false,pickMsg="",pickMsgCat=null;
function catOf(c){return CATS.indexOf(c.cat)>=0?c.cat:"My cards"}

function catLab(c){return c.length===1?c[0]:c.length===2?c.join(" and "):c.length+" categories"}
function sessOK(x){return !!x&&Array.isArray(x.order)&&x.order.length===deck(rorder).length&&x.i>=0&&x.i<=x.order.length&&x.order.every(function(id){return selMap[id]})}
if(Array.isArray(S.sorder)&&Number.isInteger(S.si)){sess={order:S.sorder,i:S.si};if(!sessOK(sess))sess=null}
function save(){
  var ok=store.set(KEY,JSON.stringify({mode:mode,order:forder,fdeck:fdeck,pos:pos,jp:jpFirst,flipped:flipped,rorder:rorder,cover:cover,voice:voiceId,speed:speed,scripts:scripts,theme:theme,w:W,sorder:sess?sess.order:null,si:sess?sess.i:0,custom:custom,cats:customCats,studySel:Object.keys(selMap),scroll:mode==="rev"?Math.round(window.scrollY):scrollY0}));
  $("savenote").hidden=ok;
}

function reps(id){var v=W[id]||0;return v<=-6?4:v<=-3?3:v<=-1?2:1}
function buildFlashDeck(){
  var out=[];
  recon(forder).forEach(function(id){for(var k=0;k<reps(id);k++)out.push({id:id,key:(W[id]||0)+Math.random()*3+k*1.5})});
  out.sort(function(a,b){return a.key-b.key});
  var ids=out.map(function(o){return o.id});
  for(var i=1;i<ids.length;i++){if(ids[i]===ids[i-1]){for(var j=i+1;j<ids.length;j++){if(ids[j]!==ids[i-1]&&ids[j]!==ids[i+1]){var t=ids[i];ids[i]=ids[j];ids[j]=t;break}}}}
  return ids;
}
var fdeck=(Array.isArray(S.fdeck)&&S.fdeck.length&&S.fdeck.every(function(id){return byId[id]}))?S.fdeck:buildFlashDeck();
if(pos>=fdeck.length)pos=0;
var SPK="<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M11 5L6 9H2v6h4l5 4V5z'/><path d='M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13'/></svg>";
var DOTS="<svg width='18' height='30' viewBox='0 0 18 30' fill='currentColor' aria-hidden='true'><circle cx='9' cy='6' r='2.5'/><circle cx='9' cy='15' r='2.5'/><circle cx='9' cy='24' r='2.5'/></svg>";
function scHTML(c){
  if(!scripts)return "";
  var h="<div class='sl'><span class='k'>Japanese</span><span class='t' lang='ja'>"+esc(c.jp)+"</span></div>";
  if(c.hi)h+="<div class='sl'><span class='k'>Hiragana</span><span class='t' lang='ja'>"+esc(c.hi)+"</span></div><div class='sl'><span class='k'>Katakana</span><span class='t' lang='ja'>"+esc(kata(c.hi))+"</span></div>";
  return h;
}

/* audio: device Japanese voices only */
var VOICES=[],vsel=$("voice");
function isJa(x){return x.lang&&x.lang.toLowerCase().replace("_","-").indexOf("ja")===0}
function audioState(){
  var ok=VOICES.length>0;
  $("fspeed").hidden=!ok;$("noaudio").hidden=ok;$("vwrap").hidden=!ok;$("vnote").hidden=ok;
  [].slice.call(document.querySelectorAll("[data-spk]")).forEach(function(b){b.disabled=!ok;b.title=ok?"":"No Japanese voice found on this device"});
}
function loadVoices(){
  var ss=window.speechSynthesis;
  VOICES=ss?ss.getVoices().filter(isJa):[];
  vsel.innerHTML="";
  VOICES.forEach(function(x){var o=document.createElement("option");o.value=x.voiceURI;o.textContent=x.name+" ("+x.lang+")";vsel.appendChild(o)});
  var pick=VOICES.filter(function(x){return x.voiceURI===voiceId})[0]||VOICES[0];
  if(pick)vsel.value=pick.voiceURI;
  audioState();
}
function speak(c){
  var ss=window.speechSynthesis;
  if(!ss||!VOICES.length)return;
  /* templates are spoken with the blank elided: "＿＿はどこですか？" reads as "どこですか？" */
  var t=c.jp.replace(/^＿＿[はを]?/,"");if(!t)return;
  var u=new SpeechSynthesisUtterance(t),v=VOICES.filter(function(x){return x.voiceURI===vsel.value})[0]||VOICES[0];
  u.voice=v;u.lang=v.lang;u.rate=0.9*speed;
  ss.cancel();ss.speak(u);
}
function current(){
  if(mode==="study"&&sess&&sess.i<sess.order.length)return byId[sess.order[sess.i]];
  if(mode==="fc"){var a=fdeck;return a.length?byId[a[Math.min(pos,a.length-1)]]:null}
  return null;
}
function speakCurrent(){var c=current();if(c)speak(c)}
vsel.onchange=function(){voiceId=vsel.value;save();speakCurrent()};
function syncSpeed(){[].slice.call($("fspeed").querySelectorAll("button")).forEach(function(b){b.classList.toggle("on",+b.dataset.s===speed)})}
[].slice.call($("fspeed").querySelectorAll("button")).forEach(function(b){b.onclick=function(){speed=+b.dataset.s;syncSpeed();save();speakCurrent()}});
$("noaudio").onclick=function(){$("dlg").showModal()};
function spkBtn(c,cls){
  var b=document.createElement("button");b.className=cls;b.innerHTML=SPK;b.setAttribute("aria-label","Speak");b.setAttribute("data-spk","1");
  b.disabled=!VOICES.length;if(b.disabled)b.title="No Japanese voice found on this device";
  b.onclick=function(e){e.stopPropagation();speak(c)};
  return b;
}

/* flashcards */
$("spk").innerHTML=SPK;
$("spk").onclick=function(e){e.stopPropagation();speakCurrent()};
function render(na){
  var a=fdeck;if(!a.length)return;
  pos=Math.min(pos,a.length-1);
  var c=byId[a[pos]];
  var cd=$("card");if(na)cd.style.transition="none";
  cd.classList.toggle("flipped",flipped);
  if(na){void cd.offsetWidth;cd.style.transition=""}
  $("star").textContent=isTpl(c)?"Fill-in template":"";
  $("flab").textContent=jpFirst?"Japanese":"English";
  $("q").textContent=jpFirst?(c.ro||c.jp):c.en;
  $("q").lang=jpFirst?(c.ro?"ja-Latn":"ja"):"en";
  $("pron").innerHTML=c.pr?fmt(c.pr):"";
  $("pron").lang="en";
  $("roma").textContent=jpFirst?c.en:(c.ro||"");
  $("roma").lang=jpFirst?"en":"ja-Latn";
  $("scr").innerHTML=scHTML(c);
  $("prog").style.width=((pos+1)/a.length*100)+"%";
  if(mode==="fc")$("count").innerHTML="<span class='num'>"+(pos+1)+"</span><span>of "+a.length+"</span>";
}
$("scene").onclick=function(){if(Math.abs(fdx)>=6){fdx=0;return}flipped=!flipped;$("card").classList.toggle("flipped",flipped);save()};
var fdx=0,fsx=0,fdrag=false,fbusy=false;
function fbadge(v){var b=$("fbadge");b.className="sbadge "+(v>0?"pos":"n");b.style.opacity=Math.min(Math.abs(v)/90,1)*0.3}
function fcommit(d){
  if(fbusy||mode!=="fc")return;
  fbusy=true;var sc=$("scene"),id=fdeck[pos];
  function done(){
    W[id]=clampW((W[id]||0)+d);
    if(pos+1>=fdeck.length){fdeck=buildFlashDeck();pos=0}else pos++;
    flipped=false;
    sc.style.transition="none";sc.style.transform="";sc.style.opacity="";fdx=0;$("fbadge").style.opacity=0;
    render(true);save();fbusy=false;
    requestAnimationFrame(function(){sc.style.transition=""});
  }
  if(RM.matches){done();return}
  sc.style.transition="transform .25s,opacity .25s";
  sc.style.transform="translateX("+(d*520)+"px) rotate("+(d*18)+"deg)";sc.style.opacity="0";
  setTimeout(done,230);
}
(function(){
  var sc=$("scene");
  sc.onpointerdown=function(e){if(fbusy||e.target.closest("button"))return;fdrag=true;fsx=e.clientX;fdx=0;try{sc.setPointerCapture(e.pointerId)}catch(_){}sc.style.transition="none"};
  sc.onpointermove=function(e){if(!fdrag)return;fdx=e.clientX-fsx;sc.style.transform="translateX("+fdx+"px) rotate("+(fdx/30)+"deg)";fbadge(fdx)};
  var up=function(){
    if(!fdrag)return;fdrag=false;sc.style.transition="";
    if(fdx>100)fcommit(1);else if(fdx<-100)fcommit(-1);else{sc.style.transform="";fbadge(0)}
  };
  sc.onpointerup=up;sc.onpointercancel=up;
})();
document.addEventListener("keydown",function(e){
  if($("dlg").open)return;
  if(mode==="study"){if(e.key==="ArrowLeft")commit(-1);else if(e.key==="ArrowRight")commit(1);return}
  if(mode!=="fc")return;
  if(e.key===" "||e.key==="Enter"){if(document.activeElement.tagName!=="BUTTON"){e.preventDefault();$("scene").click()}}
  else if(e.key==="ArrowRight")fcommit(1);else if(e.key==="ArrowLeft")fcommit(-1);
});
$("shuf").onclick=function(){fdeck=buildFlashDeck();pos=0;flipped=false;render(true);save()};
function syncRev(){$("rev").classList.toggle("on",jpFirst);$("rev").textContent=jpFirst?"English first":"Japanese first"}
$("rev").onclick=function(){jpFirst=!jpFirst;flipped=false;render();syncRev();save()};

/* shared card item */
function toggleShow(it){
  var on=it.classList.toggle("show"),b=it.querySelector(".en");
  if(b)b.setAttribute("aria-expanded",String(!on));
}
function syncReveal(){
  [].slice.call(document.querySelectorAll(".item .en")).forEach(function(b){
    b.tabIndex=cover?0:-1;b.setAttribute("aria-expanded",cover?"false":"true");
  });
}
function announce(t){var l=$("live");if(l)l.textContent=t}
function mkItem(c){
  var it=document.createElement("div");it.className="item";it.dataset.id=c.id;
  var body=document.createElement("div");body.className="body";
  body.innerHTML=(isTpl(c)?"<div class='tpl'>Fill-in template</div>":"")+"<div class='jp'></div><div class='pr'></div><div class='scr'></div>";
  var jp=body.querySelector(".jp");jp.textContent=c.ro||c.jp;jp.lang=c.ro?"ja-Latn":"ja";
  var pr=body.querySelector(".pr");if(c.pr){pr.innerHTML=fmt(c.pr);pr.lang="en"}else pr.hidden=true;
  var en=document.createElement("button");en.type="button";en.className="en";en.textContent=c.en;
  en.tabIndex=cover?0:-1;en.setAttribute("aria-expanded",cover?"false":"true");
  en.onclick=function(e){e.stopPropagation();toggleShow(it)};
  body.insertBefore(en,body.querySelector(".scr"));
  body.querySelector(".scr").innerHTML=scHTML(c);
  body.onclick=function(e){e.stopPropagation();if(cover)toggleShow(it)};
  var act=document.createElement("div");act.className="act";act.appendChild(spkBtn(c,"sq solid"));
  it.appendChild(body);it.appendChild(act);
  return it;
}

/* revision list with drag-and-drop */
var list=$("list");
function buildList(){
  list.innerHTML="";
  rorder.forEach(function(id){
    var c=byId[id],it=mkItem(c);
    var g=document.createElement("button");g.type="button";g.className="grip";g.innerHTML=DOTS;
    g.setAttribute("aria-label","Reorder “"+c.en+"”. Drag this handle, or press the up and down arrow keys to move the phrase.");
    var ph=null,off=0;
    g.onkeydown=function(e){
      var d=e.key==="ArrowUp"?-1:e.key==="ArrowDown"?1:0;
      if(!d)return;
      e.preventDefault();
      var sib=d<0?it.previousElementSibling:it.nextElementSibling;
      if(!sib||!sib.classList.contains("item"))return;
      if(d<0)list.insertBefore(it,sib);else list.insertBefore(sib,it);
      rorder=[].slice.call(list.querySelectorAll(".item")).map(function(n){return n.dataset.id});
      save();g.focus();
      announce("Moved “"+c.en+"” to position "+([].slice.call(list.children).indexOf(it)+1)+" of "+list.children.length+".");
    };
    var ph=null,off=0;
    g.onpointerdown=function(e){
      e.preventDefault();try{g.setPointerCapture(e.pointerId)}catch(_){}
      var r=it.getBoundingClientRect();off=e.clientY-r.top;
      ph=document.createElement("div");ph.className="ph";ph.style.height=r.height+"px";
      it.after(ph);
      it.style.width=r.width+"px";it.style.left=r.left+"px";it.style.top=r.top+"px";
      it.classList.add("drag");
    };
    g.onpointermove=function(e){
      if(!ph)return;
      it.style.top=(e.clientY-off)+"px";
      var kids=[].slice.call(list.children);
      for(var k=0;k<kids.length;k++){
        var n=kids[k];if(n===it||n===ph)continue;
        var r=n.getBoundingClientRect();
        if(e.clientY>r.top&&e.clientY<r.bottom){
          if(ph.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING)n.after(ph);else n.before(ph);
          break;
        }
      }
      if(e.clientY<90)window.scrollBy(0,-14);else if(e.clientY>window.innerHeight-90)window.scrollBy(0,14);
    };
    var end=function(){
      if(!ph)return;
      ph.replaceWith(it);ph=null;
      it.classList.remove("drag");it.style.width="";it.style.left="";it.style.top="";
      rorder=[].slice.call(list.querySelectorAll(".item")).map(function(n){return n.dataset.id});
      save();
    };
    g.onpointerup=end;g.onpointercancel=end;
    it.insertBefore(g,it.firstChild);
    list.appendChild(it);
  });
}

/* study mode */
function startSession(){
  var pos0={};rorder.forEach(function(id,i){pos0[id]=i});
  sess={order:deck(rorder).sort(function(a,b){return ((W[a]||0)-(W[b]||0))||(pos0[a]-pos0[b])}),i:0};save();
}
function commit(d){
  if(sbusy||!sess||sess.i>=sess.order.length||mode!=="study")return;
  sbusy=true;
  var top=$("stack").lastElementChild,id=sess.order[sess.i];
  function done(){W[id]=clampW((W[id]||0)+d);sess.i++;sbusy=false;save();renderStudy()}
  if(RM.matches){done();return}
  top.style.transition="transform .25s,opacity .25s";
  top.style.transform="translateX("+(d*520)+"px) rotate("+(d*18)+"deg)";top.style.opacity="0";
  setTimeout(done,230);
}
function catCards(cat){return ALL.filter(function(c){return catOf(c)===cat})}
function showPicker(){
  $("stack").innerHTML="";$("sinfo").hidden=true;$("shint").hidden=true;$("sbar").hidden=true;
  var msg=pickMsg,msgCat=pickMsgCat;pickMsg="";pickMsgCat=null;
  var box=document.createElement("div");box.className="pick";
  box.innerHTML="<h3>What do you want to study this session?</h3><p class='phint'>Tick categories or individual phrases — this selection applies to Study sessions only. Expand a category to edit phrases or add your own.</p><div class='ptools'><button id='pall'>Select all</button><button id='pnone'>Clear</button></div>";
  var go=document.createElement("button");go.className="solid pgo";
  var rows=[];
  function upd(){
    var n=Object.keys(selMap).length;
    $("count").innerHTML="<span>"+n+" selected</span>";
    go.textContent=n?"Start session ("+n+(n===1?" card)":" cards)"):"Select at least one phrase";go.disabled=!n;
    rows.forEach(function(r){
      var cs=catCards(r.cat),k=cs.filter(function(c){return selMap[c.id]}).length;
      r.cb.disabled=!cs.length;r.cb.checked=cs.length>0&&k===cs.length;r.cb.indeterminate=k>0&&k<cs.length;
      r.small.textContent=k+" of "+cs.length;r.wrap.classList.toggle("on",k>0);
    });
    save();
  }
  CATS.forEach(function(cat){
    var cs=catCards(cat);
    var wrap=document.createElement("div");wrap.className="pcat";
    var row=document.createElement("div");row.className="prow";
    var lab=document.createElement("label");lab.className="plab";
    var cb=document.createElement("input");cb.type="checkbox";
    lab.innerHTML="<span></span><small></small>";
    lab.firstChild.textContent=cat;lab.insertBefore(cb,lab.firstChild);
    var chev=document.createElement("button");chev.type="button";chev.className="pchev";
    chev.innerHTML="<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M6 9l6 6 6-6'/></svg>";
    var pl=document.createElement("div");pl.className="plist";
    function sync(){var o=!!openCats[cat];pl.hidden=!o;chev.classList.toggle("open",o);chev.setAttribute("aria-expanded",String(o));chev.setAttribute("aria-label",(o?"Hide":"Show")+" phrases in "+cat)}
    chev.onclick=function(e){e.preventDefault();e.stopPropagation();openCats[cat]=!openCats[cat];sync()};
    cb.onchange=function(){cs.forEach(function(c){if(cb.checked)selMap[c.id]=true;else delete selMap[c.id]});[].slice.call(pl.querySelectorAll(".crow input")).forEach(function(i){i.checked=cb.checked});upd()};
    row.appendChild(lab);row.appendChild(chev);wrap.appendChild(row);wrap.appendChild(pl);
    if(msg&&msgCat===cat){var m=document.createElement("p");m.className="ok";m.setAttribute("role","status");m.textContent=msg;pl.appendChild(m)}
    cs.forEach(function(c){
      var r=document.createElement("div");r.className="crow";
      var rlab=document.createElement("label");rlab.className="plab";
      var pc=document.createElement("input");pc.type="checkbox";pc.checked=!!selMap[c.id];
      pc.onchange=function(){if(pc.checked)selMap[c.id]=true;else delete selMap[c.id];upd()};
      var tx=document.createElement("span");tx.className="ct";tx.innerHTML="<span class='ce'></span><span class='cj'></span>";
      tx.querySelector(".ce").textContent=c.en;
      var cj=tx.querySelector(".cj");cj.textContent=c.jp;cj.lang="ja";
      rlab.appendChild(pc);rlab.appendChild(tx);r.appendChild(rlab);
      if(c.custom){
        var eb=document.createElement("button");eb.type="button";eb.className="del";eb.textContent="Edit";eb.setAttribute("aria-label","Edit "+c.en);
        eb.onclick=function(e){
          e.preventDefault();e.stopPropagation();
          addIn=cat;editId=c.id;openCats[cat]=true;showPicker();$("fen").focus();
        };
        r.appendChild(eb);
        var del=document.createElement("button");del.type="button";del.className="del";del.textContent="Remove";del.setAttribute("aria-label","Remove "+c.en);var t;
        del.onclick=function(e){
          e.preventDefault();e.stopPropagation();
          if(del.classList.contains("arm")){removeCard(c.id,cat);return}
          del.classList.add("arm");del.textContent="Sure?";clearTimeout(t);t=setTimeout(function(){del.classList.remove("arm");del.textContent="Remove"},3000);
        };
        r.appendChild(del);
      }
      pl.appendChild(r);
    });
    if(!cs.length&&addIn!==cat){var e0=document.createElement("p");e0.className="muted";e0.textContent="No phrases here yet.";pl.appendChild(e0)}
    if(addIn===cat){
      var ed=editId?byId[editId]:null;
      var f=document.createElement("div");f.className="addf";
      f.innerHTML="<label>English<input id='fen' autocomplete='off'></label><label>Japanese<input id='fjp' lang='ja' autocomplete='off'></label><label>Romaji (optional)<input id='fro' lang='ja-Latn' autocomplete='off'></label><p class='err' id='ferr' role='alert' hidden></p><div class='fb'><button id='fcancel'>Cancel</button><button id='fadd' class='solid'>"+(ed?"Save changes":"Add to "+esc(cat))+"</button></div>";
      pl.appendChild(f);
      if(ed){f.querySelector("#fen").value=ed.en;f.querySelector("#fjp").value=ed.jp;f.querySelector("#fro").value=ed.ro||""}
      f.querySelector("#fcancel").onclick=function(){addIn=null;editId=null;showPicker()};
      f.querySelector("#fadd").onclick=function(){savePhrase(cat)};
      [].slice.call(f.querySelectorAll("input")).forEach(function(i){i.onkeydown=function(e){if(e.key==="Enter"){e.preventDefault();savePhrase(cat)}}});
    }else{
      var ab=document.createElement("button");ab.className="padd";ab.textContent="+ Add phrase";
      ab.onclick=function(){addIn=cat;editId=null;openCats[cat]=true;showPicker();$("fen").focus()};
      pl.appendChild(ab);
    }
    if(customCats.indexOf(cat)>=0){
      var dc=document.createElement("button");dc.className="padd delcat";dc.textContent="Delete category";var dtm;
      dc.onclick=function(){
        if(dc.classList.contains("arm")){removeCategory(cat);return}
        dc.classList.add("arm");dc.textContent=cs.length?"Delete category and "+cs.length+(cs.length===1?" phrase?":" phrases?"):"Tap again to delete";
        clearTimeout(dtm);dtm=setTimeout(function(){dc.classList.remove("arm");dc.textContent="Delete category"},3500);
      };
      pl.appendChild(dc);
    }
    sync();rows.push({cat:cat,cb:cb,small:row.querySelector("small"),wrap:wrap});box.appendChild(wrap);
  });
  if(addCatOpen){
    var cf=document.createElement("div");cf.className="addf";
    cf.innerHTML="<label>Category name<input id='cname' maxlength='30' autocomplete='off'></label><p class='err' id='cerr' role='alert' hidden></p><div class='fb'><button id='ccancel'>Cancel</button><button id='ccreate' class='solid'>Create category</button></div>";
    box.appendChild(cf);
    cf.querySelector("#ccancel").onclick=function(){addCatOpen=false;showPicker()};
    cf.querySelector("#ccreate").onclick=addCategory;
    cf.querySelector("#cname").onkeydown=function(e){if(e.key==="Enter"){e.preventDefault();addCategory()}};
  }else{
    var ac=document.createElement("button");ac.className="padd";ac.textContent="+ Add category";
    ac.onclick=function(){addCatOpen=true;showPicker();$("cname").focus()};
    box.appendChild(ac);
  }
  go.onclick=function(){if(!Object.keys(selMap).length)return;startSession();renderStudy()};
  box.appendChild(go);
  box.querySelector("#pall").onclick=function(){ALL.forEach(function(c){selMap[c.id]=true});showPicker()};
  box.querySelector("#pnone").onclick=function(){selMap={};showPicker()};
  $("stack").appendChild(box);upd();
}
function addCategory(){
  var v=$("cname").value.trim(),err=$("cerr");
  if(!v){err.hidden=false;err.textContent="Enter a category name.";$("cname").focus();return}
  if(CATS.some(function(c){return c.toLowerCase()===v.toLowerCase()})){err.hidden=false;err.textContent="A category with that name already exists.";$("cname").focus();return}
  customCats.push(v);CATS=BASE_CATS.concat(customCats);
  addCatOpen=false;openCats[v]=true;addIn=v;editId=null;save();showPicker();
  var f=$("fen");if(f)f.focus();
}
function removeCategory(cat){
  var ids=catCards(cat).map(function(c){return c.id});
  custom=custom.filter(function(c){return ids.indexOf(c.id)<0});rebuild();
  ids.forEach(function(id){delete selMap[id];delete W[id]});
  customCats=customCats.filter(function(n){return n!==cat});CATS=BASE_CATS.concat(customCats);delete openCats[cat];
  refreshCards();sess=null;addIn=null;editId=null;save();showPicker();
}
function savePhrase(cat){
  var en=$("fen").value.trim(),jp=$("fjp").value.trim(),ro=$("fro").value.trim(),err=$("ferr");
  if(!en||!jp){err.hidden=false;err.textContent=!en?"Enter the English meaning.":"Enter the Japanese.";(!en?$("fen"):$("fjp")).focus();return}
  if(editId&&byId[editId]){
    var e=byId[editId];
    e.en=en;e.jp=jp;e.ro=ro;e.hi=isKana(jp)?toHira(jp):"";
    pickMsg="Updated “"+en+"”.";
  }else{
    var c={id:"c"+Date.now().toString(36)+Math.floor(Math.random()*1000),cat:cat,en:en,pr:"",ro:ro,jp:jp,hi:isKana(jp)?toHira(jp):"",custom:true};
    custom.push(c);rebuild();selMap[c.id]=true;forder.push(c.id);rorder.push(c.id);
    pickMsg="Added “"+en+"”.";
  }
  pickMsgCat=cat;addIn=null;editId=null;
  refreshCards();sess=null;openCats[cat]=true;save();showPicker();
}
function removeCard(id,cat){
  custom=custom.filter(function(c){return c.id!==id});rebuild();
  delete selMap[id];delete W[id];refreshCards();sess=null;
  pickMsg="Phrase removed.";pickMsgCat=cat;addIn=null;editId=null;save();showPicker();
}
function renderStudy(){
  var st=$("stack");st.innerHTML="";
  if(!sessOK(sess)){sess=null;showPicker();return}
  var N=sess.order.length,done=sess.i>=N,lab=catLab(CATS.filter(function(c){return sess.order.some(function(id){return catOf(byId[id])===c})}));
  $("sinfo").hidden=false;$("send").hidden=done;$("shint").hidden=done;
  $("sbar").hidden=false;$("sfill").style.width=(done?100:(sess.i+1)/N*100)+"%";
  $("sprog").textContent=done?"Session complete":lab+", card "+(sess.i+1)+" of "+N;
  $("count").innerHTML=done?"<span>Done</span>":"<span class='num'>"+(sess.i+1)+"</span><span>of "+N+"</span>";
  if(done){
    st.innerHTML="<div class='done'><h3>Session complete</h3><p>You went through all "+N+" cards. Your swipes will shape the order of the next session.</p><div class='fbx'><button id='again' class='solid'>Study again</button><button id='chg'>Change selection</button></div></div>";
    $("again").onclick=function(){startSession();renderStudy()};
    $("chg").onclick=function(){sess=null;save();renderStudy()};
    return;
  }
  if(sess.i+1<N){var u=mkItem(byId[sess.order[sess.i+1]]);u.classList.add("under");st.appendChild(u)}
  var top=mkItem(byId[sess.order[sess.i]]),b=document.createElement("div");b.className="sbadge";top.appendChild(b);
  var sx=0,dx=0,drag=false;
  function badge(v){b.className="sbadge "+(v>0?"pos":"n");b.style.opacity=Math.min(Math.abs(v)/90,1)*0.3}
  top.onpointerdown=function(e){if(sbusy||e.target.closest("button"))return;drag=true;sx=e.clientX;dx=0;try{top.setPointerCapture(e.pointerId)}catch(_){}top.style.transition="none"};
  top.onpointermove=function(e){if(!drag)return;dx=e.clientX-sx;top.style.transform="translateX("+dx+"px) rotate("+(dx/25)+"deg)";badge(dx)};
  var up=function(){
    if(!drag)return;drag=false;top.style.transition="";
    if(dx>100)commit(1);else if(dx<-100)commit(-1);else{top.style.transform="";badge(0)}
  };
  top.onpointerup=up;top.onpointercancel=up;
  top.onclick=function(){if(cover&&Math.abs(dx)<6)toggleShow(top)};
  st.appendChild(top);
}
$("send").onclick=function(){if(sbusy)return;sess=null;save();renderStudy()};
var wt;
$("wreset").onclick=function(){
  var btn=this;
  if(btn.dataset.arm){W={};sess=null;btn.dataset.arm="";btn.textContent="Reset";save();if(mode==="study")renderStudy()}
  else{btn.dataset.arm="1";btn.textContent="Tap to confirm";clearTimeout(wt);wt=setTimeout(function(){btn.dataset.arm="";btn.textContent="Reset"},3000)}
};

/* modes */
function setMode(m,restore){
  mode=m;
  $("fcview").hidden=m!=="fc";list.hidden=m!=="rev";$("studyview").hidden=m!=="study";
  ["rev","fc","study"].forEach(function(k){var t=$("tab"+k);t.classList.toggle("on",k===m);t.setAttribute("aria-selected",k===m)});
  if(m==="rev"){$("count").innerHTML="<span>"+rorder.length+" phrases</span>";window.scrollTo(0,restore?scrollY0:0)}
  else if(m==="fc"){render();window.scrollTo(0,0)}
  else{renderStudy();window.scrollTo(0,0)}
  save();
}
$("tabfc").onclick=function(){setMode("fc")};
$("tabstudy").onclick=function(){setMode("study")};
$("tabrev").onclick=function(){setMode("rev")};
var st0;window.addEventListener("scroll",function(){if(mode!=="rev")return;clearTimeout(st0);st0=setTimeout(function(){scrollY0=Math.round(window.scrollY);save()},200)});
function refreshCards(){forder=recon(forder);rorder=recon(rorder);fdeck=buildFlashDeck();pos=0;flipped=false;buildList()}

/* settings dialog */
$("scrtg").checked=scripts;
$("scrtg").onchange=function(){scripts=this.checked;save();buildList();setMode(mode)};
function applyCover(){list.classList.toggle("cover",cover);$("stack").classList.toggle("cover",cover);$("cover").checked=cover;[].slice.call(list.querySelectorAll(".item")).forEach(function(i){i.classList.remove("show")});syncReveal()}
$("cover").onchange=function(){cover=this.checked;applyCover();save()};
$("menu").onclick=function(){$("dlg").showModal()};
$("done").onclick=function(){$("dlg").close()};
$("dlg").addEventListener("click",function(e){
  if(e.target!==this)return;
  var r=this.getBoundingClientRect();
  if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)this.close();
});
$("theme").onchange=function(){theme=this.value;applyTheme();save()};
$("exp").onclick=exportBackup;
$("imp").onclick=function(){$("impf").click()};
$("impf").onchange=importBackup;

function applyTheme(){
  if(theme==="system")delete document.documentElement.dataset.theme;else document.documentElement.dataset.theme=theme;
  document.documentElement.style.colorScheme=theme==="system"?"light dark":theme;
  $("theme").value=theme;
}
function iostat(t){$("iostat").textContent=t}
function exportBackup(){
  var data={v:2,custom:custom,cats:customCats,w:W,studySel:Object.keys(selMap),order:forder,rorder:rorder};
  var url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:"application/json"})),a=document.createElement("a");
  a.href=url;a.download="japanese-phrasebook-backup.json";document.body.appendChild(a);a.click();a.remove();
  setTimeout(function(){URL.revokeObjectURL(url)},2000);
  iostat("Backup downloaded.");
}
function importBackup(){
  var file=$("impf").files&&$("impf").files[0];if(!file)return;
  $("impf").value="";
  var r=new FileReader();
  r.onload=function(){
    var d;try{d=JSON.parse(r.result)}catch(err){iostat("That file isn’t a valid backup.");return}
    var cards=(d&&Array.isArray(d.custom))?d.custom:null;
    if(!cards){iostat("That file isn’t a valid backup.");return}
    (Array.isArray(d.cats)?d.cats:[]).forEach(function(n){n=typeof n==="string"?n.trim():"";if(n&&CATS.indexOf(n)<0&&customCats.indexOf(n)<0)customCats.push(n)});
    CATS=BASE_CATS.concat(customCats);
    var n=0,seen={};
    cards.forEach(function(c){
      if(!c||typeof c.id!=="string"||typeof c.en!=="string"||typeof c.jp!=="string")return;
      if(seen[c.id]||byId[c.id])return;
      if(!c.en.trim()||!c.jp.trim())return;
      seen[c.id]=1;
      var cat=(typeof c.cat==="string"&&CATS.indexOf(c.cat)>=0)?c.cat:"My cards";
      var nc={id:c.id,cat:cat,en:c.en.trim(),pr:typeof c.pr==="string"?c.pr:"",ro:typeof c.ro==="string"?c.ro:"",jp:c.jp.trim(),hi:isKana(c.jp)?toHira(c.jp):"",custom:true};
      custom.push(nc);selMap[nc.id]=true;forder.push(nc.id);rorder.push(nc.id);n++;
    });
    rebuild();
    if(d.w&&typeof d.w==="object")Object.keys(d.w).forEach(function(k){if(byId[k])W[k]=clampW(Math.round(+d.w[k]||0))});
    refreshCards();sess=null;save();setMode(mode);
    iostat(n?("Imported "+n+(n===1?" phrase.":" phrases.")):"Nothing new to import.");
  };
  r.readAsText(file);
}

/* init */
applyTheme();
loadVoices();
if(window.speechSynthesis)window.speechSynthesis.addEventListener("voiceschanged",loadVoices);
syncSpeed();syncRev();applyCover();
buildList();setMode(mode,true);
if("serviceWorker" in navigator&&location.protocol.indexOf("http")===0)navigator.serviceWorker.register("sw.js").catch(function(){});
