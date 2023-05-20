const pool = require('../database/index')
const postsController = {

    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query('select * from assinantes')
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, field] = await pool.query('select * from assinantes where id = ?', [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    create: async (req, res) => {
        try {
            const { cpf_assinante, nome_assinante, email_assinante } = req.body
            const sql = "insert into assinantes (cpf_assinante, nome_assinante, email_assinante) values (?, ?, ?)" 
            const [rows, fields] = await pool.query(sql, [cpf_assinante, nome_assinante, email_assinante])
            res.json({
                data: rows
            })
        }catch (error){
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    update: async (req,res)=>{
        try{
            const {cpf_assinante, nome_assinante, email_assinante} = req.body
            const {id} = req.params
            const sql = "update assinantes set cpf_assinante = ?, nome_assinante = ?, email_assinante = ?  where id = ?"
            const [rows, fields] = await pool.query(sql, [cpf_assinante, nome_assinante, email_assinante, id])
            res.json({
                data: rows
            })
        }catch(error){
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    delete: async (req, res) =>{
        try{
            const {id} = req.params
            const [rows, fields] = await pool.query("delete from assinantes where id = ?", [id])
            res.json({
                data: rows
            })
        }catch(error){
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }
}

module.exports = postsController