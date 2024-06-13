<template>
    <nav id="barra-navegacao">
        <h3>CATS API</h3>
        <div id="image">
            <router-link id="logo-url" to="/">
                <img id="logo" src="../assets/img/image copy.png" :alt="alt">
            </router-link>
        </div>
        <div id="links">  
            <router-link class="link" to="/">Home</router-link> |
            <router-link class="link" to="/about">About</router-link>
        </div>
    </nav>

</template>


<script>
    export default{
        name:"NavbarSite",
        props:["alt"]
    }

</script>




<style scoped >


#barra-navegacao{
    width: 100%;
    background-color: #444;
    height: 60px;
    border-bottom: 3px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
}

#links{
    width: 100%;
    display: flex;
    justify-content: end;
    
}

.link{
 list-style: none;
 color: #fff;
 margin-right: 30px;
 font-size: 19px;
 text-decoration: none;
}


#logo{
    height: 45px;
    width: 45px;
    margin: auto;
    margin-left: 10px;
    border-radius: 10px;
}

#barra-navegacao h3{
    text-align: center;
    position: absolute;
    color: #fff;

}
</style>