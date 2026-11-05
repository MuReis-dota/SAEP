create database oficina_db;
use oficina_db;
	
create table clientes(
	id int auto_increment primary key,
    nome varchar(100) not null,
    cpf varchar(255) not null,
    telefone varchar(20) not null,
    email varchar(100) not null unique,
    criado_em timestamp default current_timestamp
);	

create table veiculos(
	id int auto_increment primary key,
    placa varchar(10) not null unique,
    modelo varchar(50) not null,
    marca varchar(50) not null,
    ano int not null,
    cliente_id int not null,
	foreign key (cliente_id)references clientes(id)
);

create table agendamentos( 
	id int auto_increment primary key,
    data_agendamento datetime not null,
    descricao_servico varchar(255) not null,
    veiculo_id int not null,
    status varchar(50) default 'Agendado', 
    foreign key(veiculo_id)references veiculos(id)
); 

create table usuarios(
	id int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null unique,
    senha varchar(255) not null,
    criado_em timestamp default current_timestamp
);


insert into usuarios(nome, email, senha) values
('Carlos Mecanico','carlos@oficina.com','123456'),
('Ana Atendente','ana@oficina.com','123456'),
('Roberto Gerente','roberto@oficina.com','123456');

insert into clientes(nome, cpf, telefone, email) values
('João Silva','p41KmTBqUkOTzk1aDPdDbZgIEx/ODukO8lVydZP2DhiuupppnWKJzT7VL3hiZlRwp254q5VvOQ==','(11) 98765-4321', 'joao.silva@email.com'),
('Maria Oliveria','vMZ+pXk1L42PJy/HybuKNcvkTfl4hLpvoiORaBCORBSM1xIPveeBfvON5Bj+x+LesnPGQ0YPVw==','(11) 91234-5678', 'maria.oliveria@email.com'),
('Lucas Pereira','EaheQCVI3r7I4M6TRAIeT4TobQmIGsquWPsYAU/eCRdzba0PIsAoQHruJPKo5G+OKF0hPNrvmg==','(11) 97777-8888', 'lucas.pereira@email.com');

insert into veiculos(placa, modelo, marca, ano, cliente_id) values
('ABC-1D34','Civic ELX','Honda',2021,1),
('XYZ-9E87','Corolla XEI','Toyota',2025,2),
('HJK-4A36','Onix Premier','Chevrolet',2020,3);

insert into agendamentos (data_agendamento, descricao_servico, veiculo_id, status) values
('2026-03-15 09:00:00', 'Troca de óleo e filtro de ar', 1, 'Agendado'),
('2026-04-10 14:30:00', 'Revisão do sistema de freios', 2, 'Confirmado'),
('2026-05-20 10:00:00', 'Alinhamento e balanceamento', 3, 'Agendado');
