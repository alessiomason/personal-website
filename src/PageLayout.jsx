import { Outlet, useNavigate } from 'react-router-dom';
import { useKonami } from 'react-konami-code';

function PageLayout() {
	const navigate = useNavigate();

	const konamiCodeEvent = () => {
		navigate('/secret');
	}

	useKonami(konamiCodeEvent);

	return (
		<Outlet />
	)
}

export default PageLayout;