var cv = new Vue({
  el: "#app",
  data: {
    name: "Joe Malope",
    employer: "Specno",
    profession: "Frontend Developer",
    email: "joeymalope@gmail.com",
    degree: "BIS Multimedia",
    cell: "0621559402",
    style: {
      background: `url(https://images.unsplash.com/photo-1575318633968-0383e7d07ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    coverUrl: "",
    portfoliolinks: [
      "https://joeymalope.web.app/",
      "https://behance.net/joeymalope/",
    ],
    personalSkills: [
      "UI/UX Desigin",
      "Interaction Design",
      "Illustration design",
      "Character design",
      "Frontend development",
      "Webflow development",
      "Nodejs development",
      "Firebase development",
      "Strategic branding",
      "NFT specialist",
    ],
    personalInterests: [
      "Strategic Branding",
      "Software development",
      "Psychology",
      "Gaming",
      "Visual design",
    ],
    softwareSkills: [
      {
        name: "illustrator",
        path: "images/graphic-design/adobe-illustrator.svg",
        enabled: true,
        level: 9,
      },
      {
        name: "photoshop",
        path: "images/graphic-design/adobe-photoshop.svg",
        enabled: true,
        level: 7,
      },
      {
        name: "Animate",
        path: "images/motion-design/adobe-animate.svg",
        enabled: true,
        level: 7,
      },
      {
        name: "Adobe XD",
        path: "images/ux/adobe-xd.svg",
        enabled: true,
        level: 9,
      },
      {
        name: "Sketch",
        path: "images/ux/sketch.svg",
        enabled: true,
        level: 9,
      },
      {
        name: "Figma",
        path: "images/ux/figma.svg",
        enabled: true,
        level: 9,
      },
    ],
  },
  methods: {},
  computed: {
    getPortfolioCover: async function () {
      let response;
      response = await axios.get(
        "https://api.unsplash.com/collections/2043891/photos?client_id=LMy_WnDDHDTJupaGK5qJlsAD2Hf3tU6WOhlsO_qVobE"
      );

      this.coverUrl =
        response.data[Math.floor(Math.random(9) * 10)].urls.regular;
      console.log(this.coverUrl);
      // return this.coverUrl;
      return {
        background: "url(" + this.coverUrl + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    },
    getStyle: () => {
      return this.coverUrl;
    },
  },
});
/*
var cvr;
axios
	.get('https://api.unsplash.com/collections/2043891/photos?client_id=LMy_WnDDHDTJupaGK5qJlsAD2Hf3tU6WOhlsO_qVobE')
	.then((res) => {
		cvr = res.data[Math.floor(Math.random(9) * 10)].urls.regular;
	});*/
/*
Vue.component('getImgUrl', {
	template: '',
	data: function() {
		return axios
			.get(
				'https://api.unsplash.com/collections/2043891/photos?client_id=LMy_WnDDHDTJupaGK5qJlsAD2Hf3tU6WOhlsO_qVobE'
			)
			.then((res) => {
				return res.data[Math.floor(Math.random(9) * 10)].urls.regular;
			});
	}
});*/
