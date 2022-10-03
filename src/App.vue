<template>
  <div id="app" class="app">
    <div class="header">
      <h1>Huellitas</h1>
      <nav class="registro"  v-if="is_auth">
        <button @click="loadHome">Inicio</button>
        <button @click="loadGuarderia">Guarderia</button>   <!--esta parte la cambiaria por productos o medios p-->
        <button>Spa</button>
        <button>Salud</button>
        <button @click="loadProductos">Productos</button>
        <button>Consultas</button>
        <button class="salir" @click="logout">Salir</button>
      </nav>
      <nav v-else>
        <button @click="loadLogin">Iniciar sesión</button>
        <button @click="loadSignUp">Registrarse</button>
      </nav>

    </div>  
      

    

    <div class="main-component">
      <router-view
          @completedLogin="completedLogin"
          @logout="logout" 
          @loadProductos="loadProductos"  
          @loadGuarderia="loadGuarderia"   
      >
      </router-view>   

    </div>


    <div class="footer">
        <h2>Huellitas</h2>
    </div>
  </div>  

  
      
      

</template>


<script>
//Options API
export default {
    name: 'App',
    data: function(){
      return{
        is_auth: false,
      }
    
    },
    methods: {
      verifyAuth: function(){
        this.is_auth = localStorage.getItem("isAuth") || false;
        if(this.is_auth)
            this.$router.push({name: "home"})
        else
            this.$router.push({name: "login"})
      },
      loadLogin: function(){
        this.$router.push({name:"login"})
      },
      loadSignUp: function(){
        this.$router.push({name:"signup"})
      },
      loadHome: function(){
        this.$router.push({name:"home"})
      },
      loadProductos: function(){
        this.$router.push({name:"productos"});
      },
      loadGuarderia: function(){
        alert("Mostrando Guardería");
      },
      logout: function(){
        localStorage.clear();
        alert("Sesión cerrada");
        this.verifyAuth();
      },
      completedLogin: function(data){
        localStorage.setItem("isAuth", true);
        localStorage.setItem("username", data.username);
        localStorage.setItem("token_access", data.token_access);
        localStorage.setItem("token_refresh", data.token_refresh);
        alert("Autenticación Exitosa");
        this.verifyAuth();
      }

    },    
    created: function() {
    
    
    }




}
  
</script>

<style> 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto');
  body {
    margin: 0; 
    font-family: 'Roboto', 'sans-serif' ;   
  }

  h1{
    font-size: 45px;
    font-family: 'Gilroy';
    color: #E5E7E9;
  }

  .header{
    width: 100%;
    height: 10vh;
    min-height: 100px;

    background-color: #283747 ;
    color:#E5E7E9 ;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1 {
    width: 20%;
    text-align: center;
  }

 /*codigo  felipe*/
.header .registro {
  height: 100%;
  width: 50%;
  font-size: 20px;  
  display: flex;
  justify-content: space-between;
  align-items: center;  
  
}

.header .salir {
  margin-right: 5px;
}

.header .registro button{   /* cambios para el contenido del boton*/
  font-family:'Roboto', 'sans-serif';
  background-color: #3B5998;
  border: none;
  
}



/* codigo guia y clase*/
  .header nav {
    height: 100%;
    width: 20%;
    font-size: 20px;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .header nav button {
    color: #E5E7E9;
    background-color: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
  }

  .header nav button:hover {
    color:#82AFDB;
    background-color: #E5E7E9;
  }

    
  .main-component {
    height: 76vh; 
    
  }

  .main-component {
    background-image: url("../resources/imagen1.png") ;
    background-repeat: no-repeat;
    background-size: contain;
    background-color:rgba(122, 238, 238, 0.3);
  }

  .footer{
    width: 100%;
    height: 8vh;
    min-height: 80px;
    background-color: #283747;
    color: #E5E7E9;
  }

  .footer h2 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }


</style>
