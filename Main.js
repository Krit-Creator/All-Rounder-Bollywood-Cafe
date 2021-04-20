var images = [
    C:\Users\Dell\Desktop\All  Rounder Brackets\Dishes\burger.jpg;
    C:\Users\Dell\Desktop\All  Rounder Brackets\Dishes\thali.jpg;
    C:\Users\Dell\Desktop\All  Rounder Brackets\Dishes\Idli.jpg;
    C:\Users\Dell\Desktop\All  Rounder Brackets\Dishes\StuffedParatha.jpg;
    
];

var i = 0;
function nextslide(){
document.getElementById("videos").src = images[i];
i++;
  if(i == 9)
    {i=0;}
}