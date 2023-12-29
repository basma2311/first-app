import React from 'react'

export default function MainContent({pageName , usedBy}) {
  return (
    <main>

      {pageName} 
      <br />

      Used By: {usedBy}  
      
      
    </main>
  )
}
