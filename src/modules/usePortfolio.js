import { db } from '../firebase.js'
import { ref } from 'vue'
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc } from 'firebase/firestore';


import { getStorage, ref as fbref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const usePortfolio = () => {
  const portfolios = ref([]); // to store data from firebase
  const portfolioDataRef = collection(db, 'portfolios');

  const AddPortfolioData = ref({
    portfolioName: '',
    portfolioDato:'',
    portfolioBeskrivelse: '',
    portfolioKategori: '',
    portfolioBillede: '',
  })

  const UpdatePortfolioData = ref({
    portfolioNavn: '',
    portfolioDato:'',
    portfolioBeskrivelse: '',
    portfolioKategori: '',
    portfolioBillede: ''
  })

  const getPortfoliosData = () => {
    onSnapshot(portfolioDataRef, (snapshot) => {
      portfolios.value = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
       
        }
      })
    })
    console.log("test", portfolios)
  }

  const firebaseDeleteSingleItem = async(id) => {
    await deleteDoc(doc(db, "portfolios", id));
    console.log("is deleted", id)
  }

  const firebaseAddSingleItem = async() => {
    await addDoc(collection(db, "portfolios"),
      {
        
        portfolioNavn: AddPortfolioData.value.portfolioNavn,
        portfolioDato: AddPortfolioData.value.portfolioDato,
        portfolioBeskrivelse: AddPortfolioData.value.portfolioBeskrivelse,
        portfolioKategori: AddPortfolioData.value.portfolioKategori,
        portfolioBillede: AddPortfolioData.value.portfolioBillede
      }
    );

    console.log("is added")
  }
 

  const firebaseUpdateSingleItem = async(portfolio) => { 
    const portfolioRef = doc(portfolioDataRef, portfolio.id); 

    await updateDoc(portfolioRef, {
 /*      portfolioNavn: portfolio.portfolioNavn,
      portfolioDato: portfolio.portfolioDato,
      portfolioBeskrivelse: portfolio.portfolioBeskrivelse,
      portfolioKategori: portfolio.portfolioKategori, */
portfolioNavn: portfolios.value.find(portfolio => portfolio.id === portfolio.id).portfolioNavn,
      portfolioDato: portfolios.value.find(portfolio => portfolio.id === portfolio.id).portfolioDato,
      portfolioBeskrivelse: portfolios.value.find(portfolio => portfolio.id === portfolio.id).portfolioBeskrivelse,
      portfolioKategori: portfolios.value.find(portfolio => portfolio.id === portfolio.id).portfolioKategori, 
      portfolioBillede: portfolios.value.find(portfolio => portfolio.id === portfolio.id).portfolioBillede
    
    }).then(() => { 
      updateDoc(portfolioRef, {
        portfolioNavn: UpdatePortfolioData.value.portfolioNavn,
        portfolioDato: UpdatePortfolioData.value.portfolioDato,
        portfolioBeskrivelse: UpdatePortfolioData.value.portfolioBeskrivelse,
        portfolioKategori: UpdatePortfolioData.value.portfolioKategori,
        portfolioBillede: UpdatePortfolioData.value.portfolioBillede
      })
     })
  }
  
  console.log("is updated")

  // upload image to firebase storage
  

const storage = getStorage();
 
// Firebase storage upload image + get download URL + enable button after image uploaded
const uploadImg = async(event) => {
  let file = event.target.files[0]; // get the file
  console.log("file", file)
// Create the file metadata
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = fbref(storage, 'images/' + file.name);
const uploadTask = uploadBytesResumable(storageRef, file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');       
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);

      AddPortfolioData.value.portfolioBillede = downloadURL // update variable imgURL and put the image URL link in it. 
     // addItemData.uploadBtnDisabled = false // enable button after image uploaded is complete
    });
  }  
);
}


  return {
    getPortfoliosData,
    portfolios,
    firebaseDeleteSingleItem,
    firebaseAddSingleItem,
    AddPortfolioData,
    firebaseUpdateSingleItem,
    UpdatePortfolioData,
    

    // uploadImg
    uploadImg
  }
}
export default usePortfolio; 

