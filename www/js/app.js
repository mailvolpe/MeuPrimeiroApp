
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$("#page-content-wrapper").click(function(e) {
    e.preventDefault();
    hideSidebar();
});

function loadPage(pageName){
  //alert(pageName);
  window.scrollTo(0, 0);  
  $('#html-page').load('pages/'+pageName+'.html');    
  hideSidebar();
}

function hideSidebar(){
    if($("#wrapper").hasClass("toggled")){
        $("#wrapper").toggleClass("toggled");    
    }            
}

