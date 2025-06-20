import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const testimonials = [
    { name: 'Client A', text: 'Amazing work on Holy Bless!' },
    { name: 'Client B', text: 'Siam Blessing is stunning!' },
  ];

  return (
    <div className="w-full py-8 bg-white bg-opacity-10 backdrop-blur-md">
      <h2 className="text-3xl font-bold text-white text-center mb-4">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i} className="p-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 text-white text-center">
              <p>{t.text}</p>
              <h3 className="mt-2 font-bold">{t.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialCarousel;
