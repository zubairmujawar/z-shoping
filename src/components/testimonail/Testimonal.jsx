/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-orange-400'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOL6ZfACLH5vKdENlbP4j3as8u5GUE1IOGc6D0nklQA&s" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                {/* <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" /> */}
                                {/* <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal Nayan Upadhyay</h2> */}
                                {/* <p className="text-gray-500">Senior Product Designer</p> */}
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                {/* <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" /> */}
                                {/* <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">S Mishra</h2> */}
                                {/* <p className="text-gray-500">UI Develeoper</p> */}
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                {/* <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" /> */}
                                {/* <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">XYZ </h2> */}
                                {/* <p className="text-gray-500">CTO</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial