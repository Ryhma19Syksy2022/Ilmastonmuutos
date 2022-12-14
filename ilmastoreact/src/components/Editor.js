import  React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { UserAuthContext } from './Contexts';
import { useNavigate } from 'react-router-dom';

export default function Editor(props){

    const UserAuthContextValue = useContext(UserAuthContext);

    const [owner, setowner] = useState("");
    const [saveState, setsaveState] = useState("idle");

    const navigate = useNavigate();

    useEffect(() => {
        async function loadPrivate() {
            const config = {
                headers:{'Authorization': `Bearer ` + UserAuthContextValue.key},withCredentials: true}
          
            const privateres = await axios.get('/api/private', config)
                console.log('getting username')
                setowner(privateres.data);
        };
        loadPrivate();
      }, []);


      let editorinterface = null;
      switch(saveState){
          case "idle":
            editorinterface = <button type="submit">Save Visualization</button>
            break;
  
          case "processing":
            editorinterface = <span>Just a Second...</span>
            break;
  
          case "saveSuccess":
            editorinterface = <span>Saved Successfully</span>
            break;
  
          case "saveFailure":
            editorinterface = <span>Failed to Save Visualization</span>
            break;
      }

    const [visual_id, setVisual_id] = useState("");
    const [layout, setlayout] = useState(1)
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
            formData.append('visual_id', visual_id);
            formData.append('owner', owner);
            formData.append('layout', layout);
            formData.append('v1', v1);
            formData.append('v3', v3);
            formData.append('v5', v5);
            formData.append('v6', v6);
            formData.append('v7', v7);
            formData.append('v8', v8);
            formData.append('v9', v9);
            
            console.log("visual_id", visual_id);
            console.log("owner", owner);
            console.log("layout", layout);
            console.log("v1", v1);
            console.log("v3", v3);
            console.log("v5", v5);
            console.log("v6", v6);
            console.log("v7", v7);
            console.log("v8", v8);
            console.log("v9", v9);
            
        try {
            const result = await axios.post('/api/savevisual', formData)
            console.log('saving visualization');
            console.log(result);
            setsaveState("saveSuccess");
            setTimeout(() => {
                setsaveState("idle");
                navigate('/Profile', {replace: true});
            }, 2000);
        } catch (error) {
            console.error(error.response.data);
            setsaveState("saveFailure");
            setTimeout(() =>  setsaveState("idle"), 2000);
        }
    }

    return(
        <div>
            <form onSubmit={createVisualization}>
                <div class="mb-3">
                    <label for="visual_id">enter identifier for visualization</label>
                    <input type="text" class="form-control" id="visual_id" placeholder="this will also act as the url" name="visual_id" value={visual_id} onChange={(e) => setVisual_id(e.target.value)} required/>
                    
                    <label for="html">layout 1</label>
                    <input type="radio" name="layout" value={1} defaultChecked={true} onChange={(e) => setlayout(e.target.value)}/>
                    <label for="html">layout 2</label>
                    <input type="radio" name="layout" value={2} onChange={(e) => setlayout(e.target.value)}/>
                    <br/>

                    <label for="v1">include v1</label>
                    <input type="checkbox" name="v1" value={v1} defaultChecked={false} onChange={(e) => setv1(e.target.checked)} />
                    <br/>

                    <label for="v3">include v3</label>
                    <input type="checkbox" name="v3" value={v3} defaultChecked={false} onChange={(e) => setv3(e.target.checked)}/>
                    <br/>

                    <label for="v5">include v5</label>
                    <input type="checkbox" name="v5" value={v5} defaultChecked={false} onChange={(e) => setv5(e.target.checked)}/>
                    <br/>

                    <label for="v6">include v6</label>
                    <input type="checkbox" name="v6" value={v6} defaultChecked={false} onChange={(e) => setv6(e.target.checked)}/>
                    <br/>

                    <label for="v7">include v7</label>
                    <input type="checkbox" name="v7" value={v7} defaultChecked={false} onChange={(e) => setv7(e.target.checked)}/>
                    <br/>

                    <label for="v8">include v8</label>
                    <input type="checkbox" name="v8" value={v8} defaultChecked={false} onChange={(e) => setv8(e.target.checked)}/>
                    <br/>

                    <label for="v9">include v9</label>
                    <input type="checkbox" name="v9" value={v9} defaultChecked={false} onChange={(e) => setv9(e.target.checked)}/>
  
                </div>
                    {editorinterface}
            </form>
        </div>
        );

}