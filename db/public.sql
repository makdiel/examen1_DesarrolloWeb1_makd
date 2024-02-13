-- Active: 1698945600332@@127.0.0.1@5432@api_zoologico@public

--drop table tbl_animal


create table tbl_zona_zoologico
(
    id serial primary key, 
    nombre varchar(200),
    creado TIMESTAMP DEFAULT current_timestamp 
)

create table tbl_animal
(
    id serial primary key ,
    nombre varchar(500), 
    sonido varchar(10),
    id_zona int REFERENCES tbl_zona_zoologico(id),
    creado TIMESTAMP DEFAULT current_timestamp
);

create table tbl_compra_tickets
(
    id serial PRIMARY key,
    nombre_comprador varchar(200),
    precio numeric,
    fecha_compra TIMESTAMP DEFAULT current_timestamp 
);



select  a.id, 
        a.nombre as nombre_animal, 
        a.sonido, 
        b.nombre as nombre_zona 
from tbl_animal a
inner join tbl_zona_zoologico b 
on a.id_zona = b.id