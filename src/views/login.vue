<template>
    <section>
        <aside class="fadeInRight">
        <header>
        <span title="Schließen"><router-link to="/" exact>X</router-link></span>
          <h1>Anmelden</h1>
          <img src="../assets/pluslogo.png" alt="web-mail" />
        </header>

        <form action="">
          <div class="input-content">
            <input type="text" id="name-input" required />
            <label for="name-input">
              <span class="label-span">E-Mail</span>
            </label>
          </div>

          <div class="input-content password-label">
            <input :type="inputType" id="pasword-input" required />
            <label for="pasword-input">
              <span class="label-span">Passwort</span>
            </label>
            <i :class="iconName" @click="changeInputType()"></i>
          </div>

            <div class="forgetPassword">
              <a href="">Passwort vergessen?</a>
             </div>
          <button class="btn">
            Anmelden
            <span></span>
          </button>
          
        </form>
      </aside>
    </section>
</template>

<script>
    export default {
        name:"login",
        data() {
            return{
                inputType: "password",
                iconName:"fas fa-eye-slash",
            };
        },
        methods:{
           changeInputType(){
               if (this.inputType == "password"){
                    this.inputType = "text"
                    this.iconName = "fas fa-eye"
               } else{
                    this.inputType = "password"
                    this.iconName = "fas fa-eye-slash"
               }
           } 
        },
    }
</script>

<style scoped>
/*//////////////////////////////////////////////////////////////////
[ section ]*/
section {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 15;
}

/*------------------------------------------------------------------
[ aside ]*/
aside {
    width: 350px;
    height: 560px;
    background-color: #fff;
    box-shadow: 2px 8px 15px rgba(0, 0, 0, 0.5), 1px 8px 16px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 2px 8px 15px rgba(0, 0, 0, 0.5),
        1px 8px 16px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 2px 8px 15px rgba(0, 0, 0, 0.5),
        1px 8px 16px rgba(0, 0, 0, 0.4);
    -o-box-shadow: 2px 8px 15px rgba(0, 0, 0, 0.5),
        1px 8px 16px rgba(0, 0, 0, 0.4);
    -ms-box-shadow: 2px 8px 15px rgba(0, 0, 0, 0.5),
        1px 8px 16px rgba(0, 0, 0, 0.4);
    padding: 20px 0 28px;
    border-radius: 25px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    -ms-border-radius: 25px;
    -o-border-radius: 25px;
}

.fadeInRight {
    animation-name: fadeInRight;
    animation-duration: 0.8s;
    animation-timing-function: ease;
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translate3d(5%, 0, 0);
        -webkit-transform: translate3d(5%, 0, 0);
        -moz-transform: translate3d(5%, 0, 0);
        -ms-transform: translate3d(5%, 0, 0);
        -o-transform: translate3d(5%, 0, 0);
    }

    to {
        opacity: 1;
        transform: none;
        -webkit-transform: none;
        -moz-transform: none;
        -ms-transform: none;
        -o-transform: none;
    }
}

aside header {
    text-align: center;
    height: 36%;
}
aside header span {
    padding: 10px 12px 9px 12px;
  background-color: #d1d1d188;
  border-radius: 50%;
  margin-left: 280px;

}
aside header span >* {
    text-decoration: none;
    font-size: 19px;
    font-weight: 600;
    font-family: "Pacifico", cursive;
    transition: 0.4s;
}
aside header span:hover {
    background-color: #d1d1d1d7;
}

aside header h1 {
    font-family: "Pacifico", cursive;
    font-size: 2rem;
    color: #194457;
}

aside header img {
    height: 70%;
}

/*------------------------------------------------------------------
[ form inputs ]*/
aside form {
    padding: 5% 14%;
    margin-top: 10px;
}

.input-content {
    position: relative;
    width: 100%;
    height: 3rem;
    overflow: hidden;
    margin-bottom: 29px;
}

.input-content input {
    width: 100%;
    height: 100%;
    padding-top: 7%;
    border: none;
    outline: none;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
}

.input-content label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 3px solid #b9b3ac;
}
.password-label  {
    margin-bottom: 10px;
}
.password-label i {
    position: absolute;
    right: 5%;
    bottom: 15%;
    color: #194457;
}

.input-content label::after {
    content: "";
    width: 100%;
    height: 6%;
    position: absolute;
    background: -webkit-linear-gradient(to right, #194457, #272727);
    background: -o-linear-gradient(to right, #194457, #272727);
    background: -moz-linear-gradient(to right, #194457, #272727);
    background: linear-gradient(to right, #194457, #272727);
    bottom: -3px;
    left: 0%;
    transform: translatex(-100%);
    -webkit-transform: translatex(-100%);
    -moz-transform: translatex(-100%);
    -ms-transform: translatex(-100%);
    -o-transform: translatex(-100%);
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
}

.label-span {
    position: absolute;
    bottom: 11%;
    left: 0%;
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
}

.input-content input:focus+label .label-span,
.input-content input:valid+label .label-span {
    transform: translateY(-120%);
    -webkit-transform: translateY(-120%);
    -moz-transform: translateY(-120%);
    -ms-transform: translateY(-120%);
    -o-transform: translateY(-120%);
    color: #194457;
}

.input-content input:focus+label::after,
.input-content input:valid+label::after {
    transform: translatex(0%);
    -webkit-transform: translatex(0%);
    -moz-transform: translatex(0%);
    -ms-transform: translatex(0%);
    -o-transform: translatex(0%);
}
.forgetPassword {
text-align: end;
}
.forgetPassword a {
font-size: 14px;
color:#b4b4b4;
}
/*------------------------------------------------------------------
[ button ]*/
.btn {
    display: block;
    position: relative;
    outline: none;
    color: #fff;
    font-size: 15px;
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 25px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    -ms-border-radius: 25px;
    -o-border-radius: 25px;
    cursor: pointer;
    background: #009fe3;
    z-index: 1;
    overflow: hidden;
    text-transform: uppercase;
    margin-top: 55px;
}

.btn span {
    position: absolute;
    width: 236%;
    height: 3rem;
    background: rgb(31,88,112);
background: linear-gradient(60deg, rgba(31,88,112,1) 24%, rgba(27,148,207,1) 100%);
    top: 0;
    left: -100%;
    border: none;
    z-index: -1;
    transition: all 0.6s;
    -webkit-transition: all 0.6s;
    -moz-transition: all 0.6s;
    -ms-transition: all 0.6s;
    -o-transition: all 0.6s;
}

.btn:hover span {
    left: 0;
}

</style>