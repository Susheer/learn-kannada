import UserView from "../user-view";
import Link from "../re-useable/link";
const Navbar = () => {
  return (
    <div className="container">
      <ul id="slide-out" className="sidenav">
        <li>
          <UserView title="Learn Kannada" email={"kannada@gmail.com"} />
        </li>

        <li>
          <Link className="sidenav-close" className="subheader">
         Learning made easy !!
          </Link>
        </li>
        <li>
          <Link url="/" className="sidenav-close">
          <i class="material-icons">thumb_up</i>  Thumb Rule
          </Link>
        </li>
        <li>
          <Link className="sidenav-close" url="/Constents">
          <i class="material-icons">star_border</i>  Bookmarks
          </Link>
        </li>
        <li>
          <Link className="sidenav-close" url="/Vowels">
          <i class="material-icons">lightbulb_outline</i>   Become VIP
          </Link>
        </li> 
        <li>
          <Link className="sidenav-close" url="/Numbers">
          <i class="material-icons">language</i>   Language
          </Link>
        </li>
        <li>
        <Link className="sidenav-close" url="/Numbers">
        <i class="material-icons">share</i>  Refer a friend
        </Link>
      </li>
      <li>
      <Link className="sidenav-close" url="/Numbers">
      Rate this App
      </Link>
      </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
        <Link className="sidenav-close" className="subheader">
        About this App
        </Link>
        </li>
        <li>
        <Link className="sidenav-close" url="/Numbers">
        About us
        </Link>
        </li>
        <li>
        <Link className="sidenav-close" url="/Numbers">
        Donate
        </Link>
        </li>
        <li>
        <Link className="sidenav-close" url="/Numbers">
        Follow us
        </Link>
        </li>
      </ul>
      <Link url="/" dataTarget="slide-out" className="sidenav-trigger">
        <i className="material-icons" style={{ fontSize: "34px" }}>
          menu
        </i>
      </Link>
    </div>
  );
};

export default Navbar;
