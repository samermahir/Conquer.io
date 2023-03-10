import Papa from "papaparse"
export const csvFunction = (updateState) => {
  const nameData = [];
  const stageData = [];
  const addressData = [];
  const latData = [];
  const lngData = [];
  // const uploadconfirm = document.getElementById('uploadconfirm').
  Papa.parse(document.getElementById("uploadfile").files[0], {
    header: true,
    download: true,
    skipEmptyLines: true,
    complete: function (results) {
      // console.log(results.data[0].Address);
      for (let i = 0; i < results.data.length; i++) {
        nameData.push(results.data[i].Name);
        stageData.push(results.data[i].Stage);
        addressData.push(results.data[i].Address);
        latData.push(results.data[i].Latitude);
        lngData.push(results.data[i].Longitude);
      }
      console.log(results);
      updateState(results.data)
    },
  });
};
