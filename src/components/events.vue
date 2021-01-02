<template>
  <div class="eventsContainer">
    <div class="eventsTitle">
      <div :class="['eventsTitlebg', {'fadeIn':showIt}]" v-if="showIt">
        <h3>Aktuelle</h3>
        <h3>Events</h3>
      </div>
      <div class="my-scroll" v-else>
            <div class="scroll-me"></div>
      </div>
    </div>
    <section class="eventsSection">
      <aside class="events">
        <div
          class="eventDisplay"
          v-for="currentEvent in currentEvents"
          :key="currentEvent.id"
        >
          <div class="imgEvent">
            <img :src="currentEvent.photo" alt="event image" />
            <i class="fas fa-share-alt"></i>
          </div>
          <div class="contentEvent">
            <span class="date">{{ currentEvent.date }}</span>
            <span class="title">{{ currentEvent.title }}</span>
            <span class="price">{{ currentEvent.price }}</span>
          </div>
        </div>
      </aside>
      <button class="moreEvents">Mehr dazu</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "eventsTicket",
  data() {
    return {
      currentEvents: [
        {
          id: 1,
          photo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F117250529%2F484348411787%2F1%2Foriginal.20201110-040854?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C86%2C1080%2C540&s=082cc27ace5320abdf0f775a72dbf4f5",
          title: "Save A Seat For Sam This Christmas",
          date: "Mi., 16. Dez. 2020 02:00 CET",
          price: "20€",
        },
        {
          id: 2,
          photo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F102066008%2F185750211993%2F1%2Foriginal.20200528-112745?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=72%2C0%2C2052%2C1026&s=4c52ec219253507350d5cf11974e9ab2",
          title: "Online Botanical Painting Session",
          date: "Do., 7. Jan. 2021 19:30 CET",
          price: "10€",
        },
        {
          id: 3,
          photo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F109413109%2F156754398215%2F1%2Foriginal.20200824-215252?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C23%2C1446%2C723&s=66e6537d557d30a2544defd359909422",
          title: "Every Kid Can Cook - Cooking Classes",
          date: "Do., 17. Dez. 2020 21:00 CET",
          price: "17€",
        },
        {
          id: 4,
          photo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F120230667%2F23951529238%2F1%2Foriginal.20201207-055622?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=d79c356cefdbfca9fc55987eeb4bd6a3",
          title: "Human Rights in Art: An Event by UNA Westchester ",
          date: "So., 13. Dez. 2020 19:00 CET",
          price: "Kostenlose",
        },
        {
          id: 5,
          photo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F111136413%2F16598400133%2F1%2Foriginal.20200910-235641?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C51%2C1722%2C861&s=e76c20439827a8ca96f9f42cdd0a1fc8",
          title: "#ACT100: 2020 Ain't Cancelled Series",
          date: "Di., 15. Dez. 2020 02:00 CET + 2",
          price: "25€",
        },
        {
          id: 6,
          photo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F118234671%2F313798431784%2F1%2Foriginal.20201120-011234?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2400%2C1200&s=b71b545e862e5b27d939469280054bd8",
          title: "Daybreaker LIVE // ‘Tis the Season to Dance",
          date: "Sa., 19. Dez. 2020 17:00 CET",
          price: "30€",
        },
        {
          id: 7,
          photo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F102422544%2F11448527615%2F1%2Foriginal.20200602-034626?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1130%2C3024%2C1512&s=2047b5ac763391ccc7b83a80cbe3e7a8",
          title: "Gentle Yoga for Terrible Times",
          date: "So., 13. Dez. 2020 03:00 CET + 17",
          price: "10€",
        },
        {
          id: 8,
          photo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F113878383%2F145991937686%2F1%2Foriginal.20201007-105953?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C45%2C1168%2C584&s=bb0a39bd09df59248009613fe9b7c9d4",
          title: "Mindfulness & Acceptance for Self-Esteem",
          date: "Do., 25. Feb. 2021 10:30 CET",
          price: "12€",
        },
      ],
      showIt: false,
      fadeIn: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 294) {
        this.showIt = true;
      }
    },
  },
};
</script>

