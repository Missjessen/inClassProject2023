<template>
    <div>
       
    </div>

    <main>

<!-- top sektion start-->

      <!--hero-->
    <div class="hero">
     
            <div class="hero-container" width="100%" height="100%">
              <div class="me"> 
                <img src="@/assets/images/me-bg.jpg" alt=""></div>
            
        
<!-- tekst på hero image-->
      
    <div class="heroo-container-rigth">
        
             <h1>Multimediedesigner</h1>
            <h2>HEY! Mit navn er Nanna.</h2>

             <p>Jeg er en kreativ designer for branding, brugeroplevelse og platforms.</p>
           
           

<!--link pil-->
    <span class="hero-knap">
      
            
            <router-link id="artboard-link" to="/om-mig">
              <img src="@/assets/images/pil-44-2-5.png" alt="">
                 <span>OM MIG</span> 
            
          
            </router-link>  
             <a  id="artboard-link" style="margin-left:10px;" href="https://indd.adobe.com/view/036b8602-76ff-40de-b0ce-dc8868fa4855" target="_blank">
              <img src="@/assets/images/pil-44-2-5.png" alt="">
                 <span> CV </span> 
             </a>
           

          </span>
          
        </div>
       </div>
      </div>
  <!-- top sektion slut-->


   <!-- 2 sektion start-->

  <!-- venstre tekst-->
   <section class="what-i-do">
     <div class="what-i-do-container">
      
        <div class="widc-left">
        <h3 id="wid-h3">HVAD JEG <span id="wid-h3-color2">LAVER</span></h3>
        

  <!-- link pil-->
        <router-link id="artboard-link" to="/portfolie">
         <img src="@/assets/images/pil-44-2-5.png" alt="">
            <span>
            ARTBOARD 
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

  <!-- 2. sektion slut-->

  

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
       
        
      </div>

  <!-- højre boks iconer-->
      <div class="work-right">
          
        <div class="work-right-icons">
          <img class="" src="@/assets/id5.png" alt=""></div>
        
          <div class="work-right-icons">
          <img class="" src="@/assets/pr5.png" alt=""></div>

          <div class="work-right-icons">
          <img class="" src="@/assets/ps5.png" alt=""></div>

          <div class="work-right-icons">
          <img class="" src="@/assets/xd5.png" alt=""></div>
      
          <div class="work-right-icons">
          <img class="" src="@/assets/au5.png" alt=""></div>
        
          <div class="work-right-icons">
          <img class="" src="@/assets/ai5.png" alt=""></div>

          <div class="work-right-icons">
          <img class="" src="@/assets/github.png" alt=""></div>
          
          <div class="work-right-icons">
          <img class="" src="@/assets/visuel.png" alt=""></div>
        </div>
      
      
       </div>
      </section>
    <!-- 3. sektion slut-->
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
/* hero image start */

.hero {
    background: {
        background-repeat: no-repeat;
      background-attachment: center;
      background-position: center top;
      background-size: cover;
      height: 800px;
      width: 100vw;
      margin-top:-80px; /* skub header op under menu */
      padding-top: 110px;
    //   repeat: no-repeat;
    //   attachment: left;
    //   position: left;
    //   size: cover;
      }
      .me {
        height: 300%;
        width: 300%;
        
      }
      height: 800px;
      width: 100vw;
    //   margin-top:-80px; /* skub header op under menu */
    //   padding-top: 110px;
      
    }

    .hero img {
      height: 50%;
  
    }
    .hero-container {
      height:100%;
      display: flex;
    //   align-items: center;
    //   width:100%;
    }

    #artboard-link {
      display: flex;
      font-size: 20px;
      align-items: center;
    }

    .heroo-container-rigth 
        {
        
             width:60%;
             font-family: 'Courier New', Courier, monospace;
             color: #3a3a3a;
             padding-left: 300px;
           }

      .p{
             font-size: 25px;
              
           }

     .h2{
             opacity: 95%;
             color: #FAD5DD;
             font-family: 'Courier New', Courier, monospace;
             font-size: 20px;
             font-weight: lighter;
             
         }
    


    .hero-knap  {
      display: flex;
      align-items: baseline;
    }

    .hero-knap img {
      height:40px;
    }
    .hero-knap2 img {
      height:40px;
    }

/* top hero slut*/

/* 2. sektion Widc start*/

/* Wid container venstre*/
.what-i-do {
  height:auto; /** størrelse på området */
  background-color: #e6dada;
  font-family: Courier New;
  font-size: 70px;
  border-radius: 10px;
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
  margin-left: 20px;
  padding-left: 80px;
  
} 

/* tekst wid*/
#wid-h3-a{
  display: flex;
  font-size: 15px;
  align-items: center;
  
  
}

.widc-left{
  font-size: 60px;
}

#wid-h3-color2 {
  color: #877e84;
  }

 /* link pil portfolie*/
.widc-left a img { /* størrelse på pilen pil-44-2-5 */
  height: 200px;
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
  display: flex;
  color: #ededed;
  background-color: #000000;
  padding: 20px;
  }
.work-left{
  width:50%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-family: hoefler;
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
  width:50%; /* skift for at gøre box brederererere*/
  opacity: 80%;
  }

.work-right-icons {
  width:25%;
  box-sizing: border-box;
  height:100px;
  background-color:#111;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  padding: 4px;
  margin: 4px;
  width: 160px;
  border-radius: 10%;
  }

.work-right-icons img{
  height: 55%;
  }
.font{
    font-family: 'Courier New', Courier, monospace;
}
/* 3. sektion slut*/

/* resposive*/
@media only screen and (max-width: 824px) {
  .heroo-container-rigth{
    .h1{
        font-size: 6 px;
     }
     
     font-size: 6 px;
    padding-left: 0px;
    }
    
    
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