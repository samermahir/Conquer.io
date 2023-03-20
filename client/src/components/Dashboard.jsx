import { React, useState, useEffect } from "react";
import { useAtom } from "jotai";
import Navbar from "./Navbar";
import Map from "./Map";
import Legend from "./Legend";
import CSVUpload from "./CSVUpload";
import { transformDBData } from "../utils/csvfunction";
import { bulkUpload, getAllMapData } from "../utils/AxiosAPI";
import { mapDataAtom } from "../utils/state";
import logo from '../assets/images/Shield_ClassicViking.png';

const Dashboard = () => {
  const [filters, setFilters] = useState({});
  const [mapData, setMapData] = useAtom(mapDataAtom);

  useEffect(() => {
    getAllMapData().then((data) => {
      const transformed = transformDBData(data);
      console.log(transformed);
      setMapData(transformed || [])
    })
  }, []);

  const handleDataUpload = async (data) => {
    setMapData(data);
    await bulkUpload(data);
  };

  return (
    <>
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row ">
        <Navbar />
        <div className="flex flex-col w-full h-full text-center overflow-scroll">
        <nav class="p-4 bg-gray-900 border-gray-700">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
              <a href="#" class="flex items-center">
                  <img src={logo} class="h-6 mr-3 sm:h-10" alt="Conquer.io Logo" />
                  <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Conquer.io</span>
              </a>
            </div>
          </nav>
          <Map markers={mapData} filters={filters} /> 
          <Legend
            StageNames={mapData}
            onClickHandler={(e, a) => {
              setFilters({
                StageName: a,
              });
            }}
            
          />
          <CSVUpload setMarkers={handleDataUpload} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

/*{users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}*/
