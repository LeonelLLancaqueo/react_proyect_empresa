
import "./Home.css";
import MenuNav from"../../Components/NavMenu/MenuNav.js";
import TablePersonas from "../../Components/TablePersonas/TablePersonas.js";


const Home = (params)=>{
    return(
        <div class="home-container">
            <header>
                <MenuNav/>                
            </header>
            <body>

                <TablePersonas/>
                
            </body>
        </div>
        
        
       
    )
} 

export default Home;




