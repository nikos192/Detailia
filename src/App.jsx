import React, { useState } from 'react'
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Instagram,
  CheckCircle,
} from 'lucide-react'

// ============================================
// CONTENT OBJECT - EDIT HERE FOR UPDATES
// ============================================
const CONTENT = {
  business: {
    name: 'Detailia GC',
    tagline: 'Professional Interior & Exterior Detailing',
    phone: '0478 451 171',
    instagram: '@detailiagc',
    hours: '9:00 AM - 5:00 PM Daily',
    serviceArea: 'Mobile Service - Gold Coast & Brisbane',
    email: 'hello@detailia.com.au',
  },
  hero: {
    headline: 'Professional Interior & Exterior Detailing',
    subheadline:
      'Premium mobile car detailing service bringing showroom-quality results to your doorstep across the Gold Coast and Brisbane',
    ctaPrimary: 'View Packages',
    ctaSecondary: 'Call Now',
  },
  trustBar: [
    { text: 'Mobile Service', icon: '🚗' },
    { text: 'Premium Products', icon: '✨' },
    { text: 'Transparent Pricing', icon: '💰' },
    { text: '1.5 Hour Service', icon: '⚡' },
  ],
  portfolio: [
    {
      image: '/images/car-1.png',
      title: 'Premium Exterior Detailing',
      description: 'Full exterior restoration with showroom finish',
    },
    {
      image: '/images/car-2.png',
      title: 'Mercedes AMG Detail Work',
      description: 'Complete interior & exterior detailing',
    },
    {
      image: '/images/car-3.png',
      title: 'Lamborghini Showroom Finish',
      description: 'Luxury vehicle detailing excellence',
    },
    {
      image: '/images/car-4.png',
      title: 'High-End Paint Protection',
      description: 'Professional ceramic coating applied',
    },
  ],
  packages: [
    {
      title: 'Exterior Detail',
      icon: '🚗',
      priceRange: '$60 - $100',
      priceNote: '(Based on vehicle size)',
      duration: 'Approx. 45 mins',
      description: 'Professional exterior cleanup and shine',
      features: [
        'Pre-soak & pressure wash',
        'Wheel & tyre clean',
        'Safe hand wash (microfibre)',
        'Soft towel dry',
        'Clean door jambs',
        'All windows cleaned',
        'Tyre shine',
      ],
      popular: false,
    },
    {
      title: 'Interior Detail',
      icon: '✨',
      priceRange: '$90 - $130',
      priceNote: '',
      duration: 'Approx. 1 hour',
      description: 'Complete interior refresh and detailing',
      features: [
        'Vacuum carpets, mats & boot',
        'Surface wipe-down (microfibre)',
        'Detailing brush clean for all interior surfaces',
        'Streak-free window cleaning',
      ],
      popular: false,
    },
    {
      title: 'Basic Wash & Detail',
      icon: '🌟',
      priceRange: 'From $150 - $170',
      priceNote: 'Small to Large Vehicles',
      duration: 'Approx. 1.5 hours',
      description: 'Complete interior & exterior service',
      features: [
        'Pre-soak & pressure rinse',
        'Wheel & tyre clean',
        'Hand wash (microfibre-safe)',
        'Soft towel dry',
        'Clean door jambs',
        'All windows cleaned',
        'Tyre shine',
        'Vacuum (mats, carpets & boot)',
        'Multi-surface wipe down',
        'Detailing brush clean for tight spots',
      ],
      popular: true,
    },
  ],
  monthlyPlan: {
    title: 'Monthly Detail Plan',
    price: '$130/month',
    description: 'Perfect for busy professionals and regular upkeep',
    features: [
      'Full Basic Wash & Detail every month',
      'Convenient scheduling',
      'Consistent showroom finish',
      'Save vs. one-off bookings',
    ],
    note: 'Initial Basic Wash & Detail required before starting the plan',
  },
  about: {
    title: 'Why Choose Detailia GC?',
    description:
      'At Detailia GC, we believe your vehicle deserves more than just a wash. We combine meticulous attention to detail with cutting-edge techniques and premium products to deliver showroom-quality finishes every single time.',
    highlights: [
      'Safe, paint-protecting wash methods',
      'High-end finishing products and techniques',
      'Experienced, professional team',
      'Transparent pricing – no hidden fees',
    ],
  },
  whyChoose: [
    {
      title: 'Showroom Finish',
      description: 'Every vehicle leaves looking like it just rolled off the lot. Premium results, guaranteed.',
      icon: '⭐',
    },
    {
      title: 'Paint Protection',
      description: 'Our safe methods and quality products protect your investment. No damage, maximum results.',
      icon: '🛡️',
    },
    {
      title: 'We Come to You',
      description: 'Mobile service saves you time. Come to you on the Gold Coast and Brisbane.',
      icon: '🚀',
    },
    {
      title: 'Honest Pricing',
      description: 'Clear pricing, no surprises. You know exactly what you\'re getting and paying for.',
      icon: '✓',
    },
  ],
}

