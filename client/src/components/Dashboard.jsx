import { React, useState } from "react";
import Navbar from "./Navbar";
import Map from "./Map";
import Title from "./Title";
import Legend from "./Legend";
import CSVUpload from "./CSVUpload";

const Dashboard = () => {
    const [markers, setMarkers] = useState([]);
    return (
        <>
        <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row ">
            <Navbar />
            <div className="flex flex-col w-full h-full">
            <Title />
            <CSVUpload setMarkers={setMarkers}/>
            <Map markers={markers} />
            <Legend StageNames={markers}/>
            </div>
        </div>

        </>

    );
};


export default Dashboard

/*{users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}*/