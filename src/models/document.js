const db = require("../core/database")

class Document{
    constructor(name, reference, tests_data){
        this.name = name;
        this.reference = reference;
        this.tests_data = tests_data;
    }

    async save(){
        try {
            const sql = "INSERT INTO document_templates (reference, name, tests_data) VALUES (?, ?, ?)"
            const params = [this.reference, this.name, this.tests_data]
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
        console.log(params);
        
        try {
            const result = await new Promise((resolve, reject) => {
                db.get(sql, params, (err, row) => {
                    console.log(err, row);
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
}

module.exports = Document