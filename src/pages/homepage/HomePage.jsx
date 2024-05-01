import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homepageproducts/HomePageProductCart'
import HomeSection from '../../components/homesection/HomeSection'
import Layout from '../../components/layout/Layout'
import Testimonial from '../../components/testimonail/Testimonal'
import Track from '../../components/track/Track'
import Loader from '../../components/loader/Loader'


const HomePage = () => {
  return (
    <Layout>
     <HomeSection/>
     <Category/>
     <HomePageProductCard/>
     <Track/>
     <Testimonial/>
     <Loader/>
    </Layout>
  )
}

export default HomePage
