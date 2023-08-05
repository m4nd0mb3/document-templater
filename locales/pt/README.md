<p align="center">
  <a href="https://github.com/m4nd0mb3/document-templater" target="_blank">
    <img alt="CarboneJS" width="" src="../Doc.png">
  </a>
</p>

<p align="center">
<a href="https://github.com/m4nd0mb3/document-templater/releases">
    <img src="https://badgen.net/github/release/m4nd0mb3/document-templater" alt="GitHub release">
  </a>
  <a href="https://github.com/m4nd0mb3/document-templater/releases">
    <img src="https://img.shields.io/github/downloads/m4nd0mb3/document-templater/total.svg" alt="GitHub downloads">
  </a>
  <a href="https://github.com/m4nd0mb3/document-templater/blob/master/LICENSE">
    <img src="https://badgen.net/github/license/m4nd0mb3/document-templater" alt="GitHub license">
  </a><br/>
  <a href='https://document-templater.readthedocs.io/en/latest/?badge=latest'>
    <img src='https://readthedocs.org/projects/document-templater/badge/?version=latest' alt='Documentation Status' />
  </a>   
  <a href="https://github.com/m4nd0mb3/document-templater/issues">
    <img src="https://badgen.net/github/issues/m4nd0mb3/document-templater" alt="GitHub issues">
  </a>
  <a href="https://github.com/m4nd0mb3">
    <img src="https://badgen.net/github/contributors/m4nd0mb3/document-templater" alt="GitHub followers">
  </a>
  <a href="https://github.com/m4nd0mb3/document-templater">
    <img src="https://badgen.net/github/forks/m4nd0mb3/document-templater?icon=github" alt="github fork badge">
  </a>
</p>

<p><b>🤖 Document Templater</b> - Microserviço de Geração de Documentos Baseados em Modelos</p>

O Document Templater é um microserviço poderoso e flexível projetado para simplificar a geração de documentos complexos e personalizados a partir de modelos predefinidos. Combinando a facilidade de uso com a capacidade de criar documentos altamente personalizados, este microserviço é ideal para automatizar o processo de geração de relatórios, contratos, formulários e muito mais.

## Table of content

README language: :angola: [Português](README.md), :us: [English](../../README.md)


- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
- [Basic Endpoints](#basic-endpoints)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)



## How It Works

O Document Templater utiliza a biblioteca Carbone para fundir modelos com dados, produzindo os documentos de saída desejados. Utiliza Node.js e Express.js para o backend, permitindo-lhe construir um serviço de geração de documentos robusto e personalizável.

- 📝 Gere documentos profissionais e elegantes a partir de modelos pré-carregados.
- 🎨 Personalize facilmente os documentos incorporando dados específicos.
- 🌈 Suporte a diversos formatos de modelo, incluindo Word (docx) e PDF.
- 🍏 Integração simples com APIs externas para buscar dados em tempo real.
- ⭐️ Configurações flexíveis para ajustar a aparência e o conteúdo dos documentos.
- 📐 API intuitiva que permite a integração perfeita em seus projetos existentes.

O Document Templater oferece uma solução escalável e eficiente para atender às suas necessidades de geração de documentos, economizando tempo e garantindo resultados consistentes e de alta qualidade.

Dê vida à geração de documentos de forma fácil e confiável com o Document Templater.


As principais características do Document Templater incluem:
- Mecanismo de criação de modelos: Crie facilmente modelos usando uma ampla gama de fontes de dados.
- Formatos suportados: Gerar documentos em vários formatos, incluindo PDF, DOCX, ODT, texto, HTML e PNG.
- Dados dinâmicos: Combine dados de JSON, bancos de dados, APIs e muito mais em seus modelos.
- API Expressa: O Document Templater fornece uma API Expressa para facilitar a integração nos seus projectos.
- Escalabilidade: Implemente o serviço e dimensione-o de acordo com as suas necessidades.

## Getting Started

Siga estes passos para começar a utilizar o Document Templater:

### Prerequisites

- Node.js: Certifique-se de ter o Node.js instalado em sua máquina.
- LibreOffice: Certifique-se de ter o LibreOffice versão 7.5.1.1 instalado em sua máquina. 

### Installation

1. Clone o repositório:

   ```sh
   git clone https://github.com/m4nd0mb3/document-templater.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd document-templater
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

### Usage

1. Inicie o servidor:

   ```sh
   npm start
   ```

2. Abra seu navegador web e navegue até [http://localhost:3000](http://localhost:3000).

3. Explore os endpoints e exemplos fornecidos para ver como gerar diferentes tipos de documentos.

### Running with Docker

Para executar o Document Templater usando o Docker, siga estas etapas:

1. Construa a imagem do Docker:

   ```sh
   docker build -t document-templater:latest .
   ```

2. Executar o contentor Docker:

   ```sh
   docker run -p 3000:3000 -d document-templater:latest
   ```

3. Abra o navegador da Web e navegue até [http://localhost:3000](http://localhost:3000).


## Basic Endpoints

Document Templater provides a set of basic endpoints to interact with the document generation service. Below are the examples of how to use these endpoints.

### Create Document Template

**Endpoint:** `api/v1/document/create`

**Method:** `POST`

**Description:** Create or save a template document based on a provided template and data. Only document file field is required all others will be used to test the data in the sandbox.

**Request Body:**

```json
{
  "document": "path/to/pdf-template.docx",
  "data":{
    "firstname": "John",
    "lastname": "Doe"
  }
}
```

**Response:**
```json
{
  "message":"Data inserted successfully!"
}
```

### List All Document Template

**Endpoint:** `api/v1/documents`

**Method:** `GET`

**Description:** List all templates stored. Look that the string on tests_data we gonna use to test our sandbox...

**Request Body:**

```json
{
}
```

**Response:**
```json
{
  "message": "success",
  "data": [
    {
      "reference": "3da7aa72-0760-4b56-9ba6-efa337c1db2b.odt",
      "name": "simple",
      "tests_data": "{\"firstname\":\"rasmushed\",\"lastname\":\"Igor\",\"age\":\"30\"}"
    },
    {
      "reference": "fbc57e45-6cbd-4250-8616-1e5038b01ad5.pptx",
      "name": "Capa Envelope SV",
      "tests_data": "{\"title\":\"Test PPTX\"}"
    }
  ]
}
```

### Test Our Document Template

**Endpoint:** `api/v1/document/{reference}/sandbox`

**Method:** `GET`

**Description:** Generates a PDF document based on a reference provided template and data.

**Request Body:** Optional, but if you enter, the body data must to have the sabe key structure with tests_data.


**Response:**

A generated PDF document.

### Generate Document Template

**Endpoint:** `api/v1/document/{reference}/generate`

**Method:** `GET`

**Description:** Generates a PDF document based on a reference provided template and data.

**Request Body:** Dhe body data must to have the sabe key structure with tests_data.


**Response:**

A generated PDF document.


---

### Configuration

Modifique a configuração em `.env` para personalizar configurações como porta, caminhos de arquivos e mais.

## Contributing

Contribuições são bem-vindas! Se você encontrar problemas ou quiser adicionar novas funcionalidades, sinta-se à vontade para enviar um pull request.

## License

Este projeto está licenciado sob a [Licença Apache-2.0](../../LICENSE).

