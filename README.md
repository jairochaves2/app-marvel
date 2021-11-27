# Compra de Quadrinhos

Este projeto tem o intuito de consumir a api de quadrinhos da marvel, e possibilitar a escolha de um endereço no google maps para que os quadrinhos selecionados sejam enviados. 

Ele foi construído utilizando Reactjs, e o create react app.

## Iniciar o projeto

### Definir as variáveis de ambiente

Para inciar o processo será necessário definir as variáveis de ambiente.  
As variáveis necessárias estão definidas no arquivo `.env.example`.  

São elas:

- `REACT_APP_MARVEL_PUBLIC_KEY` - Chave pública da [Marvel API](https://developer.marvel.com/)

- `REACT_APP_MARVEL_PRIVATE_KEY` - Chave privada da [Marvel API](https://developer.marvel.com/)

- `REACT_APP_GOOGLE_API_KEY` - Chave de api do Google maps. ([tutorial de como gerar a chave](https://maplink.global/blog/como-obter-chave-api-google-maps/))

---

### Instalar as dependências

Para instalar as dependências do projeto, execute `npm i` ou `yarn`

---

### Iniciar o projeto

Para iniciar o projeto execute `npm run start` ou `yarn start`

---

## Funcionamento
O Layout foi construído utilizando os componentes do [Material UI](https://mui.com/).

O projeto consome a [api da marvel](https://developer.marvel.com/) utilizando [axios](https://github.com/axios/axios).

A geração do mapa utiliza a biblioteca [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api).

As informações de endereço são encontradas com a [React Geocode](https://www.npmjs.com/package/react-geocode)

---

[GitHub](https://github.com/jairochaves2/app-marvel)  
[GitLab](https://gitlab.com/jairochaves/app-marvel)
