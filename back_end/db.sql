CREATE DATABASE IF NOT EXISTS HDIMS;

CREATE TABLE IF NOT EXISTS category_list (
    category_id serial primary key,
    category_name text not null
);

create table if not exists field_table (
    field_id int primary key,
    field_name text not null,
    category_id int references category_list(category_id)
);

create table if not exists entry_table (
    entry_id serial primary key,
    field_id int references field_table(field_id),
    nin_id int not null,
    count int not null,
    entry_date timestamp default current_timestamp
);

-- need to add the medical facility profile table and government profile table.