
function changeLanguage() {
  // Armazene as strings de texto em diferentes idiomas em variáveis

  var cabecaEnglish = "The study of closed curves without self-intersections in three dimensions."

  var cabecaBrasil = "Estudo das curvas fechadas, sem autointerseções em três dimensões."

  var textElement = document.getElementById("cabeca");
  
  // Verifique qual é o texto atual e mude para o outro idioma
  if (textElement.innerHTML === cabecaEnglish) {
    textElement.innerHTML = cabecaBrasil;
  } else {
    textElement.innerHTML = cabecaEnglish;
  }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Introdução do texto
  var titulo1English = "A bit of History "
  var titulo1Brasil = "Um pouco de História. "
  var textElement = document.getElementById("titulo1");
  if (textElement.innerHTML === titulo1English) {
    textElement.innerHTML = titulo1Brasil;
  } else {
    textElement.innerHTML = titulo1English;
  }


  var IntroducaoEnglish = "The concept of knot in mathematics began to emerge in the 1830s through research by <strong>Carl Friedrich Gauss</strong> (1777-1855). At the time, his interest was in applying this concept to the field of electromagnetism. Decades later in the same century, another great researcher, <strong>William Thomson</strong> (Lord Kelvin) (1824-1907), became interested in the subject as he believed knots would be the key to understanding chemical substances, which, according to his beliefs, would be described by the shapes of knots. Although this belief was not true, the <strong>Theory of Knots</strong> continued to be studied mathematically over the years and applications were discovered in other areas of knowledge such as physics, in the study of DNA in molecular biology and in the study of three-dimensional structures of molecules in chemistry. For example, in the last decades of the 20th century, scientists became interested in studying physical knots to understand knot phenomena in DNA and other polymers. <br> The knot theory can be used to determine if a molecule is chiral (the chiral concept is associated with a carbon atom bonded to four different substituents, disposed according to the vertices of a tetrahedron. The change of position of two of the substituent groups leads to a symmetry of the molecule) or not. Knots, ropes with both ends fixed in place, have been effectively used in the study of the action of topoisomerase in DNA (topoisomerase or DNA topoisomerase is an enzyme that plays an important role in DNA replication and packaging processes). The knot theory can be crucial in building quantum computers through topological quantum computing models.";
  
  
  var IntroducaoBrasil = "O início do conceito matemático de “nó” aparece nos anos de 1830 com pesquisas de <strong>Carl Friedrich Gauss</strong> (1777-1855). Seu interesse, na época, era aplicar esse conceito na área de eletrodinâmica. Nesse mesmo século, décadas depois, outro grande pesquisador, <strong>William Thomson</strong> (Lord Kelvin) (1824-1907), se interessou pelo assunto, pois acreditava que os “nós” seriam a chave para a compreensão das substâncias químicas, que, de acordo com suas crenças, seriam descritas pelas formas dos nós. Apesar de tal crença não condizer com a verdade, a <strong>Teoria dos Nós</strong> continuou a ser matematicamente estudada ao longo dos anos  e aplicações foram sendo descobertas em outras áreas do conhecimento como: na Física, no estudo do DNA na Biologia Molecular e no estudo de estruturas tridimensionais de moléculas na Química, um exemplo disso é que nas últimas décadas do século XX, os cientistas se interessaram em estudar nós físicos para entender fenômenos de nó em DNA e outros polímeros.  <br> A teoria do nó pode ser usada para determinar se uma molécula é quiral (o conceito de quiral é associado a um átomo de carbono ligado a quatro substituintes diferentes, dis postos segundo os vértices de um tetraedro. A mudança de posição de dois dos grupos substituintes conduz a uma simetria da molécula) ou não. Os emaranhados, cordas com ambas as extremidades fixadas no lugar, foram eficazmente utilizados no estudo da ação da topoisomerase no ADN (a topoisomerase ou DNA topoisomerase é uma enzima que desempenha importante papel nos processos de replicação e empacotamento de DNA). A teoria do nó pode ser crucial na construção de computadores quânticos, através do modelos de computação quântica topológicas</p>";
  
  // Obtenha o elemento da página onde o texto será exibido
  var textElement = document.getElementById("text12");
  
  // Verifique qual é o texto atual e mude para o outro idioma
  if (textElement.innerHTML === IntroducaoEnglish) {
    textElement.innerHTML = IntroducaoBrasil;
  } else {
    textElement.innerHTML = IntroducaoEnglish;
  }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  var titulo2English = "Knot determinant."
  var titulo2Brasil = "Determinante do Nó. "
  var textElement = document.getElementById("titulo2");
  if (textElement.innerHTML === titulo2English) {
    textElement.innerHTML = titulo2Brasil;
  } else {
    textElement.innerHTML = titulo2English;
  }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var DeterminateEnglish = "The <strong>determinant</strong> of a knot is a non-negative real number associated with the knot. This number is an invariant of the knot, that is, any two equivalent knots have the same determinant. Therefore, two knots with different determinants are not equivalent."

  var DeterminanteBrasil = "O <strong>determinante</strong> de um nó é um número real não negativo associado ao nó. Este número é um invariante do nó, isto é, quaisquer dois nós equivalentes possuem o mesmo determinante. Desse modo, dois nós com determinantes diferentes não são equivalentes. "

  var textElement = document.getElementById("determinante1");
  if (textElement.innerHTML === DeterminateEnglish) {
    textElement.innerHTML = DeterminanteBrasil;
  } else {
    textElement.innerHTML = DeterminateEnglish;
  }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var titulo21English = "Process to obtain the determinant."
  var titulo21Brasil = "Processo para obter o determinante. "
  var textElement = document.getElementById("titulo21");
  if (textElement.innerHTML === titulo21English) {
    textElement.innerHTML = titulo21Brasil;
  } else {
    textElement.innerHTML = titulo21English;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var DeterminateEnglish1 = "We calculate the determinant of a node algorithmically, as we will see next."
  var DeterminanteBrasil1 = "Calculamos o determinante de um nó de forma algorítmica, como veremos a seguir. "
  var textElement = document.getElementById("determinante11");
  if (textElement.innerHTML === DeterminateEnglish1) {
    textElement.innerHTML = DeterminanteBrasil1;
  } else {
    textElement.innerHTML = DeterminateEnglish1;
  }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var DeterminateEnglish12 = "<li>For the first step, we need to associate a variable to each arc, and for each crossing, we associate an equation of the form; <math display ='block'> <mstyle><msub><mi>a</mi></msub> <mo>+</mo> <msub> <mi>b</mi>  </msub> <mo>-</mo> <msub> <mi>2d</mi> </msub> <mo>=</mo> <msub> <mi>0</mi> </msub> </mstyle> </math> </li> <li> Set any variable from the equation we obtained above equal to zero. </li> <li>Discard any equation of your choice. Finally;</li> <li> a system of 'n-1' equations and 'n-1' variables will be determined, ∀n ∈ N. We calculate the absolute value of the matrix formed by the coefficients of the linear system equations obtained. <br> This will be our <strong>Knot</strong> determinant."


  var DeterminanteBrasil12 = "<li>Para o primeiro passo temos que para cada arco associar uma variável e para cada cruzamento associamos uma equação da forma; <math display ='block'> <mstyle><msub><mi>a</mi></msub> <mo>+</mo> <msub> <mi>b</mi>  </msub> <mo>-</mo> <msub> <mi>2d</mi> </msub> <mo>=</mo> <msub> <mi>0</mi> </msub> </mstyle> </math> </li> <li> Coloque uma variável qualquer da equação que obtemos a cima igual a zero; </li> <li> Descarte uma equação qualquer;E por fim. </li> <li> Ficará então determinado um sistema de 'n − 1' equações  e 'n − 1' variáveis, ∀n ∈ N. Calculamos o modulo da matriz formada pelos coeficientes das equações do sistema linear obtido. <br> Esse será o nosso Determinante do <strong>Nó</strong>. </li>"
  
  
  var textElement = document.getElementById("determinante12");
  if (textElement.innerHTML === DeterminateEnglish12) {
    textElement.innerHTML = DeterminanteBrasil12;
  } else {
    textElement.innerHTML = DeterminateEnglish12;
  }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var polipt = "Polinômio de Alexander."
  var polius = "Alexander polynomial. "
  var textElement = document.getElementById("titulo22");
  if (textElement.innerHTML === polius) {
    textElement.innerHTML = polipt;
  } else {
    textElement.innerHTML = polius;
  }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var polipt1 = "O calculo do polinômio de Alexander é semelhante ao do Determinante, como veremos a seguir."
  var polius1 = "The calculation of the Alexander polynomial is similar to that of the determinant, as we will see next. "
  var textElement = document.getElementById("poli1");
  if (textElement.innerHTML === polius1) {
    textElement.innerHTML = polipt1;
  } else {
    textElement.innerHTML = polius1;

  }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var polipt2 = "<li> Escolha uma orientação para o Nó  <br> <strong>Observação:</strong> 'd' deve ser identificado como a variável que passa superiormente na região do cruzamento; para a escolha de 'a' e 'b' na equação, procedemos da seguinte forma: usando a orientação do trecho superior do nó, no cruzamente, 'a' deve ser identificado como a variável associada à direita de 'd', e consequentemente, 'b' deve ser identificado como a variável     à esquerda de 'd' <br> Veja a próxima imagem: <br> <img src='../img/cruzamento.png' alt='' width='300px' height='300px' style=' border-radius: 33px; margin: 30px  200px 20px 300px; box-shadow: 10px 10px 20px;'> </li> <li> Associe a cada arco uma variável; <math display = 'block'> <mstyle><msub><mi>(a, b, d, ...)</mi></msub></mstyle></math> A cada cruzamento escrevemos a equação da forma; <math display = 'block'> <mstyle><msub><mi>b - ta - (1-t)d = 0</mi></msub></mstyle></math> ou  <math display = 'block'> <mstyle><msub><mi>b - ta = (1-t)d</mi></msub></mstyle></math> </li> <li> Em seguida, coloque uma variável qualquer igual a zero. </li> <li> Descarte qualquer uma das equações. </li> <li> Montamos um sistema e calculamos o determinante da matriz desse sistema, a qual será um <math display='in-line'> <mstyle><msub><mi>δ(t).</mi></msub></mstyle></math> </li> <li> Multiplicamos <math display='in-line'> <mstyle><msub><mi>δ(t)</mi></msub></mstyle></math> por <math display='in-line'> <mstyle><msub><mi>±t^j </mi></msub></mstyle></math> com o intuito de obter <math display='in-line'> <mstyle><msub><mi>Δ(t)</mi></msub></mstyle></math>, tal que,  <math display='in-line'> <mstyle><msub><mi>Δ(t) = Δ(t^-1) e Δ(1) = 1.</mi></msub></mstyle></math> </li>"
  
  
  var polius2 = "<li> Choose an orientation for the knot <br> <strong>Note:</strong> 'd' should be identified as the variable passing over in the crossing region; for the choice of 'a' and 'b' in the equation, we proceed as follows: using the orientation of the upper strand of the knot at the crossing, 'a' should be identified as the variable associated with the right of 'd', and consequently, 'b' should be identified as the variable to the left of 'd' <br> See the next image: <br> <img src='../img/cruzamento.png' alt='' width='300px' height='300px' style=' border-radius: 33px; margin: 30px  200px 20px 300px; box-shadow: 10px 10px 20px;'> </li> <li> Associate a variable to each arc; <math display = 'block'> <mstyle><msub><mi>(a, b, d, ...)</mi></msub></mstyle></math> At each crossing, we write the equation in the form; <math display = 'block'> <mstyle><msub><mi>b - ta - (1-t)d = 0</mi></msub></mstyle></math> or <math display = 'block'> <mstyle><msub><mi>b - ta = (1-t)d</mi></msub></mstyle></math> </li> <li> Next, set any variable equal to zero. </li> <li> Discard one of the equations. </li> <li> We form a system and calculate the determinant of the matrix of this system, which will be a <math display='in-line'> <mstyle><msub><mi>δ(t).</mi></msub></mstyle></math> </li> <li> We multiply <math display='in-line'> <mstyle><msub><mi>δ(t)</mi></msub></mstyle></math> by <math display='in-line'> <mstyle><msub><mi>±t^j </mi></msub></mstyle></math> in order to obtain <math display='in-line'> <mstyle><msub><mi>Δ(t)</mi></msub></mstyle></math>, such that,  <math display='in-line'> <mstyle><msub><mi>Δ(t) = Δ(t^-1) e Δ(1) = 1.</mi></msub></mstyle></math></li> "
  
  
  var textElement = document.getElementById("poli2");
  if (textElement.innerHTML === polius2) {
    textElement.innerHTML = polipt2;
  } else {
    textElement.innerHTML = polius2;
  }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




  var polipt2 = "Para mais imformações e exemplos, <a href='../artigo/'>Clique aqui</a>."
  var polius2 = "For more information and examples, <a href='../artigo/'>clik here</a>. "
  var textElement = document.getElementById("poli3");
  if (textElement.innerHTML === polius2) {
    textElement.innerHTML = polipt2;
  } else {
    textElement.innerHTML = polius2;

  }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var appt = "Aplicativo para calcular os Invariantes."
  var apus = "App to calculate invariants."
  var textElement = document.getElementById("ap");
  if (textElement.innerHTML === apus) {
    textElement.innerHTML = appt;
  } else {
    textElement.innerHTML = apus;

  }


  var appt1 = "Agora veremos um aplicativo que foi criado para calcular ambos os invariantes, o Determinante e o Polinômio de Alexander. No vídeo abaixo podemos acessar um tutorial de como útilizar a API criada:."
  var apus1 = "Now we will see an app that was created to calculate both invariants, the Determinant and the Alexander Polynomial. In the video below we can access a tutorial on how to use the created API:"
  var textElement = document.getElementById("ap1");
  if (textElement.innerHTML === apus1) {
    textElement.innerHTML = appt1;
  } else {
    textElement.innerHTML = apus1;

  }


  var appt2 = "Desenhe o seu nó no quadro abaixo."
  var apus2 = "Draw your node in the chart below."
  var textElement = document.getElementById("api");
  if (textElement.innerHTML === apus2) {
    textElement.innerHTML = appt2;
  } else {
    textElement.innerHTML = apus2;

  }



}
