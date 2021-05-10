import UserView from "../user-view"
import Link from "../re-useable/link"
const Navbar = () => {
  return (
    <>
      <ul id="slide-out" className="sidenav">
        <li>
          <UserView title="Learn Kannada" email={"kannada@gmail.com"}/>
          </li>
        <li class="no-padding">
        <ul class="collapsible collapsible-accordion">
          <li>
            <Link className="collapsible-header">
            Dropdown<i class="material-icons">arrow_drop_down</i></Link>
            <div class="collapsible-body">
              <ul>
                <li><Link url="/">First</Link></li>
                <li><Link url="/">Second</Link></li>
                <li><Link url="/">Third</Link></li>
                <li><Link url="/">Fourth</Link></li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
        <li>
          <Link url="/">
            <i className="material-icons">cloud</i>First Link With Icon
          </Link>
        </li>
        <li>
          <Link url="/">Second Link</Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <Link className="subheader">Subheader</Link>
        </li>
        <li>
          <Link className="waves-effect" url="/">
            Third Link With Waves
          </Link>
        </li>

      </ul>
      <Link url="/" dataTarget="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </Link>
    </>
  );
};

export default Navbar;
