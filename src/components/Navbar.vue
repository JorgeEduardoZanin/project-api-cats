<template>
    <nav id="barra-navegacao">
        <div id="image">
            <router-link id="logo-url" to="/">
                <img id="logo" :src="logo" :alt="alt">
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
        props:["logo","alt"]
    }

</script>




<style scoped >


#barra-navegacao{
    width: 100%;
    background-color: #333;
    height: 80px;
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


img{
    height: 30px;
    width: 30px;
}

</style>