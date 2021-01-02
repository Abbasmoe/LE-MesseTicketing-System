<template>
  <div class="footerEnd">
    <ul>
      <li><a href="">Impressum</a></li>
      <li><a href="">Datenschutz</a></li>
      <li><a href="">Beschaffung</a></li>
      <li><a href="">Leipziger Messe GmbH, Messe-Allee 1, 04356 Leipzig</a></li>
    </ul>
    <div class="terms">© Leipziger Messe 2020. Alle Rechte vorbehalten</div>
  </div>
</template>

<script>
export default {
  name: "footerEnd",
};
</script>

<style scoped>
/*//////////////////////////////////////////////////////////////////
[ footerEnde ]*/
div.footerEnd {
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  margin-top: 120px;
  background-color: #f6f7fd;
  height: 50px;
}
div.footerEnd ul li {
  display: inline-block;
  padding: 5px 10px;
  border-right: 1px solid #226089;
  margin-top: 15px;
}
div.footerEnd ul li:last-child {
  border-right: none;
}
div.footerEnd ul li a {
  text-decoration: none;
  color: #226089be;
}
div.footerEnd ul li a:hover {
  color: #226089;
}
div.footerEnd div.terms {
  float: right;
  color: #226089be;
  margin-top: 15px;
}
</style>
