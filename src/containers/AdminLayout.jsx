import NavigationMenu from "Components/administrator/NavigationMenu";
import 'styles/components/adminLayout.scss'

const AdminLayout = ({ children, admin }) => {
	return (
		<div className="contadmin">
      <NavigationMenu admin={admin}/>
			<div className="c">
				{children}
			</div>
		</div>
	);
}

export default AdminLayout;