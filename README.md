
# Creación de la camara y el Splash Screens

Este proyecto se esta trabajado junto con el tarea desarrollado en clase de la creacion de 1 rama por cada apartado de las tareas planteadas. Ese trabajo se lo realizo en grupo por Walter Cobacango y Adrian Cadena.




## Splash Screens y Icono

Este apartado es del trabajo dejado para la creacion del Splash Screens y Icons el cual lo realizo mi persona Walter Cobacango.




## Instalación de Dependencias

A continuación, se presentan las dependencias necesarias y los comandos para instalar las dependencias implementadas para el Splash Screen tomando la documentación de Capacitor:

| Dependencia       | Comando de Instalación                           |
|------------------|-----------------------------------------------|
| **Splash Screens and Icons**      | `npm install @capacitor/assets` |
| **@capacitor/splash-screen**      | `npm install @capacitor/splash-screen` |
| **Generador de las herramientas del Splash Screen**      | `npx capacitor-assets generate` |


Ejecuta los comandos en la terminal dentro del directorio del proyecto para instalar cada una de las dependencias requeridas.
## Contenido

Para la realizar el Splash Screen se realizo las siguentes configuraciones:
- Tras la instalacion de [@capacitor/splash-screen](https://capacitorjs.com/docs/apis/splash-screen), siguiendo los pasos de la documentación se edito el archivo **capacitor.config.ts**. En este archivo se coloco la configuracion de los plugins en la que consiste en la duracion, tiempo de carga, etc.

- Luego de realizar lo anterior mencionado, se configura el archivo **app.component.ts**, en este se configura el tiempo que va a durar creando una variable asincrona.

- Tras esto, se realiza las configuraciones para el deploy en andriod con la instalacion de **npm i @capacitor/andriod** para tener las dependencias. Seguida del comando **ionic buil** para generar el compilado de la apliacione creada.

- Con esto ya estaria realizado se comienza a mandar las dependencias necesarias al lugar donde se ejecitaran con el comandos **npx cap add andriod**.

- Realizamos la confirguracion de las imagenes para que sea personalizado tanto el icono como el Splash Screen de nuestra app. Nos dirigirmos a la documencion de [Splash Screens and Icons](https://capacitorjs.com/docs/guides/splash-screens-and-icons) y debemos ejecutar el comando **npm install @capacitor/assets**. Luego de esto debemos crear la carpeta en la raiz llamada **assets** con las imagnes necesarias indicadas en la documentacion teniendo en cuenta que se debe colocar los mismos nombres y tamaños que se indican. Para finalizar se ejecuta el comando **npx capacitor-assets generate** para generar los recuersos para el icono y el Splash. 

- Para culminar se ejecuta los comandos **npx cap copy**, **npx cap sync**, esto para guardar los cambios y plugins en la carpeta de andriod para le ejecucion y creacion del apk. Por ultimo abrimos en Android Studio con **npx cap open android** y generamos el apk. 


## APK Descargable

[Gallery Fox](https://drive.google.com/file/d/12edxw34v-9csEIV3y_bz9pt7tVmvUvh3/view?usp=sharing)


## Autores

- [@WalterFox22](https://github.com/WalterFox22)

