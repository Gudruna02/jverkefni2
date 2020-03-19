# 2.1 Spurningar (4%)

### 1. Afhverju er getElementById() fljótleglegasta aðferðin?

        Af því að id er unique og þá þarf ekki leita meira þegar það er fundið

### 2. Hver er munurinn á static og live NodeList?



### 3. Hver er munurinn á true og false í AddEventListener?
        elem.addEventListener("click", handlerFunction, true);
        elem.addEventListener("click", handlerFunction, false);



### 4. this vísar í Event listener á html element en ekki á object. Þú getur notað bind() til að breyta því. Leystu eftirfarandi kóðadæmi með notkun á bind() til að birta í console “My name is Sam“ en ekki undefined.
        let Person = { 
          name: 'Sam',  
          sayName: function(){
             console.log('My name is '+ this.name); 
          }         };
        buttonEl.addEventListener('click', Person.sayName);

        let Person = {
          name: 'Sam',
          sayName: function(){
            console.log('My name is '+ this.name);
          }
        };
        buttonEl = document.getElementById('id');
        buttonEl.addEventListener('click', Person.sayName.bind(Person));



# 2.2 DOM (4%)
## Í html:

        <p>málsgrein 1</p>
        <p>málsgrein 2</p>
        <div>div 1</div>
          <p>málsgrein 3</p>
        <div>div 2</div>

## Í Javascript:

### 1. Notaðu querySelector() til að velja málsgrein nr 1. og litaðu textann rauðan.

        document.querySelector("p").style.color = "red";

### 2. Veldu allar málgreinar og breyttu textanum í ensku með textContent aðferðinni.

        document.querySelectorAll("p")[0].textContent = "paragraph 1";
        document.querySelectorAll("p")[1].textContent = "paragraph 2";
        document.querySelectorAll("p")[2].textContent = "paragraph 3";

### 3. Bættu við efst með InnerHTML <h1> með textanum Verkefni 2.2.

        document.querySelector("p").innerHTML = "<h1>Verkefni 2.2</h1>" + document.querySelector("p").innerHTML;
        document.querySelector("h1").style.color = "black"; (ef þurfi, af því texti var rauður)

### 4. Bættu við neðst með createElement() og append() málsgrein með nafninu þínu.

        var x = document.createElement("p");
        x.innerHTML = "Anh";
        document.body.append(x);