import pool from '../config/database.js'

class VeiculoController {
    async listar(req, res) {
        try {

            const [rows] = await pool.query(
                `select 
                    v.id, v.modelo, v.marca, v.cliente_id, c.nome as NomeCliente
                from veiculos v
                join clientes c
                    on v.cliente_id = c.id
                order by v.id desc;`
            );

            return res.json(rows);
        } catch (error) {
            console.error('Erro ao listar cliente', error);
            return res.status(500).json({ error: 'Erro ao buscar clientes', errorMessage: error.message })
        }

    }

    async criar(req, res) {
        const {placa, modelo, marca, ano, cliente_id} = req.body;

        if (!placa || !modelo || !marca || !ano || !cliente_id) {
            return res.status(400).json({
                error: "Todos os campos são obrigatórios"
            })
        }

        try {
            const [result] = await pool.query(
                `INSERT INTO veiculos(placa, modelo, marca, ano, cliente_id)
                    VALUE (?,?,?,?,?)`,
                [placa, modelo, marca, ano, cliente_id]
            )

            return res.status(201).json({
                message:"Veículo cadastrado",
                id: result.insertId
            })
        } catch (error) {
            console.error('Erro ao cadstrar veículo:', error);
            return res.status(500).json({
                error:"Erro ao salvar veículo no banco de dados"
            })
        }
    }
}

export default new VeiculoController