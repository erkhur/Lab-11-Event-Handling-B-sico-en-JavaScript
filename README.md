# Lab-11-Event-Handling-B-sico-en-JavaScript
Editor Avanzado de Markdown en Vivo con Mejoras
# 📝 Editor Avanzado de Markdown en Vivo

Este proyecto es un **Editor de Markdown en tiempo real**, desarrollado como proyecto integrador del **Módulo 3: Aplicaciones Web con Objetos**.  
Permite escribir texto en Markdown y visualizar automáticamente su conversión a HTML, incorporando interactividad, manejo del DOM, eventos, funciones avanzadas y validaciones con excepciones.

---

## 🎯 Objetivo del Proyecto

Desarrollar una aplicación web interactiva que consolide los siguientes conceptos de JavaScript:

- Manipulación avanzada del DOM
- Funciones y callbacks
- Manejo de eventos
- Validación y manejo de errores con excepciones
- Persistencia de datos con `localStorage`
- Experiencia de usuario con temas visuales (light/dark)

---

## 🚀 Funcionalidades Principales

### ✅ HU1: Preview en Tiempo Real
**Como usuario**, quiero que la vista previa del Markdown se actualice automáticamente mientras escribo, sin presionar botones adicionales.

**✔ Criterios cumplidos:**
- El preview se actualiza en tiempo real al escribir.
- No requiere interacción adicional.
- Conversión automática de Markdown a HTML.

---

### ✅ HU2: Botón Limpiar Editor
**Como usuario**, necesito un botón para limpiar rápidamente el editor y la vista previa.

**✔ Criterios cumplidos:**
- Botón “Limpiar” funcional.
- El editor y el preview quedan vacíos inmediatamente.
- Se limpia también el contenido guardado en `localStorage`.

---

### ✅ HU3: Contador Dinámico
**Como usuario**, deseo visualizar en tiempo real el conteo de palabras y caracteres.

**✔ Criterios cumplidos:**
- Contador de palabras y caracteres en tiempo real.
- Se actualiza automáticamente mientras el usuario escribe.

---

## 🌟 Logros Adicionales

### 🎨 Selector de Tema (Light / Dark)
- Menú desplegable para cambiar entre modo claro y oscuro.
- El tema seleccionado se guarda en `localStorage`.
- El estilo se mantiene al recargar la página.

---

### 💾 Persistencia de Contenido
- El texto del editor se guarda automáticamente en `localStorage`.
- Al recargar la página, el contenido se restaura.

---

## 🧩 Sintaxis Markdown Soportada

- Encabezados: `#`, `##`, `###`
- Negrita: `**texto**`
- Cursiva: `*texto*`
- Listas:
  - `- Item`
  - `* Item`
- Párrafos automáticos

---

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (modo claro / oscuro)
- JavaScript (ES6+)
- DOM API
- LocalStorage

---

## 📁 Estructura del Proyecto

