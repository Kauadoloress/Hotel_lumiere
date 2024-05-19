let nomehotel = "Hotel Lumiere";
alert(`Bem vindo ao ${nomehotel}`);
let nomeusuario = prompt("Digite seu nome:");
let senhasystem = parseInt(prompt("Digite a senha:"));
let quartosHospedes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let cadastradoNoSistema = [];
senhasystem === 2678 ? systemhotel() : (alert("Senha incorreta!"));

function systemhotel() {

    alert(`Bem vindo ao ${nomehotel}, ${nomeusuario}. É um imenso prazer ter você por aqui!`);
    let opcoesservicos = parseInt(prompt(`Qual seu serviço deseja ultilizar:\n 1)Quantos quartos são?;\n 2)Como soletrar\n 3)Com "S" ou com "Z"?\n 4) Que horas você pode?\n 5) Álcool ou gasolina?\n 6) Ar puro, finalmente.\n 7)Sair `));

    switch (opcoesservicos) {
        case 1:
            reservaquartos();
            break;
        case 2:
            cadastroHospedes();
            break;
        case 3:
            pesquisaHospedes();
            break;

        case 4:
            marcaHora();
            break;

        case 5:
            gasolina(nomeusuario);
            break;

        case 6:
            arPuro(nomeusuario);
            break;
        
        case 7:
            sair(nomeusuario);
            break;
        default:
            alert(`Informe a opção correta`);
            systemhotel();
            break;



    }
}


function reservaquartos() {
    let valordiaria = parseFloat(prompt("Qual valor da diária?"));
    let quantidadeDedias = prompt("Quantos dias serão necessários?");

    if (isNaN(valordiaria) || isNaN(quantidadeDedias) || quantidadeDedias <= 0 || quantidadeDedias > 30) {
        alert("Valor Inválido");
        reservaquartos();
        return;
    } else {
        valorDahospedagem = valordiaria * quantidadeDedias;
        alert(`O valor de ${quantidadeDedias} dias de hospedagem é de R$${valorDahospedagem}`);




    }

    let nomehospede = prompt("Qual o nome do hóspede?");
    confirmReserva(quantidadeDedias, valordiaria, valorDahospedagem, nomehospede);
}



function confirmReserva(quantidadeDedias, valordiaria, valorDahospedagem, nomehospede) {

    let numerodoQuarto = parseInt(prompt("Qual quarto para reserva?(1-20)?"));


    let analiseQuarto = quartosHospedes.includes(numerodoQuarto);

    switch (analiseQuarto) {
        case true:
            alert("Quarto disponível")
            let confirmacaoDaHospedagem = prompt(`${nomehospede}, você confirma a hospedagem por ${quantidadeDedias} dias para o quarto ${numerodoQuarto} por ${valorDahospedagem} ? S/N`);
            confirmacaoDaHospedagem = confirmacaoDaHospedagem.toLocaleUpperCase();
            if (confirmacaoDaHospedagem === "SIM") {
                let removeIndex = quartosHospedes.indexOf(numerodoQuarto);
                quartosHospedes.splice(removeIndex, 1);
                alert(`${nomehospede}, reserva efetuada com sucesso!`);

                systemhotel();


            } else {

                systemhotel();
            }
            break;

        case false:
            alert("Quarto indisponível")
            confirmReserva(quantidadeDedias, valordiaria, valorDahospedagem, nomehospede);
            break;
        default:
            alert("Informe o número corretamente");
            confirmReserva(quantidadeDedias, valordiaria, valorDahospedagem, nomehospede);
            break;
    }



}

