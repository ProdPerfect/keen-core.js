/*!

  ----------------------------------------------------------------------
  Example Usage:
  1) Namespace: Define a custom namespace for the library
  2) Script URI: Define the location of the script to load
  3) Context: Define where the library should be installed
  ----------------------------------------------------------------------

  var modules = {};
  !function(name, path, ctx) {
    // ... etc
  }('MyProdPerfectRecorder', './my-keen-build.js', modules);

  modules.MyProdPerfectRecorder.ready(function(){
    var client = new modules.MyProdPerfectRecorder.Client({
      projectId: '123',
      writeKey: '4324543'
    });
  });

*/

/*!
  Compressed file
*/
!function(name,path,ctx){
  var latest,prev=name!=='ProdPerfectRecorder'&&window.ProdPerfectRecorder?window.ProdPerfectRecorder:false;ctx[name]=ctx[name]||{ready:function(fn){var h=document.getElementsByTagName('head')[0],s=document.createElement('script'),w=window,loaded;s.onload=s.onerror=s.onreadystatechange=function(){if((s.readyState&&!(/^c|loade/.test(s.readyState)))||loaded){return}s.onload=s.onreadystatechange=null;loaded=1;latest=w.ProdPerfectRecorder;if(prev){w.ProdPerfectRecorder=prev}else{try{delete w.ProdPerfectRecorder}catch(e){w.ProdPerfectRecorder=void 0}}ctx[name]=latest;ctx[name].ready(fn)};s.async=1;s.src=path;h.parentNode.insertBefore(s,h)}}
}('ProdPerfectRecorder','./path/to/filename.js',this);

/*!
  Full format
*/
!function(name, path, ctx) {
  var latest, prev = name !== 'ProdPerfectRecorder' && window['ProdPerfectRecorder'] ? window['ProdPerfectRecorder'] : false;
  ctx[name] = ctx[name] || {
    ready: function(fn) {
      var h = document.getElementsByTagName('head')[0],
          s = document.createElement('script'),
          w = window, loaded;
      s.onload = s.onerror = s['onreadystatechange'] = function () {
        if ( (s['readyState'] && !(/^c|loade/.test(s['readyState'])) ) || loaded) return;
        s.onload = s['onreadystatechange'] = null;
        loaded = 1;
        // noConflict
        latest = w.ProdPerfectRecorder;
        if (prev) {
          w.ProdPerfectRecorder = prev;
        }
        else {
          try { delete w.ProdPerfectRecorder; }
          catch(e) { w.ProdPerfectRecorder = void 0; }
        }
        ctx[name] = latest;
        ctx[name].ready(fn);
      }
      s.async = 1;
      s.src = path;
      h.parentNode.insertBefore(s, h);
    }
  };
}('ProdPerfectRecorder', './path/to/filename.js', this);
