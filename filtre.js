//filtre rapide avec une barre de recherche

(function($) {

    //détecter que l'on tape quand on est sur la barre de recherche. C'est l'id categoryfilter et filter
    $('#categoryFilter').focus().keyup(function(event){//keyup c'est quand on lache une touche. focus permet d'avoir le curseur directement sur la barre de recherche.
    var input = $(this);//on stocke le champs dans la variable input
    var val = input.val();//sauvegarde de la valeur de ce champ là
    //construction d'une expression régulière
    if(val =='') {
        $('#filter li').show();
        $('#filter a').removeClass('highlighted');
        return true;
    }
    var regexp ='\\b(.*)';
    for(var i in val){
        regexp +='('+val[i]+')(.*)';
    }
    regexp += '//b';
    $('#filter li').show();
    $('#filter').find('a').each(function(){
        var a = $(this);
        var resultats = a.text().match(new RegExp(regexp,'i'));
       if(resultats) {
           var string = '';
    for (var i in resultats){
        if (i > 0) {
          if(i%2 == 0){
              string +='<a class="highlighted">'+resultats[i]+'<a>';
          }  else{
        string += resultats[i];
    }
       }}
       a.empty().append(string);
    }else {
        a.parent().hide();
    }
    })
    });
    
    })(jQuery);//il faut que jequery soit bien chargé