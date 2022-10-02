import {ISignProps} from "../../types/type";
import {UserApi} from "../../api";


export const SigninForm = ({signActive, setActive}:ISignProps) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const user = {
            login: e.target.login.value,
            password: e.target.password.value,
            name: e.target.name.value,
            role_id: 1,
        }
        UserApi.createUser(user)
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:',response);
                sessionStorage.setItem('session','true');
                sessionStorage.setItem('name',user.name);

            })
        e.stopPropagation();
    }

    return(
        <div className={signActive ? 'modal active' : 'modal'} onClick={()=> setActive(false)}>
            <div className={'modal_content'} onClick={(e)=>e.stopPropagation()}>
                <form className={'modal_form'} onSubmit={(event)=>handleSubmit(event)}>
                    <label htmlFor="login">Login</label>
                    <input type="text" name={'login'}/>

                    <label htmlFor="name">Nickname</label>
                    <input type="text" name={'name'}/>

                    <label htmlFor="role">Role</label>
                    <select name={'role'}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name={'password'}/>

                    <button type={"submit"}>Register</button>
                </form>
            </div>
        </div>
    )
}