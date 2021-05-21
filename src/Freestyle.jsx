import React, { Component} from 'react'

export default class Free  extends Component{

    async postApp(){
    
         try{
            // http://localhost:8081/api/v1/employees
            // https://webhook.site/0b0f9f12-9c5a-4846-8ec3-e0f85cbcdcba
            
            let result = await fetch('http://localhost:8081/api/v1/employees',{
                method: 'post',
                mode:'no-cors',
                header: {
                    'Accept':'application/json',
                    'Content-type':'application/json',
                },
                body: JSON.stringify({
                    //  key1: 'myusername',
                    //  email: 'mymail@gmail.com',
                    //  name: 'cabana',
                    //  lastname: 'king',
                    //  age: 12
                    
                    // id: 2,
                    firstName: 'sule',
                    lastName:'iyabo',
                    emailId: 'i@gmail.com'
                })

            });
            // console.log('Result: ' + result)
            console.log('Result: ' + result)

         }
        catch(e){
            console.log(e)
        }
    }

    render(){
        return(
            <div>
            hello
            <button  onClick= {() => this.postApp()}>Post</button>
            </div>
        )
    }
}
