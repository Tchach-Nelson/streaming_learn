import React from 'react'
import './notes.scss'

function Notes() {
  return (
    <div className='notes'>

        <div className='bloc-note'>
            <div className='principal-row '> 
                <span>Nom de la matiere</span> 
                <span>Nombre de credit</span> 
                <span>Note</span>
                <span>Note Decision (V/N)</span> 
            </div>
            <div className='simple-row '> 
                <span>200168014</span> 
                <span>200168014</span> 
                <span>200168014</span>
                <span>200168014</span> 
            </div>
            <div className='simple-row '> 
                <span>200168014</span> 
                <span>200168014</span> 
                <span>200168014</span>
                <span>200168014</span> 
            </div>
            <div className='simple-row '> 
                <span>200168014</span> 
                <span>200168014</span> 
                <span>200168014</span>
                <span>200168014</span> 
            </div>
            <div className='simple-row '> 
                <span>200168014</span> 
                <span>200168014</span> 
                <span>200168014</span>
                <span>200168014</span> 
            </div>
            <div className='simple-row '> 
                <span>200168014</span> 
                <span>200168014</span> 
                <span>200168014</span>
                <span>200168014</span> 
            </div>
            <div className='simple-row '> 
                <span>200168014</span> 
                <span>200168014</span> 
                <span>200168014</span>
                <span>200168014</span>
            </div>
        </div> 

        <div className='imprimer'>
            <img src='../images/icone/imprimer.svg' alt='imprimer' className='ico-imprimer'/>
            <span>imprimer</span>
        </div>
    </div>
  )
}

export default Notes