function bouncingBall(h,  bounce,  window) {
    if( h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1
    let seen = 0;

    while(h > window){
        seen += 1
        h *= bounce
        if(h > window) seen += 1
    }

    return seen;
}