// ============================================
// COMPONENTS
// ============================================

function Header({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-subtle' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src="/images/logo.svg" alt="Detailia Logo" className={`w-10 h-10 transition-all duration-300 ${scrolled ? 'brightness-0' : 'brightness-100'}`} />
            <h1
              className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              {CONTENT.business.name}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('gallery')}
              className={`font-medium transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className={`font-medium transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Packages & Pricing
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              About
            </button>
            <a
              href={`tel:${CONTENT.business.phone}`}
              className="btn-primary"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? 'text-primary' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-primary' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Packages & Pricing
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              About
            </button>
            <a
              href={`tel:${CONTENT.business.phone}`}
              className="block px-4 py-2 text-center bg-blue-600 text-white rounded-lg font-medium"
            >
              Call Now
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  const scrollToPackages = () => {
    const element = document.getElementById('packages')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary via-gray-900 to-primary flex items-center pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-glow"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-glow"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Logo */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <img src="/images/logo.svg" alt="Detailia Gold Coast" className="w-96 h-auto drop-shadow-xl" />
          </div>
          
          {/* Right side - Content */}
          <div className="flex-1 text-white space-y-8 animate-slideIn">
            <div className="inline-block px-4 py-2 bg-blue-600/30 rounded-full border border-blue-400/50 w-fit">
              <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest">Premium Detailing</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              {CONTENT.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
              {CONTENT.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button
                onClick={scrollToPackages}
                className="btn-primary bg-blue-600 hover:bg-blue-700 text-lg"
              >
                {CONTENT.hero.ctaPrimary}
              </button>
              <a href={`tel:${CONTENT.business.phone}`} className="btn-secondary bg-white border-white hover:bg-gray-100 text-primary text-lg">
                {CONTENT.hero.ctaSecondary}: {CONTENT.business.phone}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12">
              <div>
                <p className="text-3xl font-bold text-blue-400">500+</p>
                <p className="text-gray-300 text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">5★</p>
                <p className="text-gray-300 text-sm">Rated Service</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">10+</p>
                <p className="text-gray-300 text-sm">Years Exp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="bg-white py-16 md:py-20 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {CONTENT.trustBar.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-gray-50 transition-all duration-300"
            >
              <div className="text-5xl transform hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <p className="font-semibold text-gray-900 text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Packages() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="packages" className="py-20 md:py-28 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Packages & Pricing</h2>
          <p className="section-subtitle mx-auto">
            Transparent pricing for professional detailing services. Mobile service to your location.
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {CONTENT.packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                pkg.popular
                  ? 'md:scale-105 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-elevated'
                  : 'bg-white border border-gray-200 text-gray-900 shadow-subtle hover:shadow-elevated hover:border-blue-200'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 text-sm font-bold rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className="p-8 space-y-6">
                <div>
                  <div className="text-5xl mb-4">{pkg.icon}</div>
                  <h3 className={`text-2xl font-bold mb-2 ${!pkg.popular && 'text-primary'}`}>
                    {pkg.title}
                  </h3>
                  <p className={`${pkg.popular ? 'text-blue-100' : 'text-gray-600'} text-sm`}>
                    {pkg.description}
                  </p>
                </div>

                <div className={`border-t border-b py-4 ${pkg.popular ? 'border-blue-400' : 'border-gray-200'}`}>
                  <div className={`text-3xl font-bold mb-1 ${!pkg.popular && 'text-blue-600'}`}>
                    {pkg.priceRange}
                  </div>
                  <p className={`text-sm ${pkg.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {pkg.priceNote}
                  </p>
                  <p className={`text-xs mt-2 ${pkg.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                    {pkg.duration}
                  </p>
                </div>

                <ul className="space-y-3">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-blue-200' : 'text-blue-600'}`} />
                      <span className={`text-sm ${pkg.popular ? 'text-blue-50' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    pkg.popular
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Plan */}
        <div className="bg-gradient-to-r from-primary to-gray-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="w-24 h-24"><img src="/images/logo.svg" alt="Detailia Logo" className="w-full h-full" /></div>
              <h3 className="text-3xl font-bold">{CONTENT.monthlyPlan.title}</h3>
              <p className="text-2xl font-bold text-blue-300">{CONTENT.monthlyPlan.price}</p>
              <p className="text-gray-300 text-lg">{CONTENT.monthlyPlan.description}</p>
              <p className="text-sm text-gray-400 italic">{CONTENT.monthlyPlan.note}</p>
            </div>
            <ul className="space-y-4">
              {CONTENT.monthlyPlan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="section-title">{CONTENT.about.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {CONTENT.about.description}
            </p>
            <ul className="space-y-3 pt-4">
              {CONTENT.about.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl shadow-subtle flex items-center justify-center overflow-hidden">
              <img src="/images/car-5.png" alt="Detailing showcase" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Strengths</h2>
          <p className="section-subtitle mx-auto">
            We deliver premium results with exceptional service every time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CONTENT.whyChoose.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-8 shadow-subtle hover:shadow-elevated transition-shadow duration-300 border border-gray-200"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      })
      setSubmitted(true)
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          vehicle: '',
          service: '',
          message: '',
        })
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Get Your Quote</h2>
          <p className="section-subtitle mx-auto">
            Fill out the form below or give us a call to discuss your detailing needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 lg:col-span-1">
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary mb-1">Phone</h3>
                <a
                  href={`tel:${CONTENT.business.phone}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {CONTENT.business.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Instagram className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary mb-1">Instagram</h3>
                <a
                  href={`https://instagram.com/${CONTENT.business.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {CONTENT.business.instagram}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary mb-1">Hours</h3>
                <p className="text-gray-600">{CONTENT.business.hours}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary mb-1">Service Area</h3>
                <p className="text-gray-600">{CONTENT.business.serviceArea}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white rounded-lg p-8 space-y-6 shadow-subtle"
          >
            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4">
                Thank you! We'll be in touch shortly.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="vehicle"
                placeholder="Vehicle Make & Model"
                value={formData.vehicle}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">Select a Package</option>
                {CONTENT.packages.map((pkg, idx) => (
                  <option key={idx} value={pkg.title}>
                    {pkg.title} - {pkg.priceRange}
                  </option>
                ))}
                <option value="Monthly Plan">{CONTENT.monthlyPlan.title}</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your vehicle and any specific concerns..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full btn-primary bg-blue-600 hover:bg-blue-700 py-4 text-lg"
            >
              Request a Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-primary text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-2">{CONTENT.business.name}</h3>
            <p className="text-gray-400">{CONTENT.business.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Packages & Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-gray-400">
              <a
                href={`tel:${CONTENT.business.phone}`}
                className="hover:text-white transition-colors"
              >
                {CONTENT.business.phone}
              </a>
            </p>
            <p className="text-gray-400 mt-2">
              <a
                href={`https://instagram.com/${CONTENT.business.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {CONTENT.business.instagram}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {CONTENT.business.serviceArea}
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {CONTENT.business.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Gallery() {
  const [selectedImage, setSelectedImage] = React.useState(null)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Work</p>
          </div>
          <h2 className="section-title">Premium Detailing Showcase</h2>
          <p className="section-subtitle mx-auto">
            Real results from our clients. Every vehicle is treated with the same meticulous care and attention to detail.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {CONTENT.portfolio.map((item, idx) => (
            <div
              key={idx}
              className="premium-card group cursor-pointer relative overflow-hidden aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"></div>
              
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center">
          <p className="text-gray-600 text-lg">
            Want to see more? 
            <a 
              href="https://www.instagram.com/detailiagc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold ml-2 hover:underline transition-colors"
            >
              Follow @detailiagc →
            </a>
          </p>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50"
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// ============================================
// MAIN APP
// ============================================

function App() {
  const [scrolled, setScrolled] = useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header scrolled={scrolled} />
      <Hero />
      <TrustBar />
      <Gallery />
      <Packages />
      <About />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
