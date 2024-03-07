const express = require('express')


const app = express()

app.use(express.json())

let user =[{
    id:1,
    name:'Subrata Ghosh',
    email:'subr@gmail.com'
},
{
    id:2,
    name:'Abu taher',
    email:'abu@gmail.com'
}
]

app.get('/user',(req,res)=>{
    res.send(user)
})

app.post('/userentry',(req,res)=>{
    const newuser = req.body
    newuser.id = user.length + 1
     user.push(newuser)
      
     res.send(newuser)
})

app.delete('/userdelete/:id',(req,res)=>{
     const userid = parseInt(req.params.id);
    user =  user.filter((data)=>  data.id !== userid)
     res.json({ message: 'User deleted successfully' });
})

app.put('/useupdate/:id',(req,res)=>{
    const userid = parseInt(req.params.id);
    if(userid ){
       user = user.map((data)=>{
            if(data.id === userid){
                data.name = req.body.name
            }
            return user;
        })
    }else {
        res.status(404)
    }
    res.send(user)
})

app.listen(5000,()=>{
    console.log(`running on port 5000`)
})