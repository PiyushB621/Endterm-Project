function adddata()
{

    let parent=document.getElementById("my_form");
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let ph_no=document.getElementById("ph_no").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://todo-28.herokuapp/add", true);
 
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText)
            if(this.responseText==="false")
            {
                 alert("UserInvalid");
                 window.location="http://localhost:8080/"
                return
            }
            else{
                alert("Changes Are Made");


            }

        }
    };
    var data={
        "Name":name,
            "Age":age,
            "Email":email,
            "Address":address,
            "Phone_number":ph_no
    };

    xhttp.send(JSON.stringify(data));


}
