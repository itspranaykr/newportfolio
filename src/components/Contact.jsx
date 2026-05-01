// src/components/Contact.jsx
import React, { useState, useRef } from 'react'
import { FaEnvelope, FaPhone, FaMapMarker, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [emailStatus, setEmailStatus] = useState('')
  const formRef = useRef()

  // ==========================================
  // EMAILJS CREDENTIALS - REPLACE WITH YOURS
  // ==========================================
  const SERVICE_ID = "service_mpelt4e"      // Replace with your actual Service ID
  const TEMPLATE_ID = "template_qs2i6y9"    // Replace with your actual Template ID  
  const PUBLIC_KEY = "82631LYFJV3THARgq"   // Replace with your actual Public Key

  // Your WhatsApp number (without + or spaces)
  const phoneNumber = "919376457792"

  // Social Links
  const socialLinks = {
    github: "https://github.com/itspranaykr",
    linkedin: "https://www.linkedin.com/in/pranay-kumar-784aa0312/",
    twitter: "https://x.com/PranayKuma35714",
    instagram: "https://www.instagram.com/itspranaykr/?hl=en",
    leetcode: "https://leetcode.com/u/itspranaykr/",
    whatsapp: `https://wa.me/${9376457792}`,
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Function to send email via EmailJS
  const sendEmail = async (data) => {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject || "No Subject",
        html_message: data.message,
        date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        to_email: "itspranaykr26@gmail.com",
        reply_to: data.email,
      }

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )

      console.log('Email sent successfully!', response)
      return { success: true }
    } catch (error) {
      console.error('Email failed:', error)
      return { success: false, error: error.text }
    }
  }

  // Function to send WhatsApp message
  const sendWhatsApp = (data) => {
    const message = `*📩 New Contact Form Message* 📩

*👤 Name:* ${data.name}
*📧 Email:* ${data.email}
*📋 Subject:* ${data.subject || 'No Subject'}

*💬 Message:*
${data.message}

---
*📱 Sent via Portfolio Website*
*📅 Date/Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setEmailStatus('')

    try {
      // Send email
      const emailResult = await sendEmail(formData)
      
      if (emailResult.success) {
        setEmailStatus('success')
        setSubmitted(true)
        
        // Send WhatsApp message
        sendWhatsApp(formData)
        
        setTimeout(() => {
          setSubmitted(false)
          setEmailStatus('')
        }, 5000)
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setEmailStatus('error')
        setTimeout(() => setEmailStatus(''), 5000)
      }
    } catch (error) {
      console.error('Error:', error)
      setEmailStatus('error')
      setTimeout(() => setEmailStatus(''), 5000)
    } finally {
      setSending(false)
    }
  }

  // Direct WhatsApp click handler
  const openWhatsApp = () => {
    const message = `*👋 Hello Pranay!*

I'm interested in connecting with you regarding opportunities.

---
*Sent via Portfolio Website*`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-4">Let's work together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new opportunities and interesting projects. Fill out the form and I'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-400">
                <FaEnvelope className="text-cyan-400 text-xl" />
                <span>itspranaykr26@gmail.com</span>
              </div>
              <div 
                onClick={openWhatsApp}
                className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer group"
              >
                <FaWhatsapp className="text-green-500 text-xl group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-cyan-400">+91 93764 57792 (Click to WhatsApp)</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <FaMapMarker className="text-cyan-400 text-xl" />
                <span>Noida, India</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-8 flex-wrap">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition">
                <FaGithub size={20} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition">
                <FaLinkedin size={20} />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition">
                <FaTwitter size={20} />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition">
                <FaInstagram size={20} />
              </a>
              <a href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition">
                <SiLeetcode size={20} />
              </a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-green-500 hover:bg-gray-700 transition">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject (e.g., Job Opportunity, Project Collaboration)"
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message *"
                rows="5"
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white resize-none"
              ></textarea>
              
              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center gap-2 group"
                disabled={sending}
              >
                {sending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              
              {emailStatus === 'success' && (
                <div className="text-green-400 text-center p-3 bg-green-500/10 rounded-lg">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {emailStatus === 'error' && (
                <div className="text-red-400 text-center p-3 bg-red-500/10 rounded-lg">
                  ✗ Failed to send. Please WhatsApp me directly at +91 93764 57792
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact