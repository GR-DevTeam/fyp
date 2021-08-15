# "Pathfinder" Application

Una aplicacion con estructura basada en [RapidAPI](https://rapidapi.com) para multiples tareas en una sola aplicacion.
En resumen, un mapa de restaurantes (por el momento) posibles en tu zona, filtrados por rating.

| Apis             | Uso                                               |
| ---------------- | ------------------------------------------------- |
| Travel Advisor   | Buscar restaurantes por la zona                   |
| Telize           | Buscar la ubicacion del usuario                   |
| Open Weather Map | Decirle el clima cerca de la zona                 |
| Send Grid        | Alertas por si el restaurante cierra, o tormentas |

---

## Conceptos utilizados que ya sabemos

- ReactJs (duh)
- Create-React-App
- Context
- Hooks
- Fetching datos de una API
- CSS
- Mobile first design (Complicado de hacer con mapas, pero se intenta)
- Diseño (Figma, probablemente)
- React-router-dom (probablemente)

---

## Conceptos nuevos

- Yarn (En reemplazo de npm)
- Styled components
- Eslint - prettier (airbnb model)
- Testing Jest & React Test Library
- React Prop types
- Redux
- Typescript

---

## Documentacion

1. [Styled components](https://styled-components.com/)
2. [Eslint](https://eslint.org/)
3. [JestJs](https://jestjs.io/)
4. [Yarn](https://yarnpkg.com/)
5. [Create React App](https://create-react-app.dev/)

---

---

## Para empezar

Vamos a usar una template, exactamente cual, aun esta por verse. La lista de templates disponibles esta en NPM [buscando cra-template-\*](https://www.npmjs.com/search?q=cra-template-*)

```
npx create-react-app my-app
cd my-app
npm install axios google-map-react
```
