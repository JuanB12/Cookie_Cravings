# Chatbot para Cookie Cravings 🍪🤖

Chatbot diseñado para la tienda en línea **Cookie Cravings**, especializada en galletas estilo Nueva York y panes artesanales. Proporciona atención automatizada a clientes mediante respuestas rápidas a preguntas frecuentes.

## 🔍 Descripción
- **Plataforma**: Dialogflow (Google Cloud)
- **Tipo**: Chatbot conversacional
- **Integración**: Widget web nativo de Dialogflow Messenger
- **Idioma**: Español

## 🛠️ Funcionalidades principales
- Responde preguntas sobre productos, horarios y envíos
- Guía a los clientes en el proceso de compra
- Disponible 24/7 desde cualquier dispositivo

## 💬 Intenciones configuradas (Intents)
| Intención | Ejemplo de pregunta | Respuesta |
|-----------|---------------------|-----------|
| `sabores_disponibles` | "¿Qué sabores tienen?" | Lista de sabores con sugerencias |
| `metodos_envio` | "¿Hacen envíos a domicilio?" | Detalles de envíos y recogida |
| `proceso_pedido` | "¿Cómo hago un pedido?" | Instrucciones para comprar |
| `horario_atencion` | "¿A qué hora abren?" | Horario comercial |

## 🚀 Integración
```html
<!-- Ejemplo básico de integración del widget -->
<script src="https://www.gstatic.com/dialogflow-console/fast/messenger-cx/bootstrap.js?v=1"></script>
<df-messenger
  chat-title="CookieCravings"
  agent-id="TU_AGENT_ID"
  language-code="es"
></df-messenger>