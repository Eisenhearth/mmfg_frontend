import Image from 'next/image'

const Login = () => {
  return (
    <main>
      <Image className="brightness-50 -z-10" src="/admin-bg.png" alt='admin-background' layout="fill" objectFit="cover" />
      <div className="flex flex-col items-center justify-center px-6 py-20 md:py-8  mx-auto md:h-screen lg:py-0">
        <a className="flex items-center mb-6">
          <Image src="/logo.png" alt='mmfg-logo' 
          width={100}
          height={100}
          className="mr-2 brightness-100" />
        </a>
        <div className="w-full bg-mm-black rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white text-center font-inter">
              Sign in to your account
            </h1>

            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Your Email</label>
                <input type="email" name="email" id="email" className="text-white bg-mm-dark border border-gray-600 placeholder-gray-400 rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"  placeholder="name@company.com" autoComplete="off" />
              </div>
              <div>
                <label for="password" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Your Password</label>
                <input type="password" name="password" id="password" className="text-white bg-mm-dark border border-gray-600 placeholder-gray-400 rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"  placeholder="••••••••"  autoComplete="off" />
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-start"> 
                  <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" class="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-primary-600 ring-offset-gray-800" />
                  </div>
                  <div class="ml-3 text-sm">
                      <label for="remember" class="text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" class="text-sm font-medium text-mm-orange hover:underline">Forgot password?</a>
              </div>

              <button type="submit" className="w-full text-white bg-mm-orange hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
              <p className="text-sm text-white text-center">
                      Not an Administrator? <a href="#" className="font-medium text-mm-orange hover:underline ">Return to Home</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
 