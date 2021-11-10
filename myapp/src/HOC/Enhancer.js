const Enhancer = (Component) => {
  return (props) => {
    console.log(props); // created props to access props in the description
    return (
      <div>
        <Component {...props} />
        <h3>
          <sub>copyright</sub>
        </h3>
      </div>
    );
  };
};

{
  /* <Component {...props} />   we are now initializing our heading into
the enhancer func now first in props then used here*/
}

export default Enhancer;
