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
  var app={
    id:{
      source:'source',
      target:'target',
      input:'sourceOptions',
      swap:'sourceSwitch',
      output:'targetOptions',
      text:'Text',
      force:'force',
      exception:'exceptions'
    },
    taskSwap:{
      switchFont:{
        title:'switch Input and Output fonts',
        class:'icon-switch-fonts',
        handler:function(){
          var t = gM.target.name, s = gM.source.name;
          NO('source',t); NO('target',s);
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
        handler:function(){
          g9();
        }
      },
      escapeUnicode:{
        class:'icon-convert-escape',
        title:'escape Unicode',
        handler:function(){
          N3();
        }
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
        handler:function(){
          Qx();
        }
      }
    },
    initTask: function() {
      var task = app.taskOption,
      container = $(app.id.output),
      promises = Object.keys(task).map(function(n, i) {
        var li = eCreate("li"), o = task[n];
        if (o.hasOwnProperty('text')){
          li.appendChild(doc.createTextNode(o.text));
        }
        if (o.hasOwnProperty('class')){
          li.setAttribute('class', o.class);
        }
        if (o.hasOwnProperty('id')){
          li.setAttribute('id', o.id);
        }
        if (o.hasOwnProperty('style')){
          li.setAttribute('style', o.style);
        }
        if (o.hasOwnProperty('title')){
          li.setAttribute('data-title', o.title);
        }
        li.addEventListener("click", function(event){
          if (o.hasOwnProperty('handler')) o.handler(event.target);
        });
        container.appendChild(li);
      });
      Promise.all(promises).then(function(){
        var task = app.taskSwap,
        container = $(app.id.swap),
        promises = Object.keys(task).map(function(n, i) {
          var li = eCreate("li"), o = task[n];
          if (o.hasOwnProperty('text')){
            li.appendChild(doc.createTextNode(o.text));
          }
          if (o.hasOwnProperty('class')){
            li.setAttribute('class', o.class);
          }
          if (o.hasOwnProperty('id')){
            li.setAttribute('id', o.id);
          }
          if (o.hasOwnProperty('style')){
            li.setAttribute('style', o.style);
          }
          if (o.hasOwnProperty('title')){
            li.setAttribute('data-title', o.title);
          }
          li.addEventListener("click", function(event){
            if (o.hasOwnProperty('handler')) o.handler(event.target);
          });
          container.appendChild(li);
        });
      }).then(function(){
        NO(app.id.source, "Zawgyi");
        NO(app.id.target, "WinInnwa");
        $(app.id.exception).value = g8;
        $(app.id.force).value = QN;
        // eText(app.id.source)
        // eText(app.id.target)
        // app.id.force
        // app.id.exception
      }).then(function(){
        gZ({id: eText(app.id.source),N_: true,self: true,KY: true,rows: 20});
      });
    },
    init:function(a){
      app.request.text=a;
      return app.request;
    },
    request:{
      load:function(b,c){
        app.initTask();
      },
      convert:function(b,c){
        // return 'text'.Ng('Zawgyi','Myanmar3');
        return this.text.Ng(b,c);
      }
    }
  };
  function testing(){
    console.log('yes');
  }
  win[os] = app.init;
}("Burglish",window,document));
document.addEventListener("DOMContentLoaded", function(event) {
  new Burglish().load();
  // console.log(Burglish('အမည္မေဖာ္လိုသူ').convert('Zawgyi','Myanmar3'));
  // console.log('အမည္မေဖာ္လိုသူ');
});