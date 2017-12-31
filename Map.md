output initiate
=================
int.NO -> UI, Method
int.gf -> font list UI, Method

input initiate
=================
burglish.gZ
burglish.gx -> UI
  burglish.gD -> Method
  burglish.NM -> Characters list

burglish.gu
burglish.Ns -> keypress
burglish.N8 -> suggestion
burglish.hV -> source font change

```javascript
gM.source.name
gM[eSrc].name
gM.target.name
gM[eTar].name
(function(os,win,doc) {
  'use strict';
  // lib,burglish,burmese,syllable
  // =require basic.Default.js
  // =require lib.Default.js
  // =require int.Default.js
  // =require burglish.Default.js
  // =require burmese.Default.js
  // =require syllable.Default.js
  // =require english.Default.js
  // =require language.Default.js

  var eSrc='source',
  eTar='target',
  eOpt='Options',
  eSwp='Switch',
  eFoc='Force',
  eExc='Except',
  eTxt='Text',
  app={
    taskSwap:{
      switchFont:{
        title:'switch Input and Output fonts',
        class:'icon-switch-fonts',
        handler:function(){
          var t=gM[eTar].name,s=gM[eSrc].name;
          NO(eSrc,t); NO(eTar,s);
        }
      }
    },
    taskOption:{
      showFilter:{
        title:'show filter',
        class:'option icon-show-filter',
        handler:function(e){
          gJ.basic=e.classList.contains("active");
          e.classList.toggle("active");
          if (gJ.basic){
            $("wL").classList.remove('active');
              // $("wR").style.display = "none";
            $("wR").style.display = "none";
          } else {
            $("wL").classList.add('active');
            // $("wR").style.display = "block";
            // $("wR").style.display = "block";
            $("wR").removeAttribute("style");
            // $("wL").removeAttribute("style");
            gb();
          }
        }
      },
      charCode:{
        class:'icon-convert-code',
        title:'character Code',
        handler:g9
      },
      escapeUnicode:{
        class:'icon-convert-escape',
        title:'escape Unicode',
        handler:N3
      },
      convertWithFilter:{
        class:'icon-convert-filter',
        title:'Convert using filter',
        id:'wR',
        style:'display:none;',
        handler:function(){Nl(true, "g1");}
      },
      Convert:{
        text:'Convert',
        class:'icon-convert-normal',
        // class:'icon-emo-happy',
        handler:Qx
      }
    },
    requestLoad: function() {
      var task = app.taskOption,
      container = eOption(eTar),
      promises = Object.keys(task).map(function(n, i) {
        var li = eCreate("li"), o = task[n];
        if (o.hasOwnProperty('text'))li.appendChild(doc.createTextNode(o.text));
        if (o.hasOwnProperty('class'))li.setAttribute('class', o.class);
        if (o.hasOwnProperty('id'))li.setAttribute('id', o.id);
        if (o.hasOwnProperty('style'))li.setAttribute('style', o.style);
        if (o.hasOwnProperty('title'))li.setAttribute('data-title', o.title);
        li.addEventListener("click", function(event){
          o.handler(event.target);
        });
        container.appendChild(li);
      });
      Promise.all(promises).then(function(){
        var task = app.taskSwap,
        container = eSwap(),
        promises = Object.keys(task).map(function(n, i) {
          var li = eCreate("li"), o = task[n];
          if (o.hasOwnProperty('text'))li.appendChild(doc.createTextNode(o.text));
          if (o.hasOwnProperty('class'))li.setAttribute('class', o.class);
          if (o.hasOwnProperty('id'))li.setAttribute('id', o.id);
          if (o.hasOwnProperty('style'))li.setAttribute('style', o.style);
          if (o.hasOwnProperty('title'))li.setAttribute('data-title', o.title);
          li.addEventListener("click", function(event){
            if (o.hasOwnProperty('handler')) o.handler(event.target);
          });
          container.appendChild(li);
        });
      }).then(function(){
        NO(eSrc,gM[eSrc].name);
        NO(eTar,gM[eTar].name);
        eExcept().value = g8;
        eForce().value = QN;
      }).then(function(){
        gZ({id:eSrc+eTxt,N_:true,self:true,KY:false,rows:20});
      });
    },
    int:function(a){
      gM[eSrc]={name:'Zawgyi'};
      gM[eTar]={name:'Myanmar3',direct:true};

      // var gM = {
      //   source:{ name:'Zawgyi'}, target:{ name:'Myanmar3',direct:true }
      //   // source:{ name:'Zawgyi'}, target:{ name:'WinInnwa',direct:true }
      // };
      app.request.text=a;
      return app.request;
    },
    request:{
      load:function(b,c){
        app.requestLoad();
      },
      convert:function(b,c){
        return this.text.Ng(b,c);
      }
    }
  };
  win[os]=app.int;
}("Burglish",window,document));

var eSrc='source',
eTar='target',
eOpt='Options',
eSwp='Switch',
eFoc='Force',
eExc='Except',
eTxt='Text',


function $(e) {
  return doc.getElementById(e);
};
function eCreate(e) {
  return doc.createElement(e);
};
function eEmpty(e) {
  while (e.hasChildNodes()) e.removeChild(e.firstChild);
  return e;
};
function eText(e) {
  return $((e?e:eSrc)+eTxt);
};
eOption()
eOption(eTar)
function eOption(e) {
  return $((e?e:eSrc)+eOpt);
};
eSwap()
function eSwap(e) {
  return $((e?e:eSrc)+eSwp);
};
eForce()
function eForce(e) {
  return $((e?e:eSrc)+eFoc);
};
function eExcept(e) {
  return $((e?e:eSrc)+eExc);
};
```

```javascript
$(id).style.fontFamily = (Oa[QU]? Oa[QU].css.join(",") :'');
// textarea.style.fontSize = (Oa[gM[e].name] ? Oa[gM[e].name].QG : 12) + 'pt';

```
icon
-----
menu,
icon-show-tips -> tips,
icon-known-syllable -> Known Syllables Only,
icon-correct-syntax -> Correct Syntax!
icon-typewriter ->
icon-character-list ->
icon-follow-cursor ->

icon-show-filter -> show more feature
icon-switch-fonts -> Switch input and output fonts
icon-convert-normal -> Convert
icon-convert-filter -> Convert and using user filters
icon-convert-code -> Character Codes
icon-convert-escape -> Escape Unicode

```javascript
'String'.Ng("source", 'target', {"Qv": true});
```


// if (wx.checked) {
//   if (O4 == "K6") {
//     OD[Oz]["Qo"] = false;
//   } else if (O4 == "Qo") {
//     OD[Oz]["K6"] = false;
//   }
// }
// OD[Oz][O4] = wx.checked;
// gu(Oz);
// if (OD[Oz]["Qo"] && O4 == "Qo") hV($("Nk").value);
// $(Oz)["autocomplete"] = OD[Oz]["K6"] ? "Off" : "On";
// if (Ku(O7)) eval(O7)(Oz, O4, true);
// return false;