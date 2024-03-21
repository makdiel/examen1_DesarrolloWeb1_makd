//const express = require('express');
import express from 'express';

import { CategoriaProducto } from './routes/apiCategoriaProductos.js';
import { Proveedor } from './routes/apiProveedor.js';
import { TipoProducto } from './routes/apiTipoProducto.js';
import { Producto } from './routes/apiProducto.js';
import { Inventario } from './routes/apiInventario.js';
import { PuntoVenta } from './routes/apiPuntoVenta.js';
import { EncabezadoCompra } from './routes/apiEncabezadoCompra.js';
import { DetalleCompra } from './routes/apiDetalleCompra.js';
import { EncabezadoVenta } from './routes/apiEncabezadoVenta.js';
import { DetalleVenta } from './routes/apiDetalleVenta.js';
import cors from 'cors';

const app = express();
app.use(express.json());
//middlewares 
const corsOptions = {
    origin : 'http://localhost:5173', 
    credentials : true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions));



const port = 4000;


app.use('/api/CategoriaProducto', CategoriaProducto);
app.use('/api/Proveedor', Proveedor);
app.use('/api/TipoProducto', TipoProducto);
app.use('/api/Producto', Producto);
app.use('/api/Inventario', Inventario);
app.use('/api/PuntoVenta', PuntoVenta);
app.use('/api/EncabezadoCompra', EncabezadoCompra);
app.use('/api/DetalleCompra', DetalleCompra);
app.use('/api/EncabezadoVenta', EncabezadoVenta);
app.use('/api/DetalleVenta', DetalleVenta);


app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);
});