/*
imGallery v.alpha
Auther : mahoroba shinshi
Web : http://www.kotokoi.org/

20130523 v.alpha Release
*/
window.onload = function ini(){

  var sspc = document.getElementsByName('imgal');
  var spl = sspc.length;
  var gi = document.getElementById('smplimg');

  for (var i = 0; i < spl; i++) {
    var imgObj = new Image();
    imgObj.src = sspc[i];
  }

  for (var i = 0; i < spl; i++) {

    var prv = document.createElement('a');
    var im = document.createElement('img');
    var nxt = document.createElement('a');
    var clo = document.createElement('a');
    prv.appendChild( document.createTextNode("≪ 前へ") );
    clo.appendChild( document.createTextNode("閉じる") );
    nxt.appendChild( document.createTextNode("次へ ≫") );

    sspc[i].onclick = (function(num) {
      return function() {
        if (sspc[num-1] !== undefined) {
          prv.setAttribute('href', sspc[num-1].toString());
        }
        prv.setAttribute('id', 'prv');
        prv.setAttribute('display', '');
        im.setAttribute('src', this.toString());
        im.setAttribute('id', 'sampleimage');
        if (sspc[num+1] !== undefined) {
          nxt.setAttribute('href', sspc[num+1].toString());
        }
        nxt.setAttribute('id', 'nxt');
        clo.setAttribute('href', "#");
        clo.setAttribute('id', 'clo');

        gi.style.display = "";
        gi.appendChild(im);

        var gis = document.getElementById('sampleimage');

        gi.appendChild(prv);
        var gip = document.getElementById('prv');
        if (sspc[num-1] === undefined) {
          gip.style.display = "none";
        }else{
          gip.style.display = "";
        }
        gi.appendChild(clo);
        gi.appendChild(nxt);
        var gin = document.getElementById('nxt');
        if (sspc[num+1] === undefined) {
          gin.style.display = "none";
        }else{
          gin.style.display = "";
        }

        var op = 0, ms = 30;
        var timerID = setInterval( function(){
          op++;
          if( op > 10 ){
            clearInterval( timerID ); 
          }else{
            gis.style.opacity = op/10;
            gis.style.filter = 'alpha( opacity=' + ( op*10 ) + ')';
          }
        }, ms);
        gis.style.width = "auto";

        var num2 = num;
        num2++;

        gis.onclick = function() {
          gis.style.opacity = 0;
          gis.style.filter = 'alpha( opacity=' + ( 0 ) + ')';
          if (sspc[num2] !== undefined) {
            im.setAttribute('src', sspc[num2++].toString());
          }
          if (sspc[num2-2] !== undefined) {
            prv.setAttribute('href', sspc[num2-2].toString());
          }
          if (sspc[num2] !== undefined) {
            nxt.setAttribute('href', sspc[num2].toString());
          }
          
          gi.appendChild(im);

          if (sspc[num2-1] === undefined) {
            gip.style.display = "none";
            im.setAttribute('src', sspc[spl-1].toString());
            gi.appendChild(im);
          }else{
            gi.appendChild(prv);
            gip.style.display = "";
          }
          gi.appendChild(clo);
          if (sspc[num2] === undefined) {
            gin.style.display = "none";
          }else{
            gi.appendChild(nxt);
            gin.style.display = "";
          }

          var op = 0, ms = 30;
          var timerID = setInterval( function(){
            op++;
            if( op > 10 ){
              clearInterval( timerID );
            }else{
              gis.style.opacity = op/10;
              gis.style.filter = 'alpha( opacity=' + ( op*10 ) + ')';
            }
          }, ms);
          return false;
        }
        gin.onclick = function() {
          gis.style.opacity = 0;
          gis.style.filter = 'alpha( opacity=' + ( 0 ) + ')';
          im.setAttribute('src', sspc[num2++].toString());
          if (sspc[num2-1] !== undefined) {
            prv.setAttribute('href', sspc[num2-2].toString());
          }
          if (sspc[num2] !== undefined) {
            nxt.setAttribute('href', sspc[num2].toString());
          }
          gi.appendChild(im);

          if (sspc[num2-1] === undefined) {
            gip.style.display = "none";
          }else{
            gi.appendChild(prv);
            gip.style.display = "";
          }
          gi.appendChild(clo);
          if (sspc[num2] === undefined) {
            gin.style.display = "none";
          }else{
            gi.appendChild(nxt);
            gin.style.display = "";
          }

          var op = 0, ms = 30;
          var timerID = setInterval( function(){
            op++;
            if( op > 10 ){
              clearInterval( timerID );
            }else{
              gis.style.opacity = op/10;
              gis.style.filter = 'alpha( opacity=' + ( op*10 ) + ')';
            }
          }, ms);
          return false;
        }
        gip.onclick = function() {
          gis.style.opacity = 0;
          gis.style.filter = 'alpha( opacity=' + ( 0 ) + ')';
          num2--;
          im.setAttribute('src', sspc[num2-1].toString());
          if (sspc[num2-2] !== undefined) {
            prv.setAttribute('href', sspc[num2-2].toString());
          }
          if (sspc[num2] !== undefined) {
            nxt.setAttribute('href', sspc[num2].toString());
          }
          gi.appendChild(im);

          if (sspc[num2-2] === undefined) {
            gip.style.display = "none";
          }else{
            gi.appendChild(prv);
            gip.style.display = "";
          }
          gi.appendChild(clo);
          if (sspc[num2] === undefined) {
            gin.style.display = "none";
          }else{
            gi.appendChild(nxt);
            gin.style.display = "";
          }

          var op = 0, ms = 30;
          var timerID = setInterval( function(){
            op++;
            if( op > 10 ){
              clearInterval( timerID );
            }else{
              gis.style.opacity = op/10;
              gis.style.filter = 'alpha( opacity=' + ( op*10 ) + ')';
            }
          }, ms);
          return false;
        }
        document.getElementById('clo').onclick = function () {

          var op = 10, ms = 30;
          var timerID = setInterval( function(){
            op--;
            if( op < 0 ){
              clearInterval( timerID );
              for (var c =gi.childNodes.length-1; c>=0; c--) {
                gi.removeChild(gi.childNodes[c]);
              }
              gis.style.opacity = 0;
              gis.style.filter = 'alpha( opacity=' + ( 0 ) + ')';
              gi.style.display = "none";
              gi.style.opacity = "";
              gi.style.filter = "";
            }else{
              gi.style.opacity = op/10;
              gi.style.filter = 'alpha( opacity=' + ( op*10 ) + ')';
            }
          }, ms);
          return false;
        }
        return false;
      }

    })(i);
  }
}
