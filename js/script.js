
    document.forms[0].action="http://ru.aliexpress.com/";
   /*function changeImage(){
       var im = document.images[2];
       im.src = "img/collection.jpg";
       var normalWidth = 110;
       if(im.width>normalWidth){
       im.width=110;
       im.height =138;}
   }*/
    var flag = false;
    function loopImage(){
        var im = document.images[2];
        if(flag)im.src='img/case.jpg';
        else im.src = "img/collection.jpg";
        flag=!flag;
        var normalWidth = 110;
        if(im.width>normalWidth){
            im.width=110;
            im.height =138;}
    }
