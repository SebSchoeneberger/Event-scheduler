import { useState,useEffect } from "react";
import axios from 'axios';

function EventList() { const [eventList, setEventList] = useState([]);



    useEffect(() => {
        const apiUrl = "http://localhost:3001/api/events?page=1&limit=10";
    
        axios.get(apiUrl)
            .then(response => {
                setEventList(response.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    
    return (
        
        <div className="grid grid-cols-3 gap-4"> 
            {eventList.map((p) => (
                <div key={p.id}>
                    <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                        src="https://plus.unsplash.com/premium_photo-1683309561244-53ed64952752?q=80&w=2070&auto=format&fit=
                                crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Planning"
                        className="rounded-xl" />
                     </figure>
  
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{p.title}</h2>
                        <p>{p.description}</p>
                        <p>{p.location}</p>
                    <div className="card-actions">
                    <button className="btn btn-outline bg-black">Buy Now</button>
                    </div>
                 </div>
                </div>
            </div>
            ))}
        </div>
    );
    

}
export default EventList;  