function cadastroHospedes() {
    let valorPadraoDiaria = parseFloat(prompt("Qual valor padrão da diária?"));
    let hospedeGratuidade = 0;
    let hospedeMeia = 0;
    let valorTotalHospede = 0;
    let nomeHospede = [""];

    while (true) {
        let nomeDigitado = prompt("Digite seu nome ou caso queira parar digite 'PARE'");
        nomeHospede.push(nomeDigitado);

        nomeDigitado = nomeDigitado.toUpperCase();
        if (nomeDigitado === "PARE") {
            alert(`${nomeDigitado[0]}, o valor total da hospedagem fico com total de R$${valorTotalHospede}; com ${hospedeGratuidade} gratuidade(s); e ${hospedeMeia} meia(s).`);
            break;
        }

        let idadeHospede = parseInt(prompt("Digite sua idade:"));

        if (idadeHospede <= 6) {
            alert(`${nomeDigitado} cadastrada(o) com sucesso, possui gtatuidade.`);
            hospedeGratuidade++;
        } else if (idadeHospede >= 60) {
            alert(`${nomeDigitado} cadastrada(o) com sucesso, possui meia entrada.`);
            valorTotalHospede += valorPadraoDiaria / 2;
            hospedeMeia++;
        } else {
            alert(`${nomeDigitado} cadastrada(o) com sucesso.`);
            valorTotalHospede += valorPadraoDiaria;
        }
    }


}



function pesquisaHospedes() {


    let escolhaOpcoes = parseInt(prompt("Selecione uma opção:\n 1) Cadastrar\n 2) Pesquisar\n 3) lista\n 4)Sair"));
    switch (escolhaOpcoes) {

        case 1:

            if (cadastradoNoSistema.length < 15) {
                let nomeHospede = prompt("Digite o nome do hóspede a ser cadastrado:");
                cadastradoNoSistema.push(nomeHospede);
                alert(`Hóspede ${nomeHospede} foi cadastrado com sucesso!`);
            } else {
                alert("Máximo de cadastros atingido.");
            }
            pesquisaHospedes();
            break;
        case 2:
            let encontrarNome = prompt("Qual nome do Hóspede?");

            if (cadastradoNoSistema.includes(encontrarNome)) {
                alert(`Hóspede ${encontrarNome} foi encontrada(o).`);
                pesquisaHospedes();
            } else {
                alert(`Hóspede ${encontrarNome} não foi encontrado.`)
                encontrarNome = prompt("Digite novamente seu nome")
            }
            pesquisaHospedes();
            break;

        case 3:
            alert(`Lista de hóspdes:\n${cadastradoNoSistema}`);
            pesquisaHospedes();
            break;

        case 4:
            systemhotel();
            break;


        default:
            pesquisaHospedes();
            break;
    }




}

function marcaHora() {
    let numeroConvidado = parseInt(prompt("Qual o número de convidados para o evento?\n Temos o auditório Laranja conta com 150 lugares e espaço para até 70 cadeiras adicionais.\n O auditório Colorado conta com 350 lugares, sem espaço para mais cadeiras. "));

    const auditorioLaranja = "Laranja";
    const auditorioColorado = "Colorado";

    if (numeroConvidado > 350 || numeroConvidado <= 0) {
        alert("Número de convidados inválido");
        marcaHora();

    } else if (numeroConvidado <= 220 && numeroConvidado > 0) {
        let necessidaDeCadeiras = 220 - numeroConvidado;
        if (necessidaDeCadeiras <= 0) {
            alert(`Use o auditório Laranja`);
            alert("Agora vamos ver o agendamento");
            quandoSera(numeroConvidado);

        } else {
            alert(`Use o aiditório Laranja (inclua mais ${necessidaDeCadeiras} cadeiras)`);
            alert("Agora vamos ver o agendamento");
            quandoSera(numeroConvidado);
        }
    } else if (numeroConvidado <= 350) {
        alert("Use o auditório Colorado");
        alert("Agora vamos ver o agendamento");
        quandoSera(numeroConvidado);
    }
}

