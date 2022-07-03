import { Navbar, Welcome, Footer,Featured, Testimonial, FeaturedTwo, TestimonialTwo }  from '../components'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Welcome />
        <Featured />
        <Testimonial />
        <FeaturedTwo />
        <TestimonialTwo />
        <Footer />


    </div>
  )
}

export default Home;