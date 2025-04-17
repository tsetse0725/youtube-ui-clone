import CardImage from "./CardImage";
import CardInfo from "./CardInfo";

export default function Card({ data }) {
  return (
    <div style={{ padding: "10px" }}>
      <CardImage image={data.image} hoverImage={data.hoverImage} />
      <CardInfo {...data} />
    </div>
  );
}
