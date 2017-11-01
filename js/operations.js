
window.onload = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resumes = JSON.parse(this.responseText);
            var resumesBody = document.getElementById("resumesBody");
            for (i = 0; i < resumes.length; i++) {
                var row = document.createElement("tr");
                var position = document.createElement("td");
                position.textContent = resumes[i].position;
                row.appendChild(position);
                var phone = document.createElement("td");
                phone.textContent = resumes[i].phone;
                row.appendChild(phone);
                var fname = document.createElement("td");
                fname.textContent = resumes[i].fname;
                row.appendChild(fname);
                var lname = document.createElement("td");
                lname.textContent = resumes[i].lname;
                row.appendChild(lname);
                var website = document.createElement("td");
                website.textContent = resumes[i].website;
                row.appendChild(website);
                var lCompany = document.createElement("td");
                lCompany.textContent = resumes[i].lCompany;
                row.appendChild(lCompany);
                resumesBody.appendChild(row);

            }

        }
    };

    xhttp.open("GET", "/getAllResumes");
    xhttp.send();
    document.getElementById("content2").style.display = "none"; 
};

function uploadFile() {
    var fileInput = document.querySelector('#file');
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/uploadResume");
    xhr.onload = function () {
        document.getElementById("status").innerText = xhr.responseText;
    };

    // upload success
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
        document.getElementById("status").innerText = xhr.responseText;
    }
    var form = new FormData();
    form.append('title', fileInput.files[0].name);
    form.append('file', fileInput.files[0]);

    xhr.send(form);
}

function hideApplyNow(){
    document.getElementById("content1").style.display = "none"; 
    document.getElementById("content2").style.display = "block"; 
}

function hideSearchNow(){
    document.getElementById("content2").style.display = "none"; 
    document.getElementById("content1").style.display = "block"; 
}