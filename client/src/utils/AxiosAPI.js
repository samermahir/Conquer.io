// import axios from "axios";

// // Setup so when "upload file" is clicked itll render map and send user data to the backend & MySql

// const userData = {
//     name: '',
//     stageNumber: 0,
//     stageName: '',
//     address: '',
//     zip: '',
//     city: '',
//     state: '',
//     latitude: 0,
//     longitude: 0,
//   };

// axios.get('http://localhost:3001/userData')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

//   axios.post('http://localhost:3001/userData', userData)
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

export const bulkUpload = async (data) => {
  try {
    const res = await fetch("/api/crm/bulk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload: data }),
    });
    const serverData = await res.json();
    return serverData;
  } catch (err) {
    console.log("error in bulk create", err);
    return null;
  }
};

export const getAllMapData = async () => {
    try {
        const res = await fetch("/api/crm");
        const data = await res.json();
        return data
    }catch (err) {
        console.log("error in getmap", err);
        return null;
      }
}