<style scoped>
/*//////////////////////////////////////////////////////////////////
[ eventsContainer ]*/
div.eventsContainer div.eventsTitle {
  height: 130px;
}
div.eventsContainer div.eventsTitle div.eventsTitlebg {
  width: 240px;
  height: 100px;
  margin: 40px auto auto auto;
  background-image: url("../assets/ticket.svg");
}
div.eventsContainer div.eventsTitle div.eventsTitlebg h3 {
  font-size: 25px;
  padding-left: 60px;
  font-family: "Fredoka One", cursive;
  font-weight: 100;
}
div.eventsContainer div.eventsTitle div.eventsTitlebg h3:first-child {
  padding-top: 18px;
}
div.eventsContainer div.eventsTitle div.eventsTitlebg h3:last-child {
  padding-left: 69px;
}
.fadeIn{
    animation-name: fadeIn;
    animation-duration: 0.8s;
    animation-timing-function: ease;
}
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.97);
        -webkit-transform: scale(0.97);
        -moz-transform: scale(0.97);
        -ms-transform: scale(0.97);
        -o-transform: scale(0.97);
    }

    to {
        opacity: 1;
        transform: scale(1);
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
    }
}
/*------------------------------------------------------------------
[ scrollDown ]*/

div.eventsContainer div.eventsTitle div.my-scroll {
  width: 30px;
  height: 53px;
  position: relative;
  top: 31%;
  left: 51%;
  border: 3px solid #226089;
  background-color: #226089;
  border-radius: 18px;
  margin-left: -40px;
  margin-bottom: 10px;
}
div.eventsContainer div.eventsTitle div.my-scroll div.scroll-me {
  width: 5px;
  height: 10px;
  margin: auto;
  background-color: #ffffff;
  position: relative;
  top: 4px;
  border-radius: 50%;
  animation: scrollingg 1s ease-in-out infinite;
}
@keyframes scrollingg {
  0% {
    opacity: 0;
    top: 5px;
  }
  30% {
    opacity: 1;
    top: 10px;
  }
  100% {
    opacity: 0;
    top: 25px;
  }
}
/*------------------------------------------------------------------
[ Section & aside events ]*/
section.eventsSection {
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 120px;
}
aside.events {
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 30px;
  grid-template-columns: 280px 280px 280px 280px;
  background-color: #f6f7fd;
  width: 84%;
  margin: 60px auto;
  box-shadow: 0 16px 64px -16px rgba(46, 55, 77, 0.1);
  -moz-box-shadow: 0 16px 64px -16px rgba(46, 55, 77, 0.1);
  -webkit-box-shadow: 0 16px 64px -16px rgba(46, 55, 77, 0.1);
  -o-box-shadow: 0 16px 64px -16px rgba(46, 55, 77, 0.1);
  -ms-box-shadow: 0 16px 64px -16px rgba(46, 55, 77, 0.1);
}
aside.events div.eventDisplay {
  width: 280px;
  height: 280px;
  background-color: #fff;
  transition: 0.5s;
  border-color: rgba(223, 225, 229, 0);
  box-shadow: 0 16px 64px -16px rgba(46, 55, 77, 0.1);
  -moz-box-shadow: 0 16px 64px -16px rgba(46, 55, 77, 0.1);
  -webkit-box-shadow: 0 16px 64px -16px rgba(46, 55, 77, 0.1);
  -o-box-shadow: 0 16px 64px -16px rgba(46, 55, 77, 0.1);
  -ms-box-shadow: 0 16px 64px -16px rgba(46, 55, 77, 0.1);
}

aside.events div.eventDisplay:hover {
  box-shadow: 17px 17px 50px #d1d2d7, -17px -17px 50px #ffffff;
}
aside.events div.eventDisplay div.imgEvent:hover,
aside.events div.eventDisplay div.contentEvent span.title:hover {
  cursor: pointer;
}

aside.events div.eventDisplay div.imgEvent {
  position: relative;
}
aside.events div.eventDisplay div.imgEvent img {
  width: 280px;
  height: 140px;
}
aside.events div.eventDisplay div.imgEvent i {
  padding: 9px 9px 8px 8px;
  background-color: #d1d1d188;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 5px;
  transition: 0.4s;
}

aside.events div.eventDisplay div.imgEvent i:hover {
  background-color: #d1d1d1d7;
}

aside.events div.eventDisplay div.contentEvent {
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
}
aside.events div.eventDisplay div.contentEvent span.date {
  color: #009fe3;
  font-size: 15px;
  margin-bottom: 5px;
}
aside.events div.eventDisplay div.contentEvent span.title {
  font-family: "Fira Sans", sans-serif;
  font-size: 20px;
}
aside.events div.eventDisplay div.contentEvent span.price {
  color: #fdba04;
  align-self: flex-end;
  font-size: 17px;
}
section.eventsSection button.moreEvents {
  display: block;
  margin: auto;
  outline: none;
  width: 30%;
  padding: 9px;
  border: none;
  border: 3px solid #a1a1a1;
  color: #141414;
  font-size: 16px;
  background-color: #fff;
}
section.eventsSection button.moreEvents:hover {
  cursor: pointer;
  background-color: #ebebeb60;
}
</style>
