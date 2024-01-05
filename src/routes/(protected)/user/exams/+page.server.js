import {error, redirect} from '@sveltejs/kit';
import {USER_API_URL} from "$env/static/private";


const loadExams = async (auth) => {

	// try {
	//
	// 	const response = await fetch(`${USER_API_URL}/user`,
	// 		{
	// 			method: 'GET',
	// 			headers: { 'Content-Type': 'application/json', 'Authorization': auth }
	// 		});
	//
	// 	if (response.ok) return await response.json();
	// 	else return [];
	//
	// } catch (err) { throw error(500, 'There was a problem on our side, try again later.'); }

	return [
		{
			id: 1,
			uc: "Sistemas Operativos",
			start_at: "2023-12-29T14:00:00",
			duration: "2:00",
			question_amount: 10,
			scored_to: 20,
			version: 1,
			description: "First exam for the class of Sistemas Operativos.",
			location: {
				building: "CP1",
				room: "1.02"
			},
			type: "Exam"
		}
	]
}

export const load = async ({ locals }) => {

	if (!locals.user) {
		throw redirect(303, '/login');
	}

	const exams = await loadExams(locals.cookie);

	return {
		user: locals.user,
		exams: exams
	}

	return {
		user: {
			id: 1,
			uid: "pg53851",
			name: "Guilherme Sampaio",
			email: "pg53851@alunos.uminho.pt",
			role: "mstudent"
		},
		exams: await loadExams()
	};

};