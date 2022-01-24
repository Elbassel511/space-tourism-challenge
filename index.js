var menuIcon = $ ("#menu-btn")
var active = 0
var navigationMenu = $("#primary-navigation");
menuIcon.click(()=>{
  if (active == 0) {
      
      navigationMenu.css("transform" ,"translateX(0)")
      menuIcon.css("backgroundImage"," url(./assets/shared/icon-close.svg)")
      active=1;
  
    } else  {
      navigationMenu.css("transform" ,"translateX(100%)")
      menuIcon.css("backgroundImage"," url(./assets/shared/icon-hamburger.svg)")
      active=0;
    }  
})

$(".tabs").click(()=>{
  var id = event.target.id;
  $(".tabs").each((i, element) => {
    var x = $(element).attr("id");

    if (x === id) {
      $("#" + x).addClass("active");
      
      $.getJSON("data.json",(data)=>{
        var name = data.destinations[i].name
        var article = data.destinations[i].description
        var distance = data.destinations[i].distance
        var time = data.destinations[i].travel
        var imgUrl= data.destinations[i].images.png
        $("#name").text(name);
        $("#article").text(article);
        $("#distance").text(distance);
        $("#time").text(time);
        $("#distination-img").attr("src",imgUrl);

      })
     
    } else {
      $("#" + x).removeClass("active");
    }
  });
})


$(".dots").click (()=>{
  var id = event.target.id;
  $(".dots").each((i,element)=>{
    var x = $(element).attr("id");
    if (x === id) {
      $("#"+x).attr("aria-selected","true")
      
      
      $.getJSON("data.json",(data)=>{
        data = data.crew;
        $("#position").text(data[i].role);
        $("#name").text(data[i].name);
        $("#crew-info").text(data[i].bio);
        $("#crew-img").attr( "src", data[i].images.png);
        console.log (data[i].name)
        
        

      })


    } else {
      $("#"+x).attr("aria-selected","false")
    }

  }) 
})


$(".circles").click (()=> {
  var id = event.target.id;
  console.log(id)
  $(".circles").each((i,element)=>{
  var x = $(element).attr("id");
  if (x === id) {
    $("#"+x).attr("aria-selected","true")
    
    
    $.getJSON("data.json",(data)=>{
      data = data.technology;
      $("#tech-name").text(data[i].name);
      
      $("#tech-info").text(data[i].description);
      $("#tech-img").attr( "src", data[i].images.landscape);
      $("#tech-img-desktop").attr( "src", data[i].images.portrait);
     
      
      

    })


  } else {
    $("#"+x).attr("aria-selected","false")
  }
})
})


  