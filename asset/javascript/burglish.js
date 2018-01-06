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

  // Myanmar3 not support these functions
  var eSrc='source',
  eTar='target',
  eOpt='Option',
  eSwp='Switch',
  eFoc='Force',
  eExc='Except',
  eTxt='Text',
  eFil='Filter',
  app={
    taskSwap:{
      switchFont:{
        title:'switch Input and Output fonts',
        class:'icon-switch-fonts',
        handler:function(){
          var t = gM[eTar].name, s = gM[eSrc].name;
          i0(eSrc,t); i0(eTar,s);
        }
      }
    },
    taskOption:{
      showFilter:{
        title:'show filter',
        class:'option icon-show-filter',
        handler:function(e){
          var isActive = classToggle(e);
          classToggle(eSrc+eFil,null,isActive);
          if (isActive){
            $("wR").removeAttribute("style");
            g2();
          } else {
            $("wR").style.display = "none";
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
    intTask: function() {
      var task = app.taskOption, container = $(eOption(eTar)),
      promises = Object.keys(task).map(function(n, i) {
        var li = eCreate("li"), o = task[n];
        if (o.hasOwnProperty('text'))li.appendChild(doc.createTextNode(o.text));
        if (o.hasOwnProperty('class'))li.setAttribute('class', o.class);
        if (o.hasOwnProperty('id'))li.setAttribute('id', o.id);
        if (o.hasOwnProperty('style'))li.setAttribute('style', o.style);
        if (o.hasOwnProperty('title'))li.setAttribute('data-title', o.title);
        li.addEventListener("click", function(event){o.handler(event.target);});
        container.appendChild(li);
      });
      Promise.all(promises).then(function(){
        var task = app.taskSwap, container = $(eSwap()),
        promises = Object.keys(task).map(function(n, i) {
          var li = eCreate("li"), o = task[n];
          if (o.hasOwnProperty('text'))li.appendChild(doc.createTextNode(o.text));
          if (o.hasOwnProperty('class'))li.setAttribute('class', o.class);
          if (o.hasOwnProperty('id'))li.setAttribute('id', o.id);
          if (o.hasOwnProperty('style'))li.setAttribute('style', o.style);
          if (o.hasOwnProperty('title'))li.setAttribute('data-title', o.title);
          li.addEventListener("click", function(event){o.handler(event.target);});
          container.appendChild(li);
        });
      }).then(function(){
        i0(eTar, gM[eTar].name);
        i0(eSrc, gM[eSrc].name);
        $(eExcept()).value = g8;
        $(eForce()).value = QN;
      }).then(function(){
        gZ({id:eText(eSrc),N_:true,self:true,KY:false,rows:20});
      });
    },
    int:function(a){
      gM[eSrc]={name:'Zawgyi'};
      gM[eTar]={name:'WinInnwa',direct:true};
      app.request.text=a;
      return app.request;
    },
    request:{
      load:function(b,c){
        app.intTask();
      },
      convert:function(b,c){
        return this.text.Ng(b,c);
      }
    }
  };
  win[os]=app.int;
}("Burglish",window,document));