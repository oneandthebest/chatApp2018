function errpic(img){
    img.src='https://www.sololearn.com/Images/NoAvatar.jpg'
}
function sendmsg(){
    var s= document.getElementById("msgval").value.split(" ")
    var m= s.slice(1).join(" ")
if(document.getElementById('msgval').value.trim() !== "")  
         {
        if(s[0]=="!n"){
            document.getElementById('messages').innerHTML+=`<div id='nmsg'>${m}</div>`
        }
        else{
            document.getElementById('messages').innerHTML+=`<div id='mmsg'>${document.getElementById('msgval').value}</div>`
        }
        }
        document.getElementById("msgval").value=""
        document.getElementById("chat-sec").scrollTop=document.getElementById("chat-sec").scrollHeight
}
function profile(id){
    document.getElementsByTagName('body')[0].classList.toggle('disablescroll')
    document.getElementById("cont-loading").classList.add("load")
    async function data(){
        var a = await fetch("https://soloapi.herokuapp.com/sololearn?sololearn_id="+id)
        if(!a.ok){
            throw new Error ("Error status: "+response.status)
        }
        else{
            var b = await a.json()
            var data= b.User_Basic_Info
    document.getElementById("prof-pic").src=data.User_Profile_Pic_Url
    document.getElementsByClassName("smallpic")[0].src=data.User_Profile_Pic_Url
    document.getElementById("username").innerHTML=data.User_Name
    document.getElementById("lvl").innerHTML=data.User_Current_Level
    document.getElementById("xp").innerHTML=data.User_Total_Xp
    document.getElementById("badges").innerHTML=b.Earned_Badges.length
    document.getElementById("codes").innerHTML=Object.keys(b.User_Codes_Links).length
    document.getElementById("courses").innerHTML=b.User_Completed_Courses_Info.length
    document.getElementById("prof-link").innerHTML="<a href='https://www.sololearn.com/Profile/"+id+"/?ref=app' id='proflink-text'>https://www.sololearn.com/Profile/"+id+"/?ref=app</a>"
    document.getElementById("profile").classList.remove("hide")
    document.getElementById("cont-loading").classList.remove("load")
        }
    }
    data().catch(error=>{
            document.getElementById("cont-loading").classList.remove("load")
            alert("Unfortunately, an error has occurred.\n\n"+error.message)
            document.getElementsByTagName('body')[0].classList.toggle('disablescroll')
        })
}
function sidebar(x){
    document.getElementById("sidebar").classList.toggle("hsidebar")
    setTimeout(function(){
        document.getElementById("bg").classList.toggle("hide")
        document.getElementsByTagName("body")[0].classList.toggle("disablescroll")
    },x)
}
function search(){
    var names=document.getElementsByClassName("title")
    for(let i=0;i<names.length;i++){
        var name= names[i].innerHTML.toUpperCase()
        var sval= document.getElementById("search").value.toUpperCase()
        if(name.indexOf(sval)>-1){
            document.getElementsByClassName("contact")[i].style="display:flex;"
        }
        else{
            document.getElementsByClassName("contact")[i].style="display:none;"
        }
    }
}
function msges(num,name,imglink,id){
    document.getElementsByClassName("whosedp")[0].src=imglink
    document.getElementsByClassName("whosename")[0].innerHTML=name
    document.getElementsByTagName("body")[0].classList.toggle("disablescroll")
    document.getElementsByClassName("whosedp")[0].onclick=function(){profile(id)}
var msges=[
    ["lorem ipsum"],
    ["Burgerrr","Ignorium😑Bartika","😎","!n Kids😑","😑","!n 😑","I'm have you for  tonight Burgerrr 🍔🔪😈","!n Kill sis 😨"],
    ["cause I was without a laptop, a computer and a mobile","Hehe","!n Great! so my theory was right","😐","Whatable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middl"],
    ["!n bartiiii","!n help me with my english exams","cheating is very bad 😐","!n i'm not cheating","!n sharing is caring","!n share your knowledge","!n then together we will be on the TOP OF THE WORLDDDDD","..."],
    ["!n Mera net hmm raat me around 25-30mbps sis 😂","!n Tumhare ghar or kitna aata hai !","Never noticed","Yaha speed display nhi hota","!n Try Ookla app 😋","!n Maine toh vo ookla clone k time speed dekhi 😂🤣","Sahi dikhayega ?","!n No. 1 App hai for speed testing sis","App se dekhu ya clone se?","!n App se pagal 🤣🤣😂😂😂","!n Clone bas ui hai 🤣😂","Hehe aap toh pura source code copy kr deti hai app ki🤯","!n Mai mai hu 😂🤣","🤣","Ok sis... gn","!n Gn 😴💤😪"],
    ["Can I go to the mental hospital?","!n Ya","I'll enjoy there","For sure","!n What about coding??","!n In mental hospital??","Hehe.. I'll have one of the most efficient computers there","And an x-large screen sized tv","No books","!n 🤣🤣🤣😂🤣🤣🤣","!n Ok gotta sleep","!n 😴😴😴😴😴😴😴😴😴😴<br>😴😴😴Good Night 😴😴😴<br>😴😴😴 Sweet Dreams💟😴<br>😴😴© Kunal Chaudhari ©😴<br>😴😴😴😴😴😴😴😴😴😴","Ok gn kiddo... 😴... have some chocos 🍫🍫... don't forget to brush your teeth before and after having them! 😁","!n Ok 😂"],
    ["!n 🥀✿◕‿◕✿  ❀◕‿◕❀ ✿◕‿◕✿ 🥀<br>🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀<br>🌋🔥⛰    🥀G🎯🎯D🥀     ⛰🔥🌋<br>🌋🔥⛰ 🥀M🌝RNING🥀  ⛰🔥🌋<br>🌋🔥⛰     🥀TO SIS 🥀     ⛰🔥🌋<br>🌋🔥⛰🥀🌅🌄🌅🌄🌅🥀⛰🔥🌋<br>🌋🔥⛰ 🥀Have a Nice🥀 ⛰🔥🌋🌋🔥⛰<br>🥀Day Ahead🥀<br>⛰🔥🌋<br>🌋🔥⛰🥀🤗🤗😊🤗🤗🥀 ⛰🔥🌋<br>🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀<br>🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻<br>⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋<br>🥀©️©️🥀ANSHIKA🥀🥀©️©️🥀<br>🙅‍♀️🥀COPYING RESTRICTED 🥀🙅‍♀️<br>🙅‍♀️<br>MODIFYINGRESTRICTED🥀🙅‍♀️<br>🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻\n⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋<br>🥀 ❁◕‿◕❁ ✾◕‿◕✾  ✿◕‿◕✿🥀<br>","🥀✿◕‿◕✿  ❀◕‿◕❀ ✿◕‿◕✿ 🥀<br>🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀<br>🌋🔥⛰    🥀G🎯🎯D🥀     ⛰🔥🌋<br>🌋🔥⛰ 🥀M🌝RNING🥀  ⛰🔥🌋<br>🌋🔥⛰     🥀TO ALL 🥀     ⛰🔥🌋<br>🌋🔥⛰🥀🌅🌄🌅🌄🌅🥀⛰🔥🌋<br>🌋🔥⛰ 🥀Have a Nice🥀 ⛰🔥🌋🌋🔥⛰<br>🥀Day Ahead🥀<br>⛰🔥🌋<br>🌋🔥⛰🥀🤗🤗😊🤗🤗🥀 ⛰🔥🌋<br>🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀<br>🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻<br>⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋<br>🥀©️©️🥀BARTIKA🥀🥀©️©️🥀<br>🙅‍♀️🥀COPYING RESTRICTED 🥀🙅‍♀️<br>🙅‍♀️<br>MODIFYINGRESTRICTED🥀🙅‍♀️<br>🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻\n⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰⛰🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋<br>🥀 ❁◕‿◕❁ ✾◕‿◕✾  ✿◕‿◕✿🥀<br>","!n 🤦‍♀️🤦‍♀️😂🥀😂🤦‍♀️🤦‍♀️","!n To all toh hata lena tha","!n 😅🤣🤣🤣🥀🤣🤣😅😅","Hehe haan 😆","!n 🤦‍♀️😅🥀😅🤦‍♀️"],
    ["!n Gm akitrab","Gn htrap","!n Gm akitrab","Gn htrap","!n Gm akitrab","Gn htrap","!n Gm akitrab","Gn htrap","!n Gm akitrab","Gn htrap","!n Gm akitrab","Gn htrap","!n Gm akitrab","Gn htrap","!n Gm akitrab","Gn htrap","!n Gm akitrab","Gn htrap","!n Gm akitrab","Gn htrap"],
    ["!n study, kid","YOUR PHONE SHOULD BE IN YOUR POCKET 😑","!n i'm on my laptop and my phone is already in my pocket :)","Oh 😐","!n now study, kid","STOP CALLING ME KID","!n ok, kid ^_^","😑","What was that?","!n shhh","!n 🐟","!n me hungry, gotta eat","Ok... go eat 😂","And listen...","I'M NOT A KID AND I WON'T STUDY 😑"],
    ["!n Online kyu ho?","!n Little sis padhayi karo xD"],
    ["🔥","hehe","noice","!n hahahaha &lt;evil laugh&gt;","🔥","WOAH... btw... who r u?","pm🔥","!n Lord of destruction 🔥","hehe","who r u in reality?","!n 🤦‍♀️","!n tanay hun","really?","!n haan re","I NEED PROOF","lol","!n deta hun na proof","hm","waiting..."],
    ["Why do I always have to suffer the pain of tonsillitis? 😑","!n Do some gargle with salt","Na! Will hurt more","!n Do as I say na","Parents are out","And idk where the salt is in the kitchen 😅... and neither can I boil water","!n 🤦‍♀️"],
    ["!n yo bartikey","who r u?","!n arey baba","!n mujhe hi bhul gayi","basketball wala dp?","!n ha","!n xD","hehe 🤣","aapki padhai kesi chal rhi?","aap class 10 me hai na?","!n oooh bhai maro mujhe maro","🔪🗡🔫 ye lijiye","!n 12th me hu","oh... wo kabse?","promotion?","!n mai 12 th me hi hu pichle 10 mahine se","I NEED PROOF","!n 😑"],
    ["Hi piro utsi lypsi","!n 😑","How r u?","!n 😑","😅","!n 😑","Kuch ab likh bhi do","!n 😑","😑","!n 😑"],
    ["https://code.sololearn.com/Wu3CTi977hWu/?ref=app","https://code.sololearn.com/WqUsXEUQgM4O/?ref=app<br><br>Your code's modified version","https://code.sololearn.com/W153Wjsx8oFM/?ref=app","😑","Ignorium","!n 😂","😾","What's your problem","!n 😂","Busy dadu 😒","!n 😂"],
    ["Serena didi...Happy bday 😊🤗... Aap aaj aayiye na ek visit ke liye plzzz😢...Acha legega😄"]
    ]
    for(var x=0;x<msges[num].length;x++){
        var s= msges[num][x].split(" ")
        var m= s.slice(1).join(" ")
        if(s[0]=="!n"){
            document.getElementById("messages").innerHTML+="<div id='nmsg'>"+m+"</div>"
        }
        else{
            document.getElementById("messages").innerHTML+="<div id='mmsg'>"+msges[num][x]+"</div>"
        }
    }
    document.getElementById("chat-sec").classList.remove("hide")
}
window.onload=function(){
var contacts = [
    {
        name:"Coder uncle",
        lmsg:"Hehe",
        ltime:"Just now",
        id:"18694154",
        lstat:"i not seen",
        num:1
    },
    {
        name:"Burgerrr bro",
        lmsg:"Kill sis 😨",
        ltime:"30 mins ago",
        id:"14229595",
        lstat:"i not seen",
        num:1
    },
    {
        name:"SilvenLEAF",
        lmsg:"BTW I had something interesting to show you Xiaoqie",
        ltime:"1 hour ago",
        id:"20007447",
        lstat:"i not seen",
        num:1
    },
    {
        name:"Addy sis",
        lmsg:"You: ...",
        ltime:"2 hours ago",
        id:"14753434",
        lstat:"not seen",
        num:"0"
    },
    {
        name:"Aakaanksha sis",
        lmsg:"Gn 😴💤😪",
        ltime:"Yesterday",
        id:"12942084",
        lstat:"i seen",
        num:0
    },
    {
        name:"Kunal kiddo",
        lmsg:"Ok 😂",
        ltime:"Yesterday",
        id:"19769671",
        lstat:"i seen",
        num:0
    },
    {
        name:"Anshika sis",
        lmsg:"🤦‍♀️😅🥀😅🤦‍♀️",
        ltime:"Yesterday",
        id:"18653347",
        lstat:"i seen",
        num:0
    },
    {
        name:"Htrap",
        lmsg:"You: Gn htrap",
        ltime:"Yesterday",
        id:"18050446",
        lstat:"seen",
        num:0
    },
    {
        name:"Nikhil bhaiya",
        lmsg:"You: I'M NOT A KID AND I WON'T STUDY 😑",
        ltime:"Yesterday",
        id:"3740594",
        lstat:"seen",
        num:2
    },
    {
        name:"Atul bhaiya",
        lmsg:"Little sis padhayi karo xD",
        ltime:"Yesterday",
        id:"19034561",
        lstat:"i not seen",
        num:2
    },
    {
        name:"Deadman",
        lmsg:"You: waiting...",
        ltime:"Yesterday",
        id:"",
        lstat:"seen",
        num:"0"
    },
    {
        name:"Arv",
        lmsg:"🤦‍♀️",
        ltime:"Yesterday",
        id:"3489946",
        lstat:"i seen",
        num:1
    },
    {
        name:"Prince",
        lmsg:"😑",
        ltime:"Yesterday",
        id:"15404118",
        lstat:"i seen",
        num:0
    },
    {
        name:"Utsav",
        lmsg:"😑",
        ltime:"Long ago",
        id:"17904120",
        lstat:"i seen",
        num:0
    },
    {
        name:"Ashu dadaji",
        lmsg:"😂",
        ltime:"Long ago",
        id:"10779261",
        lstat:"i seen",
        num:0
    },
    {
        name:"Serena didi",
        lmsg:"You: Serena didi...Happy bday 😊🤗... Aap aaj aayiye na ek visit ke liye plzzz😢...Acha legega😄",
        ltime:"Long ago",
        id:"4586359",
        lstat:"not seen",
        num:0
    }
]
for(let i=0;i<contacts.length;i++){
    var code
    if(contacts[i].lstat=="not seen"){
        var cont="<i class='fa fa-check'></i>"+contacts[i].ltime
    }
    else if(contacts[i].lstat=="seen"){
        var cont="<i class='fa fa-check-double'></i>"+contacts[i].ltime
    }
    else if(contacts[i].lstat=="i not seen"){
        var cont=contacts[i].ltime+"<br><span id='unseen-num'>"+contacts[i].num+"</span>"
    }
    else if(contacts[i].lstat=="i seen"){
        var cont=contacts[i].ltime
    }
        var imglink=`https://api.sololearn.com/Uploads/Avatars/${contacts[i].id}.jpg`
    code=`<div id='contact' class='contact'><div id='left'><img src='${imglink}' id='dp' onerror='errpic(this)' onclick='profile(${contacts[i].id})'></div><div id='title' onclick='msges(${i},"${contacts[i].name}","${imglink}",${contacts[i].id})'><span class='title'>${contacts[i].name}</span><br><span id='lmsg'>${contacts[i].lmsg}</span></div><div id='right'><span id='ltime'>${cont}</span></div></div>`
    document.getElementById("contacts").innerHTML+=code
}
document.getElementById("profile").onscroll=function(){
        if(document.getElementById("profile").scrollTop > 130){
    document.getElementsByClassName("smallpic")[0].style="opacity:1"
  }
    else{
        document.getElementsByClassName("smallpic")[0].style="opacity:0"
  }
}
document.getElementById("loading").style="display:none"
setTimeout(function(){
        alert("You just hacked into my account! 😱🤭🤭\n BTW Click on the help option in the sidebar.")//idea by @Rishi
    },500)
}