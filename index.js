function a(a, b, c) {
    let sla = [a, b, c];

    let menor = 10000000000000;

    for (let i = 0; i > sla.length; i++) {
        if(sla[i] <= menor) {
            menor = sla[i];
        } 
    }
}