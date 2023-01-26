const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//connection database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pelanggan"
})

db.connect(error => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("MySQL Connected")
    }
})

//--------------------------------- CRUD DATA PELANGGAN ------------------------------------
// end-point akses data pelanggan
app.get("/pelanggan", (req, res) => {
    // create sql query
    let sql = "select * from data_pelanggan"

    // run query
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                datapelanggan: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

//end-point akses data pelanggan berdasarkan id_pelanggan tertentu
app.get("/pelanggan/:id", (req, res) => {
    let data = {
        id_pelanggan: req.body.id_pelanggan
    }
    // create sql query
    let sql = "select * from data_pelanggan where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                datapelanggan: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

// end-point menyimpan data pelanggan
app.post("/pelanggan", (req,res) => {

    // prepare data
    let data = {
        id_pelanggan: req.body.id_pelanggan,
        nama_pelanggan: req.body.nama_pelanggan
    }

    // create sql query insert
    let sql = "insert into data_pelanggan set ?"
    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) // send response
    })
})

// end-point mengubah data pelanggan
app.put("/pelanggan", (req,res) => {

    // prepare data
    let data = [
        // data
        {
            id_pelanggan: req.body.id_pelanggan,
            nama_pelanggan: req.body.nama_pelanggan
        },

        // parameter (primary key)
        {
            id_pelanggan: req.body.id_pelanggan
        }
    ]

    // create sql query update
    let sql = "update data_pelanggan set ? where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) // send response
    })
})

// end-point menghapus data pelanggan berdasarkan id_pelanggan
app.delete("/pelanggan/:id", (req,res) => {
    // prepare data
    let data = {
        id_pelanggan: req.body.id_pelanggan
    }

    // create query sql delete
    let sql = "delete from data_pelanggan where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) // send response
    })
})

//================================ CRUD KASIR ==============================================

// end-point akses data kasir
app.get("/kasir", (req, res) => {
    // create sql query
    let sql = "select * from kasir"

    // run query
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                kasir: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

//end-point akses data kasir berdasarkan id_kasir tertentu
app.get("/kasir/:id", (req, res) => {
    let data = {
        id_kasir: req.body.id_kasir
    }
    // create sql query
    let sql = "select * from kasir where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                kasir: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

// end-point menyimpan data kasir
app.post("/kasir", (req,res) => {

    // prepare data
    let data = {
        id_kasir: req.body.id_kasir,
        nama_kasir: req.body.nama_kasir,
        status_kasir: req.body.status_kasir
    }

    // create sql query insert
    let sql = "insert into kasir set ?"
    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) // send response
    })
})

// end-point mengubah data kasir
app.put("/kasir", (req,res) => {

    // prepare data
    let data = [
        // data
        {
            id_kasir: req.body.id_kasir,
            nama_kasir: req.body.nama_kasir,
            status_kasir: req.body.status_kasir
        },

        // parameter (primary key)
        {
            id_kasir: req.body.id_kasir
        }
    ]

    // create sql query update
    let sql = "update kasir set ? where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) // send response
    })
})

// end-point menghapus data kasir berdasarkan id_kasir
app.delete("/kasir/:id", (req,res) => {
    // prepare data
    let data = {
        id_kasir: req.body.id_kasir
    }

    // create query sql delete
    let sql = "delete from kasir where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) // send response
    })
})

//================================ CRUD MENU ==============================================

// end-point akses menu
app.get("/kasir", (req, res) => {
    // create sql query
    let sql = "select * from menu"

    // run query
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                menu: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

//end-point akses menu berdasarkan id_menu tertentu
app.get("/menu/:id", (req, res) => {
    let data = {
        id_menu: req.body.id_menu
    }
    // create sql query
    let sql = "select * from menu where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                menu: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

// end-point menyimpan menu
app.post("/menu", (req,res) => {

    // prepare data
    let data = {
        id_menu: req.body.id_menu,
        nama_menu: req.body.nama_menu,
        kategori: req.body.kategori,
        harga_menu: req.body.harga_menu,
        stok: req.body.stok
    }

    // create sql query insert
    let sql = "insert into menu set ?"
    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) // send response
    })
})

// end-point mengubah menu
app.put("/menu", (req,res) => {

    // prepare data
    let data = [
        // data
        {
            id_menu: req.body.id_menu,
            nama_menu: req.body.nama_menu,
            kategori: req.body.kategori,
            harga_menu: req.body.harga_menu,
            stok: req.body.stok
        },

        // parameter (primary key)
        {
            id_menu: req.body.id_menu
        }
    ]

    // create sql query update
    let sql = "update menu set ? where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) // send response
    })
})

// end-point menghapus menu berdasarkan id_menu
app.delete("/menu/:id", (req,res) => {
    // prepare data
    let data = {
        id_menu: req.body.id_menu
    }

    // create query sql delete
    let sql = "delete from menu where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) // send response
    })
})

app.listen(8000, () => {
    console.log("bwerhasil")
})