function quandoSera(numeroConvidado) {
    let hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    let horasFimdesemana = [7, 8, 9, 10, 11, 12, 13, 14, 15];
    let days = ["segunda", "terca", "quarta", "quinta", "sexta"];
    let daysFimdesemana = ["sabado", "domingo"];

    let quandoSemana = prompt("Qual dia da semana do seu evento?");
    quandoSemana = quandoSemana.toLocaleLowerCase();
    let queHoras = parseInt(prompt("Que horas será o evento"));
    let nomeEmpresa = prompt("Qual nome da empresa");

    if (days.includes(quandoSemana)) {
        if (hours.includes(queHoras)) {
            let removeSemana = hours.indexOf(queHoras);
            hours.splice(removeSemana, 1);
            alert(`Auditório reservado para ${nomeEmpresa}. ${quandoSemana} ás ${queHoras}hrs`);

            funcionariosEvento(numeroConvidado, nomeEmpresa, quandoSemana, queHoras);
        } else {
            alert("Auditório indisponivel");
            quandoSera(numeroConvidado);
        }

        alert(`Auditório reservado para ${nomeEmpresa}. ${quandoSemana} ás ${queHoras}hrs`);
    } else if (daysFimdesemana.includes(quandoSemana)) {
        if (horasFimdesemana.includes(queHoras)) {
            let removeSemana = horasFimdesemana.indexOf(queHoras);
            horasFimdesemana.splice(removeSemana, 1);
            alert(`Auditório reservado para ${nomeEmpresa}. ${quandoSemana} ás ${queHoras}hrs`);
            funcionariosEvento(numeroConvidado, nomeEmpresa, quandoSemana, queHoras);
        } else {
            alert("Auditório indisponivel");
            quandoSera(numeroConvidado);
        }
    } else {
        alert("Informe corretamente as informações");
        quandoSera(numeroConvidado);
    }
}

function funcionariosEvento(numeroConvidado, nomeEmpresa, quandoSemana, queHoras) {
    let horaDoEvento = parseInt(prompt("Qual duração do evento em horas?"));
    let garcom = 10.50;
    let garcomPorconvidado = numeroConvidado / 12;
    let garcomPorHora = horaDoEvento / 2;
    let totalDegarcom = parseInt(garcomPorconvidado + garcomPorHora);
    let totalPagarGarcom = parseFloat(totalDegarcom * garcom * horaDoEvento);
    alert(`Custo: R$${totalPagarGarcom.toFixed(2)}`);
    alert("Agora vamos calcular o custo do buffet do hotel para o evento");
    somaBuffet(numeroConvidado, nomeEmpresa, quandoSemana, queHoras, horaDoEvento, totalPagarGarcom, totalDegarcom);

}

function somaBuffet(numeroConvidado, nomeEmpresa, quandoSemana, queHoras, horaDoEvento, totalPagarGarcom, totalDegarcom) {
    custoCafe = parseInt(numeroConvidado * 0.2);
    custoAgua = parseInt(numeroConvidado * 0.5);
    custoSalgado = parseInt(numeroConvidado * 7);

    pagarCafe = parseFloat(custoCafe * 0.80);
    pagarAgua = parseFloat(custoAgua * 0.40);
    pagarSalgado = parseFloat((custoSalgado / 100) * 34);

    let pagarBuffet = parseFloat(pagarCafe + pagarAgua + pagarSalgado)

    let pagarTotalEvento = parseFloat(pagarBuffet + totalPagarGarcom);

    alert(`O evento precisará de ${custoCafe} litros de café, ${custoAgua} litros de água, ${custoSalgado} salgados.`);
    alert(`Evento no Auditório `)

    if (numeroConvidado <= 220 && numeroConvidado > 0) {
        let totaHorasEvento = queHoras + horaDoEvento;
        alert(`Evento no Auditório Laraja\n Nome da empresa:${nomeEmpresa}\n Data:${quandoSemana}, ${queHoras}hrs ás ${totaHorasEvento}hrs\n Duração do Evento: ${horaDoEvento}hrs\n Quantidade de garçons: ${totalDegarcom}\n Quantidades de convidados: ${numeroConvidado}\n\n Custo de garçons: R$${totalPagarGarcom.toFixed(2)}\n Custo Buffet: R$${pagarBuffet.toFixed(2)}\n Valor total do evento: R$${pagarTotalEvento.toFixed(2)};`)

    } else if (numeroConvidado == 350) {
        alert(`Evento no Auditório Colorado\n Nome da empresa:${nomeEmpresa}\n Data:${quandoSemana}, ${queHoras} ás ${totaHorasEvento}\n Duração do Evento: ${horaDoEvento}\n Quantidade de garçons: ${totalDegarcom}\n Quantidades de convidados: ${numeroConvidado}\n\n Custo de garçons: R$${totalPagarGarcom.toFixed(2)}\n Custo Buffet: R$${pagarBuffet.toFixed(2)}\n Valor total do evento: R$${pagarTotalEvento.toFixed(2)};`)

    }

    let efetuarReserva = prompt("ostaria de efetuar a reserva? S/N");
    efetuarReserva = efetuarReserva.toLowerCase();

    if (efetuarReserva == "s" || efetuarReserva == "sim") {
        alert(`Reserva efetuada com sucesso`);
        systemhotel();

    } else {
        alert(`Reserva não efetuada`)
        systemhotel();
    }

}

