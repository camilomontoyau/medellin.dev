import FeatureItem from "../common/FeatureItem"

const FeatureSection = () => {
  return(
    <section className="relative pt-16 pb-32 overflow-hidden bg-white space-y-24" id="dp5ohb5bbp">
      <FeatureItem
        featureContent={{
          title: 'Join developer communities',
          description: 'Discover and join up with the developer communities in Medellin. Connect with like-minded professionals and grow your network.',
          image: 'img/Developer-activity.svg'
        }}
        position='right'
      />
      <FeatureItem
        featureContent={{
          title: 'Find tech events',
          description: 'Never miss out on any tech events in Medellin. With DevMeetups, you can find the events you are interested in and join the conversation..',
          image: 'img/Hand-coding_Artboard-1.svg'
        }}
        position='left'
      />
    </section>
  )
}

export default FeatureSection
