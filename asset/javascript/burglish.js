
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
      output:'targetOptions',
      text:'Text',
      force:'force',
      exception:'exceptions'
    },
    task:{
      Option:{
        text:'Option',
        class:'option',
        handler:function(e){
          // console.log('Option');
          // console.log(e.getAttribute('class'));
          // e.getAttribute('class').indexOf("active");
          gJ.basic=e.classList.contains("active");
          e.classList.toggle("active");
          if (gJ.basic){
            // e.classList.remove('active');
              $("wR").style.display = "none";
              $("wL").style.display = "none";
          } else {
            // e.classList.add('active');
            $("wR").removeAttribute("style");
            $("wL").removeAttribute("style");
            gb();
          }
        }
      },
      Switch:{
        text:'Switch',
        handler:function(){
          var t = gM.target.name, s = gM.source.name;
          NO('source',t); NO('target',s);
        }
      },
      Convert:{
        text:'Convert',
        handler:function(){
          Qx();
          // console.log('Convert');
        }
      },
      CharCode:{
        text:'CharCode',
        handler:function(){
          g9();
          // console.log('CharCode');
        }
      },
      EscapeUnicode:{
        text:'Escape Unicode',
        handler:function(){
          N3();
          // console.log('EscapeUnicode');
        }
      },
      ConvertAdvanced:{
        text:'Convert Advanced',
        id:'wR',
        style:'display:none;',
        handler:function(){
          Nl(true, "g1");
          // console.log('ConvertAdvanced');
        }
      }
    },
    initTask: function() {
      var task = this.task,
      container = $(app.id.output),
      promises = Object.keys(task).map(function(n, i) {
        var li = eCreate("li"), o = task[n];
        li.appendChild(doc.createTextNode(o.text));
        if (o.hasOwnProperty('class')){
          li.setAttribute('class', o.class);
        }
        if (o.hasOwnProperty('id')){
          li.setAttribute('id', o.id);
        }
        if (o.hasOwnProperty('style')){
          li.setAttribute('style', o.style);
        }
        li.addEventListener("click", function(event){
          if (o.hasOwnProperty('handler')) o.handler(event.target);
        });
        container.appendChild(li);
      });
      Promise.all(promises).then(function(){
        NO(app.id.source, "Zawgyi");
        NO(app.id.target, "WinInnwa");
        $(app.id.exception).value = g8;
        $(app.id.force).value = QN;
        // eText(app.id.source)
        // eText(app.id.target)
        // app.id.force
        // app.id.exception
      }).then(function(){
        gZ({id: eText(app.id.source),N_: true,self: true,KY: false,ows: 20});
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