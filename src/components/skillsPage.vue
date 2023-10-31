<template>
    <main>
 
 
<!-- 2 section start-->

<section class="what-i-do"> <!-- left text-->

<div class="what-i-do-container">

    <div class="widc-left">
         <h2 id="wid-h3">HVAD JEG <span id="wid-h3-color2">LAVER</span> SOM MULTIMEDIEDESIGNER</h2>


<!-- link pil-->
<router-link id="artboard-link" to="/portfolio"> <!-- link pil-->
<img src="@/assets/images/pil-44-2-5.png" alt="">
 <span>
 PORTFOLIO 
 </span> 
</router-link>  


<!-- højre boks med iconer-->
</div>
<div class="widc-right">

<div class="widc-right-icons">
 <img class="" src="@/assets/images/video7.png" alt="">
 <h3>Video</h3>
 <p>Videooptagelse, redigering</p>
 <p>og video effektor.</p>
</div>

<div class="widc-right-icons">
 <img class="" src="@/assets/webd25.png" alt="">
 <h3>Web designs</h3>
 <p>udvikling og design af websites,</p> 
 <!-- <p>baseret på klientens præferrencer. </p> -->
</div>

<div class="widc-right-icons">
<img class="" src="@/assets/ux25.png" alt="">
<h3>UX & UI</h3>
<p>Skaber brugervenlighed</p>
<p>samt bedre brugeroplevelse på brugerflader.</p>
</div>

<div class="widc-right-icons">
<img class="" src="@/assets/images/branding5.png" alt="">
<h3>Branding & Rebranding</h3>
<p>Giver nye/gamle brand nyt liv </p>
<!-- <p>skaber et stærkt brand for din virksomhed.</p> -->
</div>

</div>
</div>
</section>

<!-- 2. sektion end-->



<!-- 3. sektion slut-->

<!-- venstre boks-->
<section class="work-with">
<div class="work-with-container">
<div class="work-left">
<h1>VÆRKTØJ</h1>
<h3 id="work-h3">DESIGNER MED</h3>
<p>Daglige arbejder og designer jeg med adobe pakken </p>
<p>Når jeg videoredigere, laver effekter og designer websites.</p> 
<p> print, vektorgrafik og designer for promovering. Kan programmere </p>
<p>i visuel studio, anvende javascript og frameworks </p>




<!-- højre boks iconer-->
<div class="work-right">

<div class="work-right-icons">
<img class="" src="@/assets/images/ai-8.png" alt=""></div>

<div class="work-right-icons">
<img class="" src="@/assets/images/ps-88.png" alt=""></div>

<div class="work-right-icons">
<img class="" src="@/assets/images/pr.png" alt=""></div>

<div class="work-right-icons">
<img class="" src="@/assets/images/xd.png" alt=""></div>

<div class="work-right-icons">
<img class="" src="@/assets/images/ae.png" alt=""></div>

<div class="work-right-icons">
<img class="" src="@/assets/ai5.png" alt=""></div>

<div class="work-right-icons">
<img class="" src="@/assets/github.png" alt=""></div>

<div class="work-right-icons">
<img class="" src="@/assets/visuel.png" alt=""></div>
</div>


</div>
</div>
</section>
<!-- 3. sektion slut-->
</main>
</template>

<script setup>

</script>

<style lang="scss" scoped>

/* 2. sektion Widc start*/

/* Wid container venstre*/
.what-i-do {
  height:auto; /** størrelse på området */
  background-color: #e6dada;
  font-family: Courier New;
  // font-size: 50px;
  border-radius: 1rem;
  box-shadow: 3px 3px 3px 3px  rgba(190, 189, 189, 0.2) inset;
  }

.what-i-do-container {
  color:#6c6a6a;
  display: flex;
  border: #ededed;
}

.widc-left { /* Skub indholdet inde i boxen */
  width:65%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding-left: 80px;
 margin-top: 2rem;
 margin-left: 100px;
  
} 

/* tekst wid*/
#wid-h3-a{
  display: flex;
  font-size: 20px;
  align-items: center;
  
  
}

.widc-left{
  font-size: 35px;
  font-style: bold;

}

#wid-h3-color2 {
  color: #877e84;
  font-size: 35px;
  font-style: bold;
  }

 /* link pil portfolie*/
.widc-left a img { /* størrelse på pilen pil-44-2-5 */
  height: 100px;
  margin-right:3px;
  margin-top: 20px;
  }

#widc-left a {
  color:#ededed;
  display: flex;
  font-family: Courier New;
font-size: 70px;
}



#wid-h3-a img {
  height: 80px;
  margin-right: 10px;
}


/* højre 2 sektion*/
.widc-right {
  display: flex;
  flex-wrap: wrap;
  width:60%; /* skift for at gøre box brederererere*/
  font-size: 25px;
  font-display: flex-start;
  padding-right: 70px;
   margin: 30px;
 
  }
.widc-right-icons {
  width:50%;
  box-sizing: border-box;
  height:150px;
  background-color: #e6dada; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.widc-right-icons h3 {
  font-size: 15px;
}
.widc-right-icons p{
  font-size: 10px;
}
.widc-right-icons img {
  height: 100px;
  padding: 10px;
  
}

/* 2. sektion slut*/

/* 3. sektion start*/
.work-with-container{
 flex-direction: column;
  color: #ededed;
  background-color: #000000;
  padding: 20px;
  border-radius: 1rem;
  margin-top: 0.5rem;
  box-shadow: 3px 3px 3px 3px  rgb(251, 200, 200, 0.2) inset;
  opacity: 80%;
  
  }
.work-left{
 
  box-sizing: border-box;
  padding: 10px;
  
 
  font-family: 'Courier New', Courier, monospace;
  font-size: 70px;
  margin-left: 20px;
  padding-left: 80px;
  }
.work-left h1{
  font-size: 20px;
  color: #FAD5DD;
  }

.work-left p{
  font-size: 17px;
  }

  .work-right{
  display: flex;
  flex-wrap: wrap;
  width:100%; /* skift for at gøre box brederererere*/
 
  }

.work-right-icons {
 
  box-sizing: border-box;
  height:120px;
  background-color:#111;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  padding: 4px;
  margin: 4px;
  width: 120px;
  border-radius: 10%;
  box-shadow: 3px 3px 3px 3px  rgba(148, 148, 148, 0.4);
 margin: 1rem;
  }

.work-right-icons img{
  height:100%;
  }

/* 3. sektion slut*/

@media only screen and (max-width: 824px) {

.what-i-do{
    font-size: large;
    }
  .widc-right-box {
    padding: 10px;
  }
  .widc-right-icons img{
    height: 30%;

  }
  .widc-right-icons p{
    font-size: 12px;
    display: flex;
    text-align: center;
  justify-items: center;
  flex-direction: column;
  }

  .widc-right-icons h3 {
  font-size: 12px;
    display: flex;
    text-align: center;
  justify-items: center;
  font-weight: bold;
  
}

.work-with-container h1{

font-size: 10px;
}
.work-with-container h3{
  font-size: 20px;
}
.work-with-container p{
  font-size: 15px;
}
.work-right div{
 height: 20%;
 width: 30%;
}

.work-right-icons img {
  height: 50%;
}
}  

</style>