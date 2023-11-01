import { db } from '../firebase.js'
import { ref } from 'vue'
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc } from 'firebase/firestore';

const usePortfolio = () => {
  const portfolios = ref([]); // to store data from firebase
  const portfolioDataRef = collection(db, 'portfolios');

  const AddPortfolioData = ref({
    portfolioName: '',
    portfolioBeskrivelse: '',
    portfolioKategori: '',
    portfolioBillede: ''
  })

  const UpdatePortfolioData = ref({
    portfolioNavn: '',
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
          // portfolioNavn: doc.data().portfolioNavn,
          // portfolioBeskrivelse: doc.data().portfolioBeskrivelse,
          // portfolioKategori: doc.data().portfolioKategori,
          // portfolioBillede: doc.data().portfolioBillede
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
        portfolioBeskrivelse: AddPortfolioData.value.portfolioBeskrivelse,
        portfolioKategori: AddPortfolioData.value.portfolioKategori,
        portfolioBillede: AddPortfolioData.value.portfolioBillede
      }
    );

    console.log("is added")
  }

  const firebaseUpdateSingleItem = async(portfolio) => { 
    await updateDoc(doc(portfolioDataRef, portfolio.id), {
      portfolioNavn: portfolios.value.find(portfolio => portfolio.id === portfolio.id).portfolioNavn,
      portfolioBeskrivelse: portfolios.value.find(portfolio => portfolio.id === portfolio.id).portfolioBeskrivelse,
      portfolioKategori: portfolios.value.find(portfolio => portfolio.id === portfolio.id).portfolioKategori,
      portfolioBillede: portfolios.value.find(portfolio => portfolio.id === portfolio.id).portfolioBillede
    
    }).then(() => {
      
    })
  }


  return {
    getPortfoliosData,
    portfolios,
    firebaseDeleteSingleItem,
    firebaseAddSingleItem,
    AddPortfolioData,
    firebaseUpdateSingleItem,
    UpdatePortfolioData,
  }
}
export default usePortfolio; 

