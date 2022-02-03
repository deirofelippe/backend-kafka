# Backend Kafka

- Backend: github.com/felippedesouza/backend-appvideos
- Frontend: github.com/felippedesouza/frontned-appvideos
- Backend que implementa o consumer no kafka: github.com/felippedesouza/backend-kafka

## Clonando os diretórios

Rode o script

```bash
mkdir appvideos \
 && cd appvideos \
 && git clone https://github.com/felippedesouza/frontend-appvideos.git \
 && git clone https://github.com/felippedesouza/backend-appvideos.git \
 && git clone https://github.com/felippedesouza/backend-kafka.git
```

## Usando Docker Composer

O docker compose usa uma rede externa já criada, ao invés de ele criar, então é preciso criar uma rede. O mesmo serve pro volume do mysql.

- `docker create network --diver bridge appvideos`
- `docker volume create --name=v_mysql`

**Espere terminar a criação dos containers de cada arquivo para executar os outros arquivos**

Ordem de execução:

1. docker-compose -f ./backend-appvideos/docker-compose.yaml up -d
1. docker-compose -f ./backend-appvideos/containers/kafka/docker-compose.yaml up -d
1. docker-compose -f ./backend-appvideos/containers/elastic/docker-compose.yaml up -d

1. docker-compose -f ./backend-kafka/docker-compose.yaml up -d

1. docker-compose -f ./frontned-appvideos/docker-compose.yaml up -d

## Usando ethereal pra testar o email

Gere um email fake pelo [site do ethereal](https://ethereal.email) ou pela linha de comando.

1. digite `node` na linha de comando
1. `await require('nodemailer').createTestAccount()`
1. copie os dados e cole em .env
1. logue no site usando as credenciais criadas e va para a pagina _Messages_
1. rode o programa
