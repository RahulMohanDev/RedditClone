import classes from './AccountPage.module.css'

const AccountPage = () => {

	return (
		<div className={`${classes.nav} `}>
			<button className={classes.btn}>New</button>
			<button className={classes.btn}>Hot</button>
			<button className={classes.btn}>Top</button>
		</div>
	)
}

export default AccountPage;
