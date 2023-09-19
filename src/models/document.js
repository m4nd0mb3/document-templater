const db = require("../core/database")

class Document{
    constructor(name, reference, tests_data, extension, default_output){
        this.name = name;
        this.reference = reference;
        this.tests_data = tests_data;
        this.extension = extension;
        this.default_output = default_output;
    }

    async save(){
        try {
            const sql = "INSERT INTO document_templates (reference, name, tests_data, extension, default_output) VALUES (?, ?, ?, ?, ?)"
            const params = [this.reference, this.name, this.tests_data, this.extension, this.default_output]
            const result = await new Promise((resolve, reject) => {
                db.get(sql, params, (err, row) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(row);
                    }
                });
            });

            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async  findOneDocument(reference){
        const sql = "select * from document_templates where reference = ?"
        const params = [reference]
        // console.log(params);
        
        try {
            const result = await new Promise((resolve, reject) => {
                db.get(sql, params, (err, row) => {
                    // console.log(err, row);
                    // if (row == null)
                    if (err || !row) {
                        reject(err);
                    } else {
                        resolve(row);
                    }
                });
            });

            return result;
        } catch (error) {
            throw Error("Document Not Found!");
        }
    }

    static async findAllDocument() {
        const sql = "select * from document_templates";
        const params = [];

        try {
            const result = await new Promise((resolve, reject) => {
                db.all(sql, params, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
            });

            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async deleteDocument(reference) {
        const sql = "DELETE FROM document_templates WHERE reference = ?";
        const params = [reference];

        try {
            await new Promise((resolve, reject) => {
                db.run(sql, params, (err) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

module.exports = Document