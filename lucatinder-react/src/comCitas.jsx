import React from 'react';
import axios from 'axios';

class ComponenteCitas extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            response: '',
            prefGen:'',
            candidatos: [],
        }
    }

    componentDidMount(){
        const email = "milja.aho@example.com"
        axios.get(`http://localhost:3000/lucatinder/usuario?email=${email}`).then((res) => {
            const prefGen = res.data[0].prefGen;
            this.setState({prefGen})
            console.log(this.state.prefGen)
            
            //this.setState({prefGenero})
            axios.get(`http://localhost:3000/lucatinder/conocepersonas?prefGen=${prefGen}`).then((res) => {
                const candidatos = res.data;
                this.setState({candidatos})
                console.log(this.state.candidatos)    
    
            })   
        })
    }

    // componentDidMount(){

    //     axios.get(`http://localhost:3000/lucatinder/conocepersonas?prefGen=male`).then((res) => {
    //         const candidatos = res.data;
    //         this.setState({candidatos})
    //         console.log(candidatos)    

    //     })
    // }

    render() {
        return <div>
            <p>hola</p>
            <p>{}</p>
        </div>
    }
}

export default ComponenteCitas