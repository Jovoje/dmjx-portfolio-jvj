<template>
    <div  id="p1">
        <div class="grow" id="b1" >
            <img class="billede1" src="../images/Studiekort.png" alt="">
            <img class="billede1" src="../images/Aktiv 10.svg" alt="">
            <img class="billede1" src="../images/Aktiv 9.svg" alt="">
            <img class="billede1" src="../images/Kort2.png" alt="">
            

        </div>
        <div id="tekst1">
            <h1>Re-design af DMJX studiekortet</h1>
            <p>I et forløb om visuel retorik og semiotik, satte jeg og fem studie-kammerater os for at lave et re-design forslag til DMJX’s studiekort. Vores nuværende studiekort har både helt praktiske informative mangler, som er nødvendige når man vil fremvise et gyldigt studiekort. Samtidig savnede vi, at kortets design tydeliggjorde skolens ambitioner samt de studerendes kompetencer inde for fedt design.
                Vi gjorde brug af Blender til at 3D-modellere de fire studieretninger på Visuel Kommunikations-uddannelsen (GD, ID, CD og KK). Herefter blev 3D-modellerne mappet i Processing, hvorefter vi kunne lege med rotation, farve og partikler. 
            </p>
        </div>
    </div>

    <div id="p2">
        <div id="tekst2">
        <p>
            <h1>Fysiske objekter i Processing</h1>
            <p>I et forløb om at lære Processing arbejdede jeg med at skabe 3D former i kode af virkelige objekter. I dette forsøg brugte jeg forskellige keramiske skulpturer skabt af min søster.</p>
        </p>
        </div>

        <div id="b2" class="grow">
            <img class="billede2" src="../images/keramik.jpg" alt="">
            <img class="billede2" src="../images/keeramik-kopi.jpg" alt="">
            <video autoplay muted loop class="billede2" src="../images/Keramik3D.mp4"></video>
            <img src="../images/Keramikprocessing.png" alt="">
        </div>
        
    </div>

    <div id="p3">
    
        <div id="b3" class="grow">
            <video id="video" class="billede3" autoplay muted loop src="../images/Pidag.mp4"></video>
            <img id="pibillede" class="billede3" src="../images/piidag.png" alt="">
        </div>
        <div id="tekst3">
        <h1>Pi-dag i Processing</h1>
        <p>
            Endnu en opgave med udgangspunkt i Processing. Her skulle vi komme op med et design-forslag, som kunne bruges til et arrangement på KU. Fokus var at kreere en dynamisk form i kode.
        </p>
        </div>
    </div>

    <div id="p4">
        <div id="tekst4">
            <h1>Planetarium re-design</h1>
        <p>
        Under et design-kursus arbejdede vi med processen af at re-designe et allerede eksisterende produkt. Her var udgangspunktet Planetariets visuelle udtryk. Undersøgelser af den ikoniske bygning på Vesterbros arkitektur, og planetariets historie var led i et længere forløb om at skabe en ny hypotetisk plakat.
    </p>
</div>
        
    <div id="b4" class="grow">
        <img class="billede4" src="../images/skitser3.png" alt="">
        <img class="billede4" src="../images/skitser4.png" alt="">
        <img class="billede4" src="../images/planetarium.jpg" alt="">
        <img id="reklame" class="billede4" src="../images/reklame.png" alt="">
       
    </div>


    </div>
    

</template>

<script>
</script>

<style>

img {
    max-width: 100%;
    height: auto;
    }

.billede1 {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

h1 {
    font-size: 20px;
}

p {
    font-family: Exo;
   
}

#p1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 20px;
    margin-right: 110px;
}

#b1 {
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    padding: 15px;
}

#p2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 20px;
    margin-top: 40px;
    margin-right: 110px;
}

#b2 {
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    padding: 15px;
}

#tekst1 {
    margin-left: 20px;
    line-height: 30px;
    margin-top: 100px;
    text-align: center;
}

#tekst2 {
    margin-left: 30px;
    line-height: 30px;
    margin-top: 250px;
    margin-right: 20px;
    text-align: center;
    
}

#tekst4 {
    margin-left: 100px;
    line-height: 30px;
    margin-top: 150px;
    margin-right: 20px;
    text-align: center;
}

.billede2 {
    border-radius: 5px;
    width: 100%;
    height: 300px;
    object-fit: cover;
}

#p3 {
    display: grid;
    grid-template-columns: 800px 1fr;
    margin-left: 20px;
    margin-right: 110px;
    margin-top: 40px;
    object-fit: cover;
}

#b3 {
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    padding: 15px;
}

.billede3 {
    border-radius: 5px;
    border-radius: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    padding: 15px;
}

#tekst3 {
    margin-left: 20px;
    margin-top: 80px;
    text-align: center;
}

#video {
    width: auto;
    height: 300px;
}

#pibillede {
    margin-right: 400px;
    margin-left: -40px;
    height: 300px;
}

#p4 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 20px;
    margin-top: 40px;
    margin-right: 110px;
    object-fit: cover;
}

#b4 {
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    padding: 15px;
}

.billede4 {
    width: 100%;
    height: auto;
    border-radius: 5px;
    object-fit: cover;
}

#reklame {
    height: 200px;
}


.grow img{
transition: 1s ease;
}

.grow img:hover{
-webkit-transform: scale(1.05);
-ms-transform: scale(1.05);
transform: scale(1.05);
transition: 1s ease;
}



</style>
