
var Images = [
    "https://mpng.subpng.com/20190819/se/transparent-black-silhouette-standing-black-and-white-human-beautiful-silhouettes-of-children5d65811d92c172.4573429015669332776011.jpg"
    ,"https://t4.ftcdn.net/jpg/01/71/30/23/360_F_171302351_w6DjRRLmDNZDLwsvZ70MWrGiULSqQ7VC.jpg"
    ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqhVZILT3Lkk-fRfQuTRuG4iZAmmxQelEzOFxb2KtU8KwjU8nfCAZ660EK-CjIHhLwBxM&usqp=CAU"
    ,"http://www.clker.com/cliparts/3/0/2/b/13138817361138262728252528-business-man-standing-silhouette-in-black-and-white-md.png",
];

var People = [
  "Aayra", "Aarav","Sonali","Milind"
];


var i = 0
function nextslide() {
 
  document.getElementById("names").innerHTML = People[i];
  document.getElementById("Members").src = Images[i];
  i++;

  if(i >= 4)
    {
      i=0;
    }
  
}







