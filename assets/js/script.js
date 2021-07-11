

function refreshPage(){
    location.reload();
}


var form = document.getElementById("form");
form.addEventListener("submit",displayDetails);


function displayDetails(e){
    e.preventDefault();

    document.getElementById("container").style.backgroundImage = "none";
    document.getElementById("code").style.display = "none";
    document.getElementById("code-check").style.display = "block";
    document.getElementById("location").style.display = "none";

    var filterValue = document.getElementById("filterInput");
    

    fetch(`https://api.postalpincode.in/pincode/${filterValue.value}`)
    .then((res) => res.json())
    .then((data) => {

        document.getElementById("code-check").style.display = "none";
        document.getElementById("location").style.display = "block";
        document.querySelector(".effect").style.display = "block";

        console.log(data);

        data.forEach(info => {
            const PostOffice = info.PostOffice;

            let output = '';
            PostOffice.forEach(infos => {
               const Place = infos.Name;
               const Block = infos.Block;
               const BranchType = infos.BranchType;
               const District = infos.District;
               output += `
                <div class="smBx">
                    <div><span> Place</span> :&nbsp;&nbsp;${Place}</div>
                    <div><span> Block</span> :&nbsp;&nbsp;${Block}</div>
                    <div><span> Branch</span> :&nbsp;&nbsp;${BranchType}</div>
                    <div><span> District</span> :&nbsp;&nbsp;${District}</div>
                </div>
                `;
            })

            document.getElementById("output").innerHTML = output;

           
        });
    })
    .catch((err) => alert("Something went wrong, Only numbers, Please check it "))

}