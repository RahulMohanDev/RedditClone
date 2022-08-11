import './App.css';
import AccountPage from "./components/AccountPage/AccountPage";
import UserLogIn from "./components/UserLogIn/UserLogIn";

function App() {
	return (
		<div>
			<div className="header">
				<UserLogIn />
			</div>
			<div className="center">
				<AccountPage/>
			</div>
		</div>
	);
}

export default App;
