import React,{ useState } from 'react';
import Axios from 'axios';

function PostForm(){
    const  url = ""
    const [data, setData] = useState({
        aspek_penilaian_1 : {
            mahasiswa_1 : "",
            mahasiswa_10 : "",
        },
        aspek_penilaian_4 : {
            mahasiswa_11 : "",
            mahasiswa_12 : "",
        },

    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            aspek_penilaian_1 : {
                mahasiswa_1 : data.mahasiswa_1,
                mahasiswa_10 : data.mahasiswa_10,
            },
            aspek_penilaian_4 : {
                mahasiswa_11 : data.mahasiswa_11,
                mahasiswa_12 : data.mahasiswa_12,
            },
        })
        .then(res =>{
            console.log(res.data)
        })
    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return(
        <div>
            <form onSubmit={(e)=> submit(e)}>
            Aspek Penlilaian 1 :
            <input placeholder='mahasiswa_1 'type="text" onChange={(e)=>handle(e)} id="mahasiswa_1" value={data.mahasiswa_1}/>
            <input placeholder='mahasiswa_10' type="text" onChange={(e)=>handle(e)} id="mahasiswa_10" value={data.mahasiswa_10}/>
            <br/>
            <br/>
            Aspek Penlilaian 4 :
            <input placeholder='mahasiswa_11' type="text" onChange={(e)=>handle(e)} id="mahasiswa_11" value={data.mahasiswa_11}/>
            <input placeholder='mahasiswa-12' type="text" onChange={(e)=>handle(e)} id="mahasiswa_12" value={data.mahasiswa_12}/>
            </form> 
            <br/>
            <button type="submit">Submit</button>
        </div>
    )
}

export default PostForm;
