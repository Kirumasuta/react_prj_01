import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ICategory} from "../../types/type";
import {Category} from "../Category/Category";
import {CategoryApi} from "../../api";




export const Header = () => {
    const [active, setActive] = useState(false);

    const signClickHandle = () => {
        if (sessionStorage.getItem('session') === 'true'
            && !!sessionStorage.getItem('name')){
            sessionStorage.setItem('session','false');
            sessionStorage.setItem('name','');

        }else{
            setActive(true);
        }
    }

    const [ state, setState ] = useState({
        categories: [],
        DataisLoaded: false
    });

    useEffect(()=>{
        if (state.DataisLoaded) return;
        CategoryApi.getAllCategories()
            .then((res)=>JSON.stringify(res))
            .then((json)=>{
                setState({
                    categories: JSON.parse(json),
                    DataisLoaded: true
                });
            });
    })

    let navigate = useNavigate();

    return(
        <div>
            <header>
                <div onClick={()=>navigate("/")}>
                    <span style={{color:'#D30100'}}>NONEXISTENT</span><span style={{color:"white"}}>NEWS</span>
                </div>
                <menu>
                    <ul onClick={()=>navigate("/")}>Home</ul>
                    {state.categories.map((category: ICategory)=>
                        <Category category={category}/>
                    )}
                </menu>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div style={{border: "1px solid", width:'100%', color: '#59595B', marginTop: "20", marginInline: 50}}></div>
                </div>

            </header>
        </div>
    )
}