# [Hunter X Chat](https://chatxhunter-01.vercel.app/)

El mundo del anime no deja de expandirse y evolucionar, capturando la imaginación de personas de todas las edades, etnias y culturas, siendo una experiencia que ha ido trasciendiendo generaciones.
El chat de HunterX está diseñada para conectar a los aficionados del anime, ofreciendo una plataforma dinámica y accesible para explorar, descubrir y enriquecerse con este gran universo.

![Alt Text](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTlmYzEwNHN1a2QzcTFrazdhaHQ0aG44dXc5bHhhNW9waTYyaHJlMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/etW2P2cvB0PYY/giphy.gif)

## Descripción del proyecto

[Hunter X Chat](https://chatxhunter-01.vercel.app/) es una SPA intuitiva, informativa e interactiva, que permite a usuarios objetivos acceder rápidamente a información detallada y organizada sobre 24 personajes del complejo universo del anime ["Hunter x Hunter"](https://es.wikipedia.org/wiki/Hunter_%C3%97_Hunter).

Siendo ésta una segunda versión de ChatXHunter, se ha desarrollado una nueva funcionalidad que permite interactuar con cada uno de los personajes a través de un chatbox individual. Además, como segunda instancia, se ha integrado un chatbox grupal, en donde los usuarios podrán comunicarse de manera directa con todos los personajes del anime al mismo tiempo, permitiendo enriquecer la experiencia interactiva.

## Consideraciones generales

- En función de mejorar el rendimiento, la facilidad de uso y eficiencia de desarrollo, el proyecto se ha desplegado en [Vercel](https://vercel.com/).
- Se ha implementado una integración de API externa: [OpenAI API](https://openai.com/index/openai-api/).
- [Hunter X Chat](https://chatxhunter-01.vercel.app/) se ha diseñado con una interfaz _responsive_, que garantiza una experiencia de usuario óptima en una amplia gama de dispositivos, aplicando desarrollo "mobile first".
- Con el propósito de dar una experiencia más fluida a los usuarios se ha desarrollado una aplicación de página única (SPA).
- Centrado en el usuario, se han utilizado historias de usuario para guiar cada etapa del diseño y la implementación.

## ¿ Cómo utilizar la APP?

Para que esta app de chat con personajes funcione, necesita conectarse a los servicios de OpenAI, que es la inteligencia artificial que genera las respuestas y las conversaciones.

Pero para poder usar esos servicios, OpenAI pide una API Key. Esto es como una llave o contraseña que identifica a cada usuario y controla el acceso a la plataforma. Sin esta clave, la app no puede hablar con OpenAI ni generar las respuestas.
A continuación te explico cómo realizarlo:

📌 **Paso 1: Crear tu cuenta en OpenAI**

- Ve a la página: https://platform.openai.com/signup
- Regístrate con tu correo y crea tu cuenta.
- Confirma tu correo si te lo piden.

📌 **Paso 2: Obtener tu API Key**

- Después de crear la cuenta, inicia sesión en https://platform.openai.com/account/api-keys
- Allí verás un botón que dice “Create new secret key” o algo similar.
- Haz clic y copia la API Key que se genera (es una cadena larga de letras y números).

📌 **Paso 3: Cómo usar esa API Key en el chat**

- Abre [Hunter X Chat](https://chatxhunter-01.vercel.app/)
- Ingresa en la pestaña "API Key".
- En el campo vacío donde dice “Ingresa tu API Key”, pega la clave que copiaste.
- Da clic en el botón "INGRESAR" para activar la clave.
- Ahora la app usará tu clave para conectarse con OpenAI.
- La APP esta lista para utilizar!

## Funcionalidad

A continuación se detallan cada una de las funcionalidades desarrolladas:

- **Chat individual:** Permite interacción entre usuario y personajes de manera individual para obtener información precisa sobre cada uno de los personajes.

- **Chat grupal:** Permite la interacción entre el usuario y los 24 personajes del anime al mismo tiempo.

![Alt Text](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2dtdmF1d3JscmFwZjl1ajJwb3FpbGl5aDJxM3Z4eXFvNnk1NmUxcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4jamu9obYceTjTNptY/giphy.gif)

## Tecnología utilizada

📌 **SPA (Single Page Application):** Para una experiencia rápida y fluida sin recargas.
📌 **OpenAI API:** Para generar respuestas inteligentes en el chat.
📌 **LocalStorage:** Guarda tu API Key de forma segura en tu navegador.
📌 **Modularización:** Código organizado por componentes para facilitar mantenimiento.
📌 **Fetch API:** Para hacer solicitudes a OpenAI.
📌 **Testing:** Tests unitarios para validar funcionalidades principales.
📌 **Figma:** Diseño de alta fidelidad para una interfaz atractiva.

## Estructura del proyecto

El proyecto se ha desarrollado en base a la siguiente estructura de archivos:

```text
.
├── src
|  ├── components
|  ├── data
|  |  └── dataset.js
|  ├── lib
|  |  └── dataFunctions.js
|  ├── views
|  ├── index.html
|  ├── index.js
|  ├── router.js
|  └── style.css
├── test
|  └── dataFunctions.spec.js
|  └── example.spec.js
├── README.md
└── package.json

```

## Diseño y experiencia de usuario

El diseño está inspirado en la estética de Hunter x Hunter y fue validado mediante pruebas de usabilidad para asegurar que la APP sea fácil y divertida de usar.

#### Mobile

![prompting](https://github.com/Niconsuelo/chatxhunter/blob/main/src/assets/gchatMobile.png.jpeg?raw=true)

#### Tablet

![prompting](https://github.com/Niconsuelo/chatxhunter/blob/main/src/assets/gchatTablet.png.jpeg?raw=true)

#### Desktop

![prompting](https://github.com/Niconsuelo/chatxhunter/blob/main/src/assets/gchatDesktop.png.jpeg?raw=true)

**_Niconsuelo 2025 &copy; Hunter X Chat_**
