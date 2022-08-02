const Header = () => {
  return (
    <div className='flex justify-end mx-3 md:mx-0'>
      <div className='md:flex justify-center items-center md:w-8/12 hidden'>
        <svg width="42" height="24" viewBox="0 0 99.5 56.5" fill="#ffffff">
          <path d="M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16"></path>
        </svg>{" "}
        <h1 className='text-2xl font-semibold text-white mx-2 tracking-widest'>DOORDASH</h1>
      </div>
      <div className='md:w-2/12 text-center'>
        <a href="https://identity.doordash.com/auth?client_id=1666519390426295040&enable_last_social=false&intl=en&layout=consumer_web&prompt=none&redirect_uri=https%3A%2F%2Fwww.doordash.com%2Fpost-login%2F&response_type=code&scope=%2A&state=%2Fen%2Fhome%2F%7C%7C3fdc24ce-6b39-43ec-8310-ddf676e15380" className=' font-bold mx-2 text-white'>
          Sign In
        </a>
        <a href="https://identity.doordash.com/auth/user/signup?client_id=1666519390426295040&enable_last_social=false&intl=en&layout=consumer_web&prompt=none&redirect_uri=https%3A%2F%2Fwww.doordash.com%2Fpost-login%2F&response_type=code&scope=%2A&state=%2Fen%2Fhome%2F%7C%7C3fdc24ce-6b39-43ec-8310-ddf676e15380" className=' font-bold mx-2 rounded-3xl text-slate-600 bg-white px-4 py-2'>
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Header;
