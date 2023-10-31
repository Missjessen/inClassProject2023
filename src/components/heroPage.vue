<template>
   <main>

<!-- top section start-->

  <section class="hero">  <!--hero-->

      <div class="hero-container" width="100%" height="100%">
    </div>
             

  <article class="heroo-container-rigth">  <!-- tekst på hero image-->
           
     <h1 class="top1">Multimediedesigner</h1>
         <p class="top2">HEY! Mit navn er Nanna.</p>
         <p class="top3">Jeg er en kreativ designer for branding, </p>
         <p class="top3">brugeroplevelse og platforms.</p>
           
            
    <span class="hero-knap"> <!--link pil-->
           <router-link id="artboard-link" to="/aboutMe.vue">
              <img src="@/assets/images/pil-44-2-5.png" alt="">
                 <span>OM MIG</span> 
            
          
            </router-link>  
               <a  id="artboard-link" style="margin-left:10px;" href="https://indd.adobe.com/view/9afdbb4b-7071-4a7a-a625-869cb74ac677" target="_blank">
                 <img src="@/assets/images/pil-44-2-5.png" alt="">
                   <span> CV </span> 
              </a>
           </span>
         </article>
       </section>   
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
      margin-top:2rem;
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
             padding-left: 80px;
             flex-direction: column;
              margin-top: 350px;
           }

           .top1{
            font-size: 70px;
            font-variant-caps:titling-caps;
            color: #695555;


           }

      

     .top2, 
      .top3{
             opacity: 95%;
             color: #383838;
             font-family: 'Courier New', Courier, monospace;
             font-size: 22px;
             font-weight: lighter;
             font-style: italic;
             
         }
    


 /*link pil*/
  .hero-knap {
          
      display: flex;
      align-items: center;
      color: #695555;
          }
    .hero-knap img {
      height:40px;
    }
  

/* top hero slut*/

/* resposive*/
@media only screen and (max-width: 824px) {
  .heroo-container-rigth{
    .h1{
        font-size: 6 px;
     }
     
     font-size: 6 px;
    padding-left: 0px;
    }
    
    
  }
</style>