import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslations } from "next-intl"

const Footer = () => {
  const { locale, push } = useRouter()
  const t = useTranslations('Footer')

  const handleLocaleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newLocale = locale === 'en' ? 'es' : 'en'

    push('/', '/', { locale: newLocale })
  }

  return(
    <footer className="bg-secondary">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <a href="https://github.com/medellin-dev/medellin.dev" target="_blank" rel="noopener noreferrer" className="text-base text-white/60 hover:text-white">
              Github
            </a>
          </div>
          <div className="px-5 py-2">
            <Link href="/privacy" locale={locale} className="text-base text-white/60 hover:text-white">
              {t('privacy')}
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/terms" locale={locale} className="text-base text-white/60 hover:text-white">
              {t('terms')}
            </Link>
          </div>
          <div className="px-5 py-2">
            <button
              onClick={handleLocaleChange}
              className="text-white bg-transparent hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center dark:hover:bg-blue-700"
              type="button"
            >
              <span className="font-bold">
                {locale === 'es' ? '🇨🇴 Español' : '🇺🇸 English'}
              </span>
              <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
          </div>
        </nav>
        <p className="mt-8 mb-2 text-center text-base text-white">
          {t('madeBy')} 👩🏻‍💻👨🏼‍💻
        </p>
        <p className="text-center text-base text-white">
          &copy; {new Date().getFullYear()} medellin.dev - {t('copy')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
