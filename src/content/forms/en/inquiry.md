---
title: Quick Inquiry
slug: inquiry
fields:
  - type: text
    name: name
    required: true
    placeholder: Your Name
  - type: email
    name: email
    required: true
    placeholder: Email Address
  - type: select
    name: interests
    required: true
    placeholder: I'm interested in...
    options:
      - value: buying
        label: Buying a property
      - value: investing
        label: Investment opportunities
      - value: development
        label: Development partnership
      - value: other
        label: Something else
  - type: textarea
    name: message
    required: true
    placeholder: Tell us about your project...
    rows: 3
submit_label: Send Inquiry
success_message: Thank you! We'll be in touch soon
---
