    i = 0; m = 0; let  newKnot= 1; let z1, w1, xc, yc;
    Sx = [];  // screen x coordinate of click
    Sy = [];  // screen y coordinate of click
    Cx = [];  // screen x converted in cartesian coordinate
    Cy = [];
    KnotMatrixAux=[]
    let canvasEl = document.querySelector('#canvas_drawing') //"canvas_drawing" is the "id" of "canvas" defined in html body (<canvas> is a html object)
    let ctx = canvasEl.getContext('2d')  //getContext('2d')  allows us drawing 2d geometry
    ctx.fillStyle='blue'  //text color (color of number vértices)
    let OK=0

    canvasEl.addEventListener('mousemove', (MouseM) => {//get (x,y)-mouse move position
        if (OK==0){
            xM = MouseM.offsetX;
            yM = MouseM.offsetY;
            //document.getElementById("demo3").innerHTML = [xM,yM]
            if (m>2){
                //document.getElementById("demo2").innerHTML = "Para fechar o nó mova e clica o mouse no primeiro ponto."
                if (((Sx[0]-7 < xM) && (xM < Sx[0]+7)) && ((Sy[0]-7 < yM) && (yM < Sy[0]+7))){
                    Dialog_closeKnot.style.left = Sx[0] + "px";
                    Dialog_closeKnot.style.top = Sy[0] + "px"
                    window.Dialog_closeKnot.showModal()
                    OK = 1
                }
            }
        }
    })

    canvasEl.addEventListener('click', (MouseC) => {//get (x,y)-mouse click position
        if (newKnot == 1) {//if newKnot = 1, start the construction of knot diagram
            m = m+1
            x1 = MouseC.offsetX;  // x-coordinate of mouseclick
            y1 = MouseC.offsetY;
            xc = canvasEl.clientWidth;  //width of canvas
            yc = canvasEl.clientHeight;
            z1 = x1 - xc / 2  // transform screen coordinates to cartesian coordinates (with origin (0,0) in the center of canvas)
            w1 = -y1 + yc / 2
            Sx.push(x1) //push() add new item to the final of array
            Sy.push(y1)
            Cx.push(z1)
            Cy.push(w1)
            ctx.font = "20px serif";  //size of font
            ctx.fillText(m, x1 + 5, y1 + 5);
            ctx.lineWidth = 2
            i = i + 1

            if (i > 1) {//if number points > 1, then start the construction of diagram
                ctx.beginPath()
                ctx.moveTo(x11, y11)
                ctx.lineTo(x1, y1)
                ctx.stroke()
            }
            x11 = x1;
            y11 = y1;
        }
    })









    function IntersectCircleLine(xC,yC,r,p1,p2,q1,q2){
        //(xC,yC) =  center of circle;  r = radius of circle:  (x-xC)^2+(y-yC)^2 = r^2
        //P(p1,p2) and Q(q1,q2) points that define segmente line rPQ by P and Q:  rPQ = [(1-s)p1+sq1, (1-s)p2+sq2] (parametrized with parameter s)
        G  = p1 * p1 - 2 * p1 * q1 + p2 * p2 - 2 * p2 * q2 + q1 * q1 + q2 * q2
        K  =  -p1 * p1 * q2 * q2 + 2 * p1 * p1 * q2 * yC + p1 * p1 * r * r - p1 * p1 * yC * yC + 2 * p1 * p2 * q1 * q2 - 2 * p1 * p2 * q1 * yC - 2 * p1 * p2 * q2 * xC + 2 * p1 * p2 * xC * yC - 2 * p1 * q1 * q2 * yC - 2 * p1 * q1 * r * r + 2 * p1 * q1 * yC * yC + 2 * p1 * q2 * q2 * xC - 2 * p1 * q2 * xC * yC - p2 * p2 * q1 * q1 + 2 * p2 * p2 * q1 * xC + p2 * p2 * r * r - p2 * p2 * xC * xC + 2 * p2 * q1 * q1 * yC - 2 * p2 * q1 * q2 * xC - 2 * p2 * q1 * xC * yC - 2 * p2 * q2 * r * r + 2 * p2 * q2 * xC * xC + q1 * q1 * r * r - q1 * q1 * yC * yC + 2 * q1 * q2 * xC * yC + q2 * q2 * r * r - q2 * q2 * xC * xC
        L  = p1 * p1 - p1 * q1 - p1 * xC + p2 * p2 - p2 * q2 - p2 * yC + q1 * xC + q2 * yC
        s  = [(Math.sqrt(K)+L)/G, -(Math.sqrt(K)-L)/G]
        return s
    }
    
    

    function disabled_button(id_button, true_or_false){// funtion to disabled or enabled the button by id="id_button"
        document.getElementById(id_button).disabled = true_or_false;
    }


    function DiagramKnot() {//this function close the knot and start the questions about intersections
        document.getElementById("btn_Yes").disabled = false;
        document.getElementById("btn_No").disabled = false;
        newKnot = -1
        ctx.beginPath()
        ctx.moveTo(x1,y1)
        ctx.lineTo(Sx[0],Sy[0]) //connect the first with de last point (to close the knot diagram)
        ctx.stroke()
        //-------------------- starting to find the intersections between the segments
        let Var, Paramt1, num_I, done,  r
        //Var: used to labeled the name of arcs of knot. num_I: indicate the number of intersections
        done = false
        Paramt1 = []  //this array store all information for each intersection point
        num_I = 0
        numpoints=Cy.length  //get the number of vertices of diagram
        Sx.push(Sx[0])  //to close the diagram, the last point coincide with the firs point
        Sy.push(Sy[0])
        Cx.push(Cx[0])
        Cy.push(Cy[0])
    
        for (let i = 0; i < numpoints; i++) {
            a1 = Cx[i]
            b1 = Cy[i]    //cartesian coordinate of A_i-click
            a2 = Cx[i+1]
            b2 = Cy[i+1]  //cartesian coordinate of A_{i+1}-click
            num_I = 0
            Paramt1 = []
            done = false
            for (let j = 0; j < numpoints; j++) {
                  if (i != j) {
                      // i!=j: intersection of adjacent segments do not matter
                      c1 = Cx[j]  //cartesian coordinate of A_j-click
                      d1 = Cy[j]
                      c2 = Cx[j+1] //cartesian coordinate of A_{j+1}-click
                      d2 = Cy[j+1]
                      t1 = (a1*d1-a1*d2-b1*c1+b1*c2+c1*d2-c2*d1)/(a1*d1-a1*d2-a2*d1+a2*d2-b1*c1+b1*c2+b2*c1-b2*c2)
                      t2 = -(a1 * b2 - a1 * d1 - a2 * b1 + a2 * d1 + b1 * c1 - b2 * c1) / (a1 * d1 - a1 * d2 - a2 * d1 + a2 * d2 - b1 * c1 + b1 * c2 + b2 * c1 - b2 * c2)
    
                      if ((0 < t1 && t1 < 1) && (0 < t2 && t2 < 1))  {//then there was intersection between the segments
                          done = true
                          num_I = num_I+1
                          z1 =  a1+t1*(a2-a1) //local variable of cartes. x-coord. of intersection
                          w1 =  b1+t1*(b2-b1)
                          xa =  z1+xc/2      //local variabel of screen x-coord. of intersection
                          ya = -w1+yc/2
    
                          Paramt1.push([t1, i+1, j+1, z1, w1, xa, ya, a1, b1, a2, b2, c1, d1, c2, d2]) //store all information of each intersection point
                          r = 8
                          ctx.fillStyle='cadetblue'
                          ctx.beginPath()
                          ctx.ellipse(xa,ya, r, r,  Math.PI/4, 0, 2*Math.PI)  //clears a region around the intersection
                          ctx.fill()
                      }
                  }
            }
            for (let i =0; i < (num_I-1); i++){//ordena a lista Paramt1 de acordo com a ordem crescente dos parâmetros t1.
                for (j = i+1; j < num_I; j++){
                    if (Paramt1[j][0] < Paramt1[i][0]){
                        aux = Paramt1[i]
                        Paramt1[i] = Paramt1[j]
                        Paramt1[j] = aux
                    }
                }
            }
            if (done == true){
                for (let n =0; n < Paramt1.length; n++){//significa que n varia de 0 até (len(Paramt1)-1)
                VD.push(Paramt1[n]) //adiciona Paramt1[n] para o novo vetor "VD"
                }
            }
        }
    
      //--------------------- termino para encontrar os pontos de interseção dos segmentos
        NC = VD.length/2 //NC = número de cruzamentos do diagrama do nó;  // = divisão inteira
        if (NC == 0){
            disabled_button("btn_Yes", "true")
            disabled_button("btn_No", "true")
            document.getElementById("demo").innerHTML = "<p>Determinante do nó: D = 1 <br> Polinômio de Alexander: p(t) = 1</p>"
        }
        dNC = 2*NC
    
        //=======================================================================================================================
        q=-1
        for (let i = 0; i < dNC; i++) {//cria um array somente com os indices I que houve interseção
            for (let k = i; k < dNC; k++) {
                if ((VD[i][2] == VD[k][1]) && (VD[i][1] == VD[k][2])) {//busca pelos vetores v_i com [i,j] permutados, isto é, busca pelo vetor oposto
                    q = q + 1
                    VecIndex_I[q] = VD[i][1]
                }
            }
        }
        //=======================================================================================================================
        for(let i=0; i < dNC; i++){ //Cria uma matrix (6 x dNC) preenchida com zeros
            VecUpDown[i]=[]
            for(let j=0; j < 6; j++){
                VecUpDown[i][j]=0
            }
        }
        //=======================================================================================================================
        //VecUpDown = [[0 for j in range(6)] for i in range(dNC)]#preenche o vetor com zeros
        //VecUpDown[0] guarda o índice i do segmento I_i, formado pelos pontos A_i e A_{i+1}
        //VecUpDown[1] guarda o índice j do segmento I_j, formado pelos pontos A_j e A_{j+1}
        //VecUpDown[2] guarda o índice i se I_i passa por cima de I_j e guarda índice j se I_j passa por cima de I_i
        //VecUpDown[3] guarda números que correspondem as variáveis (nomes dos arcos), 1--> a, 2-->b, ...
        //VecUpDown[4] guarda +1 se o determinante referente à terceira coord. do prod. vetorial, ui= vec(A_iA_{i+1}) com wj=vec(A_iA_j) for positivo e
        //                guarda -1 se o determinante referente à terceira coord. do prod. vetorial, ui= vec(A_iA_{i+1}) com wj=vec(A_iA_j) for negativo
        //                +1 e -1 diz qual arco está a direita ou a esquerda do segmento que passa por cima em cada cruzamento.
        // VecUpDown[5] guarda a posição do vetor oposto, útil para montar a matriz do sistema.
        //***********************************************************************************************
        k=-1
        document.getElementById("DesejaLigar").textContent = "Deseja ligar a porção do segmento " + VD[0][1] + '______' + (VD[0][1]+1)+"?";
        return VD, VecUpDown, dNC, k, VecIndex_I   //retorna essas variáveis definidas antes como globais
    }//End function DiagramKnot




    disabled_button("btn_Yes", "true") //disabled = true:  button started disabled
    disabled_button("btn_No", "true")
    disabled_button("btn_PolyAlexander", "true")

    //Below globals variables
    VD=[]  //double vector
    var VecUpDown = new Array(6)
    VecIndex_I=[]  // store the indexes i of intersections
    var dNC        // double of intersections
    let k=-1
    let cont=0
    KnotMatrixAux = []
    KnotMatrix = []



    function NewKnot(){
        window.location.reload() //restart o programa
    }





    function YesClick(){
        start_position: while (true) {
            k=k+1
            if (VecUpDown[k][2] != 0) continue start_position
            break;
        }
        cont = cont+1 //conta a quantidade de cliques (ou seja, a quantidade de interseção = dNC/2

        document.getElementById("DesejaLigar").textContent = "Deseja ligar a porção do segmento " + VecIndex_I[cont] + '______' + (VecIndex_I[cont]+1)+"?";

        if (cont==(dNC/2)){//se alcançar a quantidade de interseções, desativa os botoeSim e BotaoNao
            document.getElementById("btn_Yes").disabled = true;
            document.getElementById("btn_No").disabled = true;
            document.getElementById("DesejaLigar").textContent =""
        }
        xa    = VD[k][5]    //xa e ya são coordenadas (tela) das interseções dos segmentos, usado para criar o círculo
        ya    = VD[k][6]
        ui_x  = VD[k][9]-VD[k][7]      //i = vetor vec(A_iA_{i+1})
        ui_y  = VD[k][10]-VD[k][8]
        wj_x  = VD[k][11]-VD[k][7]     // = vetor vec(A_iA_{j})
        wj_y  = VD[k][12]-VD[k][8]
        sinal = ui_x*wj_y-ui_y*wj_x    //coord. k do prod. vetorial, para fornecer a orientação
        if (sinal > 0) {//orientacao +
            VecUpDown[k][4] = 1
        } else {
            VecUpDown[k][4] = -1 //orientação -
        }
        r = 9        //raio do disco
        VecUpDown[k][0] = VD[k][1]  //VD[k][1] = i
        VecUpDown[k][1] = VD[k][2]  //VD[k][2] = j
        VecUpDown[k][2] = VD[k][1]  //então, quer dizer que o segmento I_i passou por cima do segmento I_j
        //temos que: p_i retorna os dois param. da interseção do círculo (x-z1)^2+(y-z1)^2=r^2 com segmento A_iA_i+1
        p_i = IntersectCircleLine(VD[k][3], VD[k][4], r, VD[k][7], VD[k][8], VD[k][9], VD[k][10])
        //agora converter para coord. da tela e ligar esses dois pontos para fechar a porção desejada do segmento.
        xi = VD[k][7] + p_i[0] * (VD[k][9] - VD[k][7])
        yi = VD[k][8] + p_i[0] * (VD[k][10] - VD[k][8])
        Xi = xi + xc / 2
        Yi = -yi + yc / 2

        xii = VD[k][7] + p_i[1] * (VD[k][9] - VD[k][7])
        yii = VD[k][8] + p_i[1] * (VD[k][10] - VD[k][8])
        Xii = xii + xc / 2
        Yii = -yii + yc / 2

        ctx.beginPath()
        ctx.moveTo(Xi, Yi)
        ctx.lineTo(Xii, Yii) //segmento que une o segmento interrompido
        ctx.stroke()
        //Inicio________________ for (let i = k; k < dNC; i++)
        tex=""
        for (let i = k; k < dNC; i++) {
            if ((VD[i][2] == VD[k][1]) && (VD[i][1] == VD[k][2])){//busca pelos vetores v_i com [i,j] permutados, isto é, busca pelo vetor oposto
                VecUpDown[i][0] = VD[k][2] //uma vez encontrado o oposto em VD, então apenas atualizamos em VecUpDown
                VecUpDown[i][1] = VD[k][1]
                VecUpDown[i][2] = VD[k][1]
                VecUpDown[k][5] = i        // guarda a posição que está o vetor oposto
            }
            if (i == dNC-1 && cont==(dNC/2)) {
                document.getElementById("btn_PolyAlexander").disabled = false;
            } // Este último if funcionou aqui (não sei por que). Coloquei esse mesmo if abaixo deste for e não funcionou (não sei por que);
        }
    }






    function NoClick(){
        start_position: while (true) {//só vai execular o bloco abaixo desse while, se VecUpDown[k][2] = 0.
            k=k+1
            if (VecUpDown[k][2] != 0) continue start_position
            break;
        }
        cont = cont+1 //conta a quantidade de cliques (ou seja, a quantidade de interseção = dNC/2
        document.getElementById("DesejaLigar").textContent = "Deseja ligar a porção do segmento " + VecIndex_I[cont] + '______' + (VecIndex_I[cont]+1)+"?";

        if (cont==(dNC/2)){
            document.getElementById("DesejaLigar").textContent =""
            document.getElementById("btn_Yes").disabled = true;
            document.getElementById("btn_No").disabled = true;
        }
        xa    = VD[k][5]    //xa , ya are screen coordinates of intersections of segments
        ya    = VD[k][6]
        ui_x  = VD[k][9]-VD[k][7]      //i = vetor vec(A_iA_{i+1})
        ui_y  = VD[k][10]-VD[k][8]
        wj_x  = VD[k][11]-VD[k][7]     // = vetor vec(A_iA_{j})
        wj_y  = VD[k][12]-VD[k][8]
        sinal = ui_x*wj_y-ui_y*wj_x    //coord. k do prod. vetorial, para fornecer a orientação
        if (sinal > 0) {//orientacao +
            VecUpDown[k][4] = 1
            } else {
            VecUpDown[k][4] = -1 //orientação -
            }
        VecUpDown[k][0] = VD[k][1]//VD[k][1] = i
        VecUpDown[k][1] = VD[k][2]//VD[k][2] = j
        VecUpDown[k][2] = VD[k][2]// então, quer dizer que I_j passou por cima de I_i
        r=9
        p_i = IntersectCircleLine(VD[k][3], VD[k][4], r, VD[k][11], VD[k][12], VD[k][13], VD[k][14])
        //p_i retorna os dois param. da interseção do círculo (x-z1)^2+(y-z1)^2=r^2 com segmento A_jA_{j+1}
        xi = VD[k][11] + p_i[0] * (VD[k][13] - VD[k][11])
        yi = VD[k][12] + p_i[0] * (VD[k][14] - VD[k][12])
        Xi = xi + xc / 2
        Yi = -yi + yc / 2

        xii = VD[k][11] + p_i[1] * (VD[k][13] - VD[k][11])
        yii = VD[k][12] + p_i[1] * (VD[k][14] - VD[k][12])
        Xii = xii + xc / 2
        Yii = -yii + yc / 2

        ctx.beginPath()
        ctx.moveTo(Xi, Yi)
        ctx.lineTo(Xii, Yii) //segment joining the interrupted segment
        ctx.stroke()

        for (let i = k; k < dNC; i++) {
            if ((VD[i][2] == VD[k][1]) && (VD[i][1] == VD[k][2])){
                VecUpDown[i][0] = VD[k][2]
                VecUpDown[i][1] = VD[k][1]
                VecUpDown[i][2] = VD[k][2]
                VecUpDown[k][5] = i // store position of oposto vector
                //VecIndex_I[m][0]
            }
            if (i == dNC-1 && cont==(dNC/2)) {
                document.getElementById("btn_PolyAlexander").disabled = false;
            } // Este último if funcionou aqui (não sei por que). Coloquei esse mesmo if abaixo deste for e não funcionou (não sei por que);
        }
    }


    function createObject(object, variableName){
        //Bind a variable whose name is the string variableName to the object called 'object'
        let execString = variableName + " = object"
        console.log("Running '" + execString + "'");
        eval(execString)
    }