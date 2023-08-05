
<p align="center">
  <a href="https://carbone.io/" target="_blank">
    <img alt="CarboneJS" width="" src="./locales/Doc.png">
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
  <a href="https://github.com/carboneio/carbone">
    <img src="https://badgen.net/github/forks/m4nd0mb3/document-templater?icon=github" alt="github fork badge">
  </a>
</p>

<p><b>🤖 Document Templater</b> - Template Based Document Generation Microservice</p>

Document Templater is a powerful and flexible microservice designed to simplify the generation of complex, personalised documents from predefined templates. Combining ease of use with the ability to create highly personalised documents, this microservice is ideal for automating the process of generating reports, contracts, forms and more.

## Table of content

README idiomas: :angola: [Português](./locales/pt/README.md), :us: [English](README.md)


- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
- [Basic Endpoints](#basic-endpoints)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)


## How It Works

Document Templater leverages the Carbone library to merge templates with data, producing the desired output documents. It utilizes Node.js and Express.js for the backend, allowing you to build a robust and customizable document generation service.

The core features of Document Templater include:

- 📝 Generate professional, elegant documents from pre-loaded templates.
- 🎨 Easily customise documents by incorporating specific data.
- 🌈 Support for multiple template formats, including Word (docx) and PDF.
- 🍏 Simple integration with external APIs to fetch data in real time.
- ⭐️ Flexible settings to adjust the appearance and content of documents.
- 📐 Intuitive API that allows seamless integration into your existing projects.




- Templating Engine: Easily create templates using a wide range of data sources.
- Supported Formats: Generate documents in various formats, including PDF, DOCX, ODT, text, HTML, and PNG.
- Dynamic Data: Merge data from JSON, databases, APIs, and more into your templates.
- Express API: Document Templater provides an Express API for easy integration into your projects.
- Scalability: Deploy the service and scale it according to your needs.

Document Templater offers a scalable and efficient solution to meet your document generation needs, saving you time and ensuring consistent, high-quality results.

Bring document generation to life easily and reliably with Document Templater.

## Getting Started

Follow these steps to get started with Document Templater:

### Prerequisites

- Node.js: Make sure you have Node.js installed on your machine.
- LibreOffice: Make sure you have LibreOffice version 7.5.1.1 installed on your machine. 

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/m4nd0mb3/document-templater.git
   ```

2. Navigate to the project directory:

   ```sh
   cd document-templater
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

### Usage

1. Start the server:

   ```sh
   npm start
   ```

2. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

3. Explore the provided endpoints and examples to see how to generate different types of documents.

### Running with Docker

To run Document Templater using Docker, follow these steps:

1. Build the Docker image:

   ```sh
   docker build -t document-templater:latest .
   ```

2. Run the Docker container:

   ```sh
   docker run -p 3000:3000 -d document-templater:latest
   ```

3. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).


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

Modify the configuration in `.env` to customize settings such as port, file paths, and more.

## Contributing

Contributions are welcome! If you encounter issues or want to add new features, feel free to submit a pull request.

## License

This project is licensed under the [Apache-2.0 License](LICENSE).

---
