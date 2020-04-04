const PrivateRoute = ({component: Component, ...rest}) => {
    cons [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('my-token');
        if(token) { //¿Hay token?
            try{
                const {data} = await Axios.get(URI ,{headers:{'x-access-token' : token}});
                setIsAuth(data.authorization); //Contiene 'true' o 'false' dependiendo de si es encontrado
            }catch(error){
                console.log('Hay token pero es falso');
            }
        }else{
            console.log('No hay token');
            localStorage.removeItem('my-token')
            return false;
        }
    }, []);
    return (
        <Route
            {...rest}
            render={props =>
            isAuth() ? //Aquí quisiera recibir un boolean en vez de una promesa
                (<Component {...props} />)
                :
                (<Redirect to={'/'}/>)
            }
        />
    );
}

export default PrivateRoute;
