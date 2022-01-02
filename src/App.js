import React, { useState } from 'react'
const Name = (props) =>{
  return(
    <div>
      <p>
        {props.name}: {props.phone}
      </p>
    </div>
  )
}
const Filter = (props) => {
  console.log("HI Im Filter")
  return (
    <form>
    <div>
      filter shown with: <input value = {props.filter} onChange={props.function}/>
    </div>
  </form>
  )
}
const Addnew = (props) => {
  return(
    <form onSubmit={props.addName}>
    <div>
      name: <input value = {props.newName} onChange={props.handleNameChange}/>
    </div>
    <div>number: <input value = {props.phone} onChange={props.handlePhoneChange}/></div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}
const Person = (props) => {
  return(
    <div>{props.personstoshow.map(person => <Name key = {person.name} name = {person.name} phone = {person.phone}/>)}</div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [phone,setPhone] = useState('')
  const [filter, setFilter] = useState('')
  const addName = (event) =>{
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else{
      const newperson = {
        name:newName,
        phone:phone,
        id:persons.length+1
      }
      setPersons(persons.concat(newperson))
      setNewName("")
      setPhone("")
      console.log(event.target)
    }
  }
   const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) =>{
    setPhone(event.target.value)
  }
  const personstoshow = filter.length === 0
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  const handleFilterChange = (event) =>{
    setFilter(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter = {filter} function = {handleFilterChange}/>
      <h2>add new</h2>
      <Addnew addName = {addName} newName = {newName} handleNameChange = {handleNameChange} phone = {phone}
      handlePhoneChange = {handlePhoneChange}/> 
      <h2>Numbers</h2>
      <Person personstoshow = {personstoshow}/>
    </div>
  )
}

export default App