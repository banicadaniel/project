function showHome() {
    var content = document.getElementById("content");
    var pText = document.createElement("p");

    pText.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat eum quam soluta adipisci eligendi fuga
    consequuntur quo voluptates, optio impedit quis accusantium cupiditate consectetur! Tempora temporibus
    alias suscipit sint quas harum necessitatibus, maxime consequuntur eligendi ipsum porro earum est sit
    ut, facere minima delectus ratione hic dolor nulla dignissimos esse iste! Nam eum facere sint sequi autem
    illo impedit unde est.Repellendus nisi iusto velit esse culpa cupiditate tempora minus voluptatibus
    similique dolor.Distinctio iusto tenetur reprehenderit numquam, eos eius incidunt odit dolor ab aliquam
    vitae maiores tempore voluptates ex velit laudantium nesciunt necessitatibus, deserunt beatae, quia fugiat
    commodi voluptatem nihil! Assumenda reprehenderit quibusdam ratione vitae, aspernatur similique vero
    nam quas sed voluptas voluptate omnis non aliquam in.Dolore omnis odio iste nobis dolorum id voluptas
    voluptatum.Voluptatum accusantium quo animi odit laudantium, quidem porro asperiores cumque eaque architecto
    assumenda in? Adipisci blanditiis quas reiciendis qui iure maiores nostrum veritatis voluptas perferendis
    laboriosam! Impedit cupiditate quas quidem ex repudiandae quaerat autem soluta ipsam neque sunt! Est
    mollitia unde, ab architecto provident laborum ex quasi, autem, deserunt inventore exercitationem quo
    fugit ratione repellendus.Tempore beatae consequuntur earum quidem explicabo blanditiis recusandae expedita
    itaque quo aliquid obcaecati minima, ipsa doloribus, eos quisquam culpa tenetur ? Minima, cumque est,
        ab laborum accusantium necessitatibus earum modi incidunt alias asperiores mollitia molestias eaque molestiae ?
            Voluptatibus corrupti corporis sapiente voluptate iure nihil eveniet, omnis molestias deleniti, aliquid
    voluptatum aliquam vero! Labore nihil quam nobis inventore eos mollitia numquam qui ipsam molestiae aperiam
    minus architecto dicta fuga repudiandae quod, officia eligendi expedita reiciendis vel itaque, dolorem
    ea, commodi autem.Ullam expedita quod ipsa nisi facere aperiam perspiciatis neque placeat explicabo
    illo a necessitatibus ut voluptatibus distinctio error omnis repellat iste aliquam esse recusandae, minus
    aut odio vero.Nisi adipisci perspiciatis sint labore mollitia hic esse possimus quo provident.`
    content.innerHTML = "";
    content.appendChild(pText);

}

function showProducts() {
    var content = document.getElementById("content");

    //Sectiune controale//
    var divControls = document.createElement("div");
    var inputProduct = document.createElement("input");
    inputProduct.type = "text";
    inputProduct.id = "inputProduct";
    var buttonAd = document.createElement("input");
    buttonAd.type = "button";
    buttonAd.value = "Add Product";
    buttonAd.onclick = function () {
        addProduct()
    };
    var hText = document.createElement("h1");
    hText.innerText = "Lista produse: ";
    hText.className = "h1Product";
    divControls.appendChild(hText);
    divControls.appendChild(inputProduct);
    divControls.appendChild(buttonAd);

    //creare lista

    var divList = document.createElement("div");
    var uLista = document.createElement("ul");
    uLista.id = "productList";
    divList.appendChild(uLista);
    content.innerHTML = "";
    content.appendChild(divControls);
    content.appendChild(divList);



}

function addProduct() {
    var uLista = document.getElementById("productList");
    var inputProduct = document.getElementById("inputProduct")

    var li = document.createElement("li");
    li.innerText = inputProduct.value;
    uLista.appendChild(li);
    inputProduct.value = "";
}

function showAbout() {
    var content = document.getElementById("content");
    var pText = document.createElement("p");
    var hText = document.createElement("h1");
    hText.innerText = "Despre noi ";

    pText.innerText = `SUNTEM O COMPANIE DE SOFTWARE CU PESTE 13 ANI DE EXPERIENTA IN IMPLEMENTAREA DE PROIECTE COMPLEXE, LA CEL
    MAI RIDICAT NIVEL DE SIGURANTA, ATAT PENTRU CLIENTI CORPORATE, CAT SI PENTRU CLIENTI AFLATI IN DEZVOLTARE.
    Echipele noastre dedicate de experti in software au implementat cu succes peste 1000 de proiecte.Dezvoltam
    aplicatii web, desktop si mobile, site - uri atragatoare si scalabile, ce se concentreaza pe experienta
    utilizatorului, portaluri online custom si solutii e - Commerce.`
    content.innerHTML = "";
    content.appendChild(hText);
    content.appendChild(pText);


    // var firma = document.createElement("img");
    // firma.src = "/img/firma.png";
    content.appendChild(firma);
}

function showContactUs() {
    var content = document.getElementById("content");
    var pText = document.createElement("p");
    pText.innerText = `ESTI INTERESAT DE SERVICIILE NOASTRE DE SOFTWARE? Ne-ar face placere sa lucram impreuna la urmatorul tau proiect. Echipa
        noastra abia asteapta sa inceapa sa - ti dezvolte ideea!`;
    content.innerHTML = "";
    content.appendChild(pText);

    //Form
    var createForm = document.createElement("form");
    content.appendChild(createForm);
    //Name
    var div = document.createElement("div");
    var namelabel = document.createElement('label');
    namelabel.innerHTML = "Name:";
    namelabel.className = "namelabel";
    var inputelement = document.createElement('input');
    inputelement.className = "inputelement1";
    div.appendChild(namelabel);
    div.appendChild(inputelement);
    content.appendChild(div);

    //Email
    div = document.createElement("div");
    var email = document.createElement('label')
    email.innerHTML = "Email:";
    email.className = "email";
    inputelement = document.createElement("input");
    inputelement.className = "inputelement";

    div.appendChild(email);
    div.appendChild(inputelement);
    content.appendChild(div);
    //Message
    div = document.createElement("div")
    namelabel = document.createElement("label");
    namelabel.innerHTML = "Message:";
    namelabel.className = "Message";
    var textArea = document.createElement("textarea");
    textArea.className = "textArea";
    div.appendChild(namelabel);
    div.appendChild(textArea);
    content.appendChild(div);

    //Submit
    div = document.createElement("div");
    var submitelement = document.createElement('input');
    submitelement.setAttribute("type", "submit");
    submitelement.setAttribute("name", "dsubmit");
    submitelement.setAttribute("value", "Submit");
    div.appendChild(submitelement)
    content.appendChild(div);



}