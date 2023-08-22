const Mycomponent = (props) => {
  return (
    <div>
      안녕하세요 {props.name}입니다.
      <br />
      children 값은 {props.children}입니다.
    </div>
  );
};
Mycomponent.defaultProps = {
  name: '돌고래',
};
export default Mycomponent;
