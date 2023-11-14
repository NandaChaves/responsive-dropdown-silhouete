var countrys = ['Morocco','Brazil','USA','France','India','Italy','Spain','Portugal','Peru']
        countrys.sort()
        let i=0;
        var option;
        while(i<countrys.length){
            option += '<option value="'+ countrys[i] + '">' + countrys[i]+"</option>";
            i++;
        }
        document.getElementById('select').innerHTML = option;

        var dados = new Object();
        var info = [
        {
        id:'Brazil',
         name: 'Carnaval Pernambucano| 17 de Fevereiro a 22 de Fevereiro',
         preco: 950
        },
        {
         id:'Brazil',
         name: 'Semana no Rio de Janeiro| 19 de Janeiro a 29 de Janeiro',
         preco: 1050
        },
        {
         id:'Brazil',
         name: '4 dias em Minas Gerais| 10 Agosto a 14 de Agosto',
         preco: 450},
        {
         id:'Morocco',
         name: '7 dias em Marrakech',
         preco: 750
        },
        {
         id:'Morocco',
         name: 'Fim de ano em Fez',
         preco: 450
        },
        {
         id:'Morocco',
         name: 'Férias azuis em Chefchaouen',
         preco: 850.7
        },
        {
         id:'Italy',
         name: '3 dias em Florença| 19 de Janeiro a 29 de Janeiro',
         preco: 1050
        },
        {
         id:'Italy',
         name: 'Temporada Napolitana| 17 de Fevereiro a 22 de Fevereiro',
         preco: 950
        },
        {
         id:'Italy',
         name: 'Veneza Padu e Verona no Carnaval| 10 Fevereiro a 16 de Fevereiro',
         preco: 870},
        {
         id:'Spain',
         name: 'Reveillon em Ibiza| 28 de Dezembro a 5 de Janeiro',
         preco: 750.9
        },
        {
         id:'Spain',
         name: 'Fallas em Valência',
         preco: 650.5
        },
        {
         id:'Spain',
         name: 'Madrid a monumental| 10 de abril a 14 de abril',
         preco: 890.7
        },
        {
         id:'Portugal',
         name: '7 dias no Porto',
         preco: 750.9
        },
        {
         id:'Portugal',
         name: 'Fim de semana na Sera da Estrela',
         preco: 850.7
        },
        {
         id:'Portugal',
         name: 'Praias Lusas',
         preco: 850.7
        },
        {
         id:'Peru',
         name: '3 dias em Cuzco',
         preco: 950.9
        },
        {
            id:'Peru',
            name: '9 days PERU BEST COAST & ANDES',
            preco: 1350.7
        },
        {
            id:'Peru',
            name: '12 days BEST OF PERU',
            preco: 820.7
        },
        {
         id:'USA',
         name: 'Fim de semana em Miami| 10 Fevereiro a 16 de Fevereiro',
         preco: 870
        },
        {
         id:'USA',
         name: 'San Francisco| 17 de Fevereiro a 22 de Fevereiro',
         preco: 950
        },
        {
         id:'USA',
         name: 'Carnaval em Nova Orleans| 19 de Janeiro a 29 de Janeiro',
         preco: 1050
        },
        {
         id:'France',
         name: 'Fim de semana em Paris| 28 de Dezembro a 5 de Janeiro',
         preco: 850
        },
        {
         id:'France',
         name: 'Marseilhe| 28 de Dezembro a 5 de Janeiro',
         preco: 658
        },
        {
         id:'France',
         name: 'Temporada em Versailhes| 12 de Março a 19 de Março',
         preco: 1300.7
        },
        {
         id:'India',
         name: 'Rajastão e Varanasi | 12 de Novembro a 15 de Novembro',
         preco: 750
        },
        {
         id:'India',
         name: 'Tour por Agra| 15 de Março a 25 de Março',
         preco: 1111.9
        },
        {
         id:'India',
         name: 'Tour pelo templo Tirumala| 15 de Março a 25 de Março',
         preco: 1089.9
        },
];
        function changeImage(country){
           /*document.getElementById("image").innerHTML = '<img width="300px"; height="300px"; class="" src=./images/'+pais.value+'.jpg>';*/
           document.getElementById("img").src = './images/'+country.value+'.jpg';
           document.getElementById("video").src = './images/'+country.value+'.mp4';
           document.getElementById("img1").src = './images/'+country.value+'1.jpg';
           document.getElementById("img2").src = './images/'+country.value+'2.jpg';
           document.getElementById("img3").src = './images/'+country.value+'3.jpg';
            
            let items ="";
            for (let i=0;i<info.length;i++){
                if(info[i].id == country.value){
                  document.getElementsByTagName("h2")[0].innerHTML= `${info[(i+3)-2].name}`;
                  document.getElementsByTagName("p")[0].innerHTML= `${info[(i+3)-2].preco}€`;

                  document.getElementsByTagName("h2")[1].innerHTML= `${info[i++].name}`;
                  document.getElementsByTagName("p")[1].innerHTML= `${info[(i++)-1].preco}€`;

                  document.getElementsByTagName("h2")[2].innerHTML= `${info[i].name}`;
                  document.getElementsByTagName("p")[2].innerHTML= `${info[i].preco}€`;
                }
            }
        }