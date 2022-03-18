console.log("Function called with Row 6 and 44 seat number")
showberth(6,44);
console.log("Function call with Row 7 and 54 seat number")
showberth(7,54);
function showberth(srow,sseat)
{
    var findberth;
    findberth=sseat % 8;
    if(findberth==1 || findberth==4)
    {
        console.log("In Row"+srow+" Lower Berth Alloted")
    }
    else if(findberth==2 || findberth==5)
    {
        console.log("In Row"+srow+" Middle Berth Alloted")
    }
    else if(findberth==3 || findberth==6)
    {
        console.log("In Row"+srow+" Upper Berth Alloted")
    }
    else if(findberth==7)
    {
        console.log("In Row"+srow+" Side Lower Berth Alloted")
    }
    else
    {
        console.log("In Row"+srow+" Side Upper Berth Alloted")
    }
}