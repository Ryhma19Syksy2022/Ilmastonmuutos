import  React, { useState } from 'react';
import axios from "axios";

export default function Editor(props){

    const [uname, setuname] = useState("");

    try {
        const config = {
            headers:{'Authorization': `Bearer ${props.token}`},withCredentials: true}
      
        axios.get('/api/private', config)
             .then((response) => {
                console.log('gettingdata')
                console.log(props.token)
                console.log(response.data)
                setuname(response.data);
             });
    
             
    } catch (error) {
        console.error(error);
    }

    const [v1, setv1] = useState(false);
    const [v3, setv3] = useState(false);
    const [v5, setv5] = useState(false);
    const [v6, setv6] = useState(false);
    const [v7, setv7] = useState(false);
    const [v8, setv8] = useState(false);
    const [v9, setv9] = useState(false);
    
    const createVisualization = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
            formData.append('v1', v1);
            formData.append('v3', v3);
            formData.append('v5', v5);
            formData.append('v6', v6);
            formData.append('v7', v7);
            formData.append('v8', v8);
            formData.append('v9', v9);

            console.log(formData)
    
        try {
            const result = await axios.post('/api/deactivate', formData)
            console.log('saving visualization')                          
            console.log(result);
        } catch (error) {
            
        }
    }

    return(
        <div>
            <form onSubmit={createVisualization}>
                <div class="mb-3">
                    <input type="checkbox" name="v1" value={v1} defaultChecked={false} onChange={(e) => setv1(e.target.checked)} />
                    <br/>
                    <input type="checkbox" name="v3" value={v3} defaultChecked={false} onChange={(e) => setv3(e.target.checked)}/>
                    <br/>
                    <input type="checkbox" name="v5" value={v5} defaultChecked={false} onChange={(e) => setv5(e.target.checked)}/>
                    <br/>
                    <input type="checkbox" name="v6" value={v6} defaultChecked={false} onChange={(e) => setv6(e.target.checked)}/>
                    <br/>
                    <input type="checkbox" name="v7" value={v7} defaultChecked={false} onChange={(e) => setv7(e.target.checked)}/>
                    <br/>
                    <input type="checkbox" name="v8" value={v8} defaultChecked={false} onChange={(e) => setv8(e.target.checked)}/>
                    <br/>
                    <input type="checkbox" name="v9" value={v9} defaultChecked={false} onChange={(e) => setv9(e.target.checked)}/>

                </div>
                    <button type="submit" class="btn btn-primary">Save Visualization</button>
            </form>
        </div>
        );

}