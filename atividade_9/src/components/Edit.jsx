import React, { Component } from 'react'

import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const EditPage = (props) => (
    <FirebaseContext.Consumer>
        {firebase => <Edit firebase={firebase} id={props.match.params.id} />}
    </FirebaseContext.Consumer>
)
class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = { nome: '', curso: '', capacidade: '' }
        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount() {
        FirebaseService.retrieve(this.props.firebase.getFirestore(),
            (disciplina) => {
                if (disciplina)
                    this.setState({
                        nome: disciplina.nome,
                        curso: disciplina.curso,
                        capacidade: disciplina.capacidade
                    })
            },
            this.props.id
        )
       
    }
    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    setCurso(e) {
        this.setState({ curso: e.target.value })
    }
    setCapacidade(e) {
        this.setState({ capacidade: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        FirebaseService.edit(
            this.props.firebase.getFirestore(),
            (mensagem) => {
                console.log(mensagem)
            },
            this.props.id,
            {
                nome: this.state.nome,
                curso: this.state.curso,
                capacidade: this.state.capacidade
            }
        )
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Editar Disciplina</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" className="form-control"
                            value={this.state.nome} onChange={this.setNome} />
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control"
                            value={this.state.curso} onChange={this.setCurso} />
                    </div>
                    <div className="form-group">
                        <label>Capacidade: </label>
                        <input type="text" className="form-control"
                            value={this.state.capacidade} onChange={this.setCapacidade} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Salvar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
export default EditPage