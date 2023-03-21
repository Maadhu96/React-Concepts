// import React from "react"
// const Hoc = (WrappedComponent) => {
//     return class GetComponent extends React.Component{
//         state = {
//            username: "Madappa",
//             Company:"Tyss"
//         }
//         render() {
//             return <WrappedComponent state={ this.state} />
//         }
//     }
// }
// export default Hoc

import React from 'react'
const Hoc =(WrappedComponent)=>{
    return class GetComponent extends React.Component{
        state={
            username:"Sanjay",
            Company:"Tyss"
        }
        render(){
     return <WrappedComponent state={this.state}/>
        }
    }
}
export default Hoc