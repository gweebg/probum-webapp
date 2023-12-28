import { PUBLIC_SERVER_API_URL } from '$env/static/public';

export const handle = async ({ event, resolve }) => {

	const authCookie = event.cookies.get('AuthorizationToken');

	if (authCookie) { // auth cookie is set, we check validity and continue

		try {

			const userResponse = await fetch(`${PUBLIC_SERVER_API_URL}/users/user/`,
				{
					method: 'GET',
					headers: { 'Content-Type': 'application/json', 'Authorization': authCookie }
				});

			if (userResponse.ok) event.locals.user = await userResponse.json();
			else console.log(userResponse.status);

		} catch (err) { console.error(err, err.stack); }

	}

	const response = await resolve(event);
	const location = response.headers.get('location');

	if (location?.includes("?jwt=")) { // maybe jwt cookie is set as a url param ?

		const token = location.split("jwt=")[1];
		let expires_in = 60 * 60 * 24 * 30; // One month.
		response.headers.append('set-cookie', `AuthorizationToken="Bearer ${token}"; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${expires_in};`);

	}

	return response;

};