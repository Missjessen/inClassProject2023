<template>
  <br>
  <br>
  <br>
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

           <a href="#about_me" id="om mig" >
             <p style="font-size: x-large; padding-right: 3rem; color: rgb(174, 217, 210); text-align: center;"> <img src="@/assets/images/pil-44-2-5.png" alt="">OM MIG</p>
                </a>  
               
                  <a  id="artboard-link" style="margin-left:10px; padding-right: 3.5rem;" href="https://indd.adobe.com/view/9afdbb4b-7071-4a7a-a625-869cb74ac677" target="_blank">
                <p style="font-size: x-large; color: rgb(174, 217, 210); text-align: center;   scre"><img src="@/assets/images/pil-44-2-5.png" alt="" >CV</p>
               </a>

                <router-link id="portfolio-pil" to='/portfolio'>
            <p style="font-size: x-large; padding-right: 3rem; color: rgb(174, 217, 210);  text-align: center; "> <img src="@/assets/images/pil-44-2-5.png" alt="">PORTFOLIO</p>
          </router-link> 
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
      background-position: center top;
      display: flex;
      align-items: baseline;
      background-blend-mode:hue;
      box-shadow: 5px 5px 20px 5px  rgba(231, 201, 201, 0.5) inset;
      height:105%;
      width: 60%;
      opacity: 50%;
      border-radius: 1rem;
    
}

.hero{
  display: flex;
  position: relative;
  justify-content: center;
  height: 600px;
  margin: 0 0 5rem 0;
}
  
/* text */
    .heroo-container-rigth  
        {    width:60%;
             font-family: bookman;
             position: inherit;
             display:flow-root; 
             padding-left: 80px;
             margin-top: 280px;
           }

           .top1{
            font-size: 70px;
            color: #525050;
            opacity: 95%;
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
      font-size: 30px;
      padding-top: 1rem;
      margin-left: 10px;      
      
          }
      .hero-knap img {
       height:50px;
       margin-left: 15px; 
      
       }
       #om-mig {
       font-size: 30px;
       align-items: center;
       }
 

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