"use client"
import "./globals.css"
import 'web-encoding';
import NavBar from "./navbar/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
        />
      </head>
      <body>
        <NavBar/>
        
        {children}
      </body>
    </html>
  )
}


