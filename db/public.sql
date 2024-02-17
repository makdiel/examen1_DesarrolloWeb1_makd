-- Active: 1706315115732@@127.0.0.1@5432@tiendaenlinea@public
-- Active: 1706315115732@@127.0.0.1@5432@postgres@public

CREATE DATABASE TiendaEnLinea

SELECT * FROM TBLProveedores

create table TBLProveedores
(
    id serial primary key, 
    nombre_proveedor varchar(200),
    direccion varchar(200),
    contacto varchar(200),
    fposteo TIMESTAMP DEFAULT current_timestamp 
)

select * from TBLTipoProducto

create table TBLTipoProducto
(
    id serial PRIMARY key,
    nombre_Tipo varchar(200),
    fposteo TIMESTAMP DEFAULT current_timestamp 
);

create table TBLCategoriaProducto
(
    id serial PRIMARY key,
    nombre_categoria varchar(200),
    fposteo TIMESTAMP DEFAULT current_timestamp 
);

select * from TBLCategoriaProducto


create table TBLProducto
(
    id serial primary key ,
    nombre_producto varchar(500), 
    Precio numeric(12,2),
    id_tipo int REFERENCES TBLTipoProducto(id),
    id_proveedor int REFERENCES TBLProveedores(id),
    id_categoria int REFERENCES TBLCategoriaProducto(id),
    fposteo TIMESTAMP DEFAULT current_timestamp
);

SELECT * FROM TBLPuntoVenta

create table TBLPuntoVenta
(
    id serial PRIMARY key,
    nombre_PuntoVenta varchar(200),
    direccion varchar(200),
    contacto varchar(200),
    fposteo TIMESTAMP DEFAULT current_timestamp 
);

--DROP TABLE TBLInventario

create table TBLInventario
(   
   
    idProducto int  PRIMARY key REFERENCES TBLProducto(id) ,
    idPuntoVenta int  REFERENCES TBLPuntoVenta (id) ,
    existencia INTEGER,
    fposteo TIMESTAMP DEFAULT current_timestamp  
    --PRIMARY key (idProducto) REFERENCES TBLProducto(id),
   -- CONSTRAINT fk_Puntoventa FOREIGN KEY (idPuntoVenta)  REFERENCES TBLPuntoVenta(id)
);

create table TBLEncabezadoCompra
(
    documento varchar(50) PRIMARY key,
    idProveedor int REFERENCES TBLProveedores(id),
    observacion varchar(200),
    fposteo TIMESTAMP DEFAULT current_timestamp 
);

-- drop table TBLDetalleCompra

create table TBLDetalleCompra
(   
    id SERIAL PRIMARY key,
    documento varchar(50)  REFERENCES TBLEncabezadoCompra(documento),
    idProducto int   REFERENCES TBLProducto(id),   
    cantidad INTEGER,
    costo numeric(12,2)    
);

create table TBLEncabezadoVenta
(
    documento varchar(50) PRIMARY key,
    idSucursal int REFERENCES TBLPuntoVenta(id),
    cliente varchar(200),
    cajero varchar(200),
    vendedor varchar(200),
    fecha TIMESTAMP DEFAULT current_timestamp 
);

--DROP TABLE  TBLDetalleVenta

create table TBLDetalleVenta
(
    id SERIAL PRIMARY key,
    documento varchar(50)  REFERENCES TBLEncabezadoVenta(documento),
    idProducto int REFERENCES TBLProducto(id),
    cantidad INTEGER,
    precio numeric(12,2),
    descuento numeric(12,2) 
);



