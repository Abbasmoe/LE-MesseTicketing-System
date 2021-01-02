<template>
  <div class="mainContainer">
    <router-view />
    <nav class="topNav">
      <div class="plusLogo">
        <img src="./assets/pluslogo.png" alt="pluslogo" />
      </div>
      <div class="searchInput">
        <form action>
          <i class="fas fa-search"></i>
          <input type="text" id="searchEvent" placeholder="Nach Events suchen" />
        </form>
      </div>
    </nav>
    <section class="topSection">
      <div class="topSectionCenter">
        <h1>Die <span>+</span> lösung</h1>
        <h2>In wenigen Schritten können Sie einfach &</h2>
        <h3>erfolgreich Tickets verkaufen</h3>
        <div class="topSectionCenterButtons">
          <button> <router-link to="/login" exact>Anmelden</router-link></button>
          <button> <router-link to="/signup" exact>Registrieren</router-link></button>
        </div>
      </div>
    </section>
    <eventsTicket />
    <features />
    <footerEnd />
  </div>
</template>

<script>
import eventsTicket from "@/components/events";
import features from "@/components/features";
import footerEnd from "@/components/footerEnd";

export default {
  data() {
    return {};
  },
  components: {
    eventsTicket,
    features,
    footerEnd,
  },
};
</script>
<style>
/*//////////////////////////////////////////////////////////////////
[ Font ]*/
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@600&display=swap");
/*//////////////////////////////////////////////////////////////////
[ RESTYLE CSS ]*/

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  font-family: "Roboto", sans-serif;
}

/*//////////////////////////////////////////////////////////////////
[ mainContainer ]*/
.mainContainer {
  height: 100vh;
}

/*------------------------------------------------------------------
[ topNav ]*/
nav.topNav {
  height: 100px;
  width: 100%;
  position: relative;
  z-index: 1;
  background-color: #ffffff;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  box-shadow: 0px 1px 1px 0px rgba(65, 69, 73, 0.3),
    0px 1px 3px 0px rgba(65, 69, 73, 0.15);
  -moz-box-shadow: 0px 1px 1px 0px rgba(65, 69, 73, 0.3),
    0px 1px 3px 0px rgba(65, 69, 73, 0.15);
  -webkit-box-shadow: 0px 1px 1px 0px rgba(65, 69, 73, 0.3),
    0px 1px 3px 0px rgba(65, 69, 73, 0.15);
  -o-box-shadow: 0px 1px 1px 0px rgba(65, 69, 73, 0.3),
    0px 1px 3px 0px rgba(65, 69, 73, 0.15);
  -ms-box-shadow: 0px 1px 1px 0px rgba(65, 69, 73, 0.3),
    0px 1px 3px 0px rgba(65, 69, 73, 0.15);
}
nav.topNav > div {
  display: inline-block;
}
nav.topNav div.plusLogo {
  height: 100%;
  width: 10%;
  padding: 10px 5px 5px 20px;
  margin-left: 50px;
}
nav.topNav div.plusLogo img {
  height: 70px;
  width: 120px;
  cursor: pointer;
}
nav.topNav div.searchInput form {
  position: relative;
  width: 500px;
  height: 100%;
  top: -30px;
  left: 40px;
}
nav.topNav div.searchInput input {
  width: 100%;
  height: 50%;
  border-radius: 25px;
  border: 2px solid transparent;
  padding: 15px 0 15px 50px;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  background: #ffffff;
  transition: transform 0.5s ease;
  box-shadow: 0px 1px 1px 0px rgba(65, 69, 73, 0.3),
    0px 1px 3px 0px rgba(65, 69, 73, 0.15);
  -moz-box-shadow: 0px 1px 1px 0px rgba(65, 69, 73, 0.3),
    0px 1px 3px 0px rgba(65, 69, 73, 0.15);
  -webkit-box-shadow: 0px 1px 1px 0px rgba(65, 69, 73, 0.3),
    0px 1px 3px 0px rgba(65, 69, 73, 0.15);
  -o-box-shadow: 0px 1px 1px 0px rgba(65, 69, 73, 0.3),
    0px 1px 3px 0px rgba(65, 69, 73, 0.15);
  -ms-box-shadow: 0px 1px 1px 0px rgba(65, 69, 73, 0.3),
    0px 1px 3px 0px rgba(65, 69, 73, 0.15);
}
nav.topNav div.searchInput input:focus {
  border-color: rgba(223, 225, 229, 0);
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  -moz-box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  -webkit-box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  -o-box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  -ms-box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
}
nav.topNav div.searchInput i {
  position: absolute;
  display: inline-block;
  top: 34%;
  left: 5%;
  color: rgba(0, 0, 0, 0.61);
}
/*------------------------------------------------------------------
[ topSection ]*/
section.topSection {
  height: 480px;
  transform: translateY(-10px);
  background-image: url("./assets/leipzigmessebackground.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}
section.topSection div.topSectionCenter {
  width: 600px;
  height: 240px;
  margin: auto;
  padding: 5px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  transform: translateY(150px);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  color: #fff;
  border-color: rgba(223, 225, 229, 0);
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  -moz-box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  -webkit-box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  -o-box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  -ms-box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
}
section.topSection div.topSectionCenterButtons {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
}
section.topSection div.topSectionCenterButtons button {
  background-color: #009fe3;
  border: none;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 32px;
  text-align: center;
  outline: none;
  transition: 0.5s;
}
section.topSection div.topSectionCenterButtons button > * {
  text-decoration: none;
  color: #ffff;
  transition: 0.5s;
}
section.topSection div.topSectionCenterButtons button:last-child {
  background-color: #fff;
}
section.topSection div.topSectionCenterButtons button:last-child > *{
  color: #009fe3;
}
section.topSection div.topSectionCenterButtons button:last-child:hover{
  background-color: #009fe3;
}
section.topSection div.topSectionCenterButtons button:last-child:hover > *{
  color: #ffff;
}
section.topSection div.topSectionCenterButtons button {
  background-color: #009fe3;
}
section.topSection div.topSectionCenterButtons button> *{
  color: #fff;
}
section.topSection div.topSectionCenterButtons button:hover{
  background-color: #fff;
}
section.topSection div.topSectionCenterButtons button:hover > *{
  color: #009fe3;
}

section.topSection div.topSectionCenter h1 {
  font-size: 40px;
  font-weight: 100;
}
section.topSection div.topSectionCenter h1 span {
  font-size: 60px;
  display: inline-block;
  color: #fdba04;
  transform: translateY(5px);
}
section.topSection div.topSectionCenter h2,
section.topSection div.topSectionCenter h3 {
  font-weight: 100;
  font-size: 25px;
}
</style>
