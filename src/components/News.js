import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsSlider } from "../sliderProps";
import NewsPopup from "./popup/NewsPopup";

const data = [
  {
    title: "CHAPTER I",
    img: "img/news/1.jpg",
    tag: "Finding",
    des: [
      "In the chill of night, 'neath a starry canopy, I ventured forth to explore the market's delight.",
"Lamps aglow with warmth, their dim and sweet light, as I tread with care 'mongst stalls of treasures bright.",
"Antiques and curiosities, each with tales of yore, whispered from their secret stores.",
"Till hidden 'neath a pile of cast-offs, a disc player lay in wait, dusty and worn, its beauty concealed from the gate.",
"",
"I bore it to my desk, and with gentle hands, I unveiled its hidden grace.",
"The moon's soft light bathed the room, as tranquility stood by my side, keeping pace.",
"I endeavored to revive its dulcet voice, but alas, the sound was marred, a harsh embrace.",
"Undeterred, I delved within, replacing parts worn thin, and cleansing others caked with grime, till all was new, a shining face.",
"",
"I took my time, with care and skill, each piece set back in place, till the melody was whole.",
"Once more I tried, and lo, the music soared, resplendent and true, filling the soul.",
"Now a treasure, this disc player, found in the market's labyrinthine space,",
"Restored by my own hand, I hold it close, with pride, and in its embrace.",
"",
"For in its melodies of yesteryear, the memories of days gone by,",
"Are brought to life once more, in the notes that from it fly.",
"So in this starry night, with a treasure newfound, I rejoice,",
"For the past has been resurrected, and given a voice.",
    ],
  },
  {
    title: "CHAPTER II",
    img: "img/news/2.jpg",
    tag: "Searching",
    des: [
      "In the haze of time that's slowly decaying,",
"I walk the corridor of memories, ever-fading.",
"Echoes of songs from days long past,",
"Stir within me, memories vast.",
"Bit by bit, they unravel and twine,",
"Leading me on a quest, a treasure to find.",
"",
"An old disc of voices, lost and concealed,",
"In the depths of forgetfulness, now revealed.",
"I enter a small stall, where time stands still,",
"With wooden shelves of antiques, each with a tale to spill.",
"Dust dances slow in the twilight's embrace,",
"As it filters through windows, leaving a trace.",
"",
"Each disc a narrative, each cover a door,",
"To a time that's slipped away, to explore.",
"Carried away by melodies sweet,",
"I lose myself in the rhythm's beat.",
"Yet the disc I seek remains concealed,",
"As I search with hopes that have not healed.",
"",
"The stall is quiet, save for my sighs,",
"As time ticks on, and my spirit dies.",
"But then, at last, in a corner it lays,",
"A disc forgotten, from bygone days.",
"My heart leaps as I see the title,",
"Could this be the one, the object of your idle?",
"",
"With care I lift it, worn and old,",
"Yet in my hand, it feels like gold.",
"I imagine the sounds that will fill the air,",
"Melodies sweet, memories rare.",
"The disc is a key, a door to the past,",
"To moments cherished, forever to last.",
"",
"With trembling hands, I make it yours,",
"A treasure of memories, a past that endures.",
"I leave the shop with my prize in tow,",
"A piece of the past, love's gentle glow.",
"As the music plays, my heart takes flight,",
"For I've found your treasure, your heart's delight.",
"",
"A beautiful memory, now unfurled,",
"A testament to love in this ever-changing world.",
"In the melody's embrace, I find contentment sweet,",
"For in this song, your past and present meet.",
    ],
  },
  {
    title: "CHAPTER III",
    img: "img/news/3.jpg",
    tag: "Offering",
    des: [
      "Amidst the glittering folds of paper, bright and gray,",
"A meaningful birthday gift, in secret repose, lay.",
"Within its wrappings, memories of the past do dwell,",
"And hopes for the future, in a disc player, swell.",
"",
"A gleaming device, a relic of days of yore,",
"When music was as intimate as a lover's gentle adore.",
"It once stood silent, a witness to joy and strife,",
"A companion through every step and moment of life.",
"",
"Beside it, a disc of voices, a collection of songs so dear,",
"Each melody and lyric, a story and message clear.",
"A love letter penned with emotion, in every note and word,",
"Songs to color life's journey, in every moment stirred.",
"",
"With this gift, I wish thee warmth and love, wrapped tightly so,",
"May this disc player and disc of songs, be a companion in weal and woe.",
"A melody of memories, that time cannot erase,",
"A faithful friend, in every joy and sorrow, to embrace.",
    ],
  },
  {
    title: "CHAPTER IV",
    img: "img/news/4.jpg",
    tag: "Greeting",
    des : [
      "Hark! A day of great import doth draw nigh,",
      "When one such as thee doth grace the sky.",
      "With every turn of the Earth 'round the sun,",
      "Thou hast grown wiser, and thy journey's begun.",
      "",
      "So let us raise our glasses high, and toast,",
      "To the one who doth deserve it most.",
      "A day of mirth and joy, of laughter and song,",
      "For thee, dear nastiti, to whom all our hearts belong.",
      "",
      "May this day be filled with grandeur and delight,",
      "As i celebrate thee with all my might.",
      "A day of feasting, of dancing, and cheer,",
      "To honor the one we hold most dear.",
      "",
      "So here's present to thee, on this momentous day,",
      "May joy and love forever come thy way.",
      "Happy birthday, dear nastiti, and many more to see,",
      "May thy life be filled with prosperity and glee.",
    ],
  },
  {
    title: "(UNPREDICTED) CHAPTER",
    img: "img/news/5.jpg",
    tag: "Meeting",
    des : [
      "In the tapestry of time, where moments weave,",
    "Two souls converged, a fleeting reprieve.",
    "In the dance of destiny, a chance encounter,",
    "A brief meeting of hearts, an intimate encounter.",
    "",
    "Their eyes met like stars in the night,",
    "A cosmic connection, pure and bright.",
    "Silent whispers echoed in the space,",
    "A serendipitous meeting, a tender embrace.",
    "",
    "Time stood still in that ephemeral gaze,",
    "A symphony of emotions, a myriad of ways.",
    "In the hush of the universe, secrets unfold,",
    "As tales untold in their eyes were told.",
    "",
    "A brief encounter, yet etched in the soul,",
    "A mosaic of feelings, a harmonious scroll.",
    "A touch of magic, a spark in the air,",
    "Two beings collided, a moment so rare.",
    "",
    "They walked separate paths, destiny's decree,",
    "Yet the echo of their meeting lingered, free.",
    "In the tapestry of time, a thread so fine,",
    "A brief meeting of two, a moment divine."
    ],
  },
  {
    title: "(UNPREDICTED) FINAL CHAPTER",
    img: "img/news/6.jpg",
    tag: "Ending",
    des : [
      "In the garden of love, a bloom did aspire,",
  "A humble heart, fueled by a passionate fire.",
  "A gallant soul, a warrior in love's crusade,",
  "A tale of a heart's struggle, in shadows laid.",
  "",
  "He sought her heart, a fortress strong,",
  "With every step, he sang a love song.",
  "But alas, the journey was steep and steep,",
  "A climb to her heart, where secrets keep.",
  "",
  "Her gaze, a fortress wall, guarded and true,",
  "Yet he, undeterred, his love anew.",
  "With flowers of devotion, he paved the way,",
  "In the garden of hope, where dreams sway.",
  "",
  "Yet, she, a rose with thorns unseen,",
  "Guarded her heart, a realm serene.",
  "No matter the verses, no matter the rhyme,",
  "Her heart remained elusive, lost in time.",
  "",
  "In the silent echoes of unspoken words,",
  "His earnest pleas, like the songs of birds.",
  "But destiny played a whimsical part,",
  "For she closed the gate to her guarded heart.",
  "",
  "A bittersweet tale of a defeat,",
  "A warrior's struggle, a silent heartbeat.",
  "In the garden of longing, where dreams depart,",
  "He fought valiantly, yet she closed her heart."
    ],
  },
];

const News = () => {
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <NewsPopup open={modal} close={() => setModal(false)} data={activeData} />
      <div className="edrea_tm_section hidden animated" id="news">
        <div className="section_inner">
          <div className="edrea_tm_news swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Pinch <span className="coloring">of the tales behind</span>
              </h3>
            </div>
            <div className="news_list">
              <Swiper {...newsSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {data.map((news, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <div className="list_inner">
                        <div className="image">
                          <img src="img/thumbs/4-3.jpg" alt="" />
                          <div className="main" data-img-url={news.img} />
                          <a
                            className="edrea_tm_full_link news_popup"
                            href="#"
                            onClick={() => onClick(i)}
                          />
                        </div>
                        <div className="details">
                          <h3>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.title}
                            </a>
                          </h3>
                          <span>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.tag}
                            </a>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="currentNews" />
                    <span className="pagination_progress">
                      <span className="all allNews">
                        <span />
                      </span>
                    </span>
                    <span className="totalNews" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default News;
