---
title: Quick Inquiry
slug: inquiry
fields:
  - type: text
    name: name
    required: true
    placeholder: Seu Nome
  - type: email
    name: email
    required: true
    placeholder: Endereço de Email
  - type: select
    name: interests
    required: true
    placeholder: Estou interessado em...
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
    placeholder: Fale-nos do seu projeto...
    rows: 3
submit_label: Enviar mensagem
success_message: Obrigado! Entraremos em contacto em breve.
---
