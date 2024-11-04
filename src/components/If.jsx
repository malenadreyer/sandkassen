const If = ({ condition, children }) => {
    return <div>{condition && children}</div>;
  };
  
  export default If;