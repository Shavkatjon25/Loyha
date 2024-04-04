import React, { useEffect, useState } from 'react'
import Foot from './Foot'
import { useNavigate } from 'react-router-dom';
localStorage.setItem('pr', 12)
function Kod() {
    const [pas, setPas]=useState('');
    const nvg=useNavigate();
    

    function hendl(){
        if(pas==1014 || pas==3430){
            nvg('/krim')
            localStorage.setItem('pr', 2345)
            if (pas==1014) {
              localStorage.setItem('name', 'Alijon')
            } else   localStorage.setItem('name', 'Ikromjon')
            return;
        }
        setPas('')
        alert('Parol no\'to\'gri')
    }


  return (
    <div className='absolute w-full h-[100vh] bg-slate-300 top-0 flex flex-col items-center gap-5 pt-10 '>
                <div className="w-12 h-12 overflow-hidden rounded-full flex justify-center items-center border-[2px] border-white shd bg-blue-600 an">
        <h2 className="text-white text-[18px] rotate-[30deg] mt-[-10px] font-[Pacifico] ">Y</h2>
        <h2 className="text-yellow-50 mb-[-5px] rotate-[-30deg] font-[Pacifico]">M</h2>
        </div>
        <input type="password"  value={pas} autoFocus onChange={(w)=>setPas(w.target.value)} className='h-10 px-5 rounded-xl'/>
         <button className='bg-blue-500 px-10 text-white py-2 rounded-full' onClick={hendl}>Kirish</button>
    </div>
  )
}

export default Kod