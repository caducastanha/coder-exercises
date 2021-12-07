export default ({condition, children}) => {
  return condition ? children : false;
};
