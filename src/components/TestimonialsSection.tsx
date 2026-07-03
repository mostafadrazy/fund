import React from 'react';
import { motion } from 'motion/react';
import { VerticalCutReveal } from './ui/vertical-cut-reveal';

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Growing my wealth while completely avoiding Riba was always a challenge until I found Mizan Cap. Their transparency and real estate results are unmatched.',
    name: 'Alice Johnson',
    username: '@alicejohnson',
    socialIcon: 'fa-brands fa-x-twitter'
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'A clean, ethical investment model that finally works. The compounding returns on our initial investment are outstanding, and the Sadaqah Jariyah stream is truly a blessing.',
    name: 'David Smith',
    username: '@davidsmith',
    socialIcon: 'fa-brands fa-linkedin'
  },
  {
    image: 'https://i.imgur.com/kaDy9hV.jpeg',
    text: 'Seeing a portion of our profits directly support Muslim-owned local businesses shows how Mizan Cap puts community first. It is real, tangible economic empowerment.',
    name: 'Emma Brown',
    username: '@emmabrown',
    socialIcon: 'fa-brands fa-instagram'
  },
  {
    image: 'https://i.imgur.com/cRwFxtE.png',
    text: 'The returns are robust and completely Halal. Knowing my funds are backed by real, meticulously vetted properties gives me absolute peace of mind.',
    name: 'James Wilson',
    username: '@jameswilson',
    socialIcon: 'fa-brands fa-x-twitter'
  },
  {
    image: 'https://i.imgur.com/TQIqsob.png',
    text: 'Mizan Cap bridges the gap between commercial viability and spiritual alignment. It is more than a fund; it is a vital community institution.',
    name: 'Sophia Lee',
    username: '@sophialee',
    socialIcon: 'fa-brands fa-linkedin'
  },
  {
    image: 'https://i.imgur.com/3ROmJ0S.png',
    text: 'The best investment decision I have made. Watching my capital compound while simultaneously generating continuous charity has changed how I view wealth.',
    name: 'Michael Davis',
    username: '@michaeldavis',
    socialIcon: 'fa-brands fa-x-twitter'
  },
  {
    image: 'https://i.imgur.com/6fKCuVC.png',
    text: 'A beautifully structured Islamic platform. Professional, compliant, and highly responsive to investor questions.',
    name: 'Emily Chen',
    username: '@emilychen',
    socialIcon: 'fa-brands fa-instagram'
  },
  {
    image: 'https://i.imgur.com/Jjqe7St.png',
    text: 'Finally, an investment fund that does not force you to compromise your faith for convenience or high-yield real estate returns.',
    name: 'Robert Lee',
    username: '@robertlee',
    socialIcon: 'fa-brands fa-linkedin'
  },
  {
    image: 'https://i.imgur.com/bG88vHI.png',
    text: 'Mizan Cap sets a new standard for modern Islamic finance. The direct link to local business reinvestment makes it a self-sustaining cycle of wealth.',
    name: 'Sarah Taylor',
    username: '@sarahtaylor',
    socialIcon: 'fa-brands fa-x-twitter'
  },
  {
    image: 'https://i.imgur.com/tjmS77j.png',
    text: 'Transparent operations, strict Shariah principles, and strong portfolio growth. I highly recommend Mizan Cap to anyone looking to invest ethically.',
    name: 'Kevin White',
    username: '@kevinwhite',
    socialIcon: 'fa-brands fa-linkedin'
  },
  {
    image: 'https://i.imgur.com/yTsomza.png',
    text: 'I appreciate the clean dashboard, the ease of starting, and the regular impact statements detailing where our Sadaqah Jariyah is distributed.',
    name: 'Rachel Patel',
    username: '@rachelpatel',
    socialIcon: 'fa-brands fa-instagram'
  },
  {
    image: 'https://i.imgur.com/pnsLqpq.png',
    text: 'The real estate portfolio is performing beautifully. It is amazing to see our communities thrive as a direct result of halal wealth building.',
    name: 'Brian Kim',
    username: '@briankim',
    socialIcon: 'fa-brands fa-x-twitter'
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white px-6 py-24 overflow-hidden">
      <div className="max-w-[88rem] mx-auto">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <p className="text-black/60 text-sm mb-3 uppercase tracking-widest font-semibold">Investor Voices</p>
          <div className="mb-6">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.08}
              staggerFrom="first"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 22,
              }}
              containerClassName="text-black text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
            >
              {"What Our Community Says"}
            </VerticalCutReveal>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            Real stories from families, business owners, and community members growing their wealth completely free from interest (Riba).
          </motion.p>
        </div>

        {/* Testimonials Bento/Waterfall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="bg-[#F5F5F5] rounded-3xl p-8 flex flex-col justify-between hover:bg-mizan-green hover:text-white transition-all duration-300 hover:-translate-y-2 group cursor-pointer shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Quotation Icon decoration */}
                <div className="text-black/10 group-hover:text-white/10 text-5xl mb-4 transition-colors font-serif h-6">
                  “
                </div>
                <p className="text-gray-700 group-hover:text-white/90 text-lg leading-relaxed mb-8 font-medium transition-colors">
                  {testimonial.text}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-transparent group-hover:border-transparent transition-colors">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-black group-hover:text-white font-semibold text-base transition-colors leading-none mb-1">
                      {testimonial.name}
                    </h4>
                    <span className="text-gray-500 group-hover:text-white/60 text-sm transition-colors">
                      {testimonial.username}
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white group-hover:bg-white/10 flex items-center justify-center text-black group-hover:text-white shadow-sm transition-all duration-300">
                  <i className={testimonial.socialIcon}></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
