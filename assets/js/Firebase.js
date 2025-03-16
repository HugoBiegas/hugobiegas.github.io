      // Import des SDK Firebase nécessaires
      import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
      import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
      
      // Configuration Firebase
      const firebaseConfig = {
        apiKey: "AIzaSyDrchkO_FsAHbCyt3BxTh732n1e9kZbhm4",
        authDomain: "portfolio-abb77.firebaseapp.com",
        projectId: "portfolio-abb77",
        storageBucket: "portfolio-abb77.firebasestorage.app",
        messagingSenderId: "810930108",
        appId: "1:810930108:web:6ed83764ebb7c1b3c3e5b9",
        measurementId: "G-LQP4GFF917"
      };
      
      // Initialisation de Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const db = getFirestore(app);
      
      // Exposer les fonctions Firestore dont nous avons besoin
      window.saveContactForm = async function(formData) {
        try {
          const docRef = await addDoc(collection(db, "contact_messages"), {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            timestamp: serverTimestamp()
          });
          
          console.log("Document written with ID: ", docRef.id);
          return { success: true, id: docRef.id };
        } catch (error) {
          console.error("Error adding document: ", error);
          return { success: false, error: error.message };
        }
      };
