<template>
  <div class="featuresContainer">
    <div class="title">
      <p>Die <span>+</span> Funktionen</p>
    </div>
    <aside>
      <div>
        <i class="fas fa-qrcode"></i>
        <h3>QR Codes</h3>
        <span>Lange Warteschlange vermeiden</span>
      </div>
      <div>
        <i class="far fa-credit-card"></i>
        <h3>Paymentintegration</h3>
        <span>Verschiedene Bezahlmethoden/Provider </span>
      </div>
      <div>
        <i class="fas fa-chart-line"></i>
        <h3>Dashboard</h3>
        <span>kurzer Überblick über die Ticketverkäufe</span>
      </div>
      <div>
        <i class="fas fa-tachometer-alt"></i>
        <h3>Troubleshooting</h3>
        <span>Probleme können so schnell wie möglich behoben werden</span>
      </div>
      <div>
        <i class="fas fa-server"></i>
        <h3>Hosting</h3>
        <span>24/7 Verfügbarkeit mit einer Ausfallsicherheit von 99% pro Jahr</span>
      </div>
      <div>
        <i class="fas fa-cart-plus"></i>
        <h3>Zusatzleistungen</h3>
        <span>Gewünschten Zusatzleistungen einfach zum Ticket buchen</span>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "features",
};
</script>

<style scoped>
/*//////////////////////////////////////////////////////////////////
[ featuresContainer ]*/
div.featuresContainer {
  height: 500px;
  background-color: #f6f7fd;
  display: inline-flex;
}
div.featuresContainer div.title {
  background-color: #009fe3;
  writing-mode: vertical-lr;
  color: #fff;
  font-size: 40px;
  text-align: center;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
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
div.featuresContainer div.title p span {
  color: #fdba04;
  font-size: 50px;
}
div.featuresContainer aside {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 70px;
}
div.featuresContainer aside div {
  height: 150px;
  width: 400px;
  text-align: center;
}
div.featuresContainer aside div i {
  font-size: 75px;
  color: #226089;
  margin-bottom: 10px;
}
div.featuresContainer aside div h3 {
  margin-bottom: 5px;
  color: #226089be;
}
div.featuresContainer aside div h3::first-letter {
  color: #fdba04;
}
div.featuresContainer aside div span {
  font-size: 14px;
  color: #2260898a;
}
</style>
