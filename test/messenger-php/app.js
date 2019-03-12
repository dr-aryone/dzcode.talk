function chooseusername() {
  const user = document.getElementById("cusername").value;
  // assign the cookiname its cookievalue
  document.cookie = `messengerUname=${user}`;
  checkcookie();
}

function checkcookie() {
  if (document.cookie.indexOf("messengerUname") === -1) {
    document.getElementById("whitebg").style.display = "inline-block";
    document.getElementById("loginbox").style.display = "inline-block";
    return;
  }
  document.getElementById("whitebg").style.display = "none";
  document.getElementById("loginbox").style.display = "none";
}

function getCookie(cname) {
  const allck = document.cookie.split(";");
  let match = "";
  let data = "";
  for (const i in allck) {
    if (allck[i].indexOf(cname) !== -1) {
      match = allck[i].trim();
      data = match.substr(cname.length + 1);
    }
  }
  return data;
}
const msginput = document.getElementById("msginput");
const msgarea = document.getElementById("msg-area");

// send a msg through ajax the old xmlhttp way
/* AJAX
   we get the http request then if its ready (meaning the readystate === 4 )
     and the satuts is 200 (http refers to ok) we do what we want
     then we send the request to our URL by opening the url
     and telling it what http method to use
     xmlhttp = new XMLHttpRequest()
     xmlhtp.onreadystatechange = () => {
             if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                your code
             }
     }
      xmlHttp.open( "GET", `URL`,true);
      xmlHttp.send();
*/
function sendmsg() {
  const message = msginput.value;
  if (message !== "") {
    const username = getCookie("messengerUname");
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        msgarea.innerHTML = `<div class="msgc" style="margin-bottom: 30px;">
        <div class="msg msgfrom">${message}</div>
        <div class="msgarr msgarrfrom"></div>
        <div class="msgsentby msgsentbyfrom">Sent by ${username}</div>
        </div>`;
      }
    };
    xmlHttp.open(
      "GET",
      `update.php?username=${username}&message=${message}`,
      true
    );
    xmlHttp.send();
  }
}
