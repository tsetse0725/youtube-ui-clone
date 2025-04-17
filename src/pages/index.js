import Card from "@/components/Card";
import styles from "@/styles/Home.module.css";

const data = [
  {
    image:
      "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    hoverImage:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    profilepic:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Learn JavaScript in 10 Minutes",
    subsname: "CodeWithMe",
    views: "2.5M",
    time: "2023-12-01T09:00:00",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png",
    hoverImage:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    profilepic:
      "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg",
    title: "Arigun podcast | Actor, singer, songwriter Tugsbayar",
    subsname: "Arigun",
    views: "2.5M",
    time: "2025-04-13T09:00:00",
  },
  {
    image:
      "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg",
    hoverImage:
      "https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg",
    profilepic:
      "https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
    title:
      "Simon Cowell swaps places with The Hacker and gets GOLDEN BUZZER! | Auditions | BGT 2025",
    subsname: "Britain's got talent",
    views: "2.5M",
    time: "2025-04-12T09:00:00",
  },
  {
    image:
      "https://getodie.com/wp-content/uploads/2021/12/Happy-chocolate-brown-puppy.jpg",
    hoverImage:
      "https://mlo1wbhvgmgt.i.optimole.com/w:1024/h:538/q:mauto/f:best/https://pethero.co.za/wp-content/uploads/2024/04/puppy-health.jpg",
    profilepic:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",
    title:
      "Cute Labrador Retriever and German Shepherd Puppies Funny Exercise Moments | Too Cute| Animal Planet",
    subsname: "Animal Planet India",
    views: "2.5M",
    time: "2025-04-10T09:00:00",
  },
  {
    image:
      "https://wallpapersok.com/images/hd/lisa-blackpink-hd-lalisa-music-video-outfit-svnmparh7jcznitx.jpg",
    hoverImage:
      "https://4kwallpapers.com/images/wallpapers/lisa-blackpink-thai-singer-asian-girl-k-pop-singer-2560x1080-3232.jpg",
    profilepic:
      "https://mrwallpaper.com/images/thumbnail/mac-cosmetics-lisa-blackpink-hd-5mjhrvbs2zo0ycqc.webp",
    title: "LISA - “VISUAL” MV | LALISA MANOBAL | 리사",
    subsname: "LLOUD",
    views: "2.5M",
    time: "2025-03-31T09:00:00",
  },
  {
    image:
      "https://rp-cms.imgix.net/wp-content/uploads/AdobeStock_513646998-scaled.jpeg",
    hoverImage:
      "https://greeking.me/images/blog/images/Italy-Vacations/Famous-food-in-Italy/famous-food-in-itly-hero.jpg",
    profilepic:
      "https://www.yummymummykitchen.com/wp-content/uploads/2022/05/Spaghetti-alle-Vongole-1.jpg",
    title: "Italian Chef shares easy Recipe - Food in Florence",
    subsname: "Aden Films",
    views: "2.5M",
    time: "2025-03-01T09:00:00",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_.jpg",
    hoverImage: "https://i.ebayimg.com/images/g/0GEAAOSwLltlPy4M/s-l1200.jpg",
    profilepic:
      "https://skydance.com/wp-content/uploads/2022/05/MI7-05887R-scaled.jpg",
    title:
      "Mission: Impossible - The Final Reckoning - Official Trailer (2025) Tom Cruise, Hayley Atwell",
    subsname: "IGN",
    views: "2.5M",
    time: "2025-02-01T09:00:00",
  },
  {
    image:
      "https://i.ytimg.com/vi/F6OOVNethn8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCyVbjI0pC1QOBVHTUttL1co6PPiA",
    hoverImage: "https://i.ytimg.com/vi/lf_wVfwpfp8/maxresdefault.jpg",
    profilepic:
      "https://singersroom.com/wp-content/uploads/2018/06/ariana-grande-sweetner-2.jpg",
    title: "Ariana Grande - 7 rings (Official Video)",
    subsname: "Ariana Grande",
    views: "2.5M",
    time: "2017-12-01T09:00:00",
  },
];

export default function Home() {
  return (
    <div className={styles.grid}>
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
}
