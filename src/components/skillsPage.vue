<template>
    <main>
 <!-- 2 section landing page, what i do-->
   <section class="what-i-do">
    <!-- component -->
     <div id="box-what-i-do" class="bg-white ">
        <div class="container px-12 py-10 mx-auto">
          <h2 id="top-text" class="text-5xl   capitalize lg:text-4xl ">HVAD JEG LAVER SOM DESIGNER</h2>
          <br>
      <br>

       <!-- 3 boks af skills-->
  <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-6 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        <div class="p-4 space-y-3 border-4 border-red-50 border-red-50 rounded-xl">
                <span class="inline-block text-white-500 dark:text-white-400">
                    <div scr="../assets/images/pr.jpg" class="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  />
                          <img class="layers" src="@/assets/images/pære-png.png" alt="">
                       </div>
                    </span>
                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">UI & UX Design</h1>
           <p class="text-gray-500 dark:text-gray-300 "> Skaber brugervenlighed samt bedre brugeroplevelse på brugerflader.</p>
       <a href="#" class="inline-flex p-2 text-white-500 capitalize transition-colors duration-200 transform bg-white-100 rounded-full dark:bg-white-500 dark:text-white hover:underline hover:text-white-600 dark:hover:text-white-500">
     </a>
</div>

           <div class="p-8 space-y-3 border-4 border-red-50 border-red-50 rounded-xl">
                <span class="inline-block text-white-500 dark:text-white-400">
                     <div scr="../assets/images/pr.jpg" class="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  />
                        <img class="layers" src="@/assets/images/layer2.png" alt="">
                         </div>
                      </span>
                  <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Grafisk Design</h1>
               <p class="text-gray-500 dark:text-gray-300"> Content, Videooptagelse, redigering og video effektor, samt grafisktryg.</p>
              <a href="#" class="inline-flex p-2 text-white-500 capitalize transition-colors duration-200 transform bg-white-100 rounded-full dark:bg-white-500 dark:text-white hover:underline hover:text-white-600 dark:hover:text-white-500">
            </a>
          </div>

            <div class="p-8 space-y-3 border-4 border-red-50 border-red-50 rounded-xl">
                <span class="inline-block text-white-500 dark:text-white-400">
                    <div scr="../assets/images/pr.jpg" class="w-20 h-20" fill="none" viewBox="0 0 25 25" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  />
                          <img class="layers" src="@/assets/images/web8.png" alt="">
                         </div>
                       </span>
                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Web Design & Branding</h1>
                 <p class="text-gray-500 dark:text-gray-300" > Jeg skaber unikke websites, der er skræddersyet efter klients præferencer. mit mål er at genoplive både nye og etablerede brands og skabe en stærk onlineidentitet.</p>

                
                   
               
            </div>
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
          <p>i visuel studio, anvende javascript og frameworks.  </p>




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
<img class="" src="@/assets/images/visual.png" alt=""></div>

<div class="work-right-icons">
<img class="" src="@/assets/images/git.png" alt=""></div>

<div class="work-right-icons">
<img class="" src="@/assets/images/id-8.png" alt=""></div>


<div class="work-right-icons">
<img class="" src="@/assets/images/wp.png" alt=""></div>


<div class="work-right-icons">
<img class="" src="@/assets/images/drone.png" alt=""></div>


<div class="work-right-icons">
<img class="" src="@/assets/images/js.png" alt=""></div>


<div class="work-right-icons">
<img class="" src="@/assets/images/vue.png" alt=""></div>

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
#box-what-i-do {
  height:auto; /** størrelse på området */
  background-color: #e6dada;
  color: f6f6f6;
  font-family: bookman;
  // font-size: 50px;
  border-radius: 1rem;
  box-shadow: 3px 3px 3px 3px  rgba(190, 189, 189, 0.2) inset;
  }
#top-text{
  color: #7e7474;
  font-size: 70px;
  padding-top: 3rem;
  text-align: start;
}
  .pil-3{
    height: 80px;
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
  
 
  font-family: bookman;
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