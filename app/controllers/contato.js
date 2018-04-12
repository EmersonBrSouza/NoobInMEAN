module.exports = () => {
	var controller = {}
	
	var contatos = [
		{_id: 1, nome: 'Contato Exemplo 1', email: 'cont1@empresa.com.br'},
		{_id: 2, nome: 'Contato Exemplo 2', email: 'cont2@empresa.com.br'},
		{_id: 3, nome: 'Contato Exemplo 3', email: 'cont3@empresa.com.br'}
	]

	controller.listaContatos = (req, res) => {
		res.json(contatos)
	}

	controller.obtemContato  = (req, res) => {
		var id = req.params.id;

		var contato = contatos.filter( (contato) => {
			return contato._id == id;
		});

		contato ? res.json(contato) : res.status(404).send('Contato não encontrado')
	}

	return controller
}