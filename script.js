function cheak(){
    var bangla=parseInt(document.getElementsByClassName("form")[0].value);
    var english=parseInt(document.getElementsByClassName("form")[1].value);
    var math=parseInt(document.getElementsByClassName("form")[2].value);
    var ss=parseInt(document.getElementsByClassName("form")[3].value);
    var sc=parseInt(document.getElementsByClassName("form")[4].value);
    var re=parseInt(document.getElementsByClassName("form")[5].value);
    
    //bangla
    if(bangla>=80){
        var bangla1=5.00;
       }
       else if(bangla>=70){
        var bangla1=4.00;
    }
    else if (bangla>=60){
        var bangla1=3.50;
    }
    else if(bangla>=50){
        var bangla1=3.00;
    }
    else if(bangla>=40){
        var bangla1=2.00;
    }
    else if(bangla>=33){
        var bangla1=1.00;
    }
    else if(bangla<=32){
        var bangla1=0.00;
    }

    
    //english
    
    
    if(english>=80){
        var english1=5.00;
       }
       else if(english>=70){
        var english1=4.00;
    }
    else if (english>=60){
        var english1=3.50;
    }
    else if(english>=50){
        var english1=3.00;
    }
    else if(english=40){
        var english1=2.00;
    }
    else if(english>=33){
        var english1=1.00;
    }
    else if(english<=32){
        var english1=0.00;
    }
  
    //math

    if(math>=80){
        var math1=5.00;
       }
       else if(math>=70){
        var math1=4.00;
    }
    else if (math>=60){
        var math1=3.50;
    }
    else if(math>=50){
        var math1=3.00;
    }
    else if(math>=40){
        var math1=2.00;
    }
    else if(math>=33){
        var math1=1.00;
    }
    else if(math<=32){
        var math1=0.00;
    }

    //ss
     
    if(ss>=80){
        var ss1=5.00;
       }
       else if(ss>=70){
        var ss1=4.00;
    }
    else if (ss>=60){
        var ss1=3.50;
    }
    else if(ss>=50){
        var ss1=3.00;
    }
    else if(ss>=40){
        var ss1=2.00;
    }
    else if(ss>=33){
        var ss1=1.00;
    }
    else if(ss<=32){
        var ss1=0.00;
    }

    //sc
     
    if(sc>=80){
        var sc1=5.00;
       }
       else if(sc>=70){
        var sc1=4.00;
    }
    else if (sc>=60){
        var sc1=3.50;
    }
    else if(sc>=50){
        var sc1=3.00;
    }
    else if(sc>=40){
        var sc1=2.00;
    }
    else if(sc>=33){
        var sc1=1.00;
    }
    else if(sc<=32){
        var sc1=0.00;
    }

    //re

    if(re>=80){
        var re1=5.00;
       }
       else if(re>=70){
        var re1=4.00;
    }
    else if (re>=60){
        var re1=3.50;
    }
    else if(re>=50){
        var re1=3.00;
    }
    else if(re>=40){
        var re1=2.00;
    }
    else if(re>=33){
        var re1=1.00;
    }
    else if(re<=32){
        var re1=0.00;
    }

//end    

          
     if(bangla1||english1||math1||ss1||sc1||re1<=0.50){
    document.getElementsByClassName("point")[0].innerHTML="You are failed ";
    }
    
    var result=(bangla1+english1+math1+ss1+sc1+re1)/6;
      document.getElementsByClassName("point")[0].innerHTML="Your result in GPA "+result.toFixed(2);
     
   
    if (result==5.00){
        document.getElementsByClassName("A")[0].innerHTML="You got A+";
    }
   else if (result>=4.00){
        document.getElementsByClassName("A")[0].innerHTML="You got A";
    }
    else if (result>=3.50){
        document.getElementsByClassName("A")[0].innerHTML="You got A-";
    }
    else if (result>=3.00){
        document.getElementsByClassName("A")[0].innerHTML="You got B";
    }
    else if (result>=2.00){
        document.getElementsByClassName("A")[0].innerHTML="You got C";
    }
    else if (result>=1.00){
        document.getElementsByClassName("A")[0].innerHTML="You got D";
    }
    else if (result>=0.00){
        document.getElementsByClassName("A")[0].innerHTML="You are failed";}
     
        
        if(result==5.00){
            document.getElementsByClassName("header")[0].innerHTML="অসাধারণ";
        }
          
       else if(result>=4.00){
            document.getElementsByClassName("header")[0].innerHTML="আর একটু চেষ্টা করলেই A+ আসত";
        }
        else if(result>=3.00){
            document.getElementsByClassName("header")[0].innerHTML="আরও লেখাপড়া করতে হবে";
        }
        else if(result>=2.00){
            document.getElementsByClassName("header")[0].innerHTML="একদম ই মনে হয় পড়না";
        }
        else if(result>=0.00){
            document.getElementsByClassName("header")[0].innerHTML="আহারে কি Result !!!!";
        }
        
    }






  