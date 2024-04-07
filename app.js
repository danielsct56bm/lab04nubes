const express = require('express');
const app = express();
const PORT = 5000;

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');

// Definir las rutas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/clientes', (req, res) => {
  // Datos de ejemplo de clientes
  const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3'];
  res.render('clientes', { clientes: clientes });
});

app.get('/productos', (req, res) => {
  // Datos de ejemplo de productos
  const productos = ['Producto 1', 'Producto 2', 'Producto 3'];
  res.render('productos', { productos: productos });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`La aplicación está corriendo en http://localhost:${PORT}`);
});
