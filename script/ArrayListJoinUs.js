/*list
---------------------------*/

var list_joinus = ["Receive descont", "View information about upcoming travellings", "Transfer or cancel a package", "Add Express Rating", "Update your account information"];
var myresult;
            
myresult = buildList(list_joinus);
            
document.getElementById("tlist").innerHTML= myresult;
            
            
function buildList(joinUs){
    var i;
    var result;
    result="";
                
    for(i=0; i < joinUs.length; i++) {
        result = result + "<li>" + joinUs[i] + "</li>";
    }
    console.log(result);
        return result; 
    }
