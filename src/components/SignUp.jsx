
const SignUp = () => {

    return(
        <div className="flex pt-16 justify-center relative">
                <img className="absolute top-0 z-0 h-screen w-full"
                    src="https://occ-0-5200-3996.1.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png"
                    alt="bg"
                />
            <div className="relative z-10">

                <h1 className="mb-4  text-3xl font-bold">Sign Up</h1>
                <form className="flex flex-col w-[510px]">
                    <input className="p-4 border-1 border-white rounded-md w-[510px] bg-[#1c1213] mb-4 " type="text" placeholder="Enter Name" />
                    <input className="p-4 border-1 border-white rounded-md w-[510px] bg-[#1c1213]" type="email" placeholder="Email or mobile number" />
                    <input className="p-4 border-1 border-white rounded-md w-[510px] bg-[#1c1213] mt-4 " type="password" placeholder="Password" />
                    <button className="active:scale-95 text-xl font-bold py-3 bg-[#e50914] mt-4 rounded-md">Continue</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp