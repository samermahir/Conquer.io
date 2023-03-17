import Papa from "papaparse";
import { markerColor } from "./marker";

export const csvFunction = (cb) => {
  const nameData = [];
  const stageNumData = [];
  const stageNameData = [];
  const addressData = [];
  const latData = [];
  const lngData = [];
  const final = [];
  // const uploadconfirm = document.getElementById('uploadconfirm').
  Papa.parse(document.getElementById("uploadfile").files[0], {
    header: true,
    download: true,
    skipEmptyLines: true,
    complete: function (results) {
      // console.log(results.data[0].Address);
      for (let i = 0; i < results.data.length; i++) {
        nameData.push(results.data[i].Name);
        addressData.push(results.data[i].Address);
        latData.push(results.data[i].Latitude);
        lngData.push(results.data[i].Longitude);
        stageNameData.push(results.data[i].StageName);
        stageNumData.push(results.data[i].StageNumber);
        final.push({
          Name: results.data[i].Name,
          Address: results.data[i].Address,
          Latitude: results.data[i].Latitude,
          Longitude: results.data[i].Longitude,
          StageName: results.data[i].StageName,
          StageNumber: results.data[i].StageNumber,
          icon: markerColor(results.data[i]),
        });
      }
      console.log("FINAL", final);
      cb(final);
    },
  });
};

export const transformDBData = (data) => {
  return data.map((d) => ({
    ...d,
    icon: markerColor(d),
  }));
};
