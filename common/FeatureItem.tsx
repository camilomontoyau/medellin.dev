import { FC } from "react"

import Feature from "./sharedComponents/Feature"

type FeatureItemProps = {
  featureContent: {
    title: string
    description: string
    image: string
  }
  position: 'left' | 'right'
}

const FeatureItem: FC<FeatureItemProps> = ({ featureContent, position }) => {
  const { title, description, image } = featureContent
  const isRightContent = `
    ${position === 'right' ? 'lg:col-start-2 ' : ' '}
    max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 space-y-6
  `
  const isRightImage = `
    ${position === 'right' ? 'lg:col-start-1 ' : ' '}
    mt-12 sm:mt-16 lg:mt-0
  `
  const isRightImageParent = position === 'right'
    ? 'pr-4 -sm:ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full lg:flex lg:items-center'
    : 'pl-4 sm:-mr-48 sm:-mr-6 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full lg:flex lg:items-center'
  const isRightImageChild = position === 'right'
    ? 'lg:right-0 w-full lg:absolute lg:w-auto lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl rounded'
    : 'lg:left-0 w-full lg:absolute lg:w-auto lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl rounded'

  return(
    <div>
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-6 xl:gap-12 2xl:gap-24">
        <div className={isRightContent}>
          <Feature
            title={title}
            description={description}
          />
          <div></div>
        </div>
        <div className={isRightImage}>
          <div className={isRightImageParent}>
            <img
              className={isRightImageChild}
              src={image}
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureItem
