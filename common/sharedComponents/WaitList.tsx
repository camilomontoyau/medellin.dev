import { FC, FormEvent } from 'react'

type WaitListProps = {
  classes?: string
}

const WaitListForm: FC<WaitListProps> = ({ classes }) => {
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
      <label htmlFor="cta-email" className="sr-only">Email address</label>
      <input
        id="cta-email"
        type="email"
        className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary focus-visible:ring-primary flex-1"
        required
        placeholder="Enter your email..."
      />
      <div>
        <button className="ui-button ui-button-base ui-button-primary" type="submit">
          Join the waiting list
        </button>
      </div>
    </form>
  )
}

export default WaitListForm
