---
title: Envie uma mensagem
slug: inquiry
fields:
  - type: text
    name: name
    required: true
    placeholder: Nome
  - type: email
    name: email
    required: true
    placeholder: Email
  - type: select
    name: interests
    required: true
    placeholder: Estou interessado em...
    options:
      - value: buying
        label: Comprar casa
      - value: investing
        label: Oportunidades de investimento
      - value: development
        label: Parceria num projeto
      - value: other
        label: Outro assunto
  - type: textarea
    name: message
    required: true
    placeholder: Fale-nos do seu projeto...
    rows: 3
submit_label: Enviar mensagem
success_message: Obrigado! Entraremos em contacto em breve.
---
