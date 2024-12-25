import React from 'react'

 const GenderCheckbox = ({onCheckboxChange , selecteGender}) => {
  return (
    <div className='flex'>
        <div className=' form-control'>
            <label  className={`label gap-2 cursor-pointer ${selecteGender === "male" ? "selected" : ""}`}>
                <span className='label-text'>Male</span>
                <input type="checkbox" className='checkbox border-slate-900 ' 
                 checked={selecteGender === "male"}
                 onChange={()=>{
                    onCheckboxChange("male")
                 }}
                />
            </label>
        </div>
        <div className=' form-control'>
            <label  className={`label gap-2 cursor-pointer ${selecteGender === "female" ? "selected" : ""}`}>
                <span className='label-text'>Female</span>
                <input type="checkbox" className='checkbox border-slate-900 '
                    checked={selecteGender === "female"}
                    onChange={()=>{
                       onCheckboxChange("female")
                    }}
                />
            </label>
        </div>
        
    </div>
  )
}

export default GenderCheckbox ;


// *** STARTING CODE FOR THIS FILE ***
// import React from 'react'

//  const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className=' form-control'>
//             <label  className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>Male</span>
//                 <input type="checkbox" className='checkbox border-slate-900 ' />
//             </label>
//         </div>
//         <div className=' form-control'>
//             <label  className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>Female</span>
//                 <input type="checkbox" className='checkbox border-slate-900 ' />
//             </label>
//         </div>
        
//     </div>
//   )
// }

// export default GenderCheckbox ;