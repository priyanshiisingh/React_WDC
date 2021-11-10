import Enhancer from "../HOC/Enhancer";

const Description = ({ heading }) => {
  return (
    <div>
      <h1>{heading}</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias at
        distinctio voluptate ut porro iste, ipsam voluptates possimus ad earum
        hic eos asperiores cumque pariatur vitae quae consequuntur veritatis,
        adipisci nobis amet architecto. Assumenda eius non tenetur esse
        repudiandae quo placeat temporibus aliquid, ex deleniti vero qui
        explicabo iusto error?
      </div>
    </div>
  );
};

export default Enhancer(Description);
