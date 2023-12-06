function nome(){
    let r1 = document.getElementById("nome").value;
        const pa = r1.split(" ");

        let pri = pa[0];
        pri = pri.charAt(0,1);
        let seg = pa[1];
        seg = seg.charAt(0,1);
        let ter = pa[2];
        document.getElementById("cit").innerHTML = "Citação Bibliográfica: " + ter + ", " + pri + ", " + seg;
}