import NavigationMenu from "Components/administrator/NavigationMenu";
import 'styles/components/adminLayout.scss'

const AdminLayout = ({ children }) => {
	return (
		<div className="contadmin">
      <NavigationMenu />
			<div className="Layout">
				{children}
			</div>
		</div>
	);
}

export default AdminLayout;