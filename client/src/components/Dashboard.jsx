import { React, useState, useEffect } from "react";
import { useAtom } from "jotai";
import Navbar from "./Navbar";
import Map from "./Map";
import Title from "./Title";
import Legend from "./Legend";
import CSVUpload from "./CSVUpload";
import { transformDBData } from "../utils/csvfunction";
import { bulkUpload, getAllMapData } from "../utils/AxiosAPI";
import { mapDataAtom } from "../utils/state";

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
          <Title />
          <CSVUpload setMarkers={handleDataUpload} />
          <Map markers={mapData} filters={filters} />
          <Legend
            StageNames={mapData}
            onClickHandler={(e, a) => {
              setFilters({
                StageName: a,
              });
            }}
          />
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
