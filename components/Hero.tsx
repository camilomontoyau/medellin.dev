import { useTranslations } from 'next-intl'

import WaitListForm from "../common/sharedComponents/WaitList"

const Hero = () => {
  const t = useTranslations('Hero')

  return(
    <section className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
      <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div>
          <div className="flex items-center space-x-2">
            <img className="w-auto h-8" src="img/devMeetups.svg" alt="medellin.dev logo" />
            <p className="font-sans text-xl font-bold text-gray-900">medellin.dev</p>
          </div>
          <div className="mt-14">
            <div className="mt-6 sm:max-w-xl">
              <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
                {t('title')}<span className="text-primary">.</span>
              </h1>
              <h2 className="mt-6 text-lg text-gray-500 sm:text-xl">
                {t('eyebrow')}
              </h2>
            </div>
            <div className="mt-10 space-y-4">
              <WaitListForm classes="mt-4 sm:max-w-lg" />
            </div>
            {/* Social Proofing  */}
            {/* User Review */}
            <div className="mt-6">
              <div className="inline-flex items-center">
                <img
                  src="img/avatars/female-17.png"
                  alt="Isabella Ermington"
                  className="object-cover inline-block mr-3 border-2 border-primary rounded-full sm:mr-2 h-14 w-14"
                />
                <div>
                  <p className="sm:pl-2.5 text-base font-black tracking-tight text-gray-800 sm:text-lg">
                    “medellin.dev has given me the chance to be part of a great community of developers.”
                  </p>
                  <p className="sm:pl-2.5 text-sm sm:text-base font-bold text-gray-500">
                    Isabella Ermington
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
        <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="hidden sm:block">
            <div className="absolute inset-y-0 w-screen left-1/2 bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
            <svg className="absolute -mr-3 top-8 right-1/2 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
                </pattern>
              </defs>
              <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect>
            </svg>
          </div>
          <div className="relative pl-4 -mr:20 sm:-mr-32 md:-mr-16 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:flex lg:items-center xl:pl-12">
            <img
              className="w-full rounded-l-3xl lg:w-auto 2xl:h-full 2xl:max-w-none"
              src="img/Video-Game-Developer.svg"
              alt="medellin.dev"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
