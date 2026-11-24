const ContactMessage = require('../models/ContactMessage')

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isMissing(value) {
  return typeof value !== 'string' || value.trim() === ''
}

async function createContactMessage(req, res) {
  try {
    const { firstName, lastName, email, phone, subject, message } =
      req.body || {}

    if (
      isMissing(firstName) ||
      isMissing(lastName) ||
      isMissing(email) ||
      isMissing(phone) ||
      isMissing(subject) ||
      isMissing(message)
    ) {
      return res.status(400).json({ message: 'All fields are required.' })
    }

    if (!emailPattern.test(email.trim())) {
      return res
        .status(400)
        .json({ message: 'Please enter a valid email address.' })
    }

    const contactMessage = await ContactMessage.create({
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
    })

    res.status(201).json({
      message: 'Contact message saved successfully.',
      contactMessage,
    })
  } catch (error) {
    console.error('Error saving contact message:', error.message)
    res.status(500).json({ message: 'Failed to save contact message.' })
  }
}

module.exports = { createContactMessage }
