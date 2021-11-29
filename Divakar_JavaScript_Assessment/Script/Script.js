function check()
{
    
    checkUserName();
    checkFName();
    eMail();
    mNumber();
    aaddress();
    // autoFill();

}


function autoFill()
{  
    var find =document.getElementById("cBox");   
    if(find.checked == true)
    {
        document.getElementById("fad1").value =document.getElementById("address").value;       
        // for(var i=0;i<(ad.length);i++)
        // {
        //     alert("hr");
        //     pAd[i]=ad[i];
        // }
    }
}

function checkFName()
{
    
    var name = document.getElementById("fname")
    document.getElementById("fName").style.visibility="hidden";
    document.getElementById("fname").style.borderColor="black";
    if(name.value.trim() == "")
    {
        document.getElementById("fname").style.borderColor="red";
        //alert("he");
        document.getElementById("fName").style.visibility="visible";
        alert("father name can't be empty");
    }
    return;
}

function checkUserName()
{
    
    var name = document.getElementById("name")
    document.getElementById("eName").style.visibility="hidden";
    document.getElementById("name").style.borderColor="black";
    if(name.value.trim() == "")
    {
        document.getElementById("name").style.borderColor="red";
        //alert("he");
        document.getElementById("eName").style.visibility="visible";
        alert("name can't be empty");
    }
    return;
}

function eMail()
{
    document.getElementById("email").style.visibility="hidden";
    var mailId = document.getElementById("eMail").value;
    regx=/^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})((.[a-z]{2,8})?)$/;
    if(regx.test(mailId))
    {

    }else{
        document.getElementById("email").style.visibility="visible";
        alert("invalid mail ID");

    }
    return;
}


function mNumber()
{
    document.getElementById("mNumber").style.visibility="hidden";
    var mnumber = document.getElementById("mnumber").value;
    regx=/^[6-9][0-9]{9}$/;
    if(regx.test(mnumber))
    {

    }else{
        document.getElementById("mNumber").style.visibility="visible";
        alert("invalid mobilenumber");

    }
    return;
}


function aaddress()
{
    
    var address = document.getElementById("address")
    document.getElementById("iAddress").style.visibility="hidden";
    if(address.value.trim() == "")
    {
        
        //alert("he");
        document.getElementById("iAddress").style.visibility="visible";
        alert("address can't be empty");
    }
    return;
}


