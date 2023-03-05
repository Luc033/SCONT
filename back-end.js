
/// DECLARALÇAO DE VARIAVEIS
var pass = 0;
var assentos = 42;
var vagas = 42;

// FUNÇÃO PARA MOSTRAR NO LABEL O VALOR TOTAL DOS ASSENTOS VAGOS
function mostraTotalVagas() {
    if (vagas >= 0 && vagas < 43) {
        vagas = assentos - pass;
        if (vagas < 0) {
            vagas = 0;
        }

    }
    document.getElementById('lblTotalVagas').innerHTML = vagas;
    console.log('vagas: ' + vagas + ', passageiros: ' + pass);
}

// FUNÇÃO PARA SOMAR A ENTRADA DE PASSAGEIRO, NO FINAL, É CHAMDO A FUNÇÃO ACIMA
function somar1() {
    if (pass >= 0) {
        pass = pass + 1;
    }
    mostraTotalVagas();
    passageirosEmPe();
    totalPass();
}
function somar2() {
    if (pass >= 0) {
        pass = pass + 2;
    }
    mostraTotalVagas();
    passageirosEmPe();
    totalPass();
}

// FUNÇÃO PARA CALCULAR A SAÍDA DE PASSAGEIROS, NO FINALÉ CHAMADO mostraTotalVagas
function subtrair1() {
    if (pass > 0) {
        pass = pass - 1;
    }

    mostraTotalVagas();
    passageirosEmPe();
    totalPass();
}

function subtrair2() {
    if (pass > 0 && pass != 1) {
        pass = pass - 2;
    }

    mostraTotalVagas();
    passageirosEmPe();
    totalPass();
}

function passageirosEmPe(){
    var passEmPe = ((assentos - vagas - pass)*-1) ;
    document.getElementById('lblPassEmPe').innerHTML = passEmPe;
}

function totalPass(){
    document.getElementById('lblTotalPass').innerHTML = pass;
}

// DISPLAY DA SEGUNDA COLUNA

// RETORNO DO DADO DA TOTALIDADE DE ASSENTOS AO USUÁRIO (vide .html) INLINE
// RETORNO DO DADO DA TOTALIDADE DE PASSAGEIROS AO USUÁRIO CHAMADA INLINE (VIDE .HTML)
// RETORNO DO DADO DA TOTALIDADE DE PASSAGEIROS AO USUÁRIO CHAMADA INLINE (VIDE .HTML)
