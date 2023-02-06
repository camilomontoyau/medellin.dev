import { FC, FormEvent } from 'react'
import { useTranslations } from 'next-intl'

type WaitListProps = {
  classes?: string
}

const WaitListForm: FC<WaitListProps> = ({ classes }) => {
  const t = useTranslations('WaitList')

  const className = `
    grid gap-2 grid-cols-1 sm:w-full sm:flex sm:items-center sm:flex-wrap
    ${classes}
  `
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const { target } = event;
    event.preventDefault()

    if (!(target instanceof HTMLFormElement)) {
      return
    }

    const formData = new FormData(target)
    const form = Object.fromEntries(formData)
    console.log(form)
  }

  return(
    <form
      onSubmit={handleSubmit}
      className={className}
    >
      <label htmlFor="cta-email" className="sr-only">
        {t('form.label')}
      </label>
      <input
        id="cta-email"
        type="email"
        className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary focus-visible:ring-primary flex-1"
        required
        placeholder={t('form.placeholder')}
      />
      <div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">
          {t('form.submit')}
        </button>
      </div>
    </form>
  )
}

export default WaitListForm
