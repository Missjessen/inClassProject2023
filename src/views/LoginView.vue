 
 <!-- Login page -->
  <template>
<form class="form-group">
 
   <div>
    Username: <input type="text" v-model="email" />
    Password: <input type="password" v-model="password" />
    <p v-if="errMsg"> {{ errMsg }}</p>
    <button @click.prevent="logIn">Login</button>
    

    </div>
</form>
    
  
</template>


<!-- login system -->


<script setup>
import { ref } from 'vue'
import { auth } from '../firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth';

import router from '../router'


  let email = ref ('')
  let password = ref ('')
  const errMsg = ref ('')


let logIn = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((data) => {
    console.log("test data", data)
    router.push('/navguard')
  })
  .catch((error) => {
    switch(error.code) {
      case "auth/invalid-email":
        errMsg.value = "Invalid email address format."
        break;
      case "auth/user-disabled":
        errMsg.value = "This user has been disabled."
        break;
      case "auth/user-not-found":
        errMsg.value = "User not found."
        break;
      case "auth/wrong-password":
        errMsg.value = "Invalid password."
        break;
      default:
        errMsg.value = "An undefined error occured."
    }
  })
}

</script>

<style lang="scss" scoped>

.form-group {
  

  display: flex;
  flex-direction: start;
  align-items: start;
  justify-content: start;
  height: 100vh;
  width: 100vw;
  margin-top: 4rem;
  font-family: 'Courier New', Courier, monospace;
  font-size: x-large;

}

.form-group input{
display: flow-root;
  flex-direction: column;
  align-items:start;
  justify-content: center;

  color: #111;
  font-size: medium;
  font-family: 'Courier New', Courier, monospace;
  background-color: #f9f9f9;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: auto;

  

}

.form-group button{
  display: flex;
  flex-direction: column;
  align-items:start;
  justify-content: center;

  color: #111;
  font-size: medium;
  font-family: 'Courier New', Courier, monospace;
  background-color: #f9f9f9;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: auto;
}

</style>