fetch("data.json")
    .then(rep => {
        return rep.json()
    })
    .then(data => {
        // a ce niveau on devrait avoir dans la console les infos renvoyé par l’API

        console.log(data)
    })

//role afficher dans le body les donné du tableau a leur emplacement 
// parametre tableau de donné
//return rien elle affiche


    function affichedonne(tableaudonne){

        tableaudonne.forEach(donnees => {
            
            let user =`
            
               <header class="flex spacebetween bglightblack aligncenter">
        <img src="logo-escape-1.png" alt="" class="w70">
        <nav>
            <a href="" class="padright colorwhite ">activite</a>
            <a href="" class="padright colorwhite">temoignage</a>
            <a href="" class="padright colorwhite">avantage client</a>
            <a href="" class="padright colorwhite">contact</a>
        </nav>
    </header>

    <main class="police bgsable">
        <!-- hero -->
        <section class="bgimg1 colorwhite flex  aligncenter txtcenter">

            <div>
                <h1>nom commercial</h1>
                <p class="padbottom20">Découvrez l'aventure ultime avec Dehors!, votre destination d'escape game à Paris
                </p>
                <button class="btn margbottom30">reserver votre aventure</button>

            </div>


        </section>
        <!-- activite -->
        <section class="container padbottom50 margtop30">

            <div>
                <h2 class="center padbottom20 colorwhite">
                    activite
                </h2>
            </div>

            <div class="flex spacebetween">

                <!-- premiere activite -->

                <div class="card flex aligncenter  ">

                    <img src="logo-escape-1.png" alt="" class="w50">

                    <div class="w50">
                        <h2>nom</h2>
                        <p class="padbottom20">Explorez un manoir mystérieux rempli d'énigmes et de mystères.
                            Parviendrez-vous à résoudre les énigmes et à vous échapper avant que le temps ne s'écoule ?
                        </p>
                        <button>reserver l'aventure</button>
                    </div>
                </div>

                <!-- seconde activite -->

                <div class="card flex aligncenter">

                    <img src="logo-escape-1.png" alt="" class="w50">

                    <div class="w50">
                        <h2>nom</h2>
                        <p class="padbottom20">Explorez un manoir mystérieux rempli d'énigmes et de mystères.
                            Parviendrez-vous à résoudre les énigmes et à vous échapper avant que le temps ne s'écoule ?
                        </p>
                        <button>reserver l'aventure</button>
                    </div>
                </div>


                <!-- troisieme activite -->

                <div class="card flex aligncenter">

                    <img src="logo-escape-1.png" alt="" class="w50">

                    <div class="w50">
                        <h2>nom</h2>
                        <p class="padbottom20">Explorez un manoir mystérieux rempli d'énigmes et de mystères.
                            Parviendrez-vous à résoudre les énigmes et à vous échapper avant que le temps ne s'écoule ?
                        </p>
                        <button>reserver l'aventure</button>
                    </div>
                </div>

            </div>

        </section>

        <section class="bgimg2 flex aligncenter colunm txtcenter colorwhite">
            <h2 class="padbottom10 margtop30">titre avantage client</h2>
            <p class="padbottom10">avantage client</p>
            <p class="padbottom10">avantage client</p>
            <p class="margbottom30">avantage client</p>

        </section>
        <!-- temoignage -->
        <section class="margtop30 padbottom50 container">
            <h2 class="center padbottom20 colorwhite">temoignage</h2>
            <div class="flex spacebetween">
                <div class="card flex aligncenter colunm"><!-- 1er temoignage -->
                    <p>prenom</p>
                    <p>type d'experience</p>
                    <p>commentaire</p>
                    <p class="margbottom30">notes</p>
                </div>

                <div class="card flex aligncenter colunm"><!-- 2eme temoignage -->
                    <p>prenom</p>
                    <p>type d'experience</p>
                    <p>commentaire</p>
                    <p class="margbottom30">notes</p>
                </div>

                <div class="card flex aligncenter colunm"><!-- 3eme temoignage -->
                    <p>prenom</p>
                    <p>type d'experience</p>
                    <p>commentaire</p>
                    <p class="margbottom30">notes</p>
                </div>
            </div>
        </section>

    </main>


    <footer class=" flex spacebetween container aligncenter margtop30 ">



        <img src="logo-escape-1.png" alt="" class="w70">



        
        <div class="">
            <p class="padbottom10"><i class="ph ph-navigation-arrow"></i>16 rue bidule 42100 st Etienne</p>



            <p><i class="ph ph-phone"></i>04 88 98 76 34</p>
        </div>

        <div class="">
            <p class="padbottom10"><i class="ph ph-envelope"></i>contact.dehors@orange.fr</p>



            <p><i class="ph ph-clock"></i>8h30-12h30 14h-17h30</p>
        </div>



    </footer>`


            //document.querySelector("").innerHTML+=usercard

        });

// faire la même fonction pour chaque section 


    }