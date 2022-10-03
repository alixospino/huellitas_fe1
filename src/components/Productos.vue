<template>
   <!--  <div v-if="loaded" class="information">
        <h1>Información del producto</h1>
        <h2>Nombre: <span>{{name}}</span></h2>
        <h2>precio: <span>{{precio}} COP </span></h2>        
    </div> -->

    <div class="title-cards">
		<h2>Productos que ofrecemos</h2>
	</div>
<div class="container-card">
	
<div class="card">
	<figure>
		<img src="https://animalscenter.com/1628-large_default/jabon-desodorante-para-perros-canamor-90-gr.jpg">
	</figure>
	<div class="contenido-card">
		<h3>Jabón</h3>
		<p>El jabón CanAmor Desodorante es ideal para la limpieza del animal eliminando hongos y bacterias.
			<ul class="jabon">
				<li>Antiséptico</li>   
				<li>Exclusiva fragancia a bebé</li>  
				<li>Aroma agradable</li>   
				<li>Brinda limpieza y aporta brillo</li>  
				<li>Sin parabenos</li>   
			</ul>
	</p>
		<a href="medio_pago">Comprar</a>
	</div>
</div>
<div class="card">
	<figure>
		<img src="https://falabella.scene7.com/is/image/FalabellaCO/6226064_1?wid=800&hei=800&qlt=70">
	</figure>
	<div class="contenido-card">
		<h3>Cepillo eléctrico</h3>
		<p class="cepillo">El Cepillo Eléctrico Para Mascotas elimina los nudos y enredos del pelo de tu mascota al instante, sin tirones, dolor o tensión. <br>
			🐾 Las cuchillas giratorias eléctricas eliminan nudos con solo tocar un botón.<br>
			🐾 La herramienta de cepillado Knot Out masajea suavemente a tu Perro o Gato mientras mantiene las cuchillas alejadas de la piel.
		</p>
		<a href="medio_pago">Comprar</a>
    
	</div>
</div>
<div class="card">
	<figure>
		<img src="https://www.agrocampo.com.co/media/catalog/product/cache/d51e0dc10c379a6229d70d752fc46d83/5/1/5151251235123020002-min.jpg">
	</figure>
	<div class="contenido-card">
		<h3>Shampoo</h3>
		<p class="shampoo">Shampoo para perros insecticida de Canamor es un shampoo ideal para el tratamiento y la eliminación de parásitos externos como pulgas, garrapatas y piojos.
		  Gracias a su fórmula con contenido de D-Fenotrina actuará efectivamente eliminándolos y dejando y efecto residual. Este shampoo tiene un PH neutro así que
		  no debes preocuparte, pues su uso será seguro para tu perro.</p>
		<a href="medio_pago">Comprar</a>
	</div>
</div>
</div>


</template>

<script>
import jwt_decode from "jwt-decode";
import axios from 'axios';
export default {
    name: "Productos",

    data: function(){
        return {
            name: "",
            precio: "",
            loaded: false
        }
    },

    methods: {
    getData: async function () {
        if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
            this.$emit('logOut');
            
    }
    await this.verifyToken();
    let token = localStorage.getItem("token_access");
    let userId = jwt_decode(token).user_id.toString();

    axios.get("user/"+userId+"/", {headers: {'Authorization': `Bearer ${token}`}})

        .then((result) => {
            this.name = result.data.name;
            this.precio = result.data.precio;
            this.loaded = true;
            })
        .catch(() => {
            this.$emit('logOut');
        });
    },
    verifyToken: function () {

        return axios.post("https://huellitas1be.herokuapp.com/refresh/", {refresh: localStorage.getItem("token_refresh")}, {headers: {}}

)
            .then((result) => {
            localStorage.setItem("token_access", result.data.access);
            })
            .catch(() => {
            this.$emit('logOut');
            });
    }
},
created: async function(){
    this.getData();
    },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}



h2{
	font-size: 45px;
	font-family: 'Gilroy';
	color: #2fb4cc;
}

/*Cards*/
.container-card{
	width: 80%;
	display: flex;
	max-width: 1100px;
	margin: auto;
}
.title-cards{
	width: 100%;
	max-width: 1080px;
	margin: auto;
	padding: 20px;
	margin-top: 20px;
	text-align: center;
	color: #7a7a7a;
}
.card{
	width: 70%;
	margin: 7px;
	border-radius: 6px;
	overflow: hidden;
	background:#fff;
	box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
	transition: all 400ms ease-out;
	cursor: default;
	background-image: linear-gradient( to right, #fff 15%, #D9D9D9 100%);
}
.card:hover{
	box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
	transform: translateY(-3%);
}
.card img{
	width: 100%;
	height: 210px;
}
.card .contenido-card{
	padding: 15px;
	text-align: center;
}
.card .contenido-card h3{
	margin-bottom: 15px;
	color: #7a7a7a;
}
.card .contenido-card p{
	line-height: 1.5;
	color: rgb(10, 10, 26);
	font-size: 16px;
	margin-bottom: 10px;
}
.card .contenido-card a{
	display: inline-block;
	padding: 10px;
	margin-top: 10px;
	text-decoration: none;
	color: #2fb4cc;
	border: 1px solid #2fb4cc;
	border-radius: 4px;
	transition: all 400ms ease;
	margin-bottom: 5px;
}
.jabon {
	font-size: 16px;
	color: rgb(10, 10, 26);
	margin: 10px 0 70px 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 10px;
}
.jabon, .cepillo, .shampoo {	
	display: flex;
	text-align: justify;
}

.card .contenido-card a:hover{
	background: #2fb4cc;
	color: #fff;
}
@media only screen and (min-width:320px) and (max-width:768px){
	.container-card{
		flex-wrap: wrap;
	}
	.card{
		margin: 15px;
	}
}

</style>