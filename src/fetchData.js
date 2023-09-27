import React from "react";
import './fetch.css';


class FetchData extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            items:[],
            DataisLoaded:false
        };
    }


    componentDidMount() {
        let url  = 'http://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then((res)=>res.json())
            .then((json) => {
                this.setState({
                    items:json,
                    DataisLoaded:true
                });
            })
    }


    render(){

        const {DataisLoaded, items} = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

        return (

            <div>
                {
                        items.map((item) => (
                        <ol key = { item.id } >
                        User_Name: { item.username }, 
                        Full_Name: { item.name }, 
                        User_Email: { item.email } 
                    </ol>
                    ))
                }
            </div>

        )

    }


}

export default FetchData;