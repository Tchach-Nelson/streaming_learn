import React from 'react'
import './scolarite.scss'

function Scolarite() {
  return (
    <div className='scolarite'>
        <div className='infoEtu'>
            <div className='bloc1'>
                <span>Matricule: </span> <span className='value'>00A000-SPE Année</span> <br/>
                <span>Nom: </span> <span className='value'>usernom prenom Semestre</span> <br/>
                <span>Specialité: </span><span className='value'>nomSpe </span> <br/>
                <span>Redoublant: </span><span className='value'>NON</span> <br/>
            </div>
           <div className='bloc2'>
                <span>Année: </span><span className='value'>NON</span> <br/>
                <span>Semestre: </span><span className='value'>N°2</span> <br/>
           </div>
        </div>
        <div className='versement'>
            <div className='bloc1'>
                <span>Montant Inscription: </span> <span className='value'>50000</span> <br/>
                <span>Date Inscription: </span> <span className='value'>02/10/2023</span> <br/>
                <span>Mt à payer Redoublant: </span><span className='value'>0</span> <br/>
                </div>
            <div className='bloc2'>
                <span>Montant bourse: </span><span className='value'>0</span> <br/>
                <span>Mt rabais: </span><span className='value'>0</span> <br/>
                <span>Moratoire: </span><span className='value'>NON</span> <br/>
            </div>
        </div>
        <div className='historique'>
            <div className='principal-row '> 
                <span>N°OP</span> 
                <span>Date Paiement</span> 
                <span>Type de paiement</span>
                <span>Montant Payé</span> 
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
        <div className='recap'>
            <div className='info'>
                <span>Reste à Payer Scolarité: </span> <span className='value'>00</span> <br/>
                <span>Reste à Payer Total:  </span> <span className='value'>-160000</span> <br/>
                <span>Reste à Payer Redoublant:</span><span className='value'>00</span> <br/>
            </div>
            <div className='imprimer'>
                <img src='../images/icone/imprimer.svg' alt='imprimer' className='ico-imprimer'/>
                <span>imprimer</span>
            </div>
        </div>
    </div>
  )
}

export default Scolarite