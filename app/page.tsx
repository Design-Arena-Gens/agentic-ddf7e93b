'use client';

import { motion } from 'framer-motion';
import { Flame, MapPin, Clock, Phone, Mail, Calendar } from 'lucide-react';
import ParticleField from './components/ParticleField';
import DivineHero from './components/DivineHero';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-divine-dark">
      <ParticleField />
      <Navigation />

      {/* Hero Section */}
      <DivineHero />

      {/* About Temple Section */}
      <section id="about" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-temple-red/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold divine-text text-gradient-gold mb-6">
              About The Temple
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-divine-gold to-transparent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl sacred-text text-gray-300 leading-relaxed">
                Vadakkumpuram Vishnumaya Kuttichathan Temple stands as a beacon of divine power and ancient spiritual heritage. Dedicated to Lord Vishnumaya and Kuttichathan, this sacred shrine has been a source of miracles and blessings for countless devotees.
              </p>
              <p className="text-xl sacred-text text-gray-300 leading-relaxed">
                The temple is renowned for its powerful deity who protects devotees from negative energies, grants wishes, and bestows prosperity. Many who seek the blessings of Vishnumaya experience profound transformations in their lives.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <Flame className="w-8 h-8 text-sacred-orange animate-flame" />
                <span className="text-2xl divine-text text-divine-gold">Divine Protection & Blessings</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="torch-glow rounded-2xl overflow-hidden glow-gold">
                <div className="bg-gradient-to-br from-divine-gold/20 to-temple-red/20 p-8 backdrop-blur-sm border border-divine-gold/30">
                  <h3 className="text-3xl font-bold divine-text text-divine-gold mb-6">Temple Specialties</h3>
                  <ul className="space-y-4">
                    {[
                      'Powerful Vishnumaya blessings',
                      'Kuttichathan divine interventions',
                      'Protection from evil forces',
                      'Fulfillment of genuine wishes',
                      'Removal of obstacles',
                      'Prosperity and success'
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-lg sacred-text"
                      >
                        <Flame className="w-5 h-5 text-sacred-orange" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Darshan Timings */}
      <section id="darshan" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold divine-text text-gradient-gold mb-6">
              Darshan Timings
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-divine-gold to-transparent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="torch-glow bg-gradient-to-br from-divine-gold/10 to-temple-red/10 p-8 rounded-2xl border border-divine-gold/30 backdrop-blur-sm"
            >
              <Clock className="w-12 h-12 text-divine-gold mb-4 mx-auto animate-glow" />
              <h3 className="text-2xl font-bold divine-text text-center mb-4">Morning Darshan</h3>
              <p className="text-center text-3xl sacred-text text-divine-gold">6:00 AM - 12:00 PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="torch-glow bg-gradient-to-br from-temple-red/10 to-sacred-orange/10 p-8 rounded-2xl border border-temple-red/30 backdrop-blur-sm"
            >
              <Clock className="w-12 h-12 text-temple-red mb-4 mx-auto animate-glow" />
              <h3 className="text-2xl font-bold divine-text text-center mb-4">Evening Darshan</h3>
              <p className="text-center text-3xl sacred-text text-temple-red">5:00 PM - 8:00 PM</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pooja Services */}
      <section id="pooja" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sacred-orange/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold divine-text text-gradient-gold mb-6">
              Pooja Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-divine-gold to-transparent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Vishnumaya Pooja',
                description: 'Special pooja for divine protection and blessings',
                benefits: ['Protection from enemies', 'Success in endeavors', 'Family harmony']
              },
              {
                title: 'Kuttichathan Seva',
                description: 'Powerful seva for wish fulfillment and prosperity',
                benefits: ['Wish fulfillment', 'Business success', 'Obstacle removal']
              },
              {
                title: 'Special Offerings',
                description: 'Customized offerings for specific needs',
                benefits: ['Health improvements', 'Educational success', 'Marriage prospects']
              }
            ].map((pooja, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="torch-glow bg-gradient-to-br from-divine-gold/10 via-temple-red/5 to-transparent p-8 rounded-2xl border border-divine-gold/20 hover:border-divine-gold/50 transition-all duration-300 group"
              >
                <Flame className="w-12 h-12 text-sacred-orange mb-4 animate-flame group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold divine-text text-divine-gold mb-3">{pooja.title}</h3>
                <p className="sacred-text text-gray-300 mb-6">{pooja.description}</p>
                <ul className="space-y-2">
                  {pooja.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm sacred-text text-gray-400">
                      <Flame className="w-4 h-4 text-sacred-orange" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-divine-gold to-sacred-orange text-black font-bold divine-text rounded-full hover:scale-105 transition-transform duration-300 glow-gold"
            >
              <Calendar className="w-5 h-5" />
              Book Your Pooja
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold divine-text text-gradient-gold mb-6">
              Visit Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-divine-gold to-transparent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-divine-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold divine-text text-divine-gold mb-2">Address</h3>
                  <p className="sacred-text text-gray-300">
                    Vadakkumpuram<br />
                    Vishnumaya Kuttichathan Temple<br />
                    Kerala, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-divine-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold divine-text text-divine-gold mb-2">Phone</h3>
                  <p className="sacred-text text-gray-300">+91 XXXX XXXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-divine-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold divine-text text-divine-gold mb-2">Email</h3>
                  <p className="sacred-text text-gray-300">info@vadakkumpuram.in</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="torch-glow bg-gradient-to-br from-divine-gold/10 to-temple-red/10 p-8 rounded-2xl border border-divine-gold/30"
            >
              <h3 className="text-2xl font-bold divine-text text-divine-gold mb-6">How to Reach</h3>
              <ul className="space-y-4 sacred-text text-gray-300">
                <li>• Nearest Railway Station: Contact for details</li>
                <li>• Nearest Airport: Contact for details</li>
                <li>• Well connected by road transport</li>
                <li>• Ample parking available</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-divine-gold/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold divine-text text-gradient-gold mb-4">
              Vadakkumpuram Vishnumaya Kuttichathan Temple
            </h3>
            <p className="sacred-text text-gray-400 mb-6">
              May the divine blessings of Vishnumaya be with you always
            </p>
            <div className="flex justify-center gap-4 text-divine-gold">
              <Flame className="w-6 h-6 animate-flame" />
              <Flame className="w-6 h-6 animate-flame" style={{ animationDelay: '0.5s' }} />
              <Flame className="w-6 h-6 animate-flame" style={{ animationDelay: '1s' }} />
            </div>
            <p className="mt-8 text-sm text-gray-500">
              © 2024 Vadakkumpuram Temple. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
