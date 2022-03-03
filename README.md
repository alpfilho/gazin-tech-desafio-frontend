[![GazinFilm](.github/logo.png?raw=true)](https://gazinfilms.vercel.app)

# 🎬 Desafio _Front-end_ [Gazin Tech](https://github.com/gazin-tech)

### 💻 [Resultado Final](https://gazinfilms.vercel.app):

[![GazinFilm](https://raw.githubusercontent.com/gazin-tech/Desafio-FrontEnd/main/.github/image-main.png?raw=true)](https://gazinfilms.vercel.app)

## 📲 Destaques do Projeto:

✨ [**Biblioteca visual de componentes**](#biblioteca-visual-de-componentes-e-storybook)</br>
✨ **Temas _dark_ e _light_**</br>
✨ **[Base de dados em português mantida pela comunidade](#a-base-de-dados-tmdb)**</br>
✨ **Testes unitários para componentes**</br>
✨ **_Cache_ do _front-end_ com geração estática incremental**</br>
✨ **Imagens otimizadas**</br>
✨ **CI / CD**</br>
✨ **Typescript**</br>

## 📃 Escopo do desafio:

[**Leia o Desafio Completo**](https://github.com/alpfilho/gazin-tech-desafio-frontend/blob/17ee006a20fe855828c524eb74e86d07426583aa/README.md).

Resumo:

> Desenvolver uma aplicação Front-end na linguagem/framework de sua preferência, tendo como requisito ser em SPA (single-page application) e atender os requisitos listados abaixo.
>
> Você deve seguir como base para o desenvolvimento do layout da aplicação o seguinte mockup:
>
> [► Mockup - Figma ](https://www.figma.com/file/9rnzjWDSvwlENgQNwxfu28/GazinFilms?node-id=110%3A1881)
>
> [...]

### Resolução:

Seguindo o enunciado do desafio e seus requisitos, desenvolvi em **45 horas** de trabalho, um _front-end_ _SPA_ com `React` para exibir informações sobre filmes.

Eu ainda não tinha conhecimento em _server side rendering_, mas por notar que a Gazin utilizava `NextJS` em sua stack, decidi estudar e desenvolver o projeto usando o framework.

Portanto, para o _front-end_, utilizei:

1. `next` como base do desenvolvimento.

   Apesar de nascer como um framework para renderização da interface no servidor, o `next` oferece ferramentas muito robustas para otimização do _front-end_ e eu o utilizei gerando as páginas de forma estática no momento da build. Utilizando funcionalidades recém lançadas da versão 12, conforme os usuários vão acessando, as páginas são re-geradas se necessário e _"cacheadas"_.

2. `styled-components` e `sanitize.css` para estilização.

   Basicamente, toda a estilização foi criado do zero a partir de uma base normalizada. `styled-components` é uma biblioteca de estilizações _CSS in JS_ com escopo fechado por componentes. `sanitize.css` é uma lista de estilos criados para normalizar o comportamento dos diferentes navegadores do mercado.

3. `fontawesome` para ícones.

4. `framer-motion` para animações.

   É uma biblioteca de animações focada em componentes `React`. É uma boa utilidade para desenvolver animações com rapidez, mas também oferece ferramentas para criar interações do zero.

Os componentes `banner` e `listFilms` utilizam um _slider_ e um _carousel_ que foram **feitos do zero**. Não utiizei bibliotecas prontas e desenvolvi uma solução otimizada para a aplicação.

Baseado em conhecimentos anteriores, criei a _hook_ `useViewport` e o componente `<DeviceSwitch />` que utilizam o tamanho da _viewport_ para alternar entre estilos e componentes. Dessa forma, cada dispositivo recebe a interface desenvolvida pra ele.

# Biblioteca visual de componentes e `Storybook`:

[Storybook](https://main--62182f5a101294003a988ae0.chromatic.com)

[Biblioteca Chromatic](https://chromatic.com/library?appId=62182f5a101294003a988ae0&branch=main)

# A base de dados `TMDB`:

No desafio, foi sugerido usar a API do IMDB da RapidAPI. Mas depois de muitas horas insistindo e desenvolvendo uma integração que atendesse as necessidades do projeto, percebi que usar esta API iria limitar demais a aplicação final que eu estava desenvolvendo.

Os motivos foram:

1. O limite de requisições gratuítas do serviço é ridiculamente pequeno.

   Numa conta gratuíta era possível fazer apenas 500 requisições por mês. Apenas nos testes iniciais, mesmo fazendo _cache_ em memória das requisições, eu já tinha gasto quase 200 requisições. Nos primeiros acessos de usuários reais eu já excederia o limite mensal e a aplicação seria inutilizada por várias semanas.

2. Péssima documentação de _endpoints_.
3. Resultados arbitrários e não normalizados.
4. A API retorna apenas informações em inglês (não existe opção de troca de idioma, como está escrito no enunciado do desafio).

Outra API da RapidAPI que abri mão de usar foi a de traduções do _google translate_, por conta do limite baixíssimo de 500 caracteres por mês. Isso mesmo, **500 caracteres** de traduções por mês. Isso significa que ao traduzir um título "Iron Man" para "Homem de Ferro", eu já gastaria 8 caracteres da cota mensal, até espaços contam. Qualquer tradução de sinopse já gastaria fácil a cota de 500 caracteres.

Busquei outras provedoras de API que ofereciam dados da base do IMDB, mas todas tinham alguma limitação. Os dados não eram consistentes, não exisitia suporte integral ao português e o limite de requisições era baixo.

Então, o que eu decidi fazer para desenvolver uma aplicação com dados de qualidade, foi abrir mão da base de dados do IMDB (Internet Movie Database) e passar a usar a base de dados alternativa criada e mantida pela comunidade, TMDB (The Movie Database).

Esta é completamente aberta ao público, não há limite de requisições e é muito mais focada na internacionalidade, portanto, o português é completamente suportado, excluindo a necessidade de usar API's de tradução. A documentação é melhor que a da RapidAPI e os dados são melhor distribuídos entre os _endpoints_, diminuindo a quantidade de requests necessárias para obter informações completas.

# Executar o projeto localmente:

1. Clone o projeto:

```console
git clone https://github.com/alpfilho/gazin-tech-desafio-frontend.git
```

2. Copie o .env de exemplo e forneça uma Api Key do IMDB:

```console
cp .env.local.example .env.local
```

3. Instale as dependências:

```console
yarn install
```

4. Execute:

   - Para a versão de desenvolvimento:

     ```console
     yarn dev
     ```

   - Para a versão de produção:

     ```console
     yarn build;
     yarn start
     ```
