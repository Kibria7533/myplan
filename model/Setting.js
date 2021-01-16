const { Schema, model, Mongoose } = require("mongoose");

const SettingSchema = new Schema(
  {
    slider: [
      {
        slidertitle: String,
        sliderqoute: String,
        img: String,
      },
    ],
    greetingtitle: String,
    greetingqoute: String,
    greetingimg: String,
    services: [
      {
        title: String,
        qoute: String,
        img: String,
      },
    ],
    portfolios: [
      {
        title: String,
        img: String,
      },
    ],
    bussinesstitle: String,
    bussinessqoute: String,
    bussinessimg: String,
    missiontitle: String,
    missionqoute: String,

    missionimg: String,
    vissiontitle: String,
    vissionqoute: String,

    vissionimg: String,
    teams: [
      {
        img: String,
        name: String,
        designation: String,
        fblink: String,
        googlelink: String,
        twitterlink: String,
        linkdin: String,
        link: String,
      },
    ],
    faqtitle: String,
    faqs: [
      {
        title: String,
        ans: String,
        hiden: Boolean,
      },
    ],

    commission: String,
    area: {
      type: Array,
      default: [
        {
          dist: "Dinajpur",
          thana: ["a", "b", "c"],
        },
        {
          dist: "Rangpur",
          thana: ["e", "f", "g"],
        },
      ],
    },
  },
  { timestamps: true }
);
module.exports = model("setting", SettingSchema);
