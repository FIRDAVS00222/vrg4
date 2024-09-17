function BMW() {
    console.log('MATIZ')
}



const malibu = function() {
    console.log('Malibu');
}
// malibu();

const chevrolet = () => {
    console.log('JENTRA');
}

// chevrolet();

// let ism = prompt('Ismini kirit ')

function salom(name) {
    // console.log(name , 'Xush kelebsiz');
}

// salom(ism)

let bir = prompt('Birinchi son')
let ikki = prompt('Ikkinchi son')

function taqqos (raqam1, raqam2) {
    if (raqam1 > raqam2) {
       console.log(`${raqam1} katta`);
    }else if (raqam1 < raqam2 ) {
        console.log(`${raqam2} katta`);
    }else if (raqam1 === raqam2 ) {
        console.log('ikkalasi teng');
    }
}
taqqos(bir ,ikki)
