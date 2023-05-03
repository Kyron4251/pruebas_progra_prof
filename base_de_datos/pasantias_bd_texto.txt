CREATE DATABASE pasantias_bd;
USE pasantias_bd;
CREATE TABLE profesor
(
  rut_profesor CHAR(10) NOT NULL,
  nombre_profesor VARCHAR(20) NOT NULL,
  primer_apellido_profesor VARCHAR(20) NOT NULL,
  segundo_apellido_profesor VARCHAR(20),
  correo_profesor VARCHAR(79) NOT NULL,
  contraseña_profesor VARCHAR(30) NOT NULL,
  PRIMARY KEY (rut_profesor)
);

CREATE TABLE empresa
(
  id_empresa INT NOT NULL,
  nombre_empresa VARCHAR(30) NOT NULL,
  PRIMARY KEY (id_empresa)
);

CREATE TABLE supervisor
(
  rut_supervisor CHAR(10) NOT NULL,
  primer_apellido_supervisor VARCHAR(20) NOT NULL,
  segundo_apellido_supervisor VARCHAR(20),
  correo_supervisor VARCHAR(79) NOT NULL,
  contraseña_supervisor VARCHAR(30) NOT NULL,
  nombre_supervidor VARCHAR(20) NOT NULL,
  PRIMARY KEY (rut_supervisor)
);

CREATE TABLE seccion
(
  numero_seccion INT NOT NULL,
  rut_profesor CHAR(10) NOT NULL,
  PRIMARY KEY (numero_seccion),
  FOREIGN KEY (rut_profesor) REFERENCES profesor(rut_profesor)
);

CREATE TABLE alumno
(
  rut_alumno CHAR(10) NOT NULL,
  nombre_alumno VARCHAR(20) NOT NULL,
  primer_apellido_alumno VARCHAR(20) NOT NULL,
  segundo_apellido_alumno VARCHAR(20),
  correo_alumno VARCHAR(79) NOT NULL,
  contraseña_alumno VARCHAR(30) NOT NULL,
  carrera VARCHAR(50) NOT NULL,
  creditos_actuales INT NOT NULL,
  numero_seccion INT NOT NULL,
  PRIMARY KEY (rut_alumno),
  FOREIGN KEY (numero_seccion) REFERENCES seccion(numero_seccion)
);

CREATE TABLE pasantia
(
  id_pasantia INT NOT NULL,
  rut_alumno CHAR(10) NOT NULL,
  id_empresa INT NOT NULL,
  rut_supervisor CHAR(10) NOT NULL,
  PRIMARY KEY (id_pasantia),
  FOREIGN KEY (rut_alumno) REFERENCES alumno(rut_alumno),
  FOREIGN KEY (id_empresa) REFERENCES empresa(id_empresa),
  FOREIGN KEY (rut_supervisor) REFERENCES supervisor(rut_supervisor)
);