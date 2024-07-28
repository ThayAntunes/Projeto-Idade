function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anonasc')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Você tem ${idade} anos`
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.classList.add('imgpadding')
        if (sex[0].checked) {
            gen = 'Feminino'
            if (idade >=0 && idade <5) {
                //bebe
                img.setAttribute('src', 'imagens/bebem.png')
            } else if ( idade <13) {
                //crianca
                img.setAttribute('src', 'imagens/criancam.png')
            } else if (idade <18) {
                //jovem
                img.setAttribute('src', 'imagens/jovemm.png')
            } else if (idade <60) {
                //adulto
                img.setAttribute('src', 'imagens/adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        } else if (sex[1].checked) {
            gen = 'Masculino'
            if (idade >=0 && idade <5) {
                //bebe
                img.setAttribute('src', 'imagens/bebeh.png')
            } else if (idade >=5 && idade <13) {
                //crianca
                img.setAttribute('src', 'imagens/criancah.png')
            } else if (idade <18) {
                //jovem
                img.setAttribute('src', 'imagens/jovemh.png')
            } else if (idade <60) {
                //adulto
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }
        res.innerHTML = `<div class="padding">Você tem ${idade} anos e é do gênero ${gen}</div>`
        res.appendChild(img)

    }
}