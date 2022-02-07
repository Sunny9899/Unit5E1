import {useState, useEffect} from "react";

export const Games= ()=>{
  
    const [name,setName]=useState("");
    const [author,setAuthor]=useState("");
    const [tags,setTags]=useState("");
    const [price,setPrice]=useState("");
    const [kids,setKids]=useState(false);
    const [desc, setDesc]=useState("");
    const [rating, setRating]=useState("");


    useEffect(()=>{
        Data();
    },[])
     
    const Data=()=>{
        fetch("http://localhost:3001/games")
        .then((d)=>{d.json()})
        .then((res)=>{
           console.log(res);
        })
    }


    return <div>
        <form id="addgame">
        
        <input placeholder="Name" type="text" required={true} onChange={(txt)=>{
           setName(txt.target.value);
        }}/>
        <input placeholder="Author" type="text"  required={true} onChange={(txt)=>{
           setAuthor(txt.target.value);
        }}/>
        <input placeholder="Tags" type="text" required={true} onChange={(txt)=>{
           setTags(txt.target.value);
        }}/>
        <input placeholder="Price" type="number" required={true} onChange={(txt)=>{
           setPrice(txt.target.value);
        }}/>
        <label>For kids<input type="checkbox" required={true} onChange={(txt)=>{
           if(txt.target.value=="on"){
               setKids(true);
           }
        }}/></label>
        <input placeholder="Description" type="text" required={true} onChange={(txt)=>{
           setDesc(txt.target.value);
        }}/>
        <label>Rating</label>

        <select  required={true}  onChange={(txt)=>{
           setRating(txt.target.value);
        }}> 
            <option id="one">1</option>
            <option id="Two">2</option>
            <option id="three">3</option>
            <option id="four">4</option>
            <option id="five">5</option>
        </select>
        <input type="submit"
        onClick={(e)=>{
            e.preventDefault();
            const data={gamename:name, gameauthor:author, gameprice:price,gametags:tags, forkids:kids, gamedesc:desc, gamerating:rating};
            
           fetch("http://localhost:3001/games",{
               method:"POST",
               body:JSON.stringify(data),
               headers:{
                   "content-type":"application/json",
               }
           })
           .then(Data)
        }}
        />

        </form>
    </div>

}