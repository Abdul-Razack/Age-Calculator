let second = 1000;
let minute=  60*second;
let hour = 60*minute;
let day =24*hour;
let week =7*day;
let cyear= 365*day;
let month = 2628003600.0728;
let a=null

function age(){
      a=document.getElementById("dates").value;
      d = new Date(a);   
      time= d.getTime();
      cd = new Date(); 
      ctime = cd.getTime(); 
      InYears=(Math.round(((ctime-time)/cyear))-1);
      InMonths=(Math.round(((ctime-time)/month)-1)); 
      InWeeks=(Math.round(((ctime-time)/week)));
      InDays=(Math.round(((ctime-time)/day)));
      InHours=(Math.round(((ctime-time)/hour)));
      InMinutes=(Math.round(((ctime-time)/minute)));
      InSeconds=(Math.round(((ctime-time)/second)));
      document.getElementById("InYears").innerHTML= InYears;
      document.getElementById("InMonths").innerHTML= InMonths;
      document.getElementById("InWeeks").innerHTML= InWeeks;
      document.getElementById("InDays").innerHTML= InDays;
      document.getElementById("InHours").innerHTML= InHours;
      document.getElementById("InMinutes").innerHTML= InMinutes;
      document.getElementById("InSeconds").innerHTML= InSeconds;
}



