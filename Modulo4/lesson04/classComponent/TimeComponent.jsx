import { Component } from "react"

class TimerComnponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contagem: 0
        }
    }

        componentDidMount() {
            this.timerId = setInterval(() => {
                this.setState(prevState => ({
                    contagem: this.state.contagem + 1
                }))
            }, 1000)
        }

        componentDidUpdate() {
            console.log(`ATUALIZOU ${this.state.contagem}`)
        }

        componentWillUnmount() {
            clearInterval(this.timerId)
            console.log("O timer foi limpo")
        }

        render() {
            return <h1>{this.state.contagem}</h1>
        }
    }




export default TimerComnponent