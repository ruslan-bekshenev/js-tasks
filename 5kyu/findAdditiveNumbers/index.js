function findAdditiveNumbers(n) {
  var makestr=ar=>{
    while (ar.join("").length<n.length) ar.push(ar[ar.length-1]+ar[ar.length-2]);
    return ar.join("")==n ? ar : false;
  };
  for (var i=1;i<=n.length/2+1;i++){
    var n1= +n.substr(0,i) , n2=0;
    for (var j=1;((n1+n2)+"").length<n.length-i-j+1;j++){
      n2= +n.substr(i,j);
      if (makestr([n1,n2])) return makestr([n1,n2]).map(x=>x+"");
    }
  }
  return [];
}