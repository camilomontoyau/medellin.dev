import { useTranslations } from 'next-intl'

import FeatureItem from '../common/FeatureItem'

const FeatureSection = () => {
  const t = useTranslations('FeatureSection')

  return(
    <section className="relative pt-16 pb-32 overflow-hidden bg-white space-y-24" id="dp5ohb5bbp">
      <FeatureItem
        featureContent={{
          title: t('sectionOne.title'),
          description: t('sectionOne.description'),
          image: 'img/Developer-activity.svg'
        }}
        position='right'
      />
      <FeatureItem
        featureContent={{
          title: t('sectionTwo.title'),
          description: t('sectionTwo.description'),
          image: 'img/Hand-coding_Artboard-1.svg'
        }}
        position='left'
      />
    </section>
  )
}

export default FeatureSection
