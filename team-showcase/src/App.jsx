import './App.css'
import TeamMemberCard from './components/TeamMemberCard'


const data = [{ name: "Sanjeev M.S", title: "Software Engineer"}, {name: "Rahul", title: "Hardware Engineer"}]

function App() {

  return (
    <>
    <TeamMemberCard data = {data}/>
    </>
  )
}

export default App
