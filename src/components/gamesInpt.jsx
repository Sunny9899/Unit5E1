import {useState, useEffect} from "react";

export const Games= ()=>{
  
    const [name,setName]=useState([]);

    return <div>
        <form id="addgame">
        
        <input placeholder="Name" type="text" name="gamename" required={true}/>
        <input placeholder="Author" type="text" name="gameauthor" required={true}/>
        <input placeholder="Tags" type="text" name="gametags" required={true}/>
        <input placeholder="Price" type="number" name="gameprice" required={true}/>
        <label>For kids<input type="checkbox" name="forkids" required={true}/></label>
        <input placeholder="Description" type="text" name="gamedesc" required={true}/>
        <label>Rating</label>
        <select  required={true} name="gamerating"> 
            <option id="one">1</option>
            <option id="Two">2</option>
            <option id="three">3</option>
            <option id="four">4</option>
            <option id="five">5</option>
        </select>
        <input type="submit"
        onClick={(e)=>{
            e.preventDefault();
             console.log(e.name);
        }}
        />

        </form>
    </div>

}