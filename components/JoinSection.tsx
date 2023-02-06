import { useTranslations } from 'next-intl'

import WaitListForm from '../common/sharedComponents/WaitList'

const JoinSection = () => {
  const t = useTranslations('JoinSection')

  return(
    <section className="relative py-12 sm:py-20 md:py-24 lg:py-32" id="bgjxt2dp8z">
      <div aria-hidden="true" className="block" >
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl mb-12" ></div>
        <svg className="absolute -ml-3 top-8 left-1/2" width="404" height="392" fill="none" viewBox="0 0 404 392" >
          <defs >
            <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" >
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" ></rect>
            </pattern>
          </defs>
          <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" ></rect>
        </svg>
      </div>
      <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8" >
        <div className="relative px-6 py-10 overflow-hidden bg-white border-primary border-2 shadow-xl rounded-2xl sm:px-12 sm:py-20" >
          <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0" >
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360" >
              <path className="text-primary/5" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" ></path>
              <path className="text-primary/10" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" ></path>
            </svg>
          </div>
          <div className="relative" >
            <div className="flex flex-wrap justify-center w-full mx-auto sm:max-w-3xl" >
              <img
                src="img/avatars/ben.7656dd36.jpeg"
                alt="User ben" className="w-10 h-10 p-1 my-2 mx-8 rounded-full ring-2 to-blue-800 dark:to-blue-800"
              />
              <img
                src="img/avatars/lone.png"
                alt="User beth"
                className="w-10 h-10 p-1 my-2 mx-8 rounded-full ring-2 to-blue-800 dark:to-blue-800"
              />
              <img
                src="img/avatars/claire.bfdbc161.jpeg"
                alt="User claire"
                className="w-10 h-10 p-1 my-2 mx-8 rounded-full ring-2 to-blue-800 dark:to-blue-800"
              />
              <img
                src="img/avatars/iwan.70e1c572.jpeg"
                alt="User iwan"
                className="w-10 h-10 p-1 my-2 mx-8 rounded-full ring-2 to-blue-800 dark:to-blue-800"
              />
              <img
                src="img/avatars/lori.07099057.jpeg"
                alt="User lori"
                className="w-10 h-10 p-1 my-2 mx-8 rounded-full ring-2 to-blue-800 dark:to-blue-800"
              />
              <img
                src="img/avatars/mali.a8248c71.webp"
                alt="User mali"
                className="w-10 h-10 p-1 my-2 mx-8 rounded-full ring-2 to-blue-800 dark:to-blue-800"
              />
              <img src="img/avatars/mi.68a0f720.jpeg" alt="User mi" className="w-10 h-10 p-1 my-2 mx-8 rounded-full ring-2 to-blue-800 dark:to-blue-800" />
              <img src="img/avatars/nim.d6bbfb63.jpeg" alt="User nim" className="w-10 h-10 p-1 my-2 mx-8 rounded-full ring-2 to-blue-800 dark:to-blue-800" />
              <img src="img/avatars/san.3b86301b.jpeg" alt="User san" className="w-10 h-10 p-1 my-2 mx-8 rounded-full ring-2 to-blue-800 dark:to-blue-800" />
              <img src="img/avatars/sanjid.2d7a907f.jpeg" alt="User sanjid" className="w-10 h-10 p-1 my-2 mx-8 rounded-full ring-2 to-blue-800 dark:to-blue-800" />
              <img src="img/avatars/steph.68f47994.jpeg" alt="User steph" className="w-10 h-10 p-1 my-2 mx-8 rounded-full ring-2 to-blue-800 dark:to-blue-800" />
              <img src="img/avatars/zak.be2e6aeb.jpeg" alt="User zak" className="w-10 h-10 p-1 my-2 mx-8 rounded-full ring-2 to-blue-800 dark:to-blue-800" />
              <img src="img/avatars/judith.8d0417f0.jpeg" alt="User judith" className="w-10 h-10 p-1 my-2 mx-8 rounded-full ring-2 to-blue-800 dark:to-blue-800" />
            </div>
            <div className="mt-6 sm:mt-12 sm:text-center" >
              <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl md:leading-tight md:max-w-4xl md:mx-auto" >
                {t('title')}
                <span className="text-primary" >.</span>
              </h2>
            </div>
            <div className="mt-6 sm:mt-12 sm:mx-auto sm:max-w-lg flex flex-col items-center" ></div>

            <WaitListForm classes="mt-6 sm:mt-12 sm:mx-auto sm:max-w-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinSection
