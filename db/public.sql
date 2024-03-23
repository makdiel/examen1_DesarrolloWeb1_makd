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

alter table TBLProveedores ADD activo BOOLEAN DEFAULT TRUE

update TBLProveedores set activo = true where id = 6



select * from TBLTipoProducto


create table TBLTipoProducto
(
    id serial PRIMARY key,
    nombre_Tipo varchar(200),
    fposteo TIMESTAMP DEFAULT current_timestamp 
);

alter table TBLTipoProducto ADD Activo BOOLEAN DEFAULT TRUE

create table TBLCategoriaProducto
(
    id serial PRIMARY key,
    nombre_categoria varchar(200),
    fposteo TIMESTAMP DEFAULT current_timestamp 
);
alter table TBLCategoriaProducto ADD activo BOOLEAN DEFAULT TRUE

update TBLCategoriaProducto set activo = true where id = 5


select * from TBLCategoriaProducto

select * from TBLProducto

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

ALTER TABLE TBLProducto ADD imagen bytea  NULL

ALTER TABLE TBLProducto ADD mime_type varchar(500) NULL

ALTER TABLE TBLProducto ADD nombre_archivo varchar(500) NULL

alter table TBLProducto ADD activo BOOLEAN DEFAULT TRUE

update TBLProducto set activo = true

select a.id ,a.mime_type,encode(a.imagen, 'base64') imagen , a.nombre_producto,a.precio,b.nombre_proveedor,c.nombre_Tipo ,d.nombre_categoria ,a.fposteo from TBLProducto a
                 inner join TBLProveedores b on b.id = a.id_proveedor
                 inner join TBLTipoProducto c on c.id = a.id_tipo
                 inner join TBLCategoriaProducto d on d.id =a.id_categoria 
                 where a.activo = true order by a.fposteo desc


SELECT * FROM TBLPuntoVenta

create table TBLPuntoVenta
(
    id serial PRIMARY key,
    nombre_PuntoVenta varchar(200),
    direccion varchar(200),
    contacto varchar(200),
    fposteo TIMESTAMP DEFAULT current_timestamp 
);


update TBLPuntoVenta set activo = 'true'

alter table TBLPuntoVenta ADD activo BOOLEAN DEFAULT TRUE

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

create table tbl_rol 
(
    id serial PRIMARY key,
    nombre_rol varchar(200), 
    fecha_creacion TIMESTAMP DEFAULT current_timestamp, 
    activo BOOLEAN DEFAULT true
);

--insert into tbl_rol(nombre_rol)
--values ('Usuario')

select * from tbl_rol

create table tbl_usuarios 
(
    nombre_usuario  varchar(20) primary key,
    correo_electronico varchar(50),
    contrasena varchar(20),
    nombre varchar(200),    
    foto_perfil bytea,
    id_rol int,
    fecha_creacion TIMESTAMP DEFAULT current_timestamp, 
    activo BOOLEAN DEFAULT true, 
    constraint fk_id_rol FOREIGN key (id_rol) REFERENCES tbl_rol (id)
);

