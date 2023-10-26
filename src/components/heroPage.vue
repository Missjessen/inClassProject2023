<template>
   

    <main>

<!-- top sektion start-->

      <!--hero-->
    <div class="hero">
          <div class="hero-container" width="100%" height="100%">
              <!-- <div class="me"> 
                <img src="@/assets/images/me-bg.jpg" alt=""></div> -->
              </div>
             
         
<!-- tekst på hero image-->
      
    <div class="heroo-container-rigth">
     
             <h1 class="top1">Multimediedesigner</h1>
            <h2 class="top2">HEY! Mit navn er Nanna.</h2>

             <p class="top3">Jeg er en kreativ designer for branding, </p>
              <p class="top3">brugeroplevelse og platforms.</p>
           
            

<!--link pil-->
    <span class="hero-knap">
      
            
            <router-link id="artboard-link" to="/om-mig">
              <img src="@/assets/images/pil-44-2-5.png" alt="">
                 <span>OM MIG</span> 
            
          
            </router-link>  
             <a  id="artboard-link" style="margin-left:10px;" href="https://indd.adobe.com/view/9afdbb4b-7071-4a7a-a625-869cb74ac677" target="_blank">
              <img src="@/assets/images/pil-44-2-5.png" alt="">
                 <span> CV </span> 
             </a>
           
      </span>
    
        </div>   </div>
      
     
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



.hero-container{
  background-image: url("../assets/images/me-bg.jpg");   /* hero image her */
      background-repeat: no-repeat;
      background-attachment: center;
      background-position: center top;
      background-size: cover;
      height:100%;
      width: 50%;
      margin-top:2rem; /* skub header op under menu */
      padding-top: 110px;
      opacity: 50%;
      object-fit: cover;
      display: flex;
      align-items: baseline;
      margin-bottom: 2rem;
      border-radius: 1rem;
      background-blend-mode:hue;
      box-shadow: 5px 5px 20px 5px  rgba(231, 201, 201, 0.5) inset;
      

}

.hero{
  display: flex;
  height: 600px;
  margin: 0 0 3rem 0;

}
// .hero {
//       background-image: url("../assets/images/me-bg.jpg");   /* hero image her */
//       background-repeat: no-repeat;
//       background-attachment: center;
//       background-position: center top;
//       background-size: cover;
//       height: 500px;
//       width: 50%;
//       margin-top:2rem; /* skub header op under menu */
//       padding-top: 110px;
//       opacity: 60%;
//       object-fit: cover;
//       display: flex;
//       align-items: baseline;
//       margin-bottom: 2rem;

      
//     }
    
      


  
    .hero-container {
      height:100%;
      display: flex;
      align-items: baseline;
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
             position: relative;
             display:center;
             justify-content: center;
             align-items: center;
             padding-left: 200px;
             flex-direction: column;
              margin-top: 300px;
           }

           .top1{
            font-size: 40px;
           }

      

     .top2, 
      .top3{
             opacity: 95%;
             color: #787474;
             font-family: 'Courier New', Courier, monospace;
             font-size: 22px;
             font-weight: lighter;
             
         }
    


    .hero-knap  {
      display: flex;
      align-items: center;
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
  border-radius: 1rem;
  // box-shadow: 2px 2px 2px 2px rgb(221, 221, 221);
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
  border-radius: 1rem;
  margin-top: 0.5rem;
  box-shadow: 3px 3px 3px 3px  rgb(251, 200, 200, 0.2) inset;
  opacity: 80%;
  
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