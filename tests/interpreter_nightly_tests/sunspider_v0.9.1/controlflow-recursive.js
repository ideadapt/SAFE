//function record(time) {
//    document.getElementById("console").innerHTML = time + "ms";
//    if (window.parent) {
//        parent.recordResult(time);
//    }
//}

//var _sunSpiderStartDate = new Date();

// The Computer Language Shootout
// http://shootout.alioth.debian.org/
// contributed by Isaac Gouy

function ack(m,n){
   if (m==0) { return n+1; }
   if (n==0) { return ack(m-1,1); }
   return ack(m-1, ack(m,n-1) );
}

function fib(n) {
    if (n < 2){ return 1; }
    return fib(n-2) + fib(n-1);
}

function tak(x,y,z) {
    if (y >= x) return z;
    return tak(tak(x-1,y,z), tak(y-1,z,x), tak(z-1,x,y));
}

for ( var i = 3; i <= 5; i++ ) {
    _<>_print(ack(3,i));
    _<>_print(fib(17.0+i));
    _<>_print(tak(3*i+3,2*i+2,i+1));
}


//var _sunSpiderInterval = new Date() - _sunSpiderStartDate;

//record(_sunSpiderInterval);

"PASS";
