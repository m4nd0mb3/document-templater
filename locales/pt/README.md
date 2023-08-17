<p align="center">
  <a href="https://github.com/m4nd0mb3/document-templater" target="_blank">
    <img alt="Document Templater" width="" src="../Doc.png">
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
- [Swagger](#swagger)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)



## How It Works

O Document Templater utiliza a biblioteca Carbone para fundir modelos com dados, produzindo os documentos de saída desejados. Utiliza Node.js e Express.js para o backend, permitindo-lhe construir um serviço de geração de documentos robusto e personalizável.


As principais características do Document Templater incluem:

- 📝 Gere documentos profissionais e elegantes a partir de modelos pré-carregados.
- 🎨 Personalize facilmente os documentos incorporando dados específicos.
- 🌈 Suporte a diversos formatos de modelo, incluindo Word (docx) e PDF.
- 🍏 Integração simples com APIs externas para buscar dados em tempo real.
- ⭐️ Configurações flexíveis para ajustar a aparência e o conteúdo dos documentos.
- 📐 API intuitiva que permite a integração perfeita em seus projetos existentes.

O Document Templater oferece uma solução escalável e eficiente para atender às suas necessidades de geração de documentos, economizando tempo e garantindo resultados consistentes e de alta qualidade.

Dê vida à geração de documentos de forma fácil e confiável com o Document Templater.

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


## Swagger

O Document Templater apresenta uma integração perfeita com o Swagger, aprimorando sua experiência com o serviço de geração de documentos! 📄✨

Com o Swagger, acessar o conjunto de endpoints básicos do Document Templater nunca foi tão fácil. Se você é um desenvolvedor experiente ou está começando, vai adorar a simplicidade e eficiência que ele proporciona para interagir com o serviço de geração de documentos.

Aqui está um vislumbre de como você pode usar o Swagger para interagir com os endpoints do Document Templater:

1. **Explore a Documentação:** Navegue na documentação abrangente fornecida pelo Swagger para entender os endpoints disponíveis e suas funcionalidades.

2. **Experimente na Prática:** Utilize a interface amigável para testar diferentes parâmetros e ver respostas em tempo real, permitindo ajustar suas solicitações conforme necessário.

3. **Gere Documentos:** Aproveite os endpoints para criar e gerenciar documentos de forma simples e eficaz, tudo em uma plataforma unificada.

Para começar, acesse a documentação do Document Templater no Swagger através do seguinte endpoint: 


**Endpoint:** `/api-docs/`



---

### Configuration

Modifique a configuração em `.env` para personalizar configurações como porta, caminhos de arquivos e mais.

## Contributing

Contribuições são bem-vindas! Se você encontrar problemas ou quiser adicionar novas funcionalidades, sinta-se à vontade para enviar um pull request.

## License

Este projeto está licenciado sob a [Licença Apache-2.0](../../LICENSE).

