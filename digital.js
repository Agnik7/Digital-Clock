setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    htime = (h<10)?"0"+h : h ;
    mtime = (m<10)?"0"+m : m ;
    stime = (s<10)?"0"+s : s ;
    clock = htime + " : " + mtime + " : " + stime;
    document.getElementById("clock").innerHTML = clock;
}, 1000);
