import { Outlet } from 'react-router'
import './teacherDashbord.scss'
import { Link } from 'react-router-dom'

function TeacherDashbord() {
  return (
    <div className='teacherDashbord'>
        <div className='navBar'>
            <div className='logo'> <img src='../images/icone/plume2.svg' alt='plume' className='ico-plune'/><Link to={"/"}><h1>Streaming learn</h1> </Link></div>
            <div className='user'>
                <div className='search'>
                    <input type='text' placeholder='search'/>
                    <img src='../images/icone/search.svg' alt='search' className='ico-search'/>
                </div>
                <div className='user-info'>
                    <div className='profil-nav '></div>
                    <span>User name <span> (Professeur) </span></span>
                </div>
            </div>
        </div>

        <div className='bloc'>
            <div className='menu'>
                <br/><br/>
                <div className='menu-principal'>
                    <h3>Principal</h3>  
                    <div className='element'>
                        <Link to={"/teacherDashbord"}>
                            <img src='../images/icone/home.svg' alt='home' className='ico-home'/>
                            <span>Acceuil</span>
                        </Link>
                    </div>
                    <div className='element'> 
                        <Link to={"/teacherDashbord/myProfil"}>
                            <img src='../images/icone/profil.svg' alt='profil' className='ico-profil'/>
                            <span>Profil</span>
                        </Link>
                    </div>
                </div>
                <div className='menu-general'>
                    <h3>General</h3>
                    <div className='element'> 
                        <Link to={"/teacherDashbord/cours"}>
                            <img src='../images/icone/video.svg' alt='video' className='ico-video'/>
                            <span>Cours</span
                        ></Link>
                    </div>
                    <div className='element'> 
                        <Link to={"/teacherDashbord/EmploiDuTemps"}>
                            <img src='../images/icone/emploi.svg' alt='emploi' className='ico-emploi'/>
                            <span>Emploi de temps</span>
                        </Link>
                    </div>
                    <div className='element'> 
                        <Link to={"/teacherDashbord/chat"}>
                            <img src='../images/icone/chat.svg' alt='chat' className='ico-chat'/>
                            <span>Chat</span>
                        </Link>
                    </div>
                    <div className='element'> 
                        <Link to={"/teacherDashbord/scolarite"}>
                            <img src='../images/icone/discipline.svg' alt='money' className='ico-money'/>
                            <span>Discipline</span>
                        </Link>
                    </div>
                    <div className='element'> 
                        <Link to={"/teacherDashbord/notes"}>
                            <img src='../images/icone/bic2.svg' alt='bic2' className='ico-bic2'/>
                            <span>Notes</span>
                        </Link>
                    </div>
                </div>
                <div className='menu-parametre'>
                    <h3>parametre</h3>
                    <div className='element'> 
                        <img src='../images/icone/param.svg' alt='param' className='ico-param'/>
                        <span>paramètre</span>
                    </div>
                    <div className='element'> 
                        <img src='../images/icone/about.svg' alt='about' className='ico-about'/>
                        <span>A propos</span>
                    </div>
                </div>
            </div>
            <div className='content'>
                <Outlet />
            </div>
        </div>
        <br/>
    </div>
  )
}

export default TeacherDashbord