function calcularTotalposto(precoPorlitro, litrosPosto) {
    return precoPorlitro * litrosPosto;
}

function gasolina(nomeusuario) {
    let valorAlcoolWayne = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
    let valorGasolinaWayne = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
    let valorAlcoolStark = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
    let valorGasolinaStark = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));

    let custoTotalAlcoolWayne = calcularTotalposto(valorAlcoolWayne, 42);
    let custoTotalGasolinaWayne = calcularTotalposto(valorGasolinaWayne, 42);
    let custoTotalAlcoolStark = calcularTotalposto(valorAlcoolStark, 42);
    let custoTotalGasolinaStark = calcularTotalposto(valorGasolinaStark, 42)

    if (custoTotalAlcoolStark < custoTotalAlcoolWayne) {
        if (valorAlcoolStark <= (valorGasolinaStark - (valorGasolinaStark * 0.3))) {
            alert(`${nomeusuario}, é mais barato abastecer com gasolina no posto Stark Petrol.`);

        } else {
            alert(`${nomeusuario}, é mais barato abastecer com álcool no posto Stark Petrol.`);

        }

    } else {
        if (valorAlcoolWayne <= (valorGasolinaWayne - (valorGasolinaWayne * 0.3))) {
            alert(`${nomeusuario}, é mais barato abastecer com gasolina no posto Stark Petrol.`);

        } else {
            alert(`${nomeusuario}, é mais barato abastecer com álcool no posto Stark Petrol.`);

        }


    }
}

function arPuro(nomeusuario) {
    let empresaMaisBarata = "";
    let precoMaisBarato = Infinity;

    do {
        let arNomeEmpresa = prompt("Qual o nome da empresa?");
        let valorAparelho = parseFloat(prompt("Qual o valor por aparelho?"));
        let quatidadeAparelho = parseInt(prompt("Qual a quantidade de aparelhos?"));
        let porcentagemAparelho = parseInt(prompt("Qual a porcentagem de desconto?"));
        let numMinDesconto = parseInt(prompt("Qual o número mínino de aparelhos para conseguir o desconto?"));

        let valorTotal = valorAparelho * quatidadeAparelho;


        quatidadeAparelho >= numMinDesconto ? valorTotal -= (valorTotal * (porcentagemAparelho / 100)) : null;

        valorTotal < precoMaisBarato ? ((empresaMaisBarata = arNomeEmpresa), (precoMaisBarato = valorTotal)) : null;

        alert(`O serviço de ${arNomeEmpresa} custará R$${valorTotal.toFixed(2)}`);
        confirmaRepeticao = prompt(`Deseja informar novos dados, ${nomeusuario}? (S/N)`);

        confirmaRepeticao = confirmaRepeticao.toLowerCase();

        
    } while (confirmaRepeticao === "s" || confirmaRepeticao === "sim");
    alert(`O valor da empresa mais barata ${empresaMaisBarata}, com R$${precoMaisBarato.toFixed(2)}`);

    systemhotel();

}

function sair(nomeusuario){
    alert(`Muito obrigado e até logo, ${nomeusuario}`);
    window.close();
}







