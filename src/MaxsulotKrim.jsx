import { useEffect, useState } from "react"

import { ref, set, onValue } from "firebase/database";
import { db } from "./Firebase";
import Foot from "./Foot";
import { useNavigate } from "react-router-dom";


function writeUserData(soat, mn, som ) {

  set(ref(db, 'maxsulotkrim/' + soat), {
    narx: som+'000',
    joy:mn,
    vaqat:soat,
    name:localStorage.getItem('name')
  });
}

function MaxsulotKrim() {
    const [md, setMd]=useState(false)
    const [mn, setMn]=useState('');
    const [som, setSom]=useState('');
    const [mal, setMal]=useState([])
    const nv=useNavigate();



    useEffect(()=>{
        if (localStorage.getItem('pr')!=2345) {
            nv('/')
        }
        const starCountRef = ref(db, 'maxsulotkrim');
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();        
        if (data) {
            setMal(Object.values(data))
            setTimeout(()=>{
                window.scrollTo(0,document.body.scrollHeight);
            }, 100)
        }
});
    }, [])


    function Royhat(m){
        return(
            <div className="w-full hg h-[134px] bg-[#1E2139] rounded-lg text-white flex p-5 justify-between" key={m.vaqat}>
            <div>
                <h3>{m.joy}</h3>
                <h4>{m.vaqat.slice(0, -4)}</h4>
                <p>{(+m.narx).toLocaleString('it-IT', { style: 'decimal', currency: 'som'})}</p>
            </div>
            <h2>{m.name}</h2>
        </div>
        )
    }

    function Hendl(){
        if (mn=='') {
            alert('Joy nomini kiriting');
            return;
        }
        if(som==''){
            alert('Narhni kiriting');
            return;
        };
        const dt=new Date();
        const soat=dt.getDay()+'-'+dt.getMonth()+'-'+dt.getFullYear()+'__'+dt.getHours()+':'+(dt.getMinutes()<10 ? 0+dt.getMinutes() : dt.getMinutes())+':'+dt.getMilliseconds();
        writeUserData(soat, mn, som);
        setMd(!md)
        setMn('');
        setSom('')
    }
  return (
    <div className="w-full">
    <div className="flex flex-col items-center w-full gap-2      pt-20 pb-24 px-6">


    {mal.length==0 ? '': mal.map(m=>Royhat(m))}


    </div>
    <div className="fixed bottom-28 right-5 z-40">
        <button className="p-3 px-5 text-2xl bg-slate-500 text-white rounded-full" onClick={()=>setMd(!md)}>+</button>
    </div>


    <div className={`w-full h-[100vh] fixed bg-[#0000005b] top-0 justify-center z-30 pt-5 ${md ? 'flex' : 'hidden'}`} onClick={()=>setMd(!md)}>
        <div className="w-[340px] h-[260px] flex flex-col gap-8 rounded-2xl bg-slate-500 px-5 py-10" onClick={e=>e.stopPropagation()}>
            <input type="text" placeholder="Joyni " value={mn} onChange={e=>setMn(e.target.value)} className="h-10 rounded-md p-5 text-3xl" />
            <input type="number" value={som} onChange={e=>setSom(e.target.value)} placeholder="Narh"  className="h-10 rounded-md p-5 text-3xl" />
            <button className="w-full bg-blue-500 text-white py-2 text-2xl rounded-full" onClick={Hendl}>Add</button>
        </div>
    </div>
    <Foot n={4}/>
    </div>
  )
}

export default MaxsulotKrim