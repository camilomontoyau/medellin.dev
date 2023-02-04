import {FC} from 'react'

type FeatureProps = {
  title: string
  description: string
}

const Feature: FC<FeatureProps> = ({ title, description }) => {
  return(
    <div>
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
        {title}<span className="text-primary">.</span>
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-gray-500 sm:text-xl">
        {description}
      </p>
    </div>
  )
}

export default Feature
