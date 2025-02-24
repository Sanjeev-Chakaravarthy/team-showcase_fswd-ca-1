import React from 'react'

const TeamMemberCard = ({data}) => {
  return (
    <div>
      {
        data.length>0 ? (
            data.map((el,i)=>(
                <div key={i}>
                    <h1>Team member's Nmae : {el.name}</h1>
                    <h1>Job Title: {el.title}</h1>
                </div>
            ))
        ):(
            <p>Loading data.....</p>
        )
      }
    </div>
  )
}

export default TeamMemberCard
