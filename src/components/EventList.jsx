import { useState,useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

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
        
       <div>
            <div className="grid grid-cols-3 gap-4 pb-6"> 
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
                     <h2 className="card-title  p-4 text-2xl"><strong>{p.title}</strong></h2>
                            <div className="mt-8">
                        <div className="card-actions">
                        <Link to={`/eventdetails/${p.id}`} ><button className="btn border-zinc-600">More</button></Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                ))}
            </div>
                <Link to={`/protected/createeventform`} ><button className="btn btn-outline btn-neutral">Create Event</button></Link>
       </div>
    );
    

}
export default EventList; 
                     
