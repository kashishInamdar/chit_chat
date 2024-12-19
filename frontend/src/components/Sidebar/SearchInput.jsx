import { MdOutlineSearch } from "react-icons/md";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2 ' >
        <input type="text" placeholder='Search_' className='input input-bordered rounded-full '/>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white ' >
            <MdOutlineSearch className='w-6 h-6  outline-none ' />
        </button>
    </form>
  )
}

export default SearchInput ;

// STARTING CODE 

// import { MdOutlineSearch } from "react-icons/md";

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2 ' >
//         <input type="text" placeholder='Search_' className='input input-bordered rounded-full '/>
//         <button type='submit' className='btn btn-circle bg-sky-500 text-white ' >
//             <MdOutlineSearch className='w-6 h-6  outline-none ' />
//         </button>
//     </form>
//   )
// }

// export default SearchInput ;