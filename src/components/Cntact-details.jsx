import { FaPhoneAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa6";

const Cntact_details = () => {
  return (
    <>
        {/*------------------ First details---------------------------------- */}

    <div className="Contact-number flex items-center justify-center gap-3 ">
<FaPhoneAlt  className="bg-white px-3 py-3 text-[#1eac9e] rounded-full text-5xl  "  />
<div className="Contact-text flex items-center flex-col ">
  <h3 className="text-2xl font-mono font-medium " >Phone Number</h3>
  <h5 className="text-lg text-[#4FD1C5] " >+977 9804395755</h5>
</div>
    </div>

    {/*------------------ Second details---------------------------------- */}
    
    <div className="Contact-Gmail flex items-center justify-center gap-3 ">
<MdOutgoingMail  className="bg-white px-3 py-3 text-[#1eac9e] rounded-full text-5xl "  />
<div className="Gmail-text flex  flex-col ">
  <h3 className="text-2xl font-mono font-medium " >Gmail</h3>
  <h5 className="text-lg text-[#4FD1C5] " >Abuzerzak41@gmail.com</h5>
</div>
    </div>


 {/*------------------ Third details---------------------------------- */}
    
 <div className="Contact-Gmail flex items-center justify-center gap-3 ">
<FaAddressBook  className="bg-white px-3 py-3 text-[#1eac9e] rounded-full text-5xl  "  />
<div className="Gmail-text flex  flex-col ">
  <h3 className="text-2xl font-mono font-medium " >Address</h3>
  <h5 className="text-lg text-[#4FD1C5] " >Biratnagr 06,Nepal</h5>
</div>
    </div>

    </>
  )
}

export default Cntact_details
