import Link from "../re-useable/link"
function userView(props) {
  return (
    <div className="user-view">
      <div className="background">
        <img alt={"logo"} src="https://materializecss.com/images/office.jpg" />
      </div>
      <Link url="/user">
        <img
          alt="user name"
          className="circle"
          src="https://materializecss.com/images/yuna.jpg"
        />
      </Link>
      <Link url="/name">
        <span className="white-text name">{props.title}</span>
      </Link>
      <Link url="/email">
        <span className="white-text email">{props.email}</span>
      </Link>
    </div>
  );
}

export default  userView;