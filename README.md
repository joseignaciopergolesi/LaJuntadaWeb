# La Juntada - Sitio Web Oficial

Sitio web estático promocional y de captación de alianzas para **La Juntada**, la aplicación para organizar juntadas, dividir gastos y llevar el tanteador de truco con amigos.

---

## 🎨 Identidad Visual Sincronizada con Flutter

Este sitio replica exactamente el `ThemeData` y los tokens de diseño de la aplicación móvil desarrollada en Flutter:

* **Rojo Brasas (Color Primario):** `#B71C1C` (hover: `#E53935`, dark: `#7F0000`)
* **Naranja Fuego (Color de Acento):** `#E65100` (light: `#FF8A50`, dark: `#AC1900`)
* **Fondo Crema Cálido (Quincho):** `#FAF7F2`
* **Superficies Claras:** `#FFFFFF` y `#F5EFE6`
* **Superficies Oscuras:** `#1A1512` y `#251E1A`
* **Tipografía:** *Plus Jakarta Sans* (Google Fonts)

---

## 🚀 Características del Sitio

* **100% Estático (Zero-Database Consumption):** No consume cuotas de lecturas/escrituras en Appwrite Cloud, reservando el 100% de la capacidad del plan Free para los usuarios de la app móvil.
* **Cero Formularios (Cero Spam/Ataques):** Canales de contacto directos de alta conversión para sponsors (WhatsApp con mensaje preformateado, Email con copiado en 1 clic y llamada telefónica directa).
* **Carga Ultrarrápida (< 400ms):** Assets optimizados (iconos en 256px de 102 KB), HTML semántico y micro-interacciones en vanilla JS sin dependencias pesadas.
* **Páginas Legales Obligatorias:** Incluye `privacidad.html` y `terminos.html` listas para publicar en Google Play Console y Apple App Store Connect.
* **Deep Linking Preparado:** Archivos `.well-known/assetlinks.json` (Android) y `.well-known/apple-app-site-association` (iOS) para abrir la app directamente desde links web.

---

## 📁 Estructura del Proyecto

```text
LaJuntadaWeb/
├── .well-known/
│   ├── assetlinks.json             # Android App Links
│   └── apple-app-site-association  # iOS Universal Links
├── assets/
│   ├── css/
│   │   └── styles.css              # Tokens de diseño y estilos personalizados
│   ├── js/
│   │   └── main.js                 # Lógica de FAQ, copiado de email y menú móvil
│   └── images/
│       ├── app_icon.png            # Icono maestro HD (1024x1024)
│       ├── app_icon_256.png        # Icono optimizado para web (102 KB)
│       └── splash_center.png       # Logo centrado de splash screen
├── index.html                      # Landing page principal
├── privacidad.html                 # Política de Privacidad
├── terminos.html                   # Términos y Condiciones
└── README.md
```

---

## 🛠️ Cómo previsualizar localmente

Podés abrir `index.html` directamente con doble clic en cualquier navegador, o levantar un servidor web local liviano:

```bash
# Con Python 3:
python3 -m http.server 8080

# O con npx serve:
npx serve .
```

Luego abrí [http://localhost:8080](http://localhost:8080) en tu navegador.

---

## 🏷️ Placeholders a reemplazar antes de producción

1. **Enlaces de Descarga:**
   * En `index.html` (sección `#descargar`), reemplazar los `href="#descargar"` de Google Play y App Store con las URLs oficiales cuando la app esté publicada en las tiendas.
2. **Datos de Contacto de Sponsors:**
   * En `index.html` (sección `#sponsors`), actualizar:
     * El número de WhatsApp: `wa.me/5491100000000`
     * El email comercial: `sponsors@lajuntada.app`
     * El teléfono directo: `tel:+5491100000000`
3. **Deep Linking (.well-known):**
   * En `assetlinks.json`, actualizar la huella SHA256 de tu clave de firma de Android.
   * En `apple-app-site-association`, reemplazar `TEAMID` por tu Team ID de Apple Developer